// Imports
const models = require('../models');
const Op = models.Sequelize.Op;

const checkNull = require("../utils/checkNull");

var FunctionUpdateProducts = async function ( modifs ) {
    for ( var modif of modifs) {
        const max = await models.product.max('position')
        let nextValue = 0
        if (isNaN(max)) { nextValue = 1 } else { nextValue = max + 1 }
        const exist = await models.product.findAll( { where: { id: modif.id } })
        if ( exist.length === 0 ) {
            modif.position = nextValue
            const product = await models.product.findOrCreate(
                {
                    defaults: {
                        name: modif.name,
                        position: modif.position,
                        totalSolid: modif.totalSolid,
                        price: modif.price,
                        idFactory: modif.idFactory,
                    },
                    where: {
                        id: modif.id,
                    }
                }
            )
        } else {
            if ( modif.position === 999999 ) { modif.position = exist[0].position }
            const product = await models.product.update( modif, { where: { id: modif.id } } )
        }
    }
    console.log("TOTO")

}

module.exports = {
    getAllProducts: async function(req, res) {
        let name = req.query.name
        let factory = req.query.idFactory
        let page = req.query.page
        let limit = req.query.limit
        const offset = ( page - 1) * limit;
        limit = limit * 1;

        var whereAll = [  ]
        var whereFactory = { idFactory: { [Op.like]: `%${factory}%` }}
        var whereProduct = { name: { [Op.like]: `%${name}%` } }
        if (factory) { whereAll.push(whereFactory)}
        if (name) { whereAll.push(whereProduct)}

        models.product.findAndCountAll( {
            order: [['position', 'ASC' ]],
            where: whereAll,
            offset: offset,
            limit: limit,
            include: [{ model: models.factory, as: 'factory' }]
        })
        .then(data => {
            const outlet = checkNull.factory(data)
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
    updateProducts: async function (req, res) {
        const modifs = req.body
        const datas = await FunctionUpdateProducts( modifs )
        models.product.findAndCountAll()
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

    updateProduct: async function (req, res) {
        const {id} = req.params
        const modif = req.body
        const updated = await models.product.update( modif, { where: { id: id } } )
        const find = await models.product.findAll( {where: { id: id }, include: [{ model: models.factory, as: 'factory' }] })
        .then(find => {
            const Resdata = {
                code: 20000,
                data: find,
            }
            res.status(200).json(Resdata);
        })

    },
    addProduct: async function (req, res) {
        const modif = req.body
        const added = await models.product.upsert( modif )
        const find = await models.product.findAll( {where: { id: added[0].id }, include: [{ model: models.factory, as: 'factory' }] })
        .then(find => {
            const Resdata = {
                code: 20000,
                data: find,
            }
            res.status(200).json(Resdata);
        })
    },
    deleteProduct: async function(req, res) {
        const {id} = req.params
        models.product.destroy( { where: {id: id} } )
        .then(data => {
            const Resdata = {
                code: 20000,
                data: data,
            }
            res.status(200).json(Resdata);
        })
    }
}
