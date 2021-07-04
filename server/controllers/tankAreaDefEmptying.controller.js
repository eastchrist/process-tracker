// Imports
const models = require('../models');
const Op = models.Sequelize.Op;

const checkNull = require("../utils/checkNull");
const JsonParse = require("../utils/JsonParse");



var FunctionUpdateTankAreaDefEmptyings = async function ( modifs ) {
    for ( var modif of modifs) {
        const max = await models.tankAreaDefEmptying.max('position')
        let nextValue = 0
        if (isNaN(max)) { nextValue = 1 } else { nextValue = max + 1 }
        const exist = await models.tankAreaDefEmptying.findAll( { where: { idNode: modif.idNode } })
        if ( exist.length === 0 ) {
            modif.position = nextValue
            const option = JSON.stringify(modif.options)
            const tankAreaDefEmptying = await models.tankAreaDefEmptying.findOrCreate(
                {
                    defaults: {
                        id: modif.id,
                        idNode: modif.idNode,
                        position: modif.position,
                        name: modif.name,
                        name1: modif.name1,
                        dataComment: modif.dataComment,
                        dataType: modif.dataType,
                        options: option,
                    },
                    where: {
                        id: modif.id
                    }
                })
        } else {
            if ( modif.position === 999999 ) { modif.position = exist[0].position }
            const option = JSON.stringify(modif.options)
            const tankAreaDefEmptying = await models.tankAreaDefEmptying.update(
                {
                    id: modif.id,
                    idNode: modif.idNode,
                    position: modif.position,
                    name: modif.name,
                    name1: modif.name1,
                    dataComment: modif.dataComment,
                    dataType: modif.dataType,
                    options: option,
                },
                { where: { id: modif.id } } )
        }
    }
}


module.exports = {
    getAllTankAreaDefEmptyings: async function(req, res) {
        let name = req.query.name
        let page = req.query.page
        let limit = req.query.limit
        const offset = ( page - 1) * limit;
        limit = limit * 1;

        var whereAll = [  ]
        var whereTankAreaDefEmptying = { name: { [Op.like]: `%${name}%` } }
        if (name) { whereAll.push(whereTankAreaDefEmptying)}

        const tanks = await models.tank.findAll( {})

        models.tankAreaDefEmptying.findAndCountAll( {
            order: [['position', 'ASC' ]],
            where: whereAll,
            offset: offset,
            limit: limit
        })
        .then(data => {
            const option = JsonParse.options(data, tanks)
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
    updateTankAreaDefEmptyings: async function (req, res) {
        const modifs = req.body
        const datas = await FunctionUpdateTankAreaDefEmptyings( modifs )
        models.tankAreaDefEmptying.findAndCountAll()
        .then(data => {
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
    updateTankAreaDefEmptying: async function (req, res) {
        const {id} = req.params
        const modif = req.body
        const updated = await models.tankAreaDefEmptying.update( modif, { where: { id: id } } )
        const find = await models.tankAreaDefEmptying.findAll( {where: { id: id } })
        .then(find => {
            const option = JsonParse.options(find)
            const Resdata = {
                code: 20000,
                data: find,
            }
            res.status(200).json(Resdata);
        })

    },
    deleteTankAreaDefEmptying: async function(req, res) {
        const {id} = req.params
        models.tankAreaDefEmptying.destroy( { where: {id: id} } )
        .then(data => {
            const Resdata = {
                code: 20000,
                data: data,
            }
            res.status(200).json(Resdata);
        })
    }
}
