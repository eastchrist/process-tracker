// Imports
const models = require('../models');
const Op = models.Sequelize.Op;

const checkNull = require("../utils/checkNull");

var FunctionUpdateFonctions = async function ( modifs ) {
    for ( var modif of modifs) {
        const max = await models.fonction.max('position')
        let nextValue = 0
        if (isNaN(max)) { nextValue = 1 } else { nextValue = max + 1 }
        const exist = await models.fonction.findAll( { where: { id: modif.id } })
        if ( exist.length === 0 ) {
            modif.position = nextValue
            const fonction = await models.fonction.findOrCreate(
                {
                    defaults: {
                        name: modif.name,
                        position: modif.position,
                        idType: modif.idType,
                        idAreaSource: modif.idAreaSource,
                        idAreaDest: modif.idAreaDest,
                        freqCheck: modif.freqCheck,
                        freqDelay: modif.freqDelay,
                        maxLosse: modif.maxLosse,
                        haveToBeCheck: modif.haveToBeCheck,
                        haveBeenCheck: modif.haveBeenCheck,
                        modeAutoCheckActif: modif.modeAutoCheckActif,
                        picture1: modif.picture1,
                        picture2: modif.picture2,
                        idProjectLink: modif.idProjectLink,
                        projectPosition: modif.projectPosition,
                        projectPercentRecovery: modif.projectPercentRecovery,
                        idFactory: modif.idFactory,
                        idArea: modif.idArea,
                        idPlc: modif.idPlc,
                        idEquip: modif.idEquip,
                        idEquipIndex: modif.idEquipIndex,
                    },
                    where: {
                        idPlc: modif.idPlc,
                        idEquip: modif.idEquip,
                        idEquipIndex: modif.idEquipIndex,
                    }
                })
        } else {
            if ( modif.position === 999999 ) { modif.position = exist[0].position }
            const fonction = await models.fonction.update( modif, { where: { id: modif.id } } )
        }
    }
}

module.exports = {
    getAllFonctions: async function(req, res) {
        let name = req.query.name
        let factory = req.query.idFactory
        let area = req.query.idArea
        let plc = req.query.idPlc
        let equip = req.query.idEquip
        let type = req.query.idType

        let page = req.query.page
        let limit = req.query.limit
        const offset = ( page - 1) * limit;
        limit = limit * 1;

        var whereAll = [  ]
        var whereFactory = { idFactory: { [Op.like]: `%${factory}%` }}
        var whereArea = { idArea: { [Op.like]: `%${area}%` }}
        var wherePlc = { idPlc: { [Op.like]: `%${plc}%` }}
        var whereEquip = { idEquip: { [Op.like]: `%${equip}%` }}
        var whereType = { idType: { [Op.like]: `%${type}%` }}

        var whereFonction = { name: { [Op.like]: `%${name}%` } }
        if (factory) { whereAll.push(whereFactory)}
        if (area) { whereAll.push(whereArea)}
        if (plc) { whereAll.push(wherePlc)}
        if (equip) { whereAll.push(whereEquip)}
        if (type) { whereAll.push(whereType)}
        if (name) { whereAll.push(whereFonction)}

        models.fonction.findAndCountAll( {
            order: [['position', 'ASC' ]],
            where: whereAll,
            offset: offset,
            limit: limit,
            include: [
                { model: models.measureType, as: 'measureType'},
                { model: models.plc, as: 'plc'},
                { model: models.equip, as: 'equip'},
                { model: models.tankAreaDefEmptying, as: 'tankAreaDefEmptying'},
                { model: models.tankAreaDefFilling, as: 'tankAreaDefFilling'}]
        })
        .then(data => {
            let outlet = checkNull.measureType(data)
            outlet = checkNull.plc(outlet)
            outlet = checkNull.equip(outlet)
            outlet = checkNull.tankAreaDefEmptying(outlet)
            outlet = checkNull.tankAreaDefFilling(outlet)
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
        const datas = await FunctionUpdateFonctions( modifs )
        models.fonction.findAndCountAll()
        .then(data => {
            console.log("End findAndCountAll")
            const Resdata = {
               code: 20000,
               data: data,
            }
            console.log(Resdata)
            res.status(200).json(Resdata);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
    },
    updateFonction: async function (req, res) {
        const {id} = req.params
        const modif = req.body
        models.fonction.upsert( modif )
        .then(data => {
            const Resdata = {
                code: 20000,
                data: data,
            }
            res.status(200).json(Resdata);
        })

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
    }
}
