// Imports
const models = require('../models');
const Op = models.Sequelize.Op;

const checkNull = require("../utils/checkNull");

var FunctionUpdatePlcs = async function ( modifs ) {
    for ( var modif of modifs) {
        const max = await models.plc.max('position')
        let nextValue = 0
        if (isNaN(max)) { nextValue = 1 } else { nextValue = max + 1 }
        const exist = await models.plc.findAll( { where: { idNode: modif.idNode } })
        if ( exist.length === 0 ) {
            modif.position = nextValue
            const plc = await models.plc.findOrCreate(
                {
                    defaults: {
                        id: modif.id,
                        idNode: modif.idNode,
                        position: modif.position,
                        name: modif.name,
                        name1: modif.name1,
                        brand: modif.brand,
                        connection: modif.connection,
                        slot: modif.slot,
                        rack: modif.rack,
                        ip: modif.ip,
                        idServer: modif.idServer,
                        idArea: modif.idArea,
                    },
                    where: {
                        id: modif.id
                    }
                })
        } else {
            if ( modif.position === 999999 ) { modif.position = exist[0].position }
            const plc = await models.plc.update( modif, { where: { id: modif.id } } )
        }
    }
}

module.exports = {
    getAllPlcs: async function(req, res) {
        let name = req.query.name
        let factory = req.query.idFactory
        let area = req.query.idArea
        let server = req.query.idServer
        let page = req.query.page
        let limit = req.query.limit
        const offset = ( page - 1) * limit;
        limit = limit * 1;

        var whereAll = []
        var whereFactory = []

        var whereArea = { idArea: { [Op.like]: `%${area}%` }}
        var whereServer = { idServer: { [Op.like]: `%${server}%` }}
        var wherePlc = { name: { [Op.like]: `%${name}%` } }

        //Filter on the main table
        if (area) { whereAll.push(whereArea)}
        if (server) { whereAll.push(whereServer)}
        if (name) { whereAll.push(wherePlc)}

        //Filter inside include table
        if (factory) { whereFactory.push( { idFactory: { [Op.like]: `%${factory}%` }} )}

        models.plc.findAndCountAll( {
            order: [['position', 'ASC' ]],
            where: whereAll,
            offset: offset,
            limit: limit,
            include: [
                {
                    model: models.area,
                    as: 'area',
                    where: whereFactory,
                    include: [
                        {
                            model: models.factory,
                            as: 'factory'
                        }
                    ]
                },
                {
                    model: models.server,
                    as: 'server'
                }
            ]
        })
        .then(data => {
            let outlet = checkNull.area(data)
            outlet = checkNull.server(outlet)
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
    updatePlcs: async function (req, res) {
        const modifs = req.body
        const datas = await FunctionUpdatePlcs( modifs )
        models.plc.findAndCountAll()
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
    updatePlc: async function (req, res) {
        const {id} = req.params
        const modif = req.body
        const updated = await models.plc.update( modif, { where: { id: id } } )
        const find = await models.plc.findAll( {where: { id: id }, include: [{ model: models.area, as: 'area' },{ model: models.server, as: 'server' }] })
        .then(find => {
            const Resdata = {
                code: 20000,
                data: find,
            }
            res.status(200).json(Resdata);
        })

    },
    deletePlc: async function(req, res) {
        const {id} = req.params
        models.plc.destroy( { where: {id: id} } )
        .then(data => {
            const Resdata = {
                code: 20000,
                data: data,
            }
            res.status(200).json(Resdata);
        })
    }
}
