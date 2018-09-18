$(function(){

    var socket;
    var num_tweets = 0;
    var counter_excitement = 0;
    var counter_happiness = 0;
    var counter_serenity = 0;
    var counter_alertness = 0;
    var counter_anticipation = 0;
    var counter_interest = 0;
    var counter_anger = 0;
    var counter_annoyance = 0;
    var counter_hasle = 0;
    var counter_abhorrence = 0;
    var counter_disgust = 0;
    var counter_pain = 0;
    var counter_boredom = 0;
    var counter_sadness = 0;
    var counter_pensive = 0;
    var counter_amazed = 0;
    var counter_surprised = 0;
    var counter_distracted = 0;
    var counter_terrified = 0;
    var counter_fear = 0;
    var counter_apprehension = 0;
    var counter_admiration = 0;
    var counter_confident = 0;
    var counter_acceptance = 0;

    var socket = io.connect();

    socket.on('tweet', function (data){
        var lat = data.geo.coordinates[0];
        var lng = data.geo.coordinates[1];

        var name = data.user.name;
        var screen_name = data.user.screen_name;
        var tweetText = data.text;
        var displayPicture = data.user.profile_image_url;

        var excitement = document.getElementById("strong_excitement");
        var happiness = document.getElementById("strong_happiness");
        var serenity = document.getElementById("strong_serenity");
        var alertness = document.getElementById("strong_alertness");
        var anticipation = document.getElementById("strong_anticipation");
        var interest = document.getElementById("strong_interest");
        var anger = document.getElementById("strong_anger");
        var annoyance = document.getElementById("strong_annoyance");
        var hasle = document.getElementById("strong_hasle");
        var abhorrence = document.getElementById("strong_abhorrence");
        var disgust = document.getElementById("strong_disgust");
        var pain = document.getElementById("strong_pain");
        var boredom = document.getElementById("strong_boredom");
        var sadness = document.getElementById("strong_sadness");
        var pensive = document.getElementById("strong_pensive");
        var amazed = document.getElementById("strong_amazed");
        var surprised = document.getElementById("strong_surprised");
        var distracted = document.getElementById("strong_distracted");
        var terrified = document.getElementById("strong_terrified");
        var fear = document.getElementById("strong_fear");
        var apprehension = document.getElementById("strong_apprehension");
        var admiration = document.getElementById("strong_admiration");
        var confident = document.getElementById("strong_confident");
        var acceptance = document.getElementById("strong_acceptance");

        var myLatLng = new google.maps.LatLng(lat,lng);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map
        });

        if (/excitement/.test(tweetText) || /excited/.test(tweetText) || /Excitement/.test(tweetText) || /Excited/.test(tweetText) || /EXCITEMENT/.test(tweetText) || /EXCITED/.test(tweetText)){
            var iconFile = '/images/markers/excitement.png';
            marker.setIcon(iconFile)

            var path = poly_excitement.getPath();
            path.push(myLatLng);

            counter_excitement++;
            excitement.innerHTML = counter_excitement;
        }

        if (/happiness/.test(tweetText) || /happy/.test(tweetText) || /Happy/.test(tweetText) || /Happiness/.test(tweetText) || /HAPPY/.test(tweetText) || /HAPPINESS/.test(tweetText)){
            var iconFile = '/images/markers/happiness.png';
            marker.setIcon(iconFile)

            var path = poly_happiness.getPath();
            path.push(myLatLng);

            counter_happiness++;
            happiness.innerHTML = counter_happiness;
        }

        if (/serenity/.test(tweetText) || /serene/.test(tweetText) || /calm/.test(tweetText) || /calmed/.test(tweetText) || /Serenity/.test(tweetText) || /Serene/.test(tweetText) || /Calm/.test(tweetText) || /Calmed/.test(tweetText) || /SERENITY/.test(tweetText) || /SERENE/.test(tweetText) || /CALM/.test(tweetText) || /CALMED/.test(tweetText)){
            var iconFile = '/images/markers/serenity.png';
            marker.setIcon(iconFile)

            var path = poly_serenity.getPath();
            path.push(myLatLng);

            counter_serenity++;
            serenity.innerHTML = counter_serenity;
        }

        if (/alertness/.test(tweetText) || /alert/.test(tweetText) || /Alertness/.test(tweetText) || /Alert/.test(tweetText) || /ALERTNESS/.test(tweetText) || /ALERT/.test(tweetText)){
            var iconFile = '/images/markers/alertness.png';
            marker.setIcon(iconFile)

            var path = poly_alertness.getPath();
            path.push(myLatLng);

            counter_alertness++;
            alertness.innerHTML = counter_alertness;
        }

        if (/anticipation/.test(tweetText) || /anticipate/.test(tweetText) || /anticipated/.test(tweetText) || /Anticipation/.test(tweetText) || /Anticipate/.test(tweetText) || /Anticipated/.test(tweetText) || /ANTICIPATION/.test(tweetText) || /ANTICIPATE/.test(tweetText) || /ANTICIPATED/.test(tweetText)){
            var iconFile = '/images/markers/anticipation.png';
            marker.setIcon(iconFile)

            var path = poly_anticipation.getPath();
            path.push(myLatLng);

            counter_anticipation++;
            anticipation.innerHTML = counter_anticipation;
        }

        if (/interest/.test(tweetText) || /interesting/.test(tweetText)){
            var iconFile = '/images/markers/interest.png';
            marker.setIcon(iconFile)

            var path = poly_interest.getPath();
            path.push(myLatLng);

            counter_interest++;
            interest.innerHTML = counter_interest;
        }

        if (/anger/.test(tweetText) || /angry/.test(tweetText) || /Anger/.test(tweetText) || /Angry/.test(tweetText) || /ANGER/.test(tweetText) || /ANGRY/.test(tweetText)){
            var iconFile = '/images/markers/anger.png';
            marker.setIcon(iconFile)

            var path = poly_anger.getPath();
            path.push(myLatLng);

            counter_anger++;
            anger.innerHTML = counter_anger;
        }

        if (/annoyance/.test(tweetText) || /annoyed/.test(tweetText) || /annoying/.test(tweetText) || /Annoyance/.test(tweetText) || /Annoyed/.test(tweetText) || /Annoying/.test(tweetText) || /ANNOYANCE/.test(tweetText) || /ANNOYED/.test(tweetText) || /ANNOYING/.test(tweetText)){
            var iconFile = '/images/markers/annoyance.png';
            marker.setIcon(iconFile)

            var path = poly_annoyance.getPath();
            path.push(myLatLng);

            counter_annoyance++;
            annoyance.innerHTML = counter_annoyance;
        }

        if (/hasle/.test(tweetText) || /Hasle/.test(tweetText) || /HASLE/.test(tweetText) || /DISCOMFORT/.test(tweetText) || /discomfort/.test(tweetText) || /Discomfort/.test(tweetText)){
            var iconFile = '/images/markers/hasle.png';
            marker.setIcon(iconFile)

            var path = poly_hasle.getPath();
            path.push(myLatLng);

            counter_hasle++;
            hasle.innerHTML = counter_hasle;
        }

        if (/abhorrence/.test(tweetText) || /Abhorrence/.test(tweetText) || /ABHORRENCE/.test(tweetText) || /hate/.test(tweetText) || /Hate/.test(tweetText) || /HATE/.test(tweetText)){
            var iconFile = '/images/markers/abhorrence.png';
            marker.setIcon(iconFile)

            var path = poly_abhorrence.getPath();
            path.push(myLatLng);

            counter_abhorrence++;
            abhorrence.innerHTML = counter_abhorrence;
        }

        if (/pain/.test(tweetText) || /painful/.test(tweetText) || /Pain/.test(tweetText) || /Painful/.test(tweetText) || /PAIN/.test(tweetText) || /PAINFUL/.test(tweetText)){
            var iconFile = '/images/markers/pain.png';
            marker.setIcon(iconFile)

            var path = poly_pain.getPath();
            path.push(myLatLng);

            counter_pain++;
            pain.innerHTML = counter_pain;
        }

        if (/boredom/.test(tweetText) || /boring/.test(tweetText) || /Boredom/.test(tweetText) || /Boring/.test(tweetText) || /BOREDOM/.test(tweetText) || /BORING/.test(tweetText)){
            var iconFile = '/images/markers/boredom.png';
            marker.setIcon(iconFile)

            var path = poly_boredom.getPath();
            path.push(myLatLng);

            counter_boredom++;
            boredom.innerHTML = counter_boredom;
        }

        if (/sadness/.test(tweetText) || /sad/.test(tweetText) || /Sadness/.test(tweetText) || /Sad/.test(tweetText) || /SADNESS/.test(tweetText) || /SAD/.test(tweetText)){
            var iconFile = '/images/markers/sadness.png';
            marker.setIcon(iconFile)

            var path = poly_sadness.getPath();
            path.push(myLatLng);

            counter_sadness++;
            sadness.innerHTML = counter_sadness;
        }

        if (/pensive/.test(tweetText) || /thoughtful/.test(tweetText) || /guess/.test(tweetText) || /Pensive/.test(tweetText) || /Thoughtful/.test(tweetText) || /Guess/.test(tweetText) || /PENSIVE/.test(tweetText) || /THOUGHTFUL/.test(tweetText) || /GUESS/.test(tweetText)){
            var iconFile = '/images/markers/pensive.png';
            marker.setIcon(iconFile)

            var path = poly_pensive.getPath();
            path.push(myLatLng);

            counter_pensive++;
            pensive.innerHTML = counter_pensive;
        }

        if (/amaze/.test(tweetText) || /amazed/.test(tweetText) || /amazing/.test(tweetText) || /Amaze/.test(tweetText) || /Amazed/.test(tweetText) || /Amazing/.test(tweetText) || /AMAZE/.test(tweetText) || /AMAZED/.test(tweetText) || /AMAZING/.test(tweetText)){
            var iconFile = '/images/markers/amazed.png';
            marker.setIcon(iconFile)

            var path = poly_amazed.getPath();
            path.push(myLatLng);

            counter_amazed++;
            amazed.innerHTML = counter_amazed;
        }

        if (/surprised/.test(tweetText) || /surprising/.test(tweetText) || /surprise/.test(tweetText) || /Surprised/.test(tweetText) || /Surprise/.test(tweetText) || /surprising/.test(tweetText)  || /SURPRISED/.test(tweetText) || /SURPRISING/.test(tweetText) || /SURPRISE/.test(tweetText)){
            var iconFile = '/images/markers/surprised.png';
            marker.setIcon(iconFile)

            var path = poly_surprised.getPath();
            path.push(myLatLng);

            counter_surprised++;
            surprised.innerHTML = counter_surprised;
        }

        if (/distracted/.test(tweetText) || /distraction/.test(tweetText) || /Distracted/.test(tweetText) || /Distraction/.test(tweetText) || /DISTRACTED/.test(tweetText) || /DISTRACTION/.test(tweetText) || /DISTRACT/.test(tweetText) || /Distract/.test(tweetText) || /distract/.test(tweetText)){
            var iconFile = '/images/markers/distracted.png';
            marker.setIcon(iconFile)

            var path = poly_distracted.getPath();
            path.push(myLatLng);

            counter_distracted++;
            distracted.innerHTML = counter_distracted;
        }

        if (/terrified/.test(tweetText) || /Terrified/.test(tweetText) || /TERRIFIED/.test(tweetText) || /terrifying/.test(tweetText) || /Terrifying/.test(tweetText) || /TERRIFYING/.test(tweetText)){
            var iconFile = '/images/markers/terrified.png';
            marker.setIcon(iconFile)

            var path = poly_terrified.getPath();
            path.push(myLatLng);

            counter_terrified++;
            terrified.innerHTML = counter_terrified;
        }

        if (/fear/.test(tweetText) || /Fear/.test(tweetText) || /FEAR/.test(tweetText) || /fearing/.test(tweetText) || /Fearing/.test(tweetText) || /FEARING/.test(tweetText) || /feared/.test(tweetText) || /Feared/.test(tweetText) || /FEARED/.test(tweetText)){
            var iconFile = '/images/markers/fear.png';
            marker.setIcon(iconFile)

            var path = poly_fear.getPath();
            path.push(myLatLng);

            counter_fear++;
            fear.innerHTML = counter_fear;
        }

        if (/apprehension/.test(tweetText) || /apprehensive/.test(tweetText) || /Apprehension/.test(tweetText) || /Apprehensive/.test(tweetText) || /APPREHENSION/.test(tweetText) || /APPREHENVISE/.test(tweetText)){
            var iconFile = '/images/markers/apprehension.png';
            marker.setIcon(iconFile)

            var path = poly_apprehension.getPath();
            path.push(myLatLng);

            counter_apprehension++;
            apprehension.innerHTML = counter_apprehension;
        }

        if (/admiration/.test(tweetText) || /admire/.test(tweetText) || /admiring/.test(tweetText) || /Admiration/.test(tweetText) || /Admire/.test(tweetText) || /Admiring/.test(tweetText) || /ADMIRATION/.test(tweetText) || /ADMIRE/.test(tweetText) || /ADMIRING/.test(tweetText)){
            var iconFile = '/images/markers/admiration.png';
            marker.setIcon(iconFile)

            var path = poly_admiration.getPath();
            path.push(myLatLng);

            counter_admiration++;
            admiration.innerHTML = counter_admiration;
        }

        if (/confident/.test(tweetText) || /confide/.test(tweetText) || /trust/.test(tweetText) || /Confident/.test(tweetText) || /Confide/.test(tweetText) || /Trust/.test(tweetText) || /CONFIDENT/.test(tweetText) || /CONFIDE/.test(tweetText) || /TRUST/.test(tweetText)){
            var iconFile = '/images/markers/confident.png';
            marker.setIcon(iconFile)

            var path = poly_confident.getPath();
            path.push(myLatLng);

            counter_confident++;
            confident.innerHTML = counter_confident;
        }

        if (/acceptance/.test(tweetText) || /accept/.test(tweetText) || /Acceptance/.test(tweetText) || /Accept/.test(tweetText) || /ACCEPTANCE/.test(tweetText) || /ACCEPT/.test(tweetText) || /accepting/.test(tweetText) || /Accepting/.test(tweetText) || /ACCEPTING/.test(tweetText)){
            var iconFile = '/images/markers/acceptance.png';
            marker.setIcon(iconFile)

            var path = poly_acceptance.getPath();
            path.push(myLatLng);

            counter_acceptance++;
            acceptance.innerHTML = counter_acceptance;
        }


        //crea un infowindow con el contenido del tweet
        var contentString = "<img class='displaypic' src='" + displayPicture + "'><div id='tweet-div'><strong> @" + screen_name + "</strong>: " + "<span class='tweetText'>" + tweetText + "</span></div>";

        tw = document.getElementById("tweets");
        tw.innerHTML = "<div class='tweet'><div class='message'>" + contentString + '</div></div>';

        //mueve el mapa para enfocar al proximo tweet
        var newFocus = new google.maps.LatLng(lat,lng);
        map.setCenter(newFocus);
    });
});
