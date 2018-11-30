var q;
var x;
var s;
var n;
var r;
var rr;
var nbQ1;
var nbQ2;
var nbQ3;
var resultat1;
var resultat2;
var resultat3;
var niveau ;
var repOK = "Bonne r\351ponse !";
var repKO = "'D\351sol\351\n Mauvaise R\351ponse'";
var  temps_imparti =  100000000;
var commencer = "<a href='' onclick='questionNiveau1(temps_imparti); return false' >Commencer</a>";
var suivant = "<a href='' onclick='reQuestion(temps_imparti) ; return false'>Question suivante</a>";
var lvl2 ;
var lvl3 ;
var tabObject = [];
var t;
var map;

window.onload = function() {
  nbQ1= 1;
  nbQ2 = 1;
  nbQ3 = 1;
  niveau = 1;
  resultat1 = 0;
  resultat2 = 0;
  resultat3 = 0;

  q = document.getElementById('questions');
  x = document.getElementById('nbQ');
  s = document.getElementById('suivant');
  n = document.getElementById('niveau');
  r = document.getElementById('resultat');
  t = document.getElementById('temps');

  chargerQuestions();
  lancer();


}

function lancer() {
  q.innerHTML = commencer;
}

function increX1() {
  nbQ1 = nbQ1+1;
}

function increX2() {
  nbQ2 = nbQ2+1;
}

function increX3() {
  nbQ3 = nbQ3+1;
}

function increResultat1() {
  resultat1 = resultat1 +1;
}

function increResultat2() {
  resultat2 = resultat2 +1;
}

function increResultat3() {
  resultat3 = resultat3 +1;
}

function initMap() {
  map = L.map('map').setView([14, -14.8883335], 4);
  var v = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'PING'
  }).addTo(map);
  map.on('click', onClick);

}

var numQuestion;
var map;

function questionNiveau1(temps_imparti) {
  initMap();
  x.innerHTML = nbQ1+"/5";
  s.innerHTML = suivant;
  n.innerHTML = "Niveau: " + niveau;
  numQuestion = Math.floor(Math.random() * tabObject.length);
  q.innerHTML = htmlQuestion();
  q.innerHTML += htmlReponses();

  prepare_div_event();
  timer= setTimeout("abandon()", temps_imparti);
}

function abandon() {
  alert("Temps écoulé");
  reQuestion();
}

function getlvl2() {
  return Boolean(lvl2);
}

function getlvl3() {
  return Boolean(lvl3);
}

function reQuestion() {
  clearTimeout(timer);
  $("#info").html("");
  timer= setTimeout("abandon()", temps_imparti);
    if (nbQ1 < 5) {
      increX1();
      x.innerHTML = nbQ1 + "/5";
      r.innerHTML = "Bonnes réponses :" + resultat1;
      numQuestion = Math.floor(Math.random() * tabObject.length);
      q.innerHTML = htmlQuestion();
      q.innerHTML += htmlReponses();
      prepare_div_event();
    } else if (nbQ1 >= 5 && resultat1 < 3 ) { //Ne passe pas au lvl 2
        q.innerHTML = "Vous n'avez que " + resultat1 + " bonnes réponses, vous pouvez recommencer le jeu en cliquant <a href='' onclick='questionNiveau1(); return false' >ici</a>";
        lvl2 = false;
        x.innerHTML = "";
        r.innerHTML = "";
        s.innerHTML = "";
        clearTimeout(timer);
    } else if (nbQ1 >= 5 && resultat1 >=3 && nbQ2 < 10 && !getlvl2()) { //Stocke résultat dans rr , pour pouvoir remettre resultat à 0 et rester dans le if
        resultat2 = 0;
        lvl2 = true;
    } else if (nbQ1 >= 5 && getlvl2() && nbQ2 < 10) {
        x.innerHTML = nbQ2 + "/10";
        r.innerHTML = "Bonnes réponses :" + resultat2;
        numQuestion = Math.floor(Math.random() * tabObject.length);
        q.innerHTML = htmlQuestion();
        q.innerHTML += htmlReponses();
        prepare_div_event();
        n.innerHTML = " Niveau 2";
        increX2();

    } else if (nbQ2 >= 10 && resultat2 <7  ) {
        q.innerHTML = "Vous n'avez que " + resultat2 + " bonnes réponses, vous pouvez recommencer le jeu en cliquant <a href='' onclick='questionNiveau1(); return false' >ici</a>";
        lvl3 = false;
        x.innerHTML = "";
        r.innerHTML = "";
        s.innerHTML = "";
        clearTimeout(timer);
    } else if (nbQ2 >= 10 && resultat2 >=7 && nbQ3 < 15 && !getlvl3()) { //Stocke résultat dans rr , pour pouvoir remettre resultat à 0 et rester dans le if
      resultat3 = 0;
      lvl3 = true;
      lvl2 = false;
   } else if (nbQ2 >= 10 && getlvl3() && nbQ3 < 15) {
       x.innerHTML = nbQ3 + "/15";
       r.innerHTML = "Bonnes réponses :" + resultat3;
       numQuestion = Math.floor(Math.random() * tabObject.length);
       q.innerHTML = htmlQuestion();
       q.innerHTML += htmlReponses();
       prepare_div_event();
       n.innerHTML = " Niveau 3";
       increX3();

   } else if (nbQ3 >= 15 && resultat3 < 12) {

     x.innerHTML = "";
     r.innerHTML = "";
     s.innerHTML = "";
     clearTimeout(timer);
     q.innerHTML = "Vous n'avez que " + resultat3 + " bonnes réponses, vous pouvez recommencer le jeu en cliquant <a href='' onclick='questionNiveau1(); return false' >ici</a>";
   }
    else if (nbQ3 >= 15 && resultat3 >=12) {
      q.innerHTML = "Felicitations ! Vous avez " + resultat3 + " bonnes réponses ! , vous pouvez recommencer le jeu en cliquant <a href='' onclick='questionNiveau1(); return false' >ici</a>";
      x.innerHTML = "";
      r.innerHTML = "";
      s.innerHTML = "";
    }


}




