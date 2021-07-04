// Imports
const models = require('../models');
const Op = models.Sequelize.Op;

const checkNull = require("../utils/checkNull");

var FunctionUpdateTankAreas = async function ( modifs ) {
    for ( var modif of modifs) {
        const max = await models.tankArea.max('position')
        let nextValue = 0
        if (isNaN(max)) { nextValue = 1 } else { nextValue = max + 1 }
        const exist = await models.tankArea.findAll( { where: { idNode: modif.idNode } })
        if ( exist.length === 0 ) {
            modif.position = nextValue
            const tankArea = await models.tankArea.findOrCreate(
                {
                    defaults: {
                        id: modif.id,
                        idNode: modif.idNode,
                        name: modif.name,
                        name1: modif.name1,
                        position: modif.position,
                        idArea: modif.idArea,
                    },
                    where: {
                        id: modif.id
                    }
                })
        } else {
            if ( modif.position === 999999 ) { modif.position = exist[0].position }
            const tankArea = await models.tankArea.update( modif, { where: { id: modif.id } } )
        }
    }
}

module.exports = {
    getAllTankAreas: async function(req, res) {
        let name = req.query.name
        let area = req.query.idArea
        let page = req.query.page
        let limit = req.query.limit
        const offset = ( page - 1) * limit;
        limit = limit * 1;

        var whereAll = [  ]
        var whereArea = { idArea: { [Op.like]: `%${area}%` }}
        var whereTankArea = { name: { [Op.like]: `%${name}%` } }
        if (area) { whereAll.push(whereArea)}
        if (name) { whereAll.push(whereTankArea)}

        models.tankArea.findAndCountAll( {
            order: [['position', 'ASC' ]],
            where: whereAll,
            offset: offset,
            limit: limit,
            include: [{
                model: models.area,
                as: 'area'
            }]
        })
        .then(data => {
            const outlet = checkNull.area(data)
            const Resdata = {
                 code: 20000,
                 data: data,
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
    updateTankAreas: async function (req, res) {
        const modifs = req.body
        const datas = await FunctionUpdateTankAreas( modifs )
        models.tankArea.findAndCountAll()
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
    updateTankArea: async function (req, res) {
        const {id} = req.params
        const modif = req.body
        const updated = await models.tankArea.update( modif, { where: { id: id } } )
        const find = await models.tankArea.findAll( {where: { id: id }, include: [{ model: models.area, as: 'area' }] })
        .then(find => {
            const Resdata = {
                code: 20000,
                data: find,
            }
            res.status(200).json(Resdata);
        })

    },
    deleteTankArea: async function(req, res) {
        const {id} = req.params
        models.tankArea.destroy( { where: {id: id} } )
        .then(data => {
            const Resdata = {
                code: 20000,
                data: data,
            }
            res.status(200).json(Resdata);
        })
    }
}
