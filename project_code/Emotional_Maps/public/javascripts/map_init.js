var map
function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(-34.397, 150.644),
          zoom: 7,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [{'featureType':'water','stylers':[{'color':'#021019'}]},{'featureType':'landscape','stylers':[{'color':'#08304b'}]},{'featureType':'poi','elementType':'geometry','stylers':[{'color':'#0c4152'},{'lightness':5}]},{'featureType':'road.highway','elementType':'geometry.fill','stylers':[{'color':'#000000'}]},{'featureType':'road.highway','elementType':'geometry.stroke','stylers':[{'color':'#0b434f'},{'lightness':25}]},{'featureType':'road.arterial','elementType':'geometry.fill','stylers':[{'color':'#000000'}]},{'featureType':'road.arterial','elementType':'geometry.stroke','stylers':[{'color':'#0b3d51'},{'lightness':16}]},{'featureType':'road.local','elementType':'geometry','stylers':[{'color':'#000000'}]},{'elementType':'labels.text.fill','stylers':[{'color':'#ffffff'}]},{'elementType':'labels.text.stroke','stylers':[{'color':'#000000'},{'lightness':13}]},{'featureType':'transit','stylers':[{'color':'#146474'}]},{'featureType':'administrative','elementType':'geometry.fill','stylers':[{'color':'#000000'}]},{'featureType':'administrative','elementType':'geometry.stroke','stylers':[{'color':'#144b53'},{'lightness':14},{'weight':1.4}]}]
        };
        
        map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
    
        var legend = document.getElementById('legend');
        var div1 = document.createElement('div');
        div1.setAttribute("id", "div1");
    
        div1.innerHTML = '<img src="https://dl.dropboxusercontent.com/u/56345835/%23DBC600.png"> ' + '<strong>emotion </strong>' + '<strong id="strong_emocion">' + '</strong>' +'<br>' + '<br>' + 
'<img src="https://dl.dropboxusercontent.com/u/56345835/%23ECE12B.png"> ' + '<strong>happiness </strong>' + '<strong id="strong_alegria">'+ '</strong>' +'<br>' + '<br>' + 
'<img src="https://dl.dropboxusercontent.com/u/56345835/%23EFFC64.png"> ' + '<strong>serenity </strong>' + '<strong id="strong_serenidad">' + '</strong>' + '<br>' + '<br>' + 
'<img src="https://dl.dropboxusercontent.com/u/56345835/%23D85F00.png"> ' + '<strong>alertness </strong>' + '<strong id="strong_vigilancia">' + '</strong>' +'<br>' + '<br>' + 
'<img src="https://dl.dropboxusercontent.com/u/56345835/%23E58B1E.png"> ' + '<strong>anticipation </strong>' + '<strong id="strong_anticipacion">' + '</strong>' +'<br>' + '<br>' + 
'<img src="https://dl.dropboxusercontent.com/u/56345835/%23EFB151.png"> ' + '<strong>interest </strong>'+ '<strong id="strong_interes">' + '</strong>' + '<br>' + '<br>' +
'<img src="https://dl.dropboxusercontent.com/u/56345835/%23CA0E37.png"> ' + '<strong>anger </strong>'+ '<strong id="strong_ira">' + '</strong>' + '<br>' + '<br>' +
'<img src="https://dl.dropboxusercontent.com/u/56345835/%23D80440.png"> ' + '<strong>annoyance </strong>'+ '<strong id="strong_enfado">' + '</strong>' + '<br>' + '<br>' +
'<img src="https://dl.dropboxusercontent.com/u/56345835/%23E14856.png"> ' + '<strong>nuisance </strong>'+ '<strong id="strong_molestia">' + '</strong>' + '<br>' + '<br>' +
'<img src="https://dl.dropboxusercontent.com/u/56345835/%23700D93.png"> ' + '<strong>abhorrence </strong>'+ '<strong id="strong_aborrecimiento">' + '</strong>' + '<br>' + '<br>' +
'<img src="https://dl.dropboxusercontent.com/u/56345835/%23944EAD.png"> ' + '<strong>disgust </strong>'+ '<strong id="strong_disjusto">' + '</strong>' + '<br>' + '<br>' +
'<img src="https://dl.dropboxusercontent.com/u/56345835/%23B079C0.png"> ' + '<strong>pain </strong>'+ '<strong id="strong_dolor">' + '</strong>' + '<br>' + '<br>' +
'<img src="https://dl.dropboxusercontent.com/u/56345835/%233C499A.png"> ' + '<strong>boredom </strong>'+ '<strong id="strong_aburrimiento">' + '</strong>' + '<br>' + '<br>' +
'<img src="https://dl.dropboxusercontent.com/u/56345835/%236C81BC.png"> ' + '<strong>sadness </strong>'+ '<strong id="strong_tristeza">' + '</strong>' + '<br>' + '<br>' +
'<img src="https://dl.dropboxusercontent.com/u/56345835/%239AA7D0.png"> ' + '<strong>pensive </strong>'+ '<strong id="strong_pensativo">' + '</strong>' + '<br>' + '<br>' +
'<img src="https://dl.dropboxusercontent.com/u/56345835/%2338649A.png"> ' + '<strong>amazed </strong>'+ '<strong id="strong_asombrado">' + '</strong>' + '<br>' + '<br>' +
'<img src="https://dl.dropboxusercontent.com/u/56345835/%234B8FB3.png"> ' + '<strong>surprised </strong>'+ '<strong id="strong_sorprendido">' + '</strong>' + '<br>' + '<br>' +
'<img src="https://dl.dropboxusercontent.com/u/56345835/%2383B7CB.png"> ' + '<strong>distracted </strong>'+ '<strong id="strong_distraido">' + '</strong>' + '<br>' + '<br>' +
'<img src="https://dl.dropboxusercontent.com/u/56345835/%23107221.png"> ' + '<strong>terrified </strong>'+ '<strong id="strong_terror">' + '</strong>' + '<br>' + '<br>' +
'<img src="https://dl.dropboxusercontent.com/u/56345835/%231D9F38.png"> ' + '<strong>fear </strong>'+ '<strong id="strong_miedo">' + '</strong>' + '<br>' + '<br>' +
'<img src="https://dl.dropboxusercontent.com/u/56345835/%235BC15F.png"> ' + '<strong>apprehension </strong>'+ '<strong id="strong_aprension">' + '</strong>' + '<br>' + '<br>' +
'<img src="https://dl.dropboxusercontent.com/u/56345835/%235AC000.png"> ' + '<strong>admiration </strong>'+ '<strong id="strong_admiracion">' + '</strong>' + '<br>' + '<br>' +
'<img src="https://dl.dropboxusercontent.com/u/56345835/%2375D500.png"> ' + '<strong>confident </strong>'+ '<strong id="strong_confianza">' + '</strong>' + '<br>' + '<br>' +
'<img src="https://dl.dropboxusercontent.com/u/56345835/%23A9E942.png"> ' + '<strong>acceptance </strong>'+ '<strong id="strong_aceptacion">' + '</strong>';
    
        legend.appendChild(div1);
        map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
      }

google.maps.event.addDomListener(window, 'load', initialize);