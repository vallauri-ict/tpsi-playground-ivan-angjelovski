"use strict";

$(document).ready(function(){
	
	let wrapper = $("#wrapper");
	
	for(let i = 0; i < 36; i++){
		/*let box = $("<div>");
		box.addClass("box");
		wrapper.append(box);*/
		$("<div>").addClass("box").appendTo(wrapper);
	};
	
	// setInterval va avanti all'infinito e setTimeout viene fatto solo una volta,
	// si deve fare la ricorsione per il loop
	setInterval(aggiorna, 32);
	
	function aggiorna(){
		let n = generaNumero(0, 35);
		// .children() tutti i children, che tanto sono tutti box
		let box = wrapper.children(".box").eq(n);
		// vengono eseguite in sequenza perchè si riferiscono allo stesso oggetto !!!
		// ogni oggetto ha un suo thread di animazione
		box.animate({"opacity": 0.3}, 400) // 400 = default
		   .animate({"opacity": 0.6}, 400)
		   .animate({"opacity": 0.1}, 400);
		// se lancio 3 animazioni sullo stesso box vengono accodate
	};
	
	function generaNumero(min, max){
		return Math.floor((max - min + 1) * Math.random() + min);
	};
});