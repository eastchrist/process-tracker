const WorkOnTables = require("../utils/WorkOnTables");
const models = require('../models');

module.exports = {
    getAllTraceabilitys: async function(req, res) {
        const whereFonctionAll = WorkOnTables.getFonctionfindAndCountAllFilterMain ( req.query )
        const includesFonctionAll = WorkOnTables.getFonctionfindAndCountAllFilterIncludes ( req.query )
        const orderFonction = WorkOnTables.getFonctionfindAndCountAllFilterOrder()

        const whereProjectAll = WorkOnTables.getProjectfindAndCountAllFilterMain ( req.query )
        const includesProjectAll = WorkOnTables.getProjectfindAndCountAllFilterIncludes ( req.query )
        const orderProject = WorkOnTables.getProjectfindAndCountAllFilterOrder()

        try {
            const fonctionList = await models.fonction.findAndCountAll( { order: orderFonction, distinct: true, where: whereFonctionAll, include: includesFonctionAll })
            const projectList = await models.project.findAndCountAll( { order: orderProject, distinct: true, where: whereProjectAll, include: includesProjectAll })
            const traca = WorkOnTables.getFullTraca(fonctionList.rows,projectList.rows)
            const Resdata = {
                code: 20000,
                data: traca,
            }
            res.status(200).json(Resdata);
        } catch(err) {
            alert(err); // TypeError: failed to fetch
        }


        //.catch(err => {
        //      res.status(500).send({
        //            message:
        //                err.message || "Some error occurred while retrieving tutorials."
        //        });
        //});
    }
}
