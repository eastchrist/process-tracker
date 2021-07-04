// Imports
const models = require('../models');
const Op = models.Sequelize.Op;

var FunctionUpdateMeasures = async function ( modifs ) {
    for ( var modif of modifs) {
        const max = await models.measure.max('position')
        let nextValue = 0
        if (isNaN(max)) { nextValue = 1 } else { nextValue = max + 1 }
        const exist = await models.measure.findAll( { where: { idFonction: modif.idFonction } })
        if ( exist.length === 0 ) {
            modif.position = nextValue
            const measure = await models.measure.findOrCreate(
                {
                    defaults: {
                        position: modif.position,
                        idType: modif.idType,
                        comment: modif.comment,
                        losses: modif.losses,
                        ts: modif.ts,

                        measure1: modif.measure1,
                        measure2: modif.measure2,
                        measure3: modif.measure3,
                        ts1: modif.ts1,
                        ts2: modif.ts2,
                        ts3: modif.ts3,

                        idTankSource: modif.idTankSource,
                        idTankDest: modif.idTankDest,

                        idProduct: modif.idProduct,
                        idFonction: modif.idFonction
                    },
                    where: {
                        id: modif.id,
                    }
                })
        } else {
            if ( modif.position === 999999 ) { modif.position = exist[0].position }
            const measure = await models.measure.update( modif, { where: { id: modif.id } } )
        }
    }
}

module.exports = {
    getAllMeasures: async function(req, res) {
        //name don t exist
        //let name = req.query.name
        let factory = req.query.idFactory
        let page = req.query.page
        let limit = req.query.limit
        const offset = ( page - 1) * limit;
        limit = limit * 1;

        var whereAll = [  ]
        var whereFactory = { idFactory: { [Op.like]: `%${factory}%` }}
        //var whereMeasure = { name: { [Op.like]: `%${name}%` } }
        if (factory) { whereAll.push(whereFactory)}
        //if (name) { whereAll.push(whereMeasure)}

        models.measure.findAndCountAll( {
            order: [['position', 'ASC' ]],
            where: whereAll,
            offset: offset,
            limit: limit
        })
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
    updateMeasures: async function (req, res) {
        const modifs = req.body
        const datas = await FunctionUpdateMeasures( modifs )
        models.measure.findAndCountAll()
        .then(data => {
            const Resdata = {
               code: 20000,
               data: data,
            }
            console.log(Resdata)
            res.status(200).json(Resdata);
        })

    },

    addMeasure: async function (req, res) {
        const modif = req.body
        const max = await models.measure.max('position')
        let nextValue = 0
        if (isNaN(max)) { nextValue = 1 } else { nextValue = max + 1 }
        modif.position = nextValue
        const added = await models.measure.findOrCreate(
            {
                defaults: {
                    position: modif.position,
                    idType: modif.idType,
                    comment: modif.comment,
                    losses: modif.losses,
                    ts: modif.ts,

                    measure1: modif.measure1,
                    measure2: modif.measure2,
                    measure3: modif.measure3,
                    ts1: modif.ts1,
                    ts2: modif.ts2,
                    ts3: modif.ts3,

                    idTankSource: modif.idTankSource,
                    idTankDest: modif.idTankDest,

                    idProduct: modif.idProduct,
                    idFonction: modif.idFonction
                },
                where: { position: modif.position, idFonction: modif.idFonction }
            })
        const find = await models.measure.findAll( { where: { id: added[0].id } })
            .then(find => {
                const Resdata = {
                    code: 20000,
                    data: find,
                }
                res.status(200).json(Resdata);
            })
    },
    deleteMeasure: async function(req, res) {
        const {id} = req.params
        models.measure.destroy( { where: { id: id } } )
        .then(data => {
            const Resdata = {
                code: 20000,
                data: data,
            }
            res.status(200).json(Resdata);
        })
    }
}
