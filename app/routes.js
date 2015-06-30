var Node = require('./models/node');
var Sensor = require('./models/sensor');
var passport = require('passport');

module.exports = function(app) {
  app.get('/api/nodes', function(req, res) {
    Node.find(function(err, nodes) {
      if (err) {
        res.send(err);
      }

      res.json(nodes);
    });
  });

  app.get('/api/monitor', function(req, res) {
    Sensor.find(function(err, measurements) {
      if (err) {
        res.send(err);
      }

      res.json(measurements);
    });
  });

  // =====================================
  // LOGIN ===============================
  // =====================================
  // show the login form
  app.get('/login', passport.authenticate('local'), function(req, res) {
    res.send(req.user);
    // render the page and pass in any flash data if it exists
    // res.render('login.ejs', { message: req.flash('loginMessage') }); 
  });

  // process the login form
  // app.post('/login', do all our passport stuff here);

  // =====================================
  // SIGNUP ==============================
  // =====================================
  // show the signup form
  app.get('/signup', function(req, res) {
    // render the page and pass in any flash data if it exists
    //res.render('signup.ejs', { message: req.flash('signupMessage') });
  });

    // process the signup form
    // app.post('/signup', do all our passport stuff here);


  app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html');
  });
};
