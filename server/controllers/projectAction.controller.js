// Imports
const models = require('../models');
const Op = models.Sequelize.Op;
const WorkOnTables = require("../utils/WorkOnTables");

var FunctionUpdateProjectActions = async function ( modifs ) {
    for ( var modif of modifs) {
        const projectAction = await models.projectAction.findOrCreate(
    {
                defaults: {
                    position: modif.position,
                    comment: modif.comment,
                    creationDate: modif.creationDate,
                    dueDate: modif.dueDate,
                    status: modif.status,
                    idProject: modif.idProject
        },
                where: {
                    id: modif.id
                }

            }
        )
    }
    console.log("TOTO")

}

module.exports = {
    getAllProjectActions: async function(req, res) {
        let name = req.query.name
        let factory = req.query.idFactory
        let page = req.query.page
        let limit = req.query.limit

        const offset = ( page - 1) * limit;
        limit = limit * 1;

        var whereAll = [  ]
        var whereFactory = { idFactory: { [Op.like]: `%${factory}%` }}
        var whereProjectAction = { name: { [Op.like]: `%${name}%` } }
        if (factory) { whereAll.push(whereFactory)}
        if (name) { whereAll.push(whereProjectAction)}

        models.projectAction.findAndCountAll( {
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
    updateProjectActions: async function (req, res) {
        const modifs = req.body
        const datas = await FunctionUpdateProjectActions( modifs )
        models.projectAction.findAndCountAll()
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
    addProjectAction: async function (req, res) {
        const modif = req.body
        const max = await models.projectAction.max('position')
        let nextValue = 0
        if (isNaN(max)) { nextValue = 1 } else { nextValue = max + 1 }
        modif.position = nextValue
        const added = await models.projectAction.findOrCreate(
            {
                defaults: {
                    comment: modif.comment,
                    position: modif.position,
                    creationDate: modif.creationDate,
                    dueDate: modif.dueDate,
                    idProject: modif.idProject
                },
                where: { position: modif.position, idProject: modif.idProject }
            })
        const find = await models.projectAction.findAll( { where: { id: added[0].id } })
            .then(find => {
                const Resdata = {
                    code: 20000,
                    data: find,
                }
                res.status(200).json(Resdata);
            })
    },
    updateProjectAction: async function (req, res) {
        const {id} = req.params
        const modif = req.body
        models.projectAction.upsert( modif )
            .then(data => {
                const Resdata = {
                    code: 20000,
                    data: data,
                }
                res.status(200).json(Resdata);
            })

    },
    deleteProjectAction: async function(req, res) {
        const {id} = req.params
        models.projectAction.destroy( { where: {id: id} } )
        .then(data => {
            const Resdata = {
                code: 20000,
                data: data,
            }
            res.status(200).json(Resdata);
        })
    },

    deleteProjectProjectActions: async function(req, res) {
        const {id} = req.params
        const data = await WorkOnTables.projectActionDeleteProjectLinked( id )
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
}
