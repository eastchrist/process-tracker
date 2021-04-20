// Imports
const models = require('../models');
const Op = models.Sequelize.Op;
const jwt = require('jsonwebtoken');

const checkNull = require("../utils/checkNull");

var FunctionUpdateUsers = async function ( modifs ) {
    for ( var modif of modifs) {
        const max = await models.user.max('position')
        let nextValue = 0
        if (isNaN(max)) { nextValue = 1 } else { nextValue = max + 1 }
        const exist = await models.user.findAll( { where: { id: modif.id } })
        if ( exist.length === 0 ) {
            modif.position = nextValue
            const user = await models.user.findOrCreate(
                {
                    defaults: {
                        id: modif.id,
                        username: modif.username,
                        email: modif.email,
                        password: modif.password,
                        position: modif.position,
                        isAdmin: modif.isAdmin,
                        isManager: modif.isManager,
                        isOperator: modif.isOperator,
                        isVisitor: modif.isVisitor,
                        isActif: modif.isActif,
                        idFactory: modif.idFactory,
                    },
                    where: { id: modif.id }
                })
        } else {
            if ( modif.position === 999999 ) { modif.position = exist[0].position }
            const user = await models.user.update( modif, { where: { id: modif.id } } )
        }
    }
}

module.exports = {
    getAllUsers: async function(req, res) {
        let username = req.query.username
        let factory = req.query.idFactory
        let page = req.query.page
        let limit = req.query.limit

        const offset = ( page - 1) * limit;
        limit = limit * 1;

        var whereAll = [  ]
        var whereFactory = { idFactory: { [Op.like]: `%${factory}%` }}
        var whereUsername = { username: { [Op.like]: `%${username}%` } }
        if (factory) { whereAll.push(whereFactory)}
        if (username) { whereAll.push(whereUsername)}
        models.user.findAndCountAll( {
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
    updateAllUsers: async function (req, res) {
        const modifs = req.body
        const datas = await FunctionUpdateUsers( modifs )
        models.user.findAndCountAll()
        .then(data => {
             const Resdata = {
                 code: 20000,
                 data: data,
             }
             console.log(Resdata)
             res.status(200).json(Resdata);
        })
    },
    getUserByToken:async function (req, res) {
        try {
            const token = req.body.token
            let decode = jwt.verify( token, process.env.TOKEN_SECRET, { algorithms : ['HS256'] } )
            data = {
                user: {
                            username: decode.userFound.username,
                            email: decode.userFound.email,
                            idFactory: decode.userFound.idFactory,
                            accessToken: decode.userFound.accessToken,
                            roles: decode.userFound.roles,
                      }
            }
            res.status(200).json(data);
        } catch (e) {
            console.error(e.message)
            data = {
                user: {
                    username: "",
                    email: "",
                    idFactory: "",
                    accessToken: "Visitor",
                    roles: []
                    }
            }
            res.status(200).json(data);
        }
    },
    updateUser: async function (req, res) {
        const { id } = req.params
        const modif = req.body
        const updated = await models.user.update( modif, { where: { id: id } } )
        const find = await models.user.findAll( {
            where: { id: id },
            include: [{ model: models.factory, as: 'factory' }],
            attributes: { exclude: ['password'] }
        })
       .then(find => {
            const Resdata = {
               code: 20000,
               data: find,
            }
            res.status(200).json(Resdata);
       })
    },
    deleteUser: async function(req, res) {
        const {id} = req.params
        models.user.destroy( { where: {id: id} } )
       .then(data => {
           const Resdata = {
               code: 20000,
               data: data,
           }
           res.status(200).json(Resdata);
       })
    }
}

