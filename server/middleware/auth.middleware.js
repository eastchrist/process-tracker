// Imports
const jwt = require("jsonwebtoken");
const models    = require('../models');

module.exports = {
    checkUser: function(req, res, next) {
        const token = req.cookies.jwt;
        if (token) {
            jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
              if (err) {
                res.locals.user = null;
                res.cookie("jwt", "", { maxAge: 1 });
                next();
              } else {
                let user = await models.User.findAll( {
                          where: { id: decodedToken.id },
                          attributes: {exclude: ['password']},
                          order: [['id','ASC']]} );
                res.locals.user = user;
                next();
              }
            });
          } else {
            res.locals.user = null;
            next();
          }
    },
    requireAuth: function(req, res, next) {
        const token = req.cookies.jwt;
        if (token) {
          jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
            if (err) {
              console.log(err);
              res.send(200).json('no token')
            } else {
              console.log(decodedToken.id);
              next();
            }
          });
        } else {
          console.log('No token');
        }
    }

}