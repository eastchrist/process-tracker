// Imports
const models = require('../models');
const Op = models.Sequelize.Op;

const checkNull = require("../utils/checkNull");

var FunctionUpdateEquips = async function ( modifs ) {
    for ( var modif of modifs) {
        const max = await models.equip.max('position')
        let nextValue = 0
        if (isNaN(max)) { nextValue = 1 } else { nextValue = max + 1 }
        const exist = await models.equip.findAll( { where: { idNode: modif.idNode } })
        if ( exist.length === 0 ) {
            modif.position = nextValue
            const equip = await models.equip.findOrCreate(
                {
                    defaults: {
                        id: modif.id,
                        idNode: modif.idNode,
                        name: modif.name,
                        name1: modif.name1,
                        position: modif.position,
                        menu: modif.menu,
                        idPlc: modif.idPlc,
                        idEquipDef: modif.idEquipDef
                    },
                    where: {
                        id: modif.id
                    }
                })
        } else {
            if ( modif.position === 999999 ) { modif.position = exist[0].position }
            const equip = await models.equip.update( modif, { where: { id: modif.id } } )
        }


    }
}

module.exports = {
    getAllEquips: async function(req, res) {
        let name = req.query.name
        let factory = req.query.idFactory
        let area = req.query.idArea
        let plc = req.query.idPlc
        let page = req.query.page
        let limit = req.query.limit
        const offset = ( page - 1) * limit;
        limit = limit * 1;

        var whereAll = []
        var whereFactory = []
        var whereArea = []

        var wherePlc = { idPlc: { [Op.like]: `%${plc}%` }}
        var whereEquip = { name: { [Op.like]: `%${name}%` } }

        //Filter on the main table
        if (plc) { whereAll.push(wherePlc)}
        if (name) { whereAll.push(whereEquip)}

        //Filter inside include table
        if (factory) { whereFactory.push( { idFactory: { [Op.like]: `%${factory}%` }} )}
        if (area) { whereArea.push( { idArea: { [Op.like]: `%${area}%` }} )}


        models.equip.findAndCountAll( {
            order: [['position', 'ASC' ]],
            where: whereAll,
            offset: offset,
            limit: limit,
            include: [
                {
                    model: models.plc,
                    as: 'plc',
                    where: whereArea,
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
                    }]
                }
            ]
        })
        .then(data => {
            let outlet = checkNull.plc(data)
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
    updateEquips: async function (req, res) {
        const modifs = req.body
        const datas = await FunctionUpdateEquips( modifs )
        models.equip.findAndCountAll()
        .then(data => {
            const Resdata = {
               code: 20000,
               data: data,
            }
            res.status(200).json(Resdata);
        })

    },
    updateEquip: async function (req, res) {
        const {id} = req.params
        const modif = req.body
        const updated = await models.equip.update( modif, { where: { id: id } } )
        const find = await models.equip.findAll( {where: { id: id }, include: [{ model: models.plc, as: 'plc' }] })
        .then(find => {
            const Resdata = {
                code: 20000,
                data: find,
            }
            res.status(200).json(Resdata);
        })

    },
    deleteEquip: async function(req, res) {
        const {id} = req.params
        models.equip.destroy( { where: {id: id} } )
        .then(data => {
            const Resdata = {
                code: 20000,
                data: data,
            }
            res.status(200).json(Resdata);
        })
    }
}
