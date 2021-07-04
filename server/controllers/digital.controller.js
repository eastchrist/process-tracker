// Imports
const models = require('../models');
const Op = models.Sequelize.Op;

var FunctionUpdateDigitals = async function ( modifs ) {
    for ( var modif of modifs) {
        const max = await models.digital.max('position')
        let nextValue = 0
        if (isNaN(max)) { nextValue = 1 } else { nextValue = max + 1 }
        const exist = await models.digital.findAll( { where: { id: modif.id } })
        if ( exist.length === 0 ) {
            modif.position = nextValue
            const digital = await models.digital.findOrCreate(
                {
                    defaults: {
                        name: modif.name,
                        name1: modif.name1,
                        tag: modif.tag,
                        address: modif.address,
                        position: modif.position,
                        idEquip: modif.idEquip,
                        idTank: modif.idTank,
                        indexCreation: modif.indexCreation,
                    },
                    where: {
                        idEquip: modif.idEquip,
                        idTank: modif.idTank,
                        indexCreation: modif.indexCreation
                    }
                })
        } else {
            if ( modif.position === 999999 ) { modif.position = exist[0].position }
            const digital = await models.digital.update( modif, { where: { id: modif.id } } )
        }
    }
    console.log("TOTO")

}

module.exports = {
    getAllDigitals: async function(req, res) {
        let name = req.query.name
        let factory = req.query.idFactory
        let page = req.query.page
        let limit = req.query.limit
        const offset = ( page - 1) * limit;
        limit = limit * 1;

        var whereAll = [  ]
        var whereFactory = { idFactory: { [Op.like]: `%${factory}%` }}
        var whereDigital = { name: { [Op.like]: `%${name}%` } }
        if (factory) { whereAll.push(whereFactory)}
        if (name) { whereAll.push(whereDigital)}

        models.digital.findAndCountAll( {
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
    updateDigitals: async function (req, res) {
        const modifs = req.body
        const datas = await FunctionUpdateDigitals( modifs )
        models.digital.findAndCountAll()
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
    updateDigital: async function (req, res) {
        const {id} = req.params
        const modif = req.body
        models.digital.upsert( modif )
        .then(data => {
            const Resdata = {
                code: 20000,
                data: data,
            }
            res.status(200).json(Resdata);
        })

    },
    deleteDigital: async function(req, res) {
        const {id} = req.params
        models.digital.destroy( { where: {id: id} } )
        .then(data => {
            const Resdata = {
                code: 20000,
                data: data,
            }
            res.status(200).json(Resdata);
        })
    }
}
