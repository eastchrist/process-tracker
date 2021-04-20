// Imports
const models = require('../models');
const Op = models.Sequelize.Op;

var FunctionUpdateFactorys = async function ( modifs ) {
    for ( var modif of modifs) {
        const max = await models.factory.max('position')
        let nextValue = 0
        if (isNaN(max)) { nextValue = 1 } else { nextValue = max + 1 }
        const exist = await models.factory.findAll( { where: { idNode: modif.idNode } })
        if ( exist.length === 0 ) {
            modif.position = nextValue
            const Factory = await models.factory.findOrCreate(
                {  defaults: {
                        id: modif.id,
                        idNode: modif.idNode,
                        position: modif.position,
                        name: modif.name,
                        name1: modif.name1,
                        langue: modif.langue,
                        address: modif.address,
                        currency: modif.currency,
                        currencyEuro: modif.currencyEuro,
                        isCartography: modif.isCartography,
                        isOptimisation: modif.isOptimisation,
                        isTraceability: modif.isTraceability,
                    },
                           where: {
                        idNode: modif.idNode
                    }
                         }
            )
        } else {
            if ( modif.position === 999999 ) { modif.position = exist[0].position }
            const Factory = await models.factory.update( modif, { where: { id: modif.id } } )
        }
    }
}

module.exports = {
    getAllFactorys: async function(req, res) {
        let name = req.query.name
        let page = req.query.page
        let limit = req.query.limit
        const offset = ( page - 1) * limit;
        limit = limit * 1;

        var whereAll = [  ]
        var whereFactory = { name: { [Op.like]: `%${name}%` } }
        if (name) { whereAll.push(whereFactory)}

        models.factory.findAndCountAll( {
            order: [['position', 'ASC' ]],
            where: whereAll,
            offset: offset,
            limit: limit,
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
    updateFactorys: async function (req, res) {
        console.log("Begin updateFactorys")
        const modifs = req.body
        const datas = await FunctionUpdateFactorys( modifs )
        console.log("End updateFactorys")
        console.log("Begin findAndCountAll")
        models.factory.findAndCountAll()
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
    updateFactory: async function (req, res) {
        const { id } = req.params
        const modif = req.body
        const updated = await models.factory.update( modif, { where: { id: id } } )
        const find = await models.factory.findAll( {where: { id: id } })
        .then(find => {
            const Resdata = {
                code: 20000,
                data: find,
            }
            res.status(200).json(Resdata);
        })

    },
    deleteFactory: async function(req, res) {
        const {id} = req.params
        models.factory.destroy( { where: {id: id} } )
        .then(data => {
            const Resdata = {
                code: 20000,
                data: data,
            }
            res.status(200).json(Resdata);
        })
    }
}
