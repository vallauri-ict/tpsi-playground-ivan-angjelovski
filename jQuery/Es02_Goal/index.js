"use strict"

$(document).ready(function() {	
	let _calciatore = $("#calciatore");
	let _palla = $("#palla");
	
	let btnEntra=$("#btnEntra")
	let btnEsci = $("#btnEsci")
	let btnVisualizzaPalla = $("#btnVisualizzaPalla")
	let btnNascondiPalla = $("#btnNascondiPalla")
	let btnTira = $("#btnTira")
	
	_calciatore.hide();
	_palla.hide();
	_palla.prop("goal", false);
	
	// btnEsci.hide();
	btnEsci.css("visibility", "hidden");
	btnNascondiPalla.css({"visibility": "hidden"});
	btnTira.css("visibility", "hidden");
	
	btnEntra.on("click", function(){
		// this è SEMPRE un puntatore javascript !!!
		// this.style.visibility = "hidden";
		// this.css({"visibility": "hidden"});
		
		// devo fare $(this) per trasformare this in puntatore jQuery
		$(this).css({"visibility": "hidden"});
		_calciatore.show(2000, function(){
			//btnEsci.show(); non funzione perchè prima abbiamo usato visibility		// il tempo di default di show è 0
			btnEsci.css("visibility", "visible");
			checkTira();
		});
	});
	
	btnEsci.on("click", function(){
		$(this).css({"visibility": "hidden"});
		
		_calciatore.hide(2000, function(){
			//btnEsci.show(); non funzione perchè prima abbiamo usato visibility		// il tempo di default di show è 0
			btnEntra.css("visibility", "visible");
			btnTira.css("visibility", "hidden");
		});
	});
	
	btnVisualizzaPalla.on("click", function(){
		$(this).css("visibility", "hidden");
		
		_palla.fadeIn(2000, function(){
			btnNascondiPalla.css("visibility", "visible");
			checkTira();
		});
	});
	
	btnNascondiPalla.on("click", function(){
		$(this).css({"visibility": "hidden"});
		
		_palla.fadeOut(2000, function(){
			btnVisualizzaPalla.css("visibility", "visible");
			btnTira.css("visibility", "hidden");
			if($(this).prop("goal")){
				let pos = {
					// lascio vuoto perchè si prende la roba che c'è nel css staticamente
					"left": "",
					"top": "",
					"width": "",
					"height": ""
				};
				$(this).css(pos);
				$(this).prop("goal", false);
			}
		});
	});
	
	function checkTira(){
		if(_calciatore.is(":visible") && _palla.is(":visible")){
			btnTira.css("visibility", "visible");
		}
	};
	
	btnTira.on("click", function(){
		$(this).css("visibility", "hidden");
		let pos = {
			"left": "1025px",
			"top": "300px",
			"width": "50px",
			"height": "50px"
		};
		_palla.animate(pos, 1500, function(){
			$(this).prop("goal", true);
		});
	});
	
	$("#btnRosso").on("click", function(){
		_palla.prop('src','img/pallaRossa.jpg');
		// _palla.attr('src','img/pallaRossa.jpg'); equivalente
	});
	
	$("#btnBianco").on("click", function(){
		_palla.prop('src','img/palla.jpg');
		// _palla.attr('src','img/pallaRossa.jpg'); equivalente
	});
});