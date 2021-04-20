// Imports
const models = require('../models');
const Op = models.Sequelize.Op;

var FunctionUpdateMeasureTypes = async function ( modifs ) {
    for ( var modif of modifs) {
        const max = await models.measureType.max('position')
        let nextValue = 0
        if (isNaN(max)) { nextValue = 1 } else { nextValue = max + 1 }
        const exist = await models.measureType.findAll( { where: { id: modif.id } })
        if ( exist.length === 0 ) {
            modif.position = nextValue
            const measureType = await models.measureType.findOrCreate(
                {
                    defaults: {
                        position: modif.position,
                        name: modif.name,
                        value: modif.value
                    },
                    where: {
                        id: modif.id,
                    }

                })
        } else {
            if ( modif.position === 999999 ) { modif.position = exist[0].position }
            const measureType = await models.measureType.update(
                {
                    position: modif.position,
                    name: modif.name,
                    value: modif.value
                },
                { where: { id: modif.id } } )
        }
    }
    console.log("TOTO")

}

module.exports = {
    getAllMeasureTypes: async function(req, res) {
        let name = req.query.name
        let factory = req.query.idFactory
        let page = req.query.page
        let limit = req.query.limit

        const offset = ( page - 1) * limit;
        limit = limit * 1;

        var whereAll = [  ]
        var whereFactory = { idFactory: { [Op.like]: `%${factory}%` }}
        var whereMeasureType = { name: { [Op.like]: `%${name}%` } }
        if (factory) { whereAll.push(whereFactory)}
        if (name) { whereAll.push(whereMeasureType)}

        models.measureType.findAndCountAll( {
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
    updateMeasureTypes: async function (req, res) {
        const modifs = req.body
        const datas = await FunctionUpdateMeasureTypes( modifs )
        models.measureType.findAndCountAll()
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
    updateMeasureType: async function (req, res) {
        const {id} = req.params
        const modif = req.body
        models.measureType.upsert( modif )
        .then(data => {
            const Resdata = {
                code: 20000,
                data: data,
            }
            res.status(200).json(Resdata);
        })

    },
    deleteMeasureType: async function(req, res) {
        const {id} = req.params
        models.measureType.destroy( { where: {id: id} } )
        .then(data => {
            const Resdata = {
                code: 20000,
                data: data,
            }
            res.status(200).json(Resdata);
        })
    }
}
