"use strict"

$(document).ready(function(){
	const url = "https://randomuser.me/api/"; // richiesti i dati a questo server, vengono spediti serializzati
	let _table = $("#wrapper table");
	
	// $ ajax si aspetta delle chiavi
	$.ajax({
		"url": url + "?results=50",
		// "contentType": "application/x-www-form-urlencoded;charset=utf-8", // default
		// "dataType": "json", // default // con questa cosa vengono convertiti in json i dati che arrivano dal server
		// "timeout": 10000 // default // se in 5 secondi non arriva qualcosa va in errore
		"success": function (data) { // data rappresenta il json GIA' PARSIFICATO restituito dal server
			// console.log(data); **************************
			// data ha due campi, in results ci sono i risultati
			for (let person of data.results){
				let tr = $("<tr>");
				tr.appendTo(_table.children("tbody"));
				let name = person.name.first + " " + person.name.last;
				$("<td>").appendTo(tr).text(name);
				$("<td>").appendTo(tr).text(person.nat);
				$("<td>").appendTo(tr).text(person.location.country);
				$("<td>").appendTo(tr).text(person.location.state);
				$("<td>").appendTo(tr).text(person.cell);
				let _img = $("<img>");
				_img.prop("src", person.picture["thumbnail"]);
				$("<td>").append(_img).appendTo(tr);
			};
			
			// se lancio .DataTable prima che la tabella sia stata popolata
			// l'applicazione funziona ugualmente però visualizza un fastidioso
			// messaggio iniziale "tabella vuota"
			_table.DataTable( {
				"bPaginate": true, // paginazione dei record da visualizzare
				"bLengthChange": true, // n. di record per pagina
				"bFilter": true, // ricerca della voce impostata
				"bSort": true, // ordinamento dei record sul click on the header
			});
		},
		"error": errore,
	});
		
	

});

function errore(jqXHR, text_status, string_error) {
    if (jqXHR.status == 0)
        alert("Connection Refused or Server timeout");
	else if (jqXHR.status == 200)
        alert("Formato dei dati non corretto : " + jqXHR.responseText);
    else
        alert("Server Error: " + jqXHR.status + " - " + jqXHR.responseText);
};