const models = require('../models');
const moment = require('moment');
const sequelize = require('sequelize');
const Op = models.Sequelize.Op;
const calculation = require("../utils/calculation");

var whereHaveToBeCheckActifGeneral = { [Op.or]: [ { haveToBeCheck: true }, { [Op.and]: [{ lastCheckDate: {[Op.lte]: sequelize.col('checkBeforeDate') }}, { modeAutoCheckActif: true }] } ] }

module.exports = {
    getGeneriquefindAndCountAllOffsetLimit: function( query ) {
        let page = query.page
        let limit = query.limit
        const offset = ( page - 1) * limit;
        limit = limit * 1;
        return { offset: offset, limit: limit}
    },


    getFonctionfindAndCountAllFilterMain: function( query ) {

        let name = query.name
        let idFonction = query.idFonction
        let type = query.idType
        let equip = query.idEquip
        let equipIndex = query.idEquipIndex
        let enabled = query.enabled
        let alarmLosses = query.alarmLosses
        let haveToBeCheckActif = query.haveToBeCheckActif
        let haveBeenCheck = query.haveBeenCheck
        let initialhaveNotBeenDone = query.initialhaveNotBeenDone
        let currenthaveNotBeenDone = query.currenthaveNotBeenDone
        let NbLost = query.NbLost
        let idProjectLink = query.idProjectLink
        let idProjectLinkNull = query.idProjectLinkNull

        var whereFonction = { name: { [Op.like]: `%${name}%` } }
        var whereidFonction = { id: { [Op.like]: `%${idFonction}%` }}
        var whereType = { idType: { [Op.like]: `%${type}%` }}
        var whereEquip = { idEquip: { [Op.like]: `%${equip}%` }}
        var whereEquipIndex = { idEquipIndex: { [Op.like]: `%${equipIndex}%` }}
        var whereAlarmLosses = { [Op.or]: [
                    { [Op.and]: [
                            {currentLosses: {[Op.is]: null}},
                            {firstLosses : {[Op.gte]: sequelize.col('maxLosse')}}]},
                    { [Op.and]: [
                            {currentLosses: {[Op.not]: null}},
                            {currentLosses : {[Op.gte]: sequelize.col('maxLosse')}}]}
                    ]}
        var whereHaveToBeCheckActif = whereHaveToBeCheckActifGeneral
        var whereEnabled = { enabled: true }
        var whereHaveBeenCheck = { haveBeenCheck: true }
        var whereInitialhaveNotBeenDone = { firstLosses: null }
        var whereCurrenthaveNotBeenDone = { currentLosses: null }
        var whereNbLost = { nbLosse: { [Op.like]: `%${NbLost}%` }}
        var whereIdProjectLink = { idProjectLink: { [Op.like]: `%${idProjectLink}%` } }
        //To create new project
        //var whereIdProjectLinkNull = { idProjectLink: null }
        var whereIdProjectLinkNull = { idProjectLink: { [Op.or]: { [Op.eq]: 0, [Op.is]: null }} }
        var whereIdProjectLinkAll = { idProjectLink: { [Op.or]: { [Op.like]: `%${idProjectLink}%`, [Op.eq]: 0, [Op.is]: null }}}

        //toto:  idProjectLink: { [Op.or]: { [Op.eq]: 0, [Op.is]: null }}

        var whereAll = [  ]
        if (name) { whereAll.push(whereFonction)}
        if (idFonction) { whereAll.push(whereidFonction)}
        if (type) { whereAll.push(whereType)}
        if (equip) { whereAll.push(whereEquip)}
        if (equipIndex) { whereAll.push(whereEquipIndex)}
        if (enabled) { whereAll.push(whereEnabled)}
        if (alarmLosses) { whereAll.push(whereAlarmLosses)}
        if (haveToBeCheckActif) { whereAll.push(whereHaveToBeCheckActif)}
        if (haveBeenCheck) { whereAll.push(whereHaveBeenCheck)}
        if (initialhaveNotBeenDone) { whereAll.push(whereInitialhaveNotBeenDone)}
        if (currenthaveNotBeenDone) { whereAll.push(whereCurrenthaveNotBeenDone)}
        if (NbLost) { whereAll.push(whereNbLost)}
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

        return whereAll
    },
    getFonctionfindAndCountAllFilterIncludes: function( query ) {
        let factory = query.idFactory
        let area = query.idArea
        let plc = query.idPlc
        var whereFactory = []
        var whereArea = []
        var wherePlc = []
        if (factory) { whereFactory.push( { idFactory: { [Op.like]: `%${factory}%` }} )}
        if (area) { whereArea.push( { idArea: { [Op.like]: `%${area}%` }} )}
        if (plc) { wherePlc.push( { idPlc: { [Op.like]: `%${plc}%` }} )}

        return [
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
            }]
    },
    getFonctionfindAndCountAllFilterOrder: function(  ) {
        return [ ['position','ASC'], [ { model: models.measure, as: 'measurement' }, 'position', 'ASC']]
    },


    getFonctionfindAllParentFilterIncludes: function( query ) {
        let factory = query.idFactory
        let area = query.idArea
        let plc = query.idPlc
        var whereFactory = []
        var whereArea = []
        var wherePlc = []
        if (factory) { whereFactory.push( { idFactory: { [Op.like]: `%${factory}%` }} )}
        if (area) { whereArea.push( { idArea: { [Op.like]: `%${area}%` }} )}
        if (plc) { wherePlc.push( { idPlc: { [Op.like]: `%${plc}%` }} )}

        return [
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
            }]
    },
    fonctionsUpdatecheckBeforeDate: async function( whereAll, includesParent ) {
        const newWhere = [...whereAll];
        for (let index = 0; index < newWhere.length; index++) {
            if (newWhere[index] === whereHaveToBeCheckActifGeneral) {
                newWhere.splice(index, 1);
                break;
            }
        }
        const fonctionToUpdate = await models.fonction.findAll( {
            attributes: [ 'id', 'lastCheckDate', 'checkBeforeDate', 'freqCheck'],
            where: [...newWhere, {lastCheckDate: {[Op.not]: null}}],
            include: includesParent
        })
        for (let index = 0; index < fonctionToUpdate.length; index++) {
            const checkBeforeDate = new Date( new Date() - (fonctionToUpdate[ index ].dataValues.freqCheck * 7) * 24 * 60 * 60 * 1000)
            const fonction = await models.fonction.update(
                { checkBeforeDate: checkBeforeDate},
                { where: { id: fonctionToUpdate[ index ].dataValues.id }})

        }
        return true
    },
    fonctionsUpdate: async function ( modifs ) {
        for ( var modif of modifs) {
            const max = await models.fonction.max('position')
            let nextValue = 0
            if (isNaN(max)) { nextValue = 1 } else { nextValue = max + 1 }
            const exist = await models.fonction.findAll( { where: { idEquip: modif.idEquip, idEquipIndex: modif.idEquipIndex } })
            if ( exist.length === 0 ) {
                //Dont exist
                modif.position = nextValue
                const fonction = await models.fonction.findOrCreate(
                    {
                        defaults: {
                            id: modif.id,
                            name: modif.name,
                            position: modif.position,
                            idType: modif.idType,
                            idAreaSource: modif.idAreaSource,
                            idAreaDest: modif.idAreaDest,

                            lastCheckDate: modif.lastCheckDate,
                            firstLosses: modif.firstLosses,
                            firstLossesPrice: modif.firstLossesPrice,

                            currentLosses: modif.currentLosses,
                            currentLossesPrice: modif.currentLossesPrice,

                            freqCheck: modif.freqCheck,
                            freqDelay: modif.freqDelay,
                            nbLosse: modif.nbLosse,
                            maxLosse: modif.maxLosse,

                            alarmLosses: modif.alarmLosses,
                            haveToBeCheck: modif.haveToBeCheck,
                            haveBeenCheck: modif.haveBeenCheck,
                            haveToBeValidated: modif.haveToBeValidated,
                            modeAutoCheckActif: modif.modeAutoCheckActif,
                            enabled: modif.enabled,

                            method: modif.method,
                            picture1: modif.picture1,
                            picture2: modif.picture2,
                            idProjectLink: modif.idProjectLink,
                            idProjectLinkSelected: modif.idProjectLinkSelected,
                            projectPercentRecovery: modif.projectPercentRecovery,
                            idEquip: modif.idEquip,
                            idEquipIndex: modif.idEquipIndex,
                        },
                        where: {
                            idEquip: modif.idEquip,
                            idEquipIndex: modif.idEquipIndex,
                        }
                    })
            } else {
                //Already exist
                if ( modif.position === 999999 ) {
                    modif.position = exist[0].position
                } else {
                    modif.position = exist[0].position
                }
                const fonction = await models.fonction.update(
                    {
                        id: modif.id,
                        name: modif.name,
                        position: modif.position,
                        idType: modif.idType,
                        idAreaSource: modif.idAreaSource,
                        idAreaDest: modif.idAreaDest,

                        lastCheckDate: modif.lastCheckDate,
                        firstLosses: modif.firstLosses,
                        firstLossesPrice: modif.firstLossesPrice,

                        currentLosses: modif.currentLosses,
                        currentLossesPrice: modif.currentLossesPrice,

                        freqCheck: modif.freqCheck,
                        freqDelay: modif.freqDelay,
                        nbLosse: modif.nbLosse,
                        maxLosse: modif.maxLosse,

                        alarmLosses: modif.alarmLosses,
                        haveToBeCheck: modif.haveToBeCheck,
                        haveBeenCheck: modif.haveBeenCheck,
                        haveToBeValidated: modif.haveToBeValidated,
                        modeAutoCheckActif: modif.modeAutoCheckActif,
                        enabled: modif.enabled,

                        method: modif.method,
                        picture1: modif.picture1,
                        picture2: modif.picture2,
                        idProjectLink: modif.idProjectLink,
                        idProjectLinkSelected: modif.idProjectLinkSelected,
                        projectPercentRecovery: modif.projectPercentRecovery,
                        idEquip: modif.idEquip,
                        idEquipIndex: modif.idEquipIndex,
                    }, { where: { id: modif.id }} )
                    .catch(err => {
                        res.status(500).send({
                            message:
                                err.message || "Some error occurred while retrieving tutorials."
                        });
                    });
            }
        }
    },
    functionUpdateProjectFonctionsLinked: async function ( modifs ) {
        //let idProjectLink = modifs.projectId
        let fonctionLinks = modifs
        let updateData = {}
        for ( var fonctionLink of fonctionLinks) {
            if ( ( fonctionLink.idProjectLinkSelected === false ) || ( fonctionLink.idProjectLinkSelected === null )) {
                updateData = {
                    idProjectLink: null,
                    idProjectLinkSelected: false,
                    projectPercentRecovery: 0,
                }
            } else {
                updateData = {
                    idProjectLink: fonctionLink.idProjectLink,
                    idProjectLinkSelected: true,
                    projectPercentRecovery: fonctionLink.projectPercentRecovery,
                }
            }
            const fonction = await models.fonction.update( updateData, { where: { id: fonctionLink.id }} )
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving tutorials."
                    });
                });
        }
    },
    functionDeleteProjectFonctionsLinked: async function( idProject ) {
        let updateData = {
            idProjectLink: null,
            idProjectLinkSelected: false,
            projectPercentRecovery: 0,
        }
        const fonction = await models.fonction.update( updateData, { where: { idProjectLink: idProject }} )
        return fonction
    },

    //Project
    getProjectfindAndCountAllFilterMain: function( query ) {
        let name = query.name
        let projectId = query.id
        let area = query.idArea
        let type = query.idType
        let status = query.idStatus

        var whereAll = [  ]

        var whereProject = { name: { [Op.like]: `%${name}%` } }
        var whereId = { id: { [Op.like]: `%${projectId}%` }}
        var whereType = { idType: { [Op.like]: `%${type}%` }}
        var whereStatus = { idStatus: { [Op.eq]: status }}

        if (area) { whereAll.push( { idArea: { [Op.like]: `%${area}%` }} )}
        if (type) { whereAll.push(whereType)}
        if (status) { whereAll.push(whereStatus)}
        if (name) { whereAll.push(whereProject)}
        if (projectId) { whereAll.push(whereId)}

        return whereAll
    },
    getProjectfindAndCountAllFilterIncludes: function( query ) {
        let factory = query.idFactory
        var whereFactory = []
        if (factory) { whereFactory.push( { idFactory: { [Op.like]: `%${factory}%` }} )}
        return [
            { model: models.projectAction, distinct: true, foreignKey: 'idProject', as: 'projectAction' },
            { model: models.fonction, distinct: true, foreignKey: 'idProjectLink', as: 'fonctionsLinked' },
            { model: models.projectType, foreignKey: 'idType', as: 'projectType'},
            { model: models.projectStatus, foreignKey: 'idStatus', as: 'projectStatus'},
            { model: models.area,
                as: 'area',
                where: whereFactory,
                include: [{
                    model: models.factory,
                    as: 'factory'
                }] }
        ]
    },
    getProjectfindAndCountAllFilterOrder: function(  ) {
        return [['position', 'ASC' ], [ { model: models.projectAction, as: 'projectAction' }, 'position', 'ASC']]
    },
    ProjectsUpdate: async function ( modifs ) {
        for ( var modif of modifs) {
            const max = await models.project.max('position')
            let nextValue = 0
            if (isNaN(max)) { nextValue = 1 } else { nextValue = max + 1 }
            const exist = await models.project.findAll( { where: { id: modif.id } })
            if ( exist.length === 0 ) {
                modif.position = nextValue
                const project = await models.project.findOrCreate(
                    {
                        defaults: {
                            name: modif.name,
                            position: modif.position,
                            idType: modif.idType,
                            comment: modif.comment,
                            priority: modif.priority,
                            difficulty: modif.difficulty,
                            idArea: modif.idArea,
                            materialPrice: modif.materialPrice,
                        },
                        where: {
                            id: modif.id,
                        }
                    }
                )
            } else {
                if ( modif.position === 999999 ) { modif.position = exist[0].position }
                const project = await models.project.update( modif, { where: { id: modif.id } } )
            }
        }
    },
    projectActionDeleteProjectLinked: async function( idProject ) {
        const projectAction = await models.projectAction.destroy( { where: { idProject: idProject }} )
        return projectAction
    },

    //
    getFullTraca: function( fonctionList, projectList ) {
        let tracaMain = {
            fonctionFirstAnnualLosses: 0,
            fonctionFirstAnnualPrice: 0,
            fonctionCurrentAnnualLosses: 0,
            fonctionCurrentAnnualPrice: 0,
            fonctionProjectRecoveryRequestAnnualLosses: 0,
            fonctionProjectRecoveryRequestAnnualPrice: 0,
            fonctionNb: 0,

            fonctionAlarmNb: 0,
            fonctionAlarm: [],
            fonctionToCheckNb: 0,
            fonctionToCheck: [],
            fonctionNeverDoneNb: 0,
            fonctionNeverDone: [],
            fonctionLinkedNb: 0,
            fonctionNotLinkedNb: 0,
            fonctionNotLinked: [],

            projectStandByNb: 0,
            projectRunningNb: 0,
            projectFinishedNb: 0,
            projectStandBy: {},
            projectRunning: {},
            projectFinished: {},

            projectChangeParametersNb: 0,
            projectSmallProgNb: 0,
            projectMediumProgNb: 0,
            projectBigProgNb: 0,
            projectSmallProjectNb: 0,
            projectMediumProjectNb: 0,
            projectBigProjectNb: 0,

            projectChangeParameters: {},
            projectSmallProg: {},
            projectMediumProg: {},
            projectBigProg: {},
            projectSmallProject: {},
            projectMediumProject: {},
            projectBigProject: {},

            areas: {}
            //areas: []
        }

        //Get informations from functions list
        for (let index = 0; index < fonctionList.length; index++) {
            const fonctionArea = {
                id: fonctionList[index].dataValues.equip.dataValues.plc.dataValues.area.dataValues.id,
                name: fonctionList[index].dataValues.equip.dataValues.plc.dataValues.area.dataValues.name1,
            }
            const fonctionEquip = {
                id : fonctionList[index].dataValues.equip.dataValues.id,
                name : fonctionList[index].dataValues.equip.dataValues.name1
            }
            const fonction = fonctionList[index]
            let newTracaArea = {
                id: fonctionArea.id,
                name: fonctionArea.name,
                index: 0,
                fonctionFirstAnnualLosses: 0,
                fonctionFirstAnnualPrice: 0,
                fonctionCurrentAnnualLosses: 0,
                fonctionCurrentAnnualPrice: 0,
                fonctionProjectRecoveryRequestAnnualLosses: 0,
                fonctionProjectRecoveryRequestAnnualPrice: 0,
                fonctionNb: 0,
                fonctionAlarmNb: 0,
                fonctionAlarm: [],
                fonctionToCheckNb: 0,
                fonctionToCheck: [],
                fonctionNeverDoneNb: 0,
                fonctionNeverDone: [],
                fonctionLinkedNb: 0,
                fonctionNotLinkedNb: 0,
                fonctionNotLinked: [],

                projectStandByNb: 0,
                projectRunningNb: 0,
                projectFinishedNb: 0,
                projectStandBy: {},
                projectRunning: {},
                projectFinished: {},

                projectChangeParametersNb: 0,
                projectSmallProgNb: 0,
                projectMediumProgNb: 0,
                projectBigProgNb: 0,
                projectSmallProjectNb: 0,
                projectMediumProjectNb: 0,
                projectBigProjectNb: 0,
                projectChangeParameters: {},
                projectSmallProg: {},
                projectMediumProg: {},
                projectBigProg: {},
                projectSmallProject: {},
                projectMediumProject: {},
                projectBigProject: {},

                equipNumber: 0,
                equips: {}

            }
            let newTracaEquip = {
                id: fonctionEquip.id,
                name: fonctionEquip.name,
                index: 0,

                fonctionFirstAnnualLosses: 0,
                fonctionFirstAnnualPrice: 0,
                fonctionCurrentAnnualLosses: 0,
                fonctionCurrentAnnualPrice: 0,
                fonctionProjectRecoveryRequestAnnualLosses: 0,
                fonctionProjectRecoveryRequestAnnualPrice: 0,
                fonctionNb: 0,
                fonctionAlarmNb: 0,
                fonctionAlarm: [],
                fonctionToCheckNb: 0,
                fonctionToCheck: [],
                fonctionNeverDoneNb: 0,
                fonctionNeverDone: [],
                fonctionLinkedNb: 0,
                fonctionNotLinkedNb: 0,
                fonctionNotLinked: [],

            }

            const fonctionData = {
                fonctionId : fonction.dataValues.id,
                fonctionName : fonction.dataValues.name,

                //fonctionFirstAnnualLosses : parseFloat(filterFloat(calculation.GetFirstAnnualLosses(fonction.dataValues.nbLosse, fonction.dataValues.firstLosses, fonction.dataValues.enabled))),
                fonctionFirstAnnualLosses : calculation.GetFirstAnnualLosses(fonction.dataValues.nbLosse, fonction.dataValues.firstLosses, fonction.dataValues.enabled),
                fonctionFirstAnnualPrice : calculation.GetFirstAnnualPrice(fonction.dataValues.nbLosse, fonction.dataValues.firstLosses, fonction.dataValues.firstLossesPrice, fonction.dataValues.enabled),

                fonctionCurrentAnnualLosses : calculation.GetCurrentAnnualLosses(fonction.dataValues.nbLosse, fonction.dataValues.currentLosses, fonction.dataValues.enabled),
                fonctionCurrentAnnualPrice : calculation.GetCurrentAnnualPrice(fonction.dataValues.nbLosse, fonction.dataValues.currentLosses, fonction.dataValues.currentLossesPrice, fonction.dataValues.enabled),

                fonctionRecoveryAnnualLosses : calculation.GetRecoveryAnnualLosses(fonction.dataValues.nbLosse, fonction.dataValues.firstLosses, fonction.dataValues.projectPercentRecovery, fonction.dataValues.enabled),
                fonctionRecoveryAnnualPrice : calculation.GetRecoveryAnnualPrice(fonction.dataValues.nbLosse, fonction.dataValues.firstLosses, fonction.dataValues.firstLossesPrice, fonction.dataValues.projectPercentRecovery, fonction.dataValues.enabled),

                fonctionAlarm : calculation.GetAlarmLosses(fonction.dataValues.maxLosse, fonction.dataValues.firstLosses, fonction.dataValues.currentLosses, fonction.dataValues.enabled),
                fonctionToCheck : calculation.GetToBeCheckActif( fonction.dataValues.haveToBeCheck,  fonction.dataValues.lastCheckDate, fonction.dataValues.freqCheck, fonction.dataValues.modeAutoCheckActif, fonction.dataValues.enabled),
                fonctionLinked : calculation.GetFonctionLinked( fonction.dataValues.idProjectLink, fonction.dataValues.idProjectLinkSelected, fonction.dataValues.enabled ),
                fonctionEnable : calculation.GetFonctionEnable( fonction.dataValues.enabled),
                fonctionProjectRecoveryRequest: 0,
                fonctionProjectRecoveryCurrent: 0,

            }


            //Creation Area si necessaire
            if ( !tracaMain.areas.hasOwnProperty(fonctionArea.id) ) {
                const NbAreasCreated = Object.values(tracaMain.areas).length
                newTracaArea.index = NbAreasCreated
                Object.assign( tracaMain.areas, { [fonctionArea.id] : newTracaArea });
                //tracaMain.areas.push( newTracaArea );
            }
            //Creation Equip si necessaire
            if ( !tracaMain.areas[fonctionArea.id].equips.hasOwnProperty(fonctionEquip.id) ) {
                const NbEquipsCreated = Object.values(tracaMain.areas[fonctionArea.id].equips).length
                newTracaEquip.index = NbEquipsCreated
                Object.assign( tracaMain.areas[fonctionArea.id].equips, { [fonctionEquip.id] : newTracaEquip });
                tracaMain.areas[fonctionArea.id].equipNumber++
            }

            try {
                // Send the last losses information
                let lastLosses = 0
                let lastAnnualLossesPrice = 0
                if (( fonction.dataValues.currentLosses === null ) || ( fonction.dataValues.currentLosses === '' )) {
                    lastLosses = fonction.dataValues.firstLosses
                    lastAnnualLossesPrice = fonctionData.fonctionFirstAnnualPrice
                }
                else {
                    lastLosses = fonction.dataValues.currentLosses
                    lastAnnualLossesPrice = fonctionData.fonctionCurrentAnnualPrice
                }

                //Calculation fonctionFirstAnnualLosses
                if (fonctionData.fonctionFirstAnnualLosses !== '') {
                    tracaMain.fonctionFirstAnnualLosses =  tracaMain.fonctionFirstAnnualLosses + parseFloat(fonctionData.fonctionFirstAnnualLosses)
                    tracaMain.areas[fonctionArea.id].fonctionFirstAnnualLosses = tracaMain.areas[fonctionArea.id].fonctionFirstAnnualLosses + parseFloat(fonctionData.fonctionFirstAnnualLosses)
                    tracaMain.areas[fonctionArea.id].equips[fonctionEquip.id].fonctionFirstAnnualLosses = tracaMain.areas[fonctionArea.id].equips[fonctionEquip.id].fonctionFirstAnnualLosses + parseFloat(fonctionData.fonctionFirstAnnualLosses)
                }

                //Calculation fonctionFirstAnnualPrice
                if (fonctionData.fonctionFirstAnnualPrice !== '') {
                    tracaMain.fonctionFirstAnnualPrice = tracaMain.fonctionFirstAnnualPrice + parseFloat(fonctionData.fonctionFirstAnnualPrice)
                    tracaMain.areas[fonctionArea.id].fonctionFirstAnnualPrice = tracaMain.areas[fonctionArea.id].fonctionFirstAnnualPrice + parseFloat(fonctionData.fonctionFirstAnnualPrice)
                    tracaMain.areas[fonctionArea.id].equips[fonctionEquip.id].fonctionFirstAnnualPrice = tracaMain.areas[fonctionArea.id].equips[fonctionEquip.id].fonctionFirstAnnualPrice + parseFloat(fonctionData.fonctionFirstAnnualPrice)
                }

                //Calculation fonctionCurrentAnnualLosses
                if (fonctionData.fonctionCurrentAnnualLosses !== '') {
                    tracaMain.fonctionCurrentAnnualLosses = tracaMain.fonctionCurrentAnnualLosses + parseFloat(fonctionData.fonctionCurrentAnnualLosses)
                    tracaMain.areas[fonctionArea.id].fonctionCurrentAnnualLosses = tracaMain.areas[fonctionArea.id].fonctionCurrentAnnualLosses + parseFloat(fonctionData.fonctionCurrentAnnualLosses)
                    tracaMain.areas[fonctionArea.id].equips[fonctionEquip.id].fonctionCurrentAnnualLosses = tracaMain.areas[fonctionArea.id].equips[fonctionEquip.id].fonctionCurrentAnnualLosses + parseFloat(fonctionData.fonctionCurrentAnnualLosses)
                }

                //Calculation fonctionCurrentAnnualPrice
                if (fonctionData.fonctionCurrentAnnualPrice !== '') {
                    tracaMain.fonctionCurrentAnnualPrice = tracaMain.fonctionCurrentAnnualPrice + parseFloat(fonctionData.fonctionCurrentAnnualPrice)
                    tracaMain.areas[fonctionArea.id].fonctionCurrentAnnualPrice = tracaMain.areas[fonctionArea.id].fonctionCurrentAnnualPrice + parseFloat(fonctionData.fonctionCurrentAnnualPrice)
                    tracaMain.areas[fonctionArea.id].equips[fonctionEquip.id].fonctionCurrentAnnualPrice = tracaMain.areas[fonctionArea.id].equips[fonctionEquip.id].fonctionCurrentAnnualPrice + parseFloat(fonctionData.fonctionCurrentAnnualPrice)
                }

                //Calculation fonctionRecoveryAnnualLosses
                if (fonctionData.fonctionRecoveryAnnualLosses !== '') {
                    tracaMain.fonctionProjectRecoveryRequestAnnualLosses = tracaMain.fonctionProjectRecoveryRequestAnnualLosses + parseFloat(fonctionData.fonctionRecoveryAnnualLosses)
                    tracaMain.areas[fonctionArea.id].fonctionProjectRecoveryRequestAnnualLosses = tracaMain.areas[fonctionArea.id].fonctionProjectRecoveryRequestAnnualLosses + parseFloat(fonctionData.fonctionProjectRecoveryRequestAnnualLosses)
                    tracaMain.areas[fonctionArea.id].equips[fonctionEquip.id].fonctionProjectRecoveryRequestAnnualLosses = tracaMain.areas[fonctionArea.id].equips[fonctionEquip.id].fonctionProjectRecoveryRequestAnnualLosses + parseFloat(fonctionData.fonctionProjectRecoveryRequestAnnualLosses)

                }


                if (fonctionData.fonctionRecoveryAnnualPrice !== '') {
                    tracaMain.fonctionProjectRecoveryRequestAnnualPrice = tracaMain.fonctionProjectRecoveryRequestAnnualPrice + parseFloat(fonctionData.fonctionRecoveryAnnualPrice)
                    tracaMain.areas[fonctionArea.id].fonctionProjectRecoveryRequestAnnualPrice = tracaMain.areas[fonctionArea.id].fonctionProjectRecoveryRequestAnnualPrice + parseFloat(fonctionData.fonctionProjectRecoveryRequestAnnualPrice)
                    tracaMain.areas[fonctionArea.id].equips[fonctionEquip.id].fonctionProjectRecoveryRequestAnnualPrice = tracaMain.areas[fonctionArea.id].equips[fonctionEquip.id].fonctionProjectRecoveryRequestAnnualPrice + parseFloat(fonctionData.fonctionProjectRecoveryRequestAnnualPrice)

                }

                //Function Number
                if (fonctionData.fonctionEnable === true) {
                    tracaMain.fonctionNb = tracaMain.fonctionNb + 1
                    tracaMain.areas[fonctionArea.id].fonctionNb = tracaMain.areas[fonctionArea.id].fonctionNb + 1
                    tracaMain.areas[fonctionArea.id].equips[fonctionEquip.id].fonctionNb = tracaMain.areas[fonctionArea.id].equips[fonctionEquip.id].fonctionNb + 1
                }
                //Function In Alarm
                if (fonctionData.fonctionAlarm === true) {
                    tracaMain.fonctionAlarmNb = tracaMain.fonctionAlarmNb + 1
                    tracaMain.areas[fonctionArea.id].fonctionAlarmNb = tracaMain.areas[fonctionArea.id].fonctionAlarmNb + 1
                    tracaMain.areas[fonctionArea.id].equips[fonctionEquip.id].fonctionAlarmNb = tracaMain.areas[fonctionArea.id].equips[fonctionEquip.id].fonctionAlarmNb + 1

                    tracaMain.fonctionAlarm.push(
                        {
                            area: tracaMain.areas[fonctionArea.id].name,
                            id: fonctionData.fonctionId,
                            name: fonctionData.fonctionName,
                            haveToBeCheckActif: fonction.haveToBeCheckActif,
                            maxLosse: fonction.dataValues.maxLosse,
                            lastLosses: lastLosses,
                            lastAnnualLossesPrice: lastAnnualLossesPrice,
                            recoveryAnnualPrice: fonctionData.fonctionRecoveryAnnualPrice
                        }
                    )

                    tracaMain.areas[fonctionArea.id].fonctionAlarm.push(
                        {
                            area: tracaMain.areas[fonctionArea.id].name,
                            id: fonctionData.fonctionId,
                            name: fonctionData.fonctionName,
                            haveToBeCheckActif: fonction.haveToBeCheckActif,
                            maxLosse: fonction.dataValues.maxLosse,
                            lastLosses: lastLosses,
                            lastAnnualLossesPrice: lastAnnualLossesPrice,
                            recoveryAnnualPrice: fonctionData.fonctionRecoveryAnnualPrice
                        }
                    )
                }

                //Function Never Done
                if (fonctionData.fonctionFirstAnnualLosses === "") {
                    tracaMain.fonctionNeverDoneNb = tracaMain.fonctionNeverDoneNb + 1
                    tracaMain.areas[fonctionArea.id].fonctionNeverDoneNb = tracaMain.areas[fonctionArea.id].fonctionNeverDoneNb + 1
                    tracaMain.areas[fonctionArea.id].equips[fonctionEquip.id].fonctionNeverDoneNb = tracaMain.areas[fonctionArea.id].equips[fonctionEquip.id].fonctionNeverDoneNb + 1
                    tracaMain.fonctionNeverDone.push(
                        {
                            area: tracaMain.areas[fonctionArea.id].name,
                            id: fonctionData.fonctionId,
                            name: fonctionData.fonctionName,
                            haveToBeCheckActif: fonction.haveToBeCheckActif,
                            maxLosse: fonction.dataValues.maxLosse,
                            lastLosses: lastLosses,
                            lastAnnualLossesPrice: lastAnnualLossesPrice,
                            recoveryAnnualPrice: fonctionData.fonctionRecoveryAnnualPrice
                        }
                    )
                    tracaMain.areas[fonctionArea.id].fonctionNeverDone.push(
                        {
                            area: tracaMain.areas[fonctionArea.id].name,
                            id: fonctionData.fonctionId,
                            name: fonctionData.fonctionName,
                            haveToBeCheckActif: fonction.haveToBeCheckActif,
                            maxLosse: fonction.dataValues.maxLosse,
                            lastLosses: lastLosses,
                            lastAnnualLossesPrice: lastAnnualLossesPrice,
                            recoveryAnnualPrice: fonctionData.fonctionRecoveryAnnualPrice
                        }
                    )

                }


                //Function To Check
                if (fonctionData.fonctionToCheck === true) {
                    tracaMain.fonctionToCheckNb = tracaMain.fonctionToCheckNb + 1
                    tracaMain.areas[fonctionArea.id].fonctionToCheckNb = tracaMain.areas[fonctionArea.id].fonctionToCheckNb + 1
                    tracaMain.areas[fonctionArea.id].equips[fonctionEquip.id].fonctionToCheckNb = tracaMain.areas[fonctionArea.id].equips[fonctionEquip.id].fonctionToCheckNb + 1
                    tracaMain.fonctionToCheck.push(
                        {
                            area: tracaMain.areas[fonctionArea.id].name,
                            id: fonctionData.fonctionId,
                            name: fonctionData.fonctionName,
                            haveToBeCheckActif: fonction.haveToBeCheckActif,
                            maxLosse: fonction.dataValues.maxLosse,
                            lastLosses: lastLosses,
                            lastAnnualLossesPrice: lastAnnualLossesPrice,
                            recoveryAnnualPrice: fonctionData.fonctionRecoveryAnnualPrice
                        }
                    )
                    tracaMain.areas[fonctionArea.id].fonctionToCheck.push(
                        {
                            area: tracaMain.areas[fonctionArea.id].name,
                            id: fonctionData.fonctionId,
                            name: fonctionData.fonctionName,
                            haveToBeCheckActif: fonction.haveToBeCheckActif,
                            maxLosse: fonction.dataValues.maxLosse,
                            lastLosses: lastLosses,
                            lastAnnualLossesPrice: lastAnnualLossesPrice,
                            recoveryAnnualPrice: fonctionData.fonctionRecoveryAnnualPrice
                        }
                    )
                }

                //Function Linked to project
                if (fonctionData.fonctionLinked === true)
                {
                    tracaMain.fonctionLinkedNb = tracaMain.fonctionLinkedNb + 1
                    tracaMain.areas[fonctionArea.id].fonctionLinkedNb = tracaMain.areas[fonctionArea.id].fonctionLinkedNb + 1
                    tracaMain.areas[fonctionArea.id].equips[fonctionEquip.id].fonctionLinkedNb = tracaMain.areas[fonctionArea.id].equips[fonctionEquip.id].fonctionLinkedNb + 1
                }
                else {
                    tracaMain.fonctionNotLinkedNb = tracaMain.fonctionNotLinkedNb + 1
                    tracaMain.areas[fonctionArea.id].fonctionNotLinkedNb = tracaMain.areas[fonctionArea.id].fonctionNotLinkedNb + 1
                    tracaMain.areas[fonctionArea.id].equips[fonctionEquip.id].fonctionNotLinkedNb = tracaMain.areas[fonctionArea.id].equips[fonctionEquip.id].fonctionNotLinkedNb + 1
                    tracaMain.fonctionNotLinked.push(
                        {
                            area: tracaMain.areas[fonctionArea.id].name,
                            id: fonctionData.fonctionId,
                            name: fonctionData.fonctionName,
                            haveToBeCheckActif: fonction.haveToBeCheckActif,
                            maxLosse: fonction.dataValues.maxLosse,
                            lastLosses: lastLosses,
                            lastAnnualLossesPrice: lastAnnualLossesPrice,
                            recoveryAnnualPrice: fonctionData.fonctionRecoveryAnnualPrice
                        }
                    )
                    tracaMain.areas[fonctionArea.id].fonctionNotLinked.push(
                        {
                            area: tracaMain.areas[fonctionArea.id].name,
                            id: fonctionData.fonctionId,
                            name: fonctionData.fonctionName,
                            haveToBeCheckActif: fonction.haveToBeCheckActif,
                            maxLosse: fonction.dataValues.maxLosse,
                            lastLosses: lastLosses,
                            lastAnnualLossesPrice: lastAnnualLossesPrice,
                            recoveryAnnualPrice: fonctionData.fonctionRecoveryAnnualPrice
                        }
                    )
                }
            }
            catch(err) {
                console.log("Erreur")
                alert(err); // TypeError: failed to fetch
            }
        }
        //Get informations from projects list
        for (let index = 0; index < projectList.length; index++) {
            const project = projectList[index].dataValues
            const projectArea = {
                id: project.area.dataValues.id,
                name: project.area.dataValues.name1,
            }

            const { projectFunctionLinkedFirstAnnualLosses, projectFunctionLinkedFirstAnnualPrice } = calculation.GetprojectFunctionLinkedFirstAnnualLossesAndPrice( project.fonctionsLinked )
            const { projectFunctionLinkedCurrentAnnualLosses, projectFunctionLinkedCurrentAnnualPrice } = calculation.GetprojectFunctionLinkedCurrentAnnualLossesAndPrice( project.fonctionsLinked )
            const { projectFunctionLinkedRecoveryAnnualLosses, projectFunctionLinkedRecoveryAnnualPrice } = calculation.GetprojectFunctionLinkedRecoveryAnnualLossesAndPrice( project.fonctionsLinked )
            const projectData = {
                id : project.id,
                name : project.name,
                projectTypeValue : project.projectType.value,
                projectStatusValue : project.projectStatus.value,

                projectDifficulty : project.difficulty,
                projectPriority : project.priority,

                projectFunctionLinkedNb: calculation.GetprojectFunctionLinkedNb( project.fonctionsLinked ),

                //projectFunctionLinkedFirstAnnualLosses: parseFloat(filterFloat(projectFunctionLinkedFirstAnnualLosses)),
                projectFunctionLinkedFirstAnnualLosses: projectFunctionLinkedFirstAnnualLosses,
                projectFunctionLinkedFirstAnnualPrice: projectFunctionLinkedFirstAnnualPrice,
                projectFunctionLinkedCurrentAnnualLosses: projectFunctionLinkedCurrentAnnualLosses,
                projectFunctionLinkedCurrentAnnualPrice: projectFunctionLinkedCurrentAnnualPrice,
                projectFunctionLinkedRecoveryAnnualLosses: projectFunctionLinkedRecoveryAnnualLosses,
                projectFunctionLinkedRecoveryAnnualPrice: projectFunctionLinkedRecoveryAnnualPrice,

            }

            let newTracaArea = {
                id: projectArea.id,
                name: projectArea.name,

                fonctionFirstAnnualLosses: 0,
                fonctionFirstAnnualPrice: 0,
                fonctionCurrentAnnualLosses: 0,
                fonctionCurrentAnnualPrice: 0,
                fonctionProjectRecoveryRequestAnnualLosses: 0,
                fonctionProjectRecoveryRequestAnnualPrice: 0,
                fonctionNb: 0,

                fonctionAlarmNb: 0,
                fonctionAlarm: [],
                fonctionToCheckNb: 0,
                fonctionToCheck: [],
                fonctionNeverDoneNb: 0,
                fonctionNeverDone: [],
                fonctionLinkedNb: 0,
                fonctionNotLinkedNb: 0,
                fonctionNotLinked: [],

                projectStandByNb: 0,
                projectRunningNb: 0,
                projectFinishedNb: 0,
                projectStandBy: {},
                projectRunning: {},
                projectFinished: {},

                projectChangeParametersNb: 0,
                projectSmallProgNb: 0,
                projectMediumProgNb: 0,
                projectBigProgNb: 0,
                projectSmallProjectNb: 0,
                projectMediumProjectNb: 0,
                projectBigProjectNb: 0,
                projectChangeParameters: {},
                projectSmallProg: {},
                projectMediumProg: {},
                projectBigProg: {},
                projectSmallProject: {},
                projectMediumProject: {},
                projectBigProject: {},

                equipNumber: 0,
                equips: {}

            }
            //Creation Area si necessaire
            if ( !tracaMain.areas.hasOwnProperty(projectArea.id) ) {
                const NbAreasCreated = Object.values(tracaMain.areas).length
                newTracaArea.index = NbAreasCreated
                Object.assign( tracaMain.areas, { [fonctionArea.id] : newTracaArea });
                //tracaMain.areas.push( newTracaArea );
            }

            try {
                if ( (projectData.projectStatusValue === 1) || (projectData.projectStatusValue === 10) || (projectData.projectStatusValue === 20) || (projectData.projectStatusValue === 80)) {
                    //Project Status  *******
                    if (projectData.projectStatusValue === 1) {
                        tracaMain.projectStandByNb = tracaMain.projectStandByNb + 1
                        tracaMain.areas[projectArea.id].projectStandByNb = tracaMain.areas[projectArea.id].projectStandByNb + 1
                        Object.assign( tracaMain.projectStandBy, { [projectData.id] : projectData });
                        Object.assign( tracaMain.areas[projectArea.id].projectStandBy, { [projectData.id] : projectData });
                    }
                    if ((projectData.projectStatusValue === 10) || (projectData.projectStatusValue === 20)) {
                        tracaMain.projectRunningNb = tracaMain.projectRunningNb + 1
                        tracaMain.areas[projectArea.id].projectRunningNb = tracaMain.areas[projectArea.id].projectRunningNb + 1
                        Object.assign( tracaMain.projectRunning, { [projectData.id] : projectData });
                        Object.assign( tracaMain.areas[projectArea.id].projectRunning, { [projectData.id] : projectData });
                    }
                    if (projectData.projectStatusValue === 80) {
                        tracaMain.projectFinishedNb = tracaMain.projectFinishedNb + 1
                        tracaMain.areas[projectArea.id].projectFinishedNb = tracaMain.areas[projectArea.id].projectFinishedNb + 1
                        Object.assign( tracaMain.projectFinished, { [projectData.id] : projectData });
                        Object.assign( tracaMain.areas[projectArea.id].projectFinished, { [projectData.id] : projectData });
                    }


                    //Project Type  *******
                    if (projectData.projectTypeValue === 1) {
                        tracaMain.projectChangeParametersNb = tracaMain.projectChangeParametersNb + 1
                        tracaMain.areas[projectArea.id].projectChangeParametersNb = tracaMain.areas[projectArea.id].projectChangeParametersNb + 1
                        Object.assign( tracaMain.projectChangeParameters, { [projectData.id] : projectData });
                        Object.assign( tracaMain.areas[projectArea.id].projectChangeParameters, { [projectData.id] : projectData });
                    }
                    if (projectData.projectTypeValue === 2) {
                        tracaMain.projectSmallProgNb = tracaMain.projectSmallProgNb + 1
                        tracaMain.areas[projectArea.id].projectSmallProgNb = tracaMain.areas[projectArea.id].projectSmallProgNb + 1
                        Object.assign( tracaMain.projectSmallProg, { [projectData.id] : projectData });
                        Object.assign( tracaMain.areas[projectArea.id].projectSmallProg, { [projectData.id] : projectData });
                    }
                    if (projectData.projectTypeValue === 3) {
                        tracaMain.projectMediumProgNb = tracaMain.projectMediumProgNb + 1
                        tracaMain.areas[projectArea.id].projectMediumProgNb = tracaMain.areas[projectArea.id].projectMediumProgNb + 1
                        Object.assign( tracaMain.projectMediumProg, { [projectData.id] : projectData });
                        Object.assign( tracaMain.areas[projectArea.id].projectMediumProg, { [projectData.id] : projectData });
                    }
                    if (projectData.projectTypeValue === 4) {
                        tracaMain.projectBigProgNb = tracaMain.projectBigProgNb + 1
                        tracaMain.areas[projectArea.id].projectBigProgNb = tracaMain.areas[projectArea.id].projectBigProgNb + 1
                        Object.assign( tracaMain.projectBigProg, { [projectData.id] : projectData });
                        Object.assign( tracaMain.areas[projectArea.id].projectBigProg, { [projectData.id] : projectData });
                    }
                    if (projectData.projectTypeValue === 5) {
                        tracaMain.projectSmallProjectNb = tracaMain.projectSmallProjectNb + 1
                        tracaMain.areas[projectArea.id].projectSmallProjectNb = tracaMain.areas[projectArea.id].projectSmallProjectNb + 1
                        Object.assign( tracaMain.projectSmallProject, { [projectData.id] : projectData });
                        Object.assign( tracaMain.areas[projectArea.id].projectSmallProject, { [projectData.id] : projectData });
                    }
                    if (projectData.projectTypeValue === 6) {
                        tracaMain.projectMediumProjectNb = tracaMain.projectMediumProjectNb + 1
                        tracaMain.areas[projectArea.id].projectMediumProjectNb = tracaMain.areas[projectArea.id].projectMediumProjectNb + 1
                        Object.assign( tracaMain.projectMediumProject, { [projectData.id] : projectData });
                        Object.assign( tracaMain.areas[projectArea.id].projectMediumProject, { [projectData.id] : projectData });
                    }
                    if (projectData.projectTypeValue === 7) {
                        tracaMain.projectBigProjectNb = tracaMain.projectBigProjectNb + 1
                        tracaMain.areas[projectArea.id].projectBigProjectNb = tracaMain.areas[projectArea.id].projectBigProjectNb + 1
                        Object.assign( tracaMain.projectBigProject, { [projectData.id] : projectData });
                        Object.assign( tracaMain.areas[projectArea.id].projectBigProject, { [projectData.id] : projectData });
                    }
                }
            }
            catch(err) {
                console.log("Erreur")
                alert(err); // TypeError: failed to fetch
            }
            console.log("TOTO")
        }
        return tracaMain
    }
}
