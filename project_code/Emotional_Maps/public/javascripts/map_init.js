var poly_excitement;
var poly_happiness;
var poly_serenity;
var poly_alertness;
var poly_anticipation;
var poly_interest;
var poly_anger;
var poly_annoyance;
var poly_nuisance;
var poly_abhorrence;
var poly_disgust;
var poly_pain;
var poly_boredom;
var poly_sadness;
var poly_pensive;
var poly_amazed;
var poly_surprised;
var poly_distracted;
var poly_terrified;
var poly_fear;
var poly_apprehension;
var poly_admiration;
var poly_confident;
var poly_acceptance;
var map;

function initialize() {
    
        var mapOptions = {
          center: new google.maps.LatLng(-34.397, 150.644),
          zoom: 4,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          disableDefaultUI: true,
          styles: [{"stylers":[{"visibility":"simplified"}]},
                   {"stylers":[{"color":"#030303"}]},
                   {"featureType":"water","stylers":[{"color":"#131313"},{"lightness":7}]},
                   {"elementType":"labels.text.fill","stylers":[{"visibility":"off"},{"lightness":25}]}
                  ]};
        
        map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
    
    var polyOptions_excitement = {
        strokeColor: '#DBC600',
        strokeOpacity: 0.5,
        geodesic: true,
        strokeWeight: 2
    };
    poly_excitement = new google.maps.Polyline(polyOptions_excitement);
    poly_excitement.setMap(map);
    
    var polyOptions_happiness = {
        strokeColor: '#ECE12B',
        strokeOpacity: 0.5,
        geodesic: true,
        strokeWeight: 2
    };
    poly_happiness = new google.maps.Polyline(polyOptions_happiness);
    poly_happiness.setMap(map);
    
    var polyOptions_serenity = {
        strokeColor: '#EFFC64',
        strokeOpacity: 0.5,
        geodesic: true,
        strokeWeight: 2
    };
    poly_serenity = new google.maps.Polyline(polyOptions_serenity);
    poly_serenity.setMap(map);
    
    var polyOptions_alertness = {
        strokeColor: '#D85F00',
        strokeOpacity: 0.5,
        geodesic: true,
        strokeWeight: 2
    };
    poly_alertness = new google.maps.Polyline(polyOptions_alertness);
    poly_alertness.setMap(map);
    
    var polyOptions_anticipation = {
        strokeColor: '#E58B1E',
        strokeOpacity: 0.5,
        geodesic: true,
        strokeWeight: 2
    };
    poly_anticipation = new google.maps.Polyline(polyOptions_anticipation);
    poly_anticipation.setMap(map);
    
    var polyOptions_interest = {
        strokeColor: '#EFB151',
        strokeOpacity: 0.5,
        geodesic: true,
        strokeWeight: 2
    };
    poly_interest = new google.maps.Polyline(polyOptions_interest);
    poly_interest.setMap(map);
    
    var polyOptions_anger = {
        strokeColor: '#CA0E37',
        strokeOpacity: 0.5,
        geodesic: true,
        strokeWeight: 2
    };
    poly_anger = new google.maps.Polyline(polyOptions_anger);
    poly_anger.setMap(map);
    
    var polyOptions_annoyance = {
        strokeColor: '#D80440',
        strokeOpacity: 0.5,
        geodesic: true,
        strokeWeight: 2
    };
    poly_annoyance = new google.maps.Polyline(polyOptions_annoyance);
    poly_annoyance.setMap(map);
    
    var polyOptions_nuisance = {
        strokeColor: '#E14856',
        strokeOpacity: 0.5,
        geodesic: true,
        strokeWeight: 2
    };
    poly_nuisance = new google.maps.Polyline(polyOptions_nuisance);
    poly_nuisance.setMap(map);
    
    var polyOptions_abhorrence = {
        strokeColor: '#700D93',
        strokeOpacity: 0.5,
        geodesic: true,
        strokeWeight: 2
    };
    poly_abhorrence = new google.maps.Polyline(polyOptions_abhorrence);
    poly_abhorrence.setMap(map);
    
    var polyOptions_disgust = {
        strokeColor: '#944EAD',
        strokeOpacity: 0.5,
        geodesic: true,
        strokeWeight: 2
    };
    poly_disgust = new google.maps.Polyline(polyOptions_disgust);
    poly_disgust.setMap(map);
    
    var polyOptions_pain = {
        strokeColor: '#B079C0',
        strokeOpacity: 0.5,
        geodesic: true,
        strokeWeight: 2
    };
    poly_pain = new google.maps.Polyline(polyOptions_pain);
    poly_pain.setMap(map);
    
    var polyOptions_boredom = {
        strokeColor: '#3C499A',
        strokeOpacity: 0.5,
        geodesic: true,
        strokeWeight: 2
    };
    poly_boredom = new google.maps.Polyline(polyOptions_boredom);
    poly_boredom.setMap(map);
    
    var polyOptions_sadness = {
        strokeColor: '#6C81BC',
        strokeOpacity: 0.5,
        geodesic: true,
        strokeWeight: 2
    };
    poly_sadness = new google.maps.Polyline(polyOptions_sadness);
    poly_sadness.setMap(map);
    
    var polyOptions_pensive = {
        strokeColor: '#9AA7D0',
        strokeOpacity: 0.5,
        geodesic: true,
        strokeWeight: 2
    };
    poly_pensive = new google.maps.Polyline(polyOptions_pensive);
    poly_pensive.setMap(map);
    
    var polyOptions_amazed = {
        strokeColor: '#38649A',
        strokeOpacity: 0.5,
        geodesic: true,
        strokeWeight: 2
    };
    poly_amazed = new google.maps.Polyline(polyOptions_amazed);
    poly_amazed.setMap(map);
    
    var polyOptions_surprised = {
        strokeColor: '#4B8FB3',
        strokeOpacity: 0.5,
        strokeWeight: 2
    };
    poly_surprised = new google.maps.Polyline(polyOptions_surprised);
    poly_surprised.setMap(map);
    
    var polyOptions_distracted = {
        strokeColor: '#83B7CB',
        strokeOpacity: 0.5,
        geodesic: true,
        strokeWeight: 2
    };
    poly_distracted = new google.maps.Polyline(polyOptions_distracted);
    poly_distracted.setMap(map);
    
    var polyOptions_terrified = {
        strokeColor: '#107221',
        strokeOpacity: 0.5,
        geodesic: true,
        strokeWeight: 2
    };
    poly_terrified = new google.maps.Polyline(polyOptions_terrified);
    poly_terrified.setMap(map);
    
    var polyOptions_fear = {
        strokeColor: '#1D9F38',
        strokeOpacity: 0.5,
        geodesic: true,
        strokeWeight: 2
    };
    poly_fear = new google.maps.Polyline(polyOptions_fear);
    poly_fear.setMap(map);
    
    var polyOptions_apprehension = {
        strokeColor: '#5BC15F',
        strokeOpacity: 0.5,
        geodesic: true,
        strokeWeight: 2
    };
    poly_apprehension = new google.maps.Polyline(polyOptions_apprehension);
    poly_apprehension.setMap(map);
    
    var polyOptions_admiration = {
        strokeColor: '#5AC000',
        strokeOpacity: 0.5,
        geodesic: true,
        strokeWeight: 2
    };
    poly_admiration = new google.maps.Polyline(polyOptions_admiration);
    poly_admiration.setMap(map);
    
    var polyOptions_confident = {
        strokeColor: '#75D500',
        strokeOpacity: 0.5,
        geodesic: true,
        strokeWeight: 2
    };
    poly_confident = new google.maps.Polyline(polyOptions_confident);
    poly_confident.setMap(map);
    
    var polyOptions_acceptance = {
        strokeColor: '#A9E942',
        strokeOpacity: 0.5,
        geodesic: true,
        strokeWeight: 2
    };
    poly_acceptance = new google.maps.Polyline(polyOptions_acceptance);
    poly_acceptance.setMap(map);
    
        var legend = document.getElementById('legend');
        var div1 = document.createElement('div');
        div1.setAttribute("id", "div1");
    
        div1.innerHTML = '<img src="/images/excitement.png"> ' + '<strong>Excitement </strong>' + '<strong id="strong_excitement">' + '</strong>' +'<br>' + '<br>' + 
'<img src="/images/happiness.png"> ' + '<strong>Happiness </strong>' + '<strong id="strong_happiness">'+ '</strong>' +'<br>' + '<br>' + 
'<img src="/images/serenity.png"> ' + '<strong>Serenity </strong>' + '<strong id="strong_serenity">' + '</strong>' + '<br>' + '<br>' + 
'<img src="/images/alertness.png"> ' + '<strong>Alertness </strong>' + '<strong id="strong_alertness">' + '</strong>' +'<br>' + '<br>' + 
'<img src="/images/anticipation.png"> ' + '<strong>Anticipation </strong>' + '<strong id="strong_anticipation">' + '</strong>' +'<br>' + '<br>' + 
'<img src="/images/interest.png"> ' + '<strong>Interest </strong>'+ '<strong id="strong_interest">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/anger.png"> ' + '<strong>Anger </strong>'+ '<strong id="strong_anger">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/annoyance.png"> ' + '<strong>Annoyance </strong>'+ '<strong id="strong_annoyance">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/nuisance.png"> ' + '<strong>Nuisance </strong>'+ '<strong id="strong_nuisance">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/abhorrence.png"> ' + '<strong>Abhorrence </strong>'+ '<strong id="strong_abhorrence">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/disgust.png"> ' + '<strong>Disgust </strong>'+ '<strong id="strong_disgust">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/pain.png"> ' + '<strong>Pain </strong>'+ '<strong id="strong_pain">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/boredom.png"> ' + '<strong>Boredom </strong>'+ '<strong id="strong_boredom">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/sadness.png"> ' + '<strong>Sadness </strong>'+ '<strong id="strong_sadness">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/pensive.png"> ' + '<strong>Pensive </strong>'+ '<strong id="strong_pensive">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/amazed.png"> ' + '<strong>Amazed </strong>'+ '<strong id="strong_amazed">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/surprised.png"> ' + '<strong>Surprised </strong>'+ '<strong id="strong_surprised">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/distracted.png"> ' + '<strong>Distracted </strong>'+ '<strong id="strong_distracted">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/terrified.png"> ' + '<strong>Terrified </strong>'+ '<strong id="strong_terrified">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/fear.png"> ' + '<strong>Fear </strong>'+ '<strong id="strong_fear">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/apprehension.png"> ' + '<strong>Apprehension </strong>'+ '<strong id="strong_apprehension">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/admiration.png"> ' + '<strong>Admiration </strong>'+ '<strong id="strong_admiration">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/confident.png"> ' + '<strong>Confident </strong>'+ '<strong id="strong_confident">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/acceptance.png"> ' + '<strong>Acceptance </strong>'+ '<strong id="strong_acceptance">' + '</strong>';
    
        legend.appendChild(div1);
        map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
      }

google.maps.event.addDomListener(window, 'load', initialize);