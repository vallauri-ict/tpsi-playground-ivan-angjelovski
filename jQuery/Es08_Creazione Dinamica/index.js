'use strict'

let ul = [];
let _wrapper;

$(document).ready(function(){
	_wrapper = $("#wrapper");
	ul.push(_wrapper.children("ul").eq(0));
	ul.push(_wrapper.children("ul").eq(1)); 
});

function aggiungi(index){
	index--;
	// let li = $("<li>menu 1 voce 4</li>");
	let li = $("<li>");
	let n = ul[index].children(li).length + 1;
	// con .text metti solo testo non tag
	li.html("menu " + (index+1) + " voce <b>" + n + "</b>");
	// ul[index].append(li);
	li.appendTo(ul[index]);
};

function sposta(index){
	index--;
	let li = ul[index].children("li").last();
	if(index==0){
		li.appendTo(ul[1]);
	}
	else if(index==1){
		li.appendTo(ul[0]);
	};
};

function aggiungiPrima(index){
	index--;
	let li = $("<li>");
	li.text("voce iniziale");
	// ul[index].children("li").first().before(li);
	li.insertBefore(ul[index].children("li").first());
};

function aggiungiDopo(index){
	index--;
	let li = $("<li>");
	li.text("voce dopo il primo elemento");
	// ul[index].children("li").first().after(li);
	li.insertAfter(ul[index].children("li").first());
};

function replica(index){
	index--;
	let li = $("<li>");
	li.text("aaaaaaaaaa");
	// ul[index].children("li").before(li);
	li.insertBefore(ul[index].children("li"));
};

function creazioneConCostruttore(){
	$("<div>", {
		"css": { // metodo jQuery
			"background-color": "#ddd",
			"color": "blue",
		},
		"text": "hello world ", // metodo jQuery
		"appendTo": _wrapper,
		"append": [ // le parentesi quadre consentono di appendere più elementi allo stesso tempo
			$("<label>", { "text": "hobbies" }),
			$("<input>", { "type": "radio", "name": "hobbies" }),
			$("<span>",  { "text": "sports" }),
			$("<input>", { "type": "radio", "name": "hobbies" }),
			$("<span>",  { "text": "musica" }),
		],
	});
};