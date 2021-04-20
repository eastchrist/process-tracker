// Imports
const bcrypt    = require('bcrypt');
const models    = require('../models');
const asyncLib  = require('async');
const jwt = require('jsonwebtoken');

// Constants
const EMAIL_REGEX     = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX  = /^(?=.*\d).{4,8}$/;

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (userFound) => {
  return jwt.sign({userFound}, process.env.TOKEN_SECRET, {
    expiresIn: maxAge
  })
};

// Routes
module.exports = {
    register: function(req, res) {
        // Params
        const { username, email, password } = req.body
        const reqUser = req.body
        var errors = {}

        if (reqUser.email == "" || reqUser.username == "" || reqUser.password == "") {
            errors = {
                'code': 50006,
                'message': 'missing parameters'
            };
            return res.status(200).json(errors);
        }
        if (reqUser.username.length >= 13 || reqUser.username.length <= 4) {
            errors = {
                'code': 50007,
                'message': 'wrong username'
            };
            return res.status(200).json(errors);
        }
        if (!EMAIL_REGEX.test(reqUser.email)) {
            errors = {
                'code': 50008,
                'message': 'email is not valid'
            };
            return res.status(200).json(errors);
        }
        if (!PASSWORD_REGEX.test(reqUser.password)) {
            errors = {
                'code': 50009,
                'message': 'password invalid'
            };
            return res.status(200).json(errors);
        }

        asyncLib.waterfall([
            function(done) {
                models.user.findOne({
                    attributes: ['username'],
                    where: { username: username }
                })
                    .then(function(userFound) {
                        done(null, userFound);
                    })
                    .catch(function(err) {
                        errors = {
                            'code': 50010,
                            'message': 'unable to verify user'
                        };
                        return res.status(200).json(errors);
                    });
            },
            function(userFound, done) {
                if (!userFound) {
                    bcrypt.hash(password, 5, function( err, bcryptedPassword ) {
                        done(null, userFound, bcryptedPassword);
                    });
                } else {
                    errors = {
                        'code': 50011,
                        'message': 'user already exist'
                    };
                    return res.status(200).json(errors);
                }
            },
            function(userFound, bcryptedPassword, done) {
                var newUser = models.user.create({
                    email: email,
                    username: username,
                    password: bcryptedPassword,
                    Idfactory: 'Exemple',
                    isAdmin: 0,
                    isManager: 0,
                    isOperator: 0,
                    isVisitor: 1,
                    isActif: 1
                })
                    .then(function(newUser) {
                        done(newUser);
                    })
                    .catch(function(err) {
                        errors = {
                            'code': 50012,
                            'message': 'cannot add user'
                        };
                        return res.status(200).json(errors);
                    });
            }
        ], function(newUser) {
            if (newUser) {
                return res.status(201).json({
                    'userId': newUser.id
                });
            } else {
                errors = {
                    'code': 50013,
                    'message': 'cannot add user'
                };
                return res.status(500).json(errors);
            }
        });
    },
    login: function(req, res) {
        // Params
        const { username, password} = req.body
        var errors = {}
        if (username == "" ||  password == "") {
            errors = {
                'code': 50014,
                'message': 'missing parameters'
            };
            return res.status(200).json(errors);
        }
        asyncLib.waterfall([
            function(done) {
                models.user.findOne({ where: { username: username } })
                .then(function(userFound) {
                    done(null, userFound);
                })
                .catch(function(err) {
                    errors = {
                        'code': 50015,
                        'message': 'unable to verify user'
                    };
                    return res.status(200).json(errors);
                });
            },
            function(userFound, done) {
                if (userFound) {
                    bcrypt.compare(password, userFound.password, function(errBycrypt, resBycrypt) {
                        done(null, userFound, resBycrypt);
                    });
                } else {
                    errors = ({
                        'code': 50016,
                        'message': 'user not exist in DB'
                    });
                    return res.status(200).json(errors);
                }
            },
            function(userFound, resBycrypt, done) {
                if(resBycrypt) {
                    done(userFound);
                } else {
                    errors = {
                        'code': 50017,
                        'message': 'invalid password'
                    };
                    return res.status(200).json(errors);
                }
            }
        ], function(userFound) {
            if (userFound) {
                let roles = []
                let accessToken = ""
                if (userFound.isActif) {
                    if (userFound.isVisitor) {
                        roles.push("visitor")
                        accessToken = "visitor"
                    }
                    if (userFound.isOperator) {
                        roles.push("operator")
                        accessToken = "operator"
                    }
                    if (userFound.isManager) {
                        roles.push("manager")
                        accessToken = "manager"
                    }
                    if (userFound.isAdmin) {
                        roles.push("admin")
                        accessToken = "admin"
                    }
                } else {
                    roles.push("visitor")
                    accessToken = "visitor"
                }
                var user = {id: userFound.id, username: userFound.username, email: userFound.email, idFactory: userFound.idFactory, accessToken: accessToken, roles: roles  }
                const token = createToken(user);
                let userNew = Object.assign( user, { Token: token })
                res.status(200).json( userNew )
            } else {
                errors = {
                    'code': 50018,
                    'message': 'cannot log on user'
                };
                res.status(200).json(errors);
            }
        });
    },
    logout: function(req, res) {
        res.cookie('jwt', '', { maxAge: 1 });
        res.redirect('/');
    }
}
