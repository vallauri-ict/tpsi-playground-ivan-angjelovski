$(document).ready(function(){
	
	// _p è una collezione jQuery (vettore enumerativo di puntatori)
	let _p = $("p"); // posso applicare solo metodi jQuery
	console.log(_p.length);
	_p.css("backgroundColor", "#FF0");
	
	$(".primo").css("backgroundColor", "#F00");
	
	// ci darà il colore del primo p solo
	console.log(_p.css("backgroundColor")); // in lettura applica solo al primo
	
	// _p.hide(800);
	
	_p.html("nuovo valore"); // .html = .innerHTML
	
	_p[2].innerHTML = "nuovo valore";
	
	for(let obj of _p)
	{
		obj.style.backgroundColor = "green";
	}
	
	// js
	let p1 = document.getElementsByClassName("primo")[0];
	p1.innerHTML = "sono il primo elemento";
	
	// jQ
	let _p1 = $(p1);
	_p1.css("backgroundColor", "#00F");
	
	// js
	let aus = _p1[0]
	aus.style.color = "#FFF";
	
});
