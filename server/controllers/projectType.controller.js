// Imports
const models = require('../models');
const Op = models.Sequelize.Op;

var FunctionUpdateProjectTypes = async function ( modifs ) {
    for ( var modif of modifs) {
        const max = await models.projectType.max('position')
        let nextValue = 0
        if (isNaN(max)) { nextValue = 1 } else { nextValue = max + 1 }
        const exist = await models.projectType.findAll( { where: { id: modif.id } })
        if ( exist.length === 0 ) {
            modif.position = nextValue
            const projectType = await models.projectType.findOrCreate(
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
            const projectType = await models.projectType.update(
                {
                    position: modif.position,
                    name: modif.name,
                    value: modif.value
                },
                { where: { id: modif.id } } )
        }
    }
}

module.exports = {
    getAllProjectTypes: async function(req, res) {
        let name = req.query.name
        let factory = req.query.idFactory
        let page = req.query.page
        let limit = req.query.limit

        const offset = ( page - 1) * limit;
        limit = limit * 1;

        var whereAll = [  ]
        var whereFactory = { idFactory: { [Op.like]: `%${factory}%` }}
        var whereProjectType = { name: { [Op.like]: `%${name}%` } }
        if (factory) { whereAll.push(whereFactory)}
        if (name) { whereAll.push(whereProjectType)}

        models.projectType.findAndCountAll( {
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
    updateProjectTypes: async function (req, res) {
        const modifs = req.body
        const datas = await FunctionUpdateProjectTypes( modifs )
        models.projectType.findAndCountAll()
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
    updateProjectType: async function (req, res) {
        const {id} = req.params
        const modif = req.body
        models.projectType.upsert( modif )
        .then(data => {
            const Resdata = {
                code: 20000,
                data: data,
            }
            res.status(200).json(Resdata);
        })

    },
    deleteProjectType: async function(req, res) {
        const {id} = req.params
        models.projectType.destroy( { where: {id: id} } )
        .then(data => {
            const Resdata = {
                code: 20000,
                data: data,
            }
            res.status(200).json(Resdata);
        })
    }
}
