// Imports
const models = require('../models');
const Op = models.Sequelize.Op;

var FunctionUpdateServers = async function ( modifs ) {
    for ( var modif of modifs) {
        const max = await models.server.max('position')
        let nextValue = 0
        if (isNaN(max)) { nextValue = 1 } else { nextValue = max + 1 }
        const exist = await models.server.findAll( { where: { idNode: modif.idNode } })
        if ( exist.length === 0 ) {
            modif.position = nextValue
            const server = await models.server.findOrCreate(
                {
                    defaults: {
                        id: modif.id,
                        idNode: modif.idNode,
                        position: modif.position,
                        name: modif.name,
                        serverType: modif.serverType,
                    },
                    where: {
                        id: modif.id
                    }
                })
        } else {
            if ( modif.position === 999999 ) { modif.position = exist[0].position }
            const server = await models.server.update( modif, { where: { id: modif.id } } )
        }
    }
}

module.exports = {
    getAllServers: async function(req, res) {
        let name = req.query.name
        //let area = req.query.idArea
        let page = req.query.page
        let limit = req.query.limit
        const offset = ( page - 1) * limit;
        limit = limit * 1;

        var whereAll = [  ]
        //var whereArea = { idArea: { [Op.like]: `%${area}%` }}
        var whereServer = { name: { [Op.like]: `%${name}%` } }
        //if (area) { whereAll.push(whereFactory)}
        if (name) { whereAll.push(whereServer)}

        models.server.findAndCountAll( {
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
    updateServers: async function (req, res) {
        const modifs = req.body
        const datas = await FunctionUpdateServers( modifs )
        models.server.findAndCountAll()
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
    updateServer: async function (req, res) {
        const {id} = req.params
        const modif = req.body
        models.server.upsert( modif )
        .then(data => {
            const Resdata = {
                code: 20000,
                data: data,
            }
            res.status(200).json(Resdata);
        })

    },
    deleteServer: async function(req, res) {
        const {id} = req.params
        models.server.destroy( { where: {id: id} } )
        .then(data => {
            const Resdata = {
                code: 20000,
                data: data,
            }
            res.status(200).json(Resdata);
        })
    }
}
