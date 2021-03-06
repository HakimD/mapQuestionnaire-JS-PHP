	var map;

	window.onload = function () {

	//Chargement initial de la MAP
	map = L.map('map').setView([0,0],4);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: 'PING'}).addTo(map);

	//Rendre draggable les div des pays
	$( "#France" ).draggable({ revert: "valid" });
	$( "#Canada" ).draggable({ revert: "valid" });
	$( "#Italie" ).draggable({ revert: "valid" });
	$( "#Belgique" ).draggable({ revert: "valid" });
	$( "#Japan" ).draggable({ revert: "valid" });

	//Rendre la map droppable
	 $( "#map" ).droppable({

		 //Evenement lors du drop
		drop: function( event, ui ) {

			//Recup�re l'id du block div "dropped" dans la map
			var IdPays = ui.draggable.attr("id");

			var chaine="";
			chaine+="Pays : "+IdPays+"</br>";

			//Requete AJAX pour r�cup�rer les coordonn�es (lati, longi) du pays
			$.ajax({
			    type: 'GET',
			    url: "http://nominatim.openstreetmap.org/search",
			    dataType: 'jsonp',
			    jsonpCallback: 'data',
			    data: { format: "json", limit: 1,city: IdPays,json_callback: 'data' },
			    error: function(xhr, status, error) {
				alert("ERROR "+error);
			    },
			    success: function(data){
				//r�cup�rer les coordonn�es (lati, longi) du pays dans les donn�es json provenant du serveur
				var lati = '';
				var longi = '';
				$.each(data, function() {
					lati = this['lat'] ;
					longi = this['lon'] ;
				});

				//affichage des infos
				chaine+="Latitude : "+lati+"</br>";
				chaine+="Longitute : "+longi+"</br>";
				$( "#info" ).html(chaine);

				//MAJ de la map � la position (lati, longi) du pays
				map.panTo(new L.LatLng(lati, longi));

			    }
			});


		}
	});

	//Sur le click de la map, ajout d'un marqueur sur la carte avec le nom du pays
	map.on('click', onClick);

	function onClick(e) {
		//recherche le pays sur lequel on a click�
		//Requete AJAX pour r�cup�rer les infos du pays sur le point o� on a cliqu� (lati, longi)
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
			//r�cup�rer les coordonn�es (lati, longi) du pays dans les donn�es json provenant du serveur
			var paysVisite="";
			$.each(data, function() {
				paysVisite = this['country'] ;
			});

			//affichage des infos
			L.marker(e.latlng).addTo(map).bindPopup("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng+" Pays : "+paysVisite).openPopup();
			L.circle(e.latlng, 1).addTo(map);
		    }
		});
	}


}
