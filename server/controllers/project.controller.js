// Imports
const models = require('../models');
const Op = models.Sequelize.Op;
const addChamps = require("../utils/addChamps");
const WorkOnTables = require("../utils/WorkOnTables");



module.exports = {
    getAllProjects: async function(req, res) {
        const whereAll = WorkOnTables.getProjectfindAndCountAllFilterMain ( req.query )
        const { offset, limit } = WorkOnTables.getGeneriquefindAndCountAllOffsetLimit ( req.query )
        const includesAll = WorkOnTables.getProjectfindAndCountAllFilterIncludes ( req.query )
        const order = WorkOnTables.getProjectfindAndCountAllFilterOrder()


        models.project.findAndCountAll( {
            order: order,
            where: whereAll,
            offset: offset,
            limit: limit,
            include: includesAll
        })
        .then(data => {
             //outlet = addChamps.calculPayback(data)
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
        const datas = await WorkOnTables.ProjectsUpdate( modifs )
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

        const max = await models.project.max('position')
        let nextValue = 0
        if (isNaN(max)) { nextValue = 1 } else { nextValue = max + 1 }
        const exist = await models.project.findAll( { where: { id: modif.id } })
        let createUpdated = {}
        let newId = 0
        if ( exist.length === 0 ) {
            modif.position = nextValue
            createUpdated = await models.project.create( modif )
            newId = createUpdated.id
        } else {
            createUpdated = await models.project.update( modif, { where: { id: id } } )
            newId = id
        }
        var whereFactory = []
        models.project.findAndCountAll( {
            where: { id:  newId },
            include: [
                { model: models.projectAction, distinct: true, foreignKey: 'idProject', as: 'projectAction' },
                { model: models.fonction, distinct: true, foreignKey: 'idProjectLink', as: 'fonctionsLinked' },
                { model: models.projectType, foreignKey: 'idType', as: 'projectType'},
                { model: models.projectStatus, foreignKey: 'idType', as: 'projectStatus'},
                { model: models.area,
                    as: 'area',
                    where: whereFactory,
                    include: [{
                        model: models.factory,
                        as: 'factory'
                    }] }
            ]
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
    },
}
