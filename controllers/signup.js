//Importing dependencies
const models = require('../db/models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const auth = require('../auth.js');

//Exporting this file
module.exports = function(app) {

    // Login index
    app.get('/signup', function(req, res) {
        //res.render('singup', {})
        res.send('LOGIN PAGE')
    });
}
