"use strict";

// $("form p").on("click", visualizza) equivalente
// $("form").on("click", "p", visualizza) // si verifica solo se clicco sui tag p

const DIM = 4;

$(document).ready(function () {
    let wrapper = $("#wrapper");
	creaElementi();
	assegnaValori();
	// funziona solo se gli elementi sono già creati
	// wrapper.children("div").on("click", move);
	
	wrapper.on("click", "div", move);
	
	function creaElementi(){
		let first = true;
		let larghezza;
		for (let i = 0; i < DIM; i++) {
			for (let j = 0; j < DIM; j++) {
				let div = $("<div>");
				div.addClass("pedina");
				div.appendTo(wrapper);
				if(first){
					larghezza = parseInt(div.css("width")) + 
								parseInt(div.css("margin-left"))*2 + 
								parseInt(div.css("border-left-width"))*2 + 
								parseInt(div.css("padding-left"))*2;
					first = false;
				}		
				div.css({"top":larghezza*i, "left":larghezza*j});
				// ATTENZIONE !!!
				div.prop("id", "btn-" + i + "-" + j);
			}
		}
	}
	
	
	function assegnaValori(){
		let numeri = new Array(16); // x dimensionarlo diamo new Array
		for(let i = 0; i < 15; i++) {
			numeri[i] = (i + 1);
		}
		numeri[15] = "";
		
		let divs = wrapper.children("div");
		divs.each(function(i, ref){
			let pos = generaNumero(0, numeri.length-1);
			$(ref).text(numeri[pos]); // ref puntatore javascript
			if(numeri[pos]!="") {
				$(ref).addClass("grigio");
			}
			// $(ref).on("click", move); // se deve passare un'altra volta di qua non va bene
			// perchè fa partire due volte la stessa funzione !!!
			numeri.splice(pos, 1);
		})
	}
	
	function move() {
		let id = $(this).prop("id");
		let aus = id.split('-');
		let i = aus[1];
		let j = aus[2];
		i = parseInt(i);
		j = parseInt(j);
		if(j > 0 && $(`#btn-${i}-${j-1}`).text()=="") {
			scambio($(this), $(`#btn-${i}-${j-1}`));
		} else if (i > 0 && $(`#btn-${i-1}-${j}`).text()=="") {
			scambio($(this), $(`#btn-${i-1}-${j}`));
		} else if (j < 3 && $(`#btn-${i}-${j+1}`).text()=="") {
			scambio($(this), $(`#btn-${i}-${j+1}`));
		} else if (i < 3 && $(`#btn-${i+1}-${j}`).text()=="") {
			scambio($(this), $(`#btn-${i+1}-${j}`));
		}
	}
	
	function scambio(myCell, freeCell) {
		wrapper.off("click","div");
		myCell.animate({
			"top": freeCell.css("top"),
			"left": freeCell.css("left"),
		}, 250);
		
		freeCell.animate({
			"top": myCell.css("top"),
			"left": myCell.css("left"),
		}, 250, function(){
			let id = myCell.prop("id");
			myCell.prop("id", freeCell.prop("id"));
			freeCell.prop("id", id);
			if(controllaVincita())
				alert("Bravissimo hai vinto");
			else
				wrapper.on("click","div", move);
		});
	}
	
	function controllaVincita() {
		let cnt = 0;
		for(let i = 0; i < DIM; i++) {
			for(let j = 0; j < DIM; j++) {
				let n = parseInt($(`#btn-${i}-${j}`).text());
				cnt++;
				if(n != cnt && cnt != 16) {
					return false;
				}
			}
		}
		return true;
	}

    // la differenza dall'altra forma è che dato che all inizio non c'è div
    // non funzionerà. così funziona sia sui div già esistenti sia sui div
    // che andrò a creare successivamente
  
    function generaNumero(min, max){
	    return Math.floor((max - min + 1) * Math.random() + min);
    };
});
