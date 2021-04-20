// Imports
const models = require('../models');
const Op = models.Sequelize.Op;

const checkNull = require("../utils/checkNull");

var FunctionUpdateTanks = async function ( modifs ) {
    for ( var modif of modifs) {
        const max = await models.tank.max('position')
        let nextValue = 0
        if (isNaN(max)) { nextValue = 1 } else { nextValue = max + 1 }
        const exist = await models.tank.findAll( { where: { idNode: modif.idNode } })
        if ( exist.length === 0 ) {
            modif.position = nextValue
            const tank = await models.tank.findOrCreate(
                {
                    defaults: {
                        id: modif.id,
                        idNode: modif.idNode,
                        name: modif.name,
                        name1: modif.name1,
                        position: modif.position,
                        idTankArea: modif.idTankArea,
                        idTankDef: modif.idTankDef,
                    },
                    where: {
                        id: modif.id
                    }
                })
        } else {
            if ( modif.position === 999999 ) { modif.position = exist[0].position }
            const tank = await models.tank.update( modif, { where: { id: modif.id } } )
        }
    }
}

module.exports = {
    getAllTanks: async function(req, res) {
        let name = req.query.name
        let tankArea = req.query.idTankArea
        let tankDef = req.query.idTankDef
        let page = req.query.page
        let limit = req.query.limit
        const offset = ( page - 1) * limit;
        limit = limit * 1;

        var whereAll = [  ]
        var whereTankArea = { idTankArea: { [Op.like]: `%${tankArea}%` }}
        var whereTankDef = { idTankDef: { [Op.like]: `%${tankDef}%` }}
        var whereTank = { name: { [Op.like]: `%${name}%` } }
        if (tankArea) { whereAll.push(whereTankArea)}
        if (tankDef) { whereAll.push(whereTankDef)}
        if (name) { whereAll.push(whereTank)}

        models.tank.findAndCountAll( {
            order: [['position', 'ASC' ]],
            where: whereAll,
            offset: offset,
            limit: limit,
            include: [{ model: models.tankArea, as: 'tankArea' }]
        })
        .then(data => {
            let outlet = checkNull.tankArea(data)
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
    updateTanks: async function (req, res) {
        const modifs = req.body
        const datas = await FunctionUpdateTanks( modifs )
        models.tank.findAndCountAll()
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
    updateTank: async function (req, res) {
        const {id} = req.params
        const modif = req.body
        const updated = await models.tank.update( modif, { where: { id: id } } )
        const find = await models.tank.findAll( {where: { id: id }, include: [{ model: models.tankArea, as: 'tankArea' }] })
        .then(find => {
            const Resdata = {
                code: 20000,
                data: find,
            }
            res.status(200).json(Resdata);
        })

    },
    deleteTank: async function(req, res) {
        const {id} = req.params
        models.tank.destroy( { where: {id: id} } )
        .then(data => {
            const Resdata = {
                code: 20000,
                data: data,
            }
            res.status(200).json(Resdata);
        })
    }
}