function htmlQuestion() {
  var quest = "<h3 align='center'> QUESTION :  </h3><hr>";

  quest += tabObject[numQuestion]["question"];
/*  for (i = 0; i < tabObject[numQuestion]["choix"].length; i++) {
    quest += htmlDivDraggable(i, tabObject[numQuestion]["choix"][i]);
  }*/
  return quest;
}

function htmlReponses() {
  var quest = "<h3 align='center'> INDICES :  </h3><hr>";

  for (i = 0; i < tabObject[numQuestion]["choix"].length; i++) {
    quest += htmlDivDraggable(i, tabObject[numQuestion]["choix"][i]);
  }
  return quest;
}

function htmlDivDraggable(iChoix, text) {
  var choix = "<div class='draggable ui-widget-content' id='";
  choix += iChoix;
  choix += "' lieu='";
  choix += text;
  choix += "' ><p>";
  choix += text;
  choix += "</p></div>";
  return choix;
}


function prepare_div_event() {
  $(".draggable").draggable({
    revert: "valid"
  });
  $("#map").droppable({
    drop: function(event, ui) {
      var pays = ui.draggable.attr("lieu");
      var iChoix = ui.draggable.attr('id');
     var iGood = tabObject[numQuestion].reponse;
     var iLong = tabObject[numQuestion].longitude;
     var iLat = tabObject[numQuestion].latitude;
     var iInfo = tabObject[numQuestion].info;
     reponse(iChoix, iGood,iLat,iLong, iInfo);
     $(".draggable").draggable('disable');
    }
  });

}


function chargerQuestions() {
  try {
    $.ajax({
      url: "qcm.php",
      type: "GET",
      dataType: "json",
      success: function(data) {
        tabObject = data;
      },
      error: function(error) {
        alert("erreur : " + error);
      }
    });
  } catch (err) {
    alert("erreur : " + err.message);
  }
}
function onClick(e) {

  $.ajax({
      type: 'GET',
      url: "http://nominatim.openstreetmap.org/reverse",
      dataType: 'jsonp',
      jsonpCallback: 'data',
      data: { format: "json", limit: 1,lat: e.latlng.lat,lon: e.latlng.lng,json_callback: 'data' },
      error: function(xhr, status, error) {
    alert("ERROR "+error);
      },
      success: function(data){
    var paysVisite="";
    $.each(data, function() {
      paysVisite = this['country'] ;
    });

    //affichage des infos
    L.marker(e.latlng).addTo(map).bindPopup("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng+" Pays : "+paysVisite).openPopup();

    var iGood = tabObject[numQuestion].reponse;
    var iLong = tabObject[numQuestion].longitude;
    var iLat = tabObject[numQuestion].latitude;
    var iInfo = tabObject[numQuestion].info;
    reponse(paysVisite,iGood, iLat, iLong, iInfo );
      }
  });
}

function reponse(rep, repGood, repLat, repLong, repInfo)  {
  if(rep == repGood) {
		$("#info").html("Bonne reponse").css('color','green');
    L.marker([repLat,repLong]).addTo(map).bindPopup(repInfo).openPopup();
    clearTimeout(timer);
    if(!getlvl2() && !getlvl3()) {
      increResultat1();
    }
    else if (getlvl2() && !getlvl3()) {
      increResultat2();
    }
    else if (getlvl3() && !getlvl2() )
      increResultat3();

	}
	else {
		$("#info").html("Mauvaise reponse").css('color','red');
	}

}
