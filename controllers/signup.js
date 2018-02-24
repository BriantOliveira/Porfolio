//Importing dependencies
const models = require('../db/models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const auth = require('../auth.js');

//Exporting this file
module.exports = function(app) {

    // signup index
    app.get('/signup', (req, res) => {
        //res.render('singup', {})
        res.send('LOGIN PAGE')
    });

    app.post('/signup', (req, res) => {
        //Hash password
        bcrypt.genSalt(10, err, salt => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            console.log("hash " + hash);
            var newUser = {
                username: req.body.username,
                email: req.body.email,
                password: hash
            };
            models.User.create(newUser, {w:1}).then((savedUser) => {
                console.log("saved", savedUser.username)
                auth.setUserIDCookie(savedUser, res);
                res.redirect('/');
            }).catch((err) => {
                console.log("User Creation error:", err.message);
            });
        });
    });
});
/****************************************************
* Login route
*****************************************************/

app.get('/login', (req, res) => {
    // res.render('login')
    res.send('LOGIN');
});

//Comparing if the given password is the same stored
app.post('/login', (req, res) => {
    console.log("email", req.body.email)
    models.User.findOne({where: {email: req.body.email}}).then(function(data) {
        bcrypt.compare(req.body.password, data.password, function(err, result) {
            if(err) {
                res.status(400)
                console.log(err)
            }
            if(result) {
                console.log("resulting results", result)
                auth.setUserIDCookie(data, res);
                res.redirect('/')
            } else {
                console.log('wrong username or password')
            }
        });
    });
});

/***************************************
* Logout Route
****************************************/
app.get('/logout', function(req, res) {
    res.clearCokie('jwtToken');
    res.redirect('/')
   });
};
