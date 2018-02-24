/**********************************
* User controller
***********************************/
const models = ('../db/models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const auth = require('../auth.js');

module.exports = function(app) {

    app.get('/user', function(req, res) {
        if (!req.user) {
            //return res.redirect('login')
            return res.send('redirect to login page')
        }
    });

    app.get('/profile', function(req, res) {
        //res.render('profile')
        res.send('Initial Profile')
    });

    app.post('/profile/update', function(req, res) {
        res.send("post")
    });

};
