# Project Title
Emotional Maps

## Authors
- Richard Armuelles: [Github Account](http://github.com/kurai021 "Github Account")

## Description
Emotional Maps, is an effort to map people according to their emotions, based on the content of their tweets (English only) in real time.

Analyses like these might give us a clue of where are more happy people , regions where there are more sad people, could help us learn more about persons, their motivations, the things they like or the recurring themes depending of their geographical area or even prevent unfortunate events.

## Link to Prototype
[http://emotionalmaps.ap01.aws.af.cm/](http://emotionalmaps.ap01.aws.af.cm/ "http://emotionalmaps.ap01.aws.af.cm/")

## Example Code
code for reading tweets with Socket.io and nTwitter:

`` twitter = require("ntwitter");... ``

``io = require("socket.io").listen(server);...``

``twit = new twitter({``
    ``consumer_key: '',``
    ``consumer_secret: '',``
    ``access_token_key: '',``
    ``access_token_secret: ''``
    ``});...``
  
  ``io.sockets.on("connection", function(socket) {``
    ``twit.stream("statuses/filter", {``
      ``track: ["#emotionalmaps","emotionalmaps","excitement","excited","happiness","happy","serenity","serene","calm","alertness","alert","anticipation","anticipate","anticipated","interest","interesting","anger","angry","annoyance","annoyed","annoying","nuisance","abhorrence","pain","painful","boredom","boring","sadness","sad","pensive","thoughtful","guess","amazed","amazing","surprised","surprise","distracted","distraction","terrified","fear","apprhension","apprhensive","admiration","admire","confident","confide","trust","acceptance","accept", "hasle", "discomfort","hate"]``
    ``}, function(stream) {``
      ``stream.on("data", function(data) {``
        ``if (data.geo !== null && data.lang == 'en') {``
            ``console.log('Posted near :' + data.geo.coordinates[0] + ' ' + data.geo.coordinates[1] + ' Tweet: ' + data.text);``
            ``io.sockets.emit("tweet", data);}``
      ``});``
      ``return stream.on("error", function(data) {``
        ``return console.log(data);
      });
    });``
    ``return socket.on("disconnect", function() {
      return console.log("Client Disconnected");
    });
    });...``

## Links to External Libraries
still in development...

## Images & Videos
comming soon...
