"use strict"

$(document).ready(function(){
    let table = $("#table>div");
    
    // nell'url la risorsa non deve cominciare con "/"
    // perchè altrimenti va a cercare il file come risorsa
    // assoluta !!!
    let request = inviaRichiesta("GET", "servizi/elencoDischi.php");
    request.fail(errore);
    request.done(function(data){
        console.log(data);
		
        // qui data arriva come oggetto perchè nella richiesta abbiamo
        // fatto dataType json, che parsifica i dati che ci arrivano
        // trasformandoli in object
        for (const item of data) {
            // let div = $("<div>");
            // div.appendTo(table);

            let txt = $("<input type='text'>");
            txt.val(item.id);
            txt.appendTo(table);
			txt.prop("disabled", true);

            txt = $("<input type='text'>");
            txt.val(item.autore);
            txt.appendTo(table);

            txt = $("<input type='text'>");
            txt.val(item.titolo);
            txt.appendTo(table);

            txt = $("<input type='text'>");
            txt.val(item.anno);
            txt.appendTo(table);

            let button = $("<button class='btn btn-outline-dark'>");
            button.html("Salva");
            button.appendTo(table);
            button.prop("disabled", true);
			button.prop("id", item.id);
            button.on("click", salva);

            button = $("<button class='btn btn-outline-dark'>");
            button.html("Annulla");
            button.appendTo(table);
            button.prop("disabled", true);
			button.prop("disco", item);
            button.on("click", annulla);

            button = $("<button class='btn btn-outline-dark'>");
            button.html("Elimina");
            button.appendTo(table);
            button.prop("id", item.id);
            button.on("click", elimina);
        }
		table.on("input", "input", function(){
			$(this).nextAll("button").eq(0).prop("disabled", false);
			$(this).nextAll("button").eq(1).prop("disabled", false);
		});
    });

    function elimina(){
        let param = {
            "id": $(this).prop("id"),
        }
        let request = inviaRichiesta("post", "servizi/elimina.php", param);
        request.fail(errore);
        request.done(function(data){
            console.log(data);
            alert("eliminazione avvenuta correttamente");

            window.location.reload();
        });
    }

    function annulla(){
		window.location.reload();
    }

    function salva(){
		let param = {
			"id": $(this).prop("id"),
			"autore": $(this).prevAll("input").eq(2).val(),
			"titolo": $(this).prevAll("input").eq(1).val(),
			"anno": $(this).prevAll("input").eq(0).val(),
		};
        let request = inviaRichiesta("post", "servizi/salva.php", param);
        request.fail(errore);
        request.done(function(data){
            console.log(data);
            alert("dati salvati correttamente");

            window.location.reload();
        });
    }
});