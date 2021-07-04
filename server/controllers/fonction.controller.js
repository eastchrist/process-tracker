// Imports

const models = require('../models');
const Op = models.Sequelize.Op;

const checkNull = require("../utils/checkNull");
const JsonParse = require("../utils/JsonParse");
//const addChamps = require("../utils/addChamps");
const WorkOnTables = require("../utils/WorkOnTables");

//const { literal } = require('sequelize')

module.exports = {
    getAllFonctions: async function(req, res) {
        //Filter on the main table
        const whereAll = WorkOnTables.getFonctionfindAndCountAllFilterMain ( req.query )
        const { offset, limit } = WorkOnTables.getGeneriquefindAndCountAllOffsetLimit ( req.query )
        const includesAll = WorkOnTables.getFonctionfindAndCountAllFilterIncludes ( req.query )
        const order = WorkOnTables.getFonctionfindAndCountAllFilterOrder()

        const includesParent = WorkOnTables.getFonctionfindAllParentFilterIncludes ( req.query )
        const UpdatedcheckBeforeDate = await WorkOnTables.fonctionsUpdatecheckBeforeDate( whereAll, includesParent) //Calculation of the field checkBeforeDate

        const tanks = await models.tank.findAll( {})

        //const attributes = Object.keys(models.fonction.rawAttributes)
        models.fonction.findAndCountAll( {
            //attributes: [ ...attributes],
            order: order,
            distinct: true,
            where: whereAll,
            offset: offset,
            limit: limit,
            include: includesAll
        })
        .then(data => {
            let outlet = checkNull.measureType(data)
            outlet = checkNull.equip(outlet)
            outlet = checkNull.tankAreaDefEmptying(outlet)
            outlet = checkNull.tankAreaDefFilling(outlet)
             //outlet = addChamps.alarm(outlet)
             //outlet = addChamps.haveToBeValidated(outlet)
             //outlet = addChamps.haveToBeCheck(outlet)
            //outlet = addChamps.annualLosses(outlet)
            outlet = JsonParse.childrenOptions(outlet, tanks)
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
    updateFonctions: async function (req, res) {
        const modifs = req.body
        const datas = await WorkOnTables.fonctionsUpdate( modifs )
        models.fonction.findAndCountAll()
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
    addFonctionMeasure: async function (req, res) {
        const modif = req.body
        const exist = await models.fonction.findAll( { where: { idEquip: modif.idEquip, idEquipIndex: modif.idEquipIndex } })
        let requestQuery = {}
        if (exist[0].firstLosses === null) {
            requestQuery = {
                haveBeenCheck: modif.haveBeenCheck,
                haveToBeValidated: modif.haveToBeValidated,
                lastCheckDate: modif.lastCheckDate,
                alarmLosses: modif.alarmLosses,
                firstLosses: modif.Losses,
                firstLossesPrice: modif.LossesPrice,
            }
        } else {
            requestQuery = {
                haveBeenCheck: modif.haveBeenCheck,
                haveToBeValidated: modif.haveToBeValidated,
                lastCheckDate: modif.lastCheckDate,
                alarmLosses: modif.alarmLosses,
                currentLosses: modif.Losses,
                currentLossesPrice: modif.LossesPrice,
            }
        }
        const added = await models.fonction.update( requestQuery, { where: { idEquip: modif.idEquip, idEquipIndex: modif.idEquipIndex }} )
        const find = await models.fonction.findAll( { where: { idEquip: modif.idEquip, idEquipIndex: modif.idEquipIndex }} )
            .then(find => {
                const Resdata = {
                    code: 20000,
                    data: find,
                }
                res.status(200).json(Resdata);
            })
    },
    updateFonction: async function (req, res) {
        const {id} = req.params
        const modif = req.body
        const updated = await models.fonction.update( modif, { where: { id: id } } )

        var whereFactory = []
        var whereArea = []
        var wherePlc = []
        const tanks = await models.tank.findAll( {})
        //const find = await models.fonction.findAll( {
        models.fonction.findAndCountAll( {
            where: { id: id },
            include: [
                { model: models.measure, foreignKey: 'idFonction', as: 'measurement', order: [['position', 'ASC' ]],},
                { model: models.measureType, foreignKey: 'idType', as: 'measureType'},
                { model: models.tankAreaDefEmptying, as: 'tankAreaDefEmptying'},
                { model: models.tankAreaDefFilling, as: 'tankAreaDefFilling'},
                {
                    model: models.equip,
                    as: 'equip',
                    where: wherePlc,
                    include: [{
                        model: models.plc,
                        as: 'plc',
                        where: whereArea,
                        include: [{
                            model: models.area,
                            as: 'area',
                            where: whereFactory,
                            include: [{
                                model: models.factory,
                                as: 'factory'
                            }]
                        }]
                    }]
                }
            ]
        })
        .then(data => {
            let outlet = checkNull.measureType(data)
            outlet = checkNull.equip(outlet)
            outlet = checkNull.tankAreaDefEmptying(outlet)
            outlet = checkNull.tankAreaDefFilling(outlet)
            const option = JsonParse.childrenOptions(outlet, tanks)
            const Resdata = {
                code: 20000,
                data: option,
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
    deleteFonction: async function(req, res) {
        const {id} = req.params
        models.fonction.destroy( { where: {id: id} } )
        .then(data => {
            const Resdata = {
                code: 20000,
                data: data,
            }
            res.status(200).json(Resdata);
        })
    },

    updateProjectFonctions: async function (req, res) {
        const modifs = req.body
        const datas = await WorkOnTables.functionUpdateProjectFonctionsLinked( modifs )
        models.fonction.findAndCountAll()
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
    deleteProjectFonctions: async function(req, res) {
        const {id} = req.params
        const datas = await WorkOnTables.functionDeleteProjectFonctionsLinked( id )
        models.fonction.findAndCountAll()
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

}
