var map
function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(-34.397, 150.644),
          zoom: 7,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [
    {
        "featureType": "landscape",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 51
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 30
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 40
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    }
]
        };
        
        map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
    
        var legend = document.getElementById('legend');
        var div1 = document.createElement('div');
        div1.setAttribute("id", "div1");
    
        div1.innerHTML = '<img src="/images/excitement.png"> ' + '<strong>excitement </strong>' + '<strong id="strong_excitement">' + '</strong>' +'<br>' + '<br>' + 
'<img src="/images/happiness.png"> ' + '<strong>happiness </strong>' + '<strong id="strong_happiness">'+ '</strong>' +'<br>' + '<br>' + 
'<img src="/images/serenity.png"> ' + '<strong>serenity </strong>' + '<strong id="strong_serenity">' + '</strong>' + '<br>' + '<br>' + 
'<img src="/images/alertness.png"> ' + '<strong>alertness </strong>' + '<strong id="strong_alertness">' + '</strong>' +'<br>' + '<br>' + 
'<img src="/images/anticipation.png"> ' + '<strong>anticipation </strong>' + '<strong id="strong_anticipation">' + '</strong>' +'<br>' + '<br>' + 
'<img src="/images/interest.png"> ' + '<strong>interest </strong>'+ '<strong id="strong_interest">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/anger.png"> ' + '<strong>anger </strong>'+ '<strong id="strong_anger">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/annoyance.png"> ' + '<strong>annoyance </strong>'+ '<strong id="strong_annoyance">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/nuisance.png"> ' + '<strong>nuisance </strong>'+ '<strong id="strong_nuisance">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/abhorrence.png"> ' + '<strong>abhorrence </strong>'+ '<strong id="strong_abhorrence">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/disgust.png"> ' + '<strong>disgust </strong>'+ '<strong id="strong_disgust">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/pain.png"> ' + '<strong>pain </strong>'+ '<strong id="strong_pain">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/boredom.png"> ' + '<strong>boredom </strong>'+ '<strong id="strong_boredom">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/sadness.png"> ' + '<strong>sadness </strong>'+ '<strong id="strong_sadness">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/pensive.png"> ' + '<strong>pensive </strong>'+ '<strong id="strong_pensive">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/amazed.png"> ' + '<strong>amazed </strong>'+ '<strong id="strong_amazed">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/surprised.png"> ' + '<strong>surprised </strong>'+ '<strong id="strong_surprised">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/distracted.png"> ' + '<strong>distracted </strong>'+ '<strong id="strong_distracted">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/terrified.png"> ' + '<strong>terrified </strong>'+ '<strong id="strong_terrified">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/fear.png"> ' + '<strong>fear </strong>'+ '<strong id="strong_fear">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/apprehension.png"> ' + '<strong>apprehension </strong>'+ '<strong id="strong_apprehension">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/admiration.png"> ' + '<strong>admiration </strong>'+ '<strong id="strong_admiration">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/confident.png"> ' + '<strong>confident </strong>'+ '<strong id="strong_confident">' + '</strong>' + '<br>' + '<br>' +
'<img src="/images/acceptance.png"> ' + '<strong>acceptance </strong>'+ '<strong id="strong_acceptance">' + '</strong>';
    
        legend.appendChild(div1);
        map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
      }

google.maps.event.addDomListener(window, 'load', initialize);