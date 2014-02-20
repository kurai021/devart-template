(function() {
  var app, compile, express, io, jade, nib, num_tweets, path, routes, server, stylus, twit, twitter, user;

  express = require("express");

  jade = require("jade");

  stylus = require("stylus");

  nib = require("nib");

  twitter = require("ntwitter");

  routes = require("./routes");

  user = require("./routes/user");

  app = express();

  path = require("path");

  server = require("http").createServer(app);

  io = require("socket.io").listen(server);

  num_tweets = 0;

  twit = new twitter({
    consumer_key: 'C7xh0gGCm3btcMLwJI0A',
    consumer_secret: 'ZGRR2hTOpwHH4J017RPZYPnqY4Np9gStTHSOYKHw',
    access_token_key: '305235468-lRZ5wxlpjARUuLYfyXUerCrkM1dWZLQ1fkEfHKeg',
    access_token_secret: 'YdDW69LKe1JnyY1uCPLjPuR3IifFXHZTO0RI7Q0bNw6MR'
  });

  io.sockets.on("connection", function(socket) {
    twit.stream("statuses/filter", {
      track: ["#emotionalmaps","emotionalmaps","excitement","excited","happiness","happy","serenity","serene","calm","alertness","alert","anticipation","anticipate","anticipated","interest","interesting","anger","angry","annoyance","annoyed","annoying","nuisance","abhorrence","pain","painful","boredom","boring","sadness","sad","pensive","thoughtful","guess","amazed","amazing","surprised","surprise","distracted","distraction","terrified","fear","apprhension","apprhensive","admiration","admire","confident","confide","trust","acceptance","accept"]
    }, function(stream) {
      stream.on("data", function(data) {
        if (data.geo !== null && data.lang == 'en') {
            console.log('Posted near :' + data.geo.coordinates[0] + ' ' + data.geo.coordinates[1] + ' Tweet: ' + data.text);
            io.sockets.emit("tweet", data);
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

  app.set("port", process.env.PORT || 8000);

  app.set("views", path.join(__dirname, "views"));

  app.set("view engine", "jade");

  app.use(express.favicon());

  app.use(express.logger("dev"));

  app.use(express.bodyParser());

  app.use(express.methodOverride());

  app.use(app.router);

  app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: compile
  }));

  app.use(express["static"](path.join(__dirname, "public")));

  if ("production" === app.get("env")) {
    app.use(express.errorHandler());
  }

  app.get("/", routes.index);

  app.get("/users", user.list);

  server.listen(app.get("port"), function() {
    if (process.getuid() === 0) {
      require("fs").stat(__filename, function(err, stats) {
        if (err) {
          return console.error(err);
        }
        return process.setuid(stats.uid);
      });
    }
    return console.log("Express server listening on port " + app.get("port"));
  });

}).call(this);
