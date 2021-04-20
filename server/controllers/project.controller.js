// Imports
const models = require('../models');
const Op = models.Sequelize.Op;

var FunctionUpdateProjects = async function ( modifs ) {
    for ( var modif of modifs) {
        const max = await models.project.max('position')
        let nextValue = 0
        if (isNaN(max)) { nextValue = 1 } else { nextValue = max + 1 }
        const exist = await models.project.findAll( { where: { idNode: modif.idNode } })
        if ( exist.length === 0 ) {
            modif.position = nextValue
            const project = await models.project.findOrCreate(
                {
                    defaults: {
                        name: modif.name,
                        position: modif.position,
                        type: modif.type,
                        comment: modif.comment,
                        idOwner: modif.idOwner,
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
}

module.exports = {
    getAllProjects: async function(req, res) {
        let name = req.query.name
        let factory = req.query.idFactory
        let page = req.query.page
        let limit = req.query.limit
        const offset = ( page - 1) * limit;
        limit = limit * 1;

        var whereAll = [  ]
        var whereFactory = { idFactory: { [Op.like]: `%${factory}%` }}
        var whereProject = { name: { [Op.like]: `%${name}%` } }
        if (factory) { whereAll.push(whereFactory)}
        if (name) { whereAll.push(whereProject)}

        models.project.findAndCountAll( {
            order: [['position', 'ASC' ]],
            where: whereAll,
            offset: offset,
            limit: limit,
            include: [{ model: models.area, as: 'area' }]
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
    updateProjects: async function (req, res) {
        const modifs = req.body
        const datas = await FunctionUpdateProjects( modifs )
        models.project.findAndCountAll()
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
    updateProject: async function (req, res) {
        const {id} = req.params
        const modif = req.body
        models.project.upsert( modif )
        .then(data => {
            const Resdata = {
                code: 20000,
                data: data,
            }
            res.status(200).json(Resdata);
        })

    },
    deleteProject: async function(req, res) {
        const {id} = req.params
        models.project.destroy( { where: {id: id} } )
        .then(data => {
            const Resdata = {
                code: 20000,
                data: data,
            }
            res.status(200).json(Resdata);
        })
    }
}
