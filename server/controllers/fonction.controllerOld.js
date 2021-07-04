// Imports

const models = require('../models');
const Op = models.Sequelize.Op;

const checkNull = require("../utils/checkNull");
const JsonParse = require("../utils/JsonParse");
const addChamps = require("../utils/addChamps");
const WorkOnTables = require("../utils/WorkOnTables");


module.exports = {
    getAllFonctions: async function(req, res) {
        let name = req.query.name
        let factory = req.query.idFactory
        let area = req.query.idArea
        let plc = req.query.idPlc
        let idFonction = req.query.idFonction
        let equip = req.query.idEquip
        let equipIndex = req.query.idEquipIndex
        let type = req.query.idType
        let idProjectLink = req.query.idProjectLink
        let idProjectLinkNull = req.query.idProjectLinkNull

        let alarmLosses = req.query.alarmLosses
        let haveToBeCheck = req.query.haveToBeCheck
        let haveBeenCheck = req.query.haveBeenCheck
        let NbLost = req.query.NbLost
        let initialhaveNotBeenDone = req.query.initialhaveNotBeenDone
        let currenthaveNotBeenDone = req.query.currenthaveNotBeenDone
        let page = req.query.page
        let limit = req.query.limit
        const offset = ( page - 1) * limit;
        limit = limit * 1;

        //Filter on the main table
        var whereAll = [  ]
        var whereidFonction = { id: { [Op.like]: `%${idFonction}%` }}
        var whereEquip = { idEquip: { [Op.like]: `%${equip}%` }}
        var whereEquipIndex = { idEquipIndex: { [Op.like]: `%${equipIndex}%` }}
        var whereType = { idType: { [Op.like]: `%${type}%` }}
        var whereAlarmLosses = { alarmLosses: true }
        var whereHaveToBeCheck = { haveToBeCheck: true }
        var whereHaveBeenCheck = { haveBeenCheck: true }
        var whereInitialhaveNotBeenDone = { firstLosses: null }
        var whereCurrenthaveNotBeenDone = { currentLosses: null }
        var whereNbLost = { nbLosse: { [Op.like]: `%${NbLost}%` }}
        var whereFonction = { name: { [Op.like]: `%${name}%` } }
        var whereIdProjectLink = { idProjectLink: { [Op.like]: `%${idProjectLink}%` } }
        var whereIdProjectLinkNull = {
            //To create new project
            idProjectLink: null
        }
        var whereIdProjectLinkAll = {
            idProjectLink: {
                    [Op.or]: {
                        [Op.like]: `%${idProjectLink}%`,
                        [Op.eq]: null
                    }
            }
        }
        if (idFonction) { whereAll.push(whereidFonction)}
        if (equip) { whereAll.push(whereEquip)}
        if (equipIndex) { whereAll.push(whereEquipIndex)}
        if (type) { whereAll.push(whereType)}
        if (alarmLosses) { whereAll.push(whereAlarmLosses)}
        if (haveToBeCheck) { whereAll.push(whereHaveToBeCheck)}
        if (haveBeenCheck) { whereAll.push(whereHaveBeenCheck)}
        if (initialhaveNotBeenDone) { whereAll.push(whereInitialhaveNotBeenDone)}
        if (currenthaveNotBeenDone) { whereAll.push(whereCurrenthaveNotBeenDone)}
        if (NbLost) { whereAll.push(whereNbLost)}
        if (name) { whereAll.push(whereFonction)}
        if (idProjectLink) {
            if (idProjectLinkNull) {
                //Edit a project
                whereAll.push(whereIdProjectLinkAll)
            } else {
                whereAll.push(whereIdProjectLink)
            }
        } else if (idProjectLinkNull) {
            //Create new project
            whereAll.push(whereIdProjectLinkNull)
        }

        var whereFactory = []
        var whereArea = []
        var wherePlc = []
        if (factory) { whereFactory.push( { idFactory: { [Op.like]: `%${factory}%` }} )}
        if (area) { whereArea.push( { idArea: { [Op.like]: `%${area}%` }} )}
        if (plc) { wherePlc.push( { idPlc: { [Op.like]: `%${plc}%` }} )}

        const tanks = await models.tank.findAll( {})

        models.fonction.findAndCountAll( {
            order: [['position', 'ASC' ]],
            where: whereAll,
            offset: offset,
            limit: limit,
            include: [
                { model: models.measure, distinct: true, foreignKey: 'idFonction', as: 'measurement' },
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
            ]})
        .then(data => {
            let outlet = checkNull.measureType(data)
            outlet = checkNull.equip(outlet)
            outlet = checkNull.tankAreaDefEmptying(outlet)
            outlet = checkNull.tankAreaDefFilling(outlet)
             //outlet = addChamps.alarm(outlet)
             //outlet = addChamps.haveToBeValidated(outlet)
             //outlet = addChamps.haveToBeCheck(outlet)
            outlet = addChamps.annualLosses(outlet)
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
                //firstAnnualLosses: modif.LossesAnnualLosses,
                //firstAnnualPrice: modif.LossesAnnualPrice
            }
        } else {
            requestQuery = {
                haveBeenCheck: modif.haveBeenCheck,
                haveToBeValidated: modif.haveToBeValidated,
                lastCheckDate: modif.lastCheckDate,
                alarmLosses: modif.alarmLosses,
                currentLosses: modif.Losses,
                currentLossesPrice: modif.LossesPrice,
                //currentAnnualLosses: modif.LossesAnnualLosses,
                //currentAnnualPrice: modif.LossesAnnualPrice
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
    }
}
