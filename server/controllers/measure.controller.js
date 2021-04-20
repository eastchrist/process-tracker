// Imports
const models = require('../models');
const Op = models.Sequelize.Op;

var FunctionUpdateMeasures = async function ( modifs ) {
    for ( var modif of modifs) {
        const max = await models.measure.max('position')
        let nextValue = 0
        if (isNaN(max)) { nextValue = 1 } else { nextValue = max + 1 }
        const exist = await models.measure.findAll( { where: { idNode: modif.idNode } })
        if ( exist.length === 0 ) {
            modif.position = nextValue
            const measure = await models.measure.findOrCreate(
                {
                    defaults: {
                        name: modif.name,
                        position: modif.position,
                        type: modif.type,
                        comment: modif.comment,
                        losses: modif.losses,
                        ts: modif.ts,

                        measure1: modif.measure1,
                        measure2: modif.measure2,
                        measure3: modif.measure3,
                        ts1: modif.ts1,
                        ts2: modif.ts2,
                        ts3: modif.ts3,

                        idProduct: modif.idProduct,
                        idFonction: modif.idFonction,
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
    console.log("TOTO")

}

module.exports = {
    getAllMeasures: async function(req, res) {
        let name = req.query.name
        let factory = req.query.idFactory
        let page = req.query.page
        let limit = req.query.limit
        const offset = ( page - 1) * limit;
        limit = limit * 1;

        var whereAll = [  ]
        var whereFactory = { idFactory: { [Op.like]: `%${factory}%` }}
        var whereMeasure = { name: { [Op.like]: `%${name}%` } }
        if (factory) { whereAll.push(whereFactory)}
        if (name) { whereAll.push(whereMeasure)}

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
            console.log("End findAndCountAll")
            const Resdata = {
               code: 20000,
               data: data,
            }
            console.log(Resdata)
            res.status(200).json(Resdata);
        })

    },
    updateMeasure: async function (req, res) {
        const {id} = req.params
        const modif = req.body
        models.measure.upsert( modif )
        .then(data => {
            const Resdata = {
                code: 20000,
                data: data,
            }
            res.status(200).json(Resdata);
        })

    },
    deleteMeasure: async function(req, res) {
        const {id} = req.params
        models.measure.destroy( { where: {id: id} } )
        .then(data => {
            const Resdata = {
                code: 20000,
                data: data,
            }
            res.status(200).json(Resdata);
        })
    }
}
