  var express = require("express");
  var path = require("path");
  // var favicon = require('serve-favicon');
  var logger = require('morgan');
  var cookieParser = require('cookie-parser');
  var bodyParser = require('body-parser');
  var jade = require("jade");
  var stylus = require("stylus");
  var nib = require("nib");
  var twitter = require("ntwitter");

  var index = require('./routes/index');
  var users = require('./routes/users');

  var app = express();
  server = require('http').Server(app);
  io = require("socket.io")(server);

  num_tweets = 0;

  twit = new twitter({
    consumer_key: '9Z2kW3H7ilTWnd8rPPwQcI3KZ',
    consumer_secret: 'b5NQxSfVy2R21pUZnfDBLR8K0DJWytzIp2qoObtBE3jj70e4Zt',
    access_token_key: '305235468-b6eR0qxeuboXlCM9x3BYKHoCY91qx7fRhehnXaAu',
    access_token_secret: 'F0ZK5A7NkEHNUgT9106cT7qTtuDQ9mFxdspXzGZ5Tyutf'
  });

  io.on("connection", function(socket) {
    console.log("cliente conectado")
    twit.stream("statuses/filter", {
      track: ["#emotionalmaps","emotionalmaps","excitement","excited","happiness","happy","serenity","serene","calm","calmed","alertness","alert","anticipation","anticipate",
      "anticipated","interest","interesting","anger","angry","annoyance","annoyed","annoying","abhorrence","pain","painful","boredom","boring","sadness","sad","pensive",
      "thoughtful","guess","amaze","amazed","amazing","surprised","surprising","surprise","distracted","distraction","distract","terrified","terrifying","fear","fearing",
      "feared","apprehension","apprehensive","admiration","admire","admiring","confident","confide","trust","acceptance","accept","accepting","hasle","discomfort","hate"]
    }, function(stream) {
      stream.on("data", function(data) {
        if (data.geo !== null && data.lang == 'en') {
          console.log('Posted near :' + data.geo.coordinates[0] + ' ' + data.geo.coordinates[1] + ' Tweet: ' + data.text);
          socket.emit("tweet", data);
        }
      });
      return stream.on("error", function(data) {
        return console.log(data);
      });
    });
    return socket.on("disconnect", function() {
      return console.log("Client Disconnected");
    });
  });

  compile = function(str, path) {
    return stylus(str).set("filename", path).use(nib());
  };

  app.set('views', path.join(__dirname, 'views'));
  app.use('/client', express.static(__dirname + '/node_modules'));

  app.set("view engine", "jade");

  // uncomment after placing your favicon in /public
  // app.use(favicon(path.join(__dirname, 'public', 'images/icons/favicon.ico')));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/', index);
  app.use('/users', users);


  app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: compile
  }));


module.exports = {
  app: app,
  server: server
};
