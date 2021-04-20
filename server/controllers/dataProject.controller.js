// Imports
const models = require('../models');
const Op = models.Sequelize.Op;

var FunctionUpdateDataProjects = async function ( modifs ) {
    for ( var modif of modifs) {
        const dataProject = await models.dataProject.findOrCreate(
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
    getAllDataProjects: async function(req, res) {
        let name = req.query.name
        let factory = req.query.idFactory
        let page = req.query.page
        let limit = req.query.limit

        const offset = ( page - 1) * limit;
        limit = limit * 1;

        var whereAll = [  ]
        var whereFactory = { idFactory: { [Op.like]: `%${factory}%` }}
        var whereDataProject = { name: { [Op.like]: `%${name}%` } }
        if (factory) { whereAll.push(whereFactory)}
        if (name) { whereAll.push(whereDataProject)}

        models.dataProject.findAndCountAll( {
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
    updateDataProjects: async function (req, res) {
        const modifs = req.body
        const datas = await FunctionUpdateDataProjects( modifs )
        models.dataProject.findAndCountAll()
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
    updateDataProject: async function (req, res) {
        const {id} = req.params
        const modif = req.body
        models.dataProject.upsert( modif )
        .then(data => {
            const Resdata = {
                code: 20000,
                data: data,
            }
            res.status(200).json(Resdata);
        })

    },
    deleteDataProject: async function(req, res) {
        const {id} = req.params
        models.dataProject.destroy( { where: {id: id} } )
        .then(data => {
            const Resdata = {
                code: 20000,
                data: data,
            }
            res.status(200).json(Resdata);
        })
    }
}
