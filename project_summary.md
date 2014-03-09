# Project Title
Emotional Maps

## Authors
- Richard Armuelles: [Github Account](http://github.com/kurai021 "Github Account")

## Description
Emotional Maps is an effort to connect people, strangers with their states of mind can interact visually and can share this product with the world in real time.

## Link to Prototype
[http://emotionalmaps.ap01.aws.af.cm/](http://emotionalmaps.ap01.aws.af.cm/")

## Key Words
emotionalmaps,excitement,excited,happiness,happy,serenity,serene,calm,alertness,alert,anticipation,anticipate,anticipated,interest,interesting,anger,angry,annoyance,annoyed,annoying,nuisance,abhorrence,pain,painful,boredom,boring,sadness,sad,pensive,thoughtful,guess,amazed,amazing,surprised,surprise,distracted,distraction,terrified,fear,apprehension",apprehensive,admiration,admire,confident,confide,trust,acceptance,accept,hasle,discomfort,hate.

## Example Code
<code>

    twitter = require("ntwitter");

    ...

    io = require("socket.io").listen(server);

    twit = new twitter({
        consumer_key: 'C7xh0gGCm3btcMLwJI0A',
        consumer_secret: 'ZGRR2hTOpwHH4J017RPZYPnqY4Np9gStTHSOYKHw',
        access_token_key: '305235468-lRZ5wxlpjARUuLYfyXUerCrkM1dWZLQ1fkEfHKeg',
        access_token_secret: 'YdDW69LKe1JnyY1uCPLjPuR3IifFXHZTO0RI7Q0bNw6MR'
    });
    
    io.configure('production', function(){
        console.log("set config for production");
        io.enable('browser client minification');  // send minified client
        io.enable('browser client etag');          // apply etag caching logic based on version number
        io.enable('browser client gzip');          // gzip the file
        io.set('log level', 1);                    // reduce logging
        io.set('transports', [                     // enable all transports (optional if you want flashsocket)
            'websocket', 'flashsocket', 'htmlfile', 'xhr-polling', 'jsonp-polling'
        ]);
      });

    io.sockets.on("connection", function(socket) {
        twit.stream("statuses/filter", {
        track: ["#emotionalmaps","emotionalmaps","excitement","excited","happiness","happy","serenity","serene","calm","alertness","alert","anticipation","anticipate","anticipated","interest","interesting","anger","angry","annoyance","annoyed","annoying","nuisance","abhorrence","pain","painful","boredom","boring","sadness","sad","pensive","thoughtful","guess","amazed","amazing","surprised","surprise","distracted","distraction","terrified","fear","apprhension","apprhensive","admiration","admire","confident","confide","trust","acceptance","accept", "hasle", "discomfort","hate"]
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

</code>

## Links to External Libraries
Express: [http://expressjs.com/](http://expressjs.com/)

Stylus: [http://learnboost.github.io/stylus/](http://learnboost.github.io/stylus/)

Socket.io: [http://socket.io/](http://socket.io/)

Jade: [http://jade-lang.com/](http://jade-lang.com/)

nTwitter: [https://github.com/AvianFlu/ntwitter](https://github.com/AvianFlu/ntwitter)

JQuery: [http://jquery.com/](http://jquery.com/)

## Images & Videos
comming soon...
