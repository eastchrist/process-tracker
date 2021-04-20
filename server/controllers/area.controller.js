// Imports
const models = require('../models');
const Op = models.Sequelize.Op;

const checkNull = require("../utils/checkNull");

var FunctionUpdateAreas = async function ( modifs ) {
    for ( var modif of modifs) {
        const max = await models.area.max('position')
        let nextValue = 0
        if (isNaN(max)) { nextValue = 1 } else { nextValue = max + 1 }
        const exist = await models.area.findAll( { where: { idNode: modif.idNode } })
        if ( exist.length === 0 ) {
            modif.position = nextValue
            const area = await models.area.findOrCreate({
                defaults: {
                    id: modif.id,
                    idNode: modif.idNode,
                    name: modif.name,
                    name1: modif.name1,
                    position: modif.position,
                    menu: modif.menu,
                    idFactory: modif.idFactory,
                },
                where: {
                    id: modif.id,
                }
            })
        } else {
            if ( modif.position === 999999 ) { modif.position = exist[0].position }
            const area = await models.area.update( modif, { where: { id: modif.id } } )
        }
    }
}

module.exports = {
    getAllAreas: async function(req, res) {
        let name = req.query.name
        let factory = req.query.idFactory
        let page = req.query.page
        let limit = req.query.limit
        const offset = ( page - 1) * limit;
        limit = limit * 1;

        var whereAll = [  ]
        var whereFactory = { idFactory: { [Op.like]: `%${factory}%` }}
        var whereArea = { name: { [Op.like]: `%${name}%` } }
        if (factory) { whereAll.push(whereFactory)}
        if (name) { whereAll.push(whereArea)}

        models.area.findAndCountAll( {
            order: [['position', 'ASC' ]],
            where: whereAll,
            offset: offset,
            limit: limit,
            include: [
                { model: models.factory, as: 'factory' },
            ]
        })
        .then(data => {
            const outlet = checkNull.factory(data)
            const Resdata = {
                 code: 20000,
                 data: outlet,
            }
            res.status(200).json(Resdata);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
    },
    updateAreas: async function (req, res) {
        const modifs = req.body
        const datas = await FunctionUpdateAreas( modifs )
        models.area.findAndCountAll()
        .then(data => {
            console.log("End findAndCountAll")
            const Resdata = {
               code: 20000,
               data: data,
            }
            console.log(Resdata)
            res.status(200).json(Resdata);
        })

    },
    updateArea: async function (req, res) {
        const {id} = req.params
        const modif = req.body
        const updated = await models.area.update( modif, { where: { id: id } } )
        const find = await models.area.findAll( {where: { id: id }, include: [{ model: models.factory, as: 'factory' }] })
        .then(find => {
            const Resdata = {
                code: 20000,
                data: find,
            }
            res.status(200).json(Resdata);
        })

    },
    deleteArea: async function(req, res) {
        const {id} = req.params
        models.area.destroy( { where: {id: id} } )
        .then(data => {
            const Resdata = {
                code: 20000,
                data: data,
            }
            res.status(200).json(Resdata);
        })
    }
}
