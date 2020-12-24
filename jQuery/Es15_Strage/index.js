"use strict"

$(document).ready(function(){
  let header = $("#header");	
  let mainSection = $("#mainSection");
  let timer = $("#timer");
  let spanMinuti;
  let spanSecondi;
  let timerClock;
  let btnInvia;
  header.animate({"font-size": parseInt(header.css("font-size")) * 15, 
				  "width": parseInt(header.css("width")) * 15,
				  "height": parseInt(header.css("height")) * 15, 
				  "line-height": parseInt(header.css("line-height")) * 15}, 
				  1500, function() {
					let idAnswer = 0;
					for(let i = 0; i < elencoDomande.length; i++) {
					  let fieldset = $("<fieldset>");
					  for(let key in elencoDomande[i]) {
					    switch(key) {
					      case "argomento": 
						    let legend = $("<legend>");
						    // legend.text(elencoDomande[i].key); NON FUNZIONA
						    // legend.text(elencoDomande[i][key]);
						    legend.text(elencoDomande[i]["argomento"]);
						    legend.css({ "color": "blue", "font-size": "12pt" });
						    legend.appendTo(fieldset);
						    break;
						  case "domande":
						    for(let item of elencoDomande[i]["domande"]) {
						  	  let div = $("<div>");
							  div.text(item.domanda);
							  for(let j = 0; j < 2; j++) {
								let radioButton = $("<input type='radio'>");
								let radioLabel = $("<label>");
								radioButton.prop("name", "risposta" + idAnswer);
								if(j) {
								  radioButton.prop("value", "F"); 
								  radioLabel.text("F");
								} else {
								  radioButton.prop("value", "T");	
								  radioLabel.text("T");	
								};
							    radioButton.appendTo(div);
								radioLabel.appendTo(div);
							  };
							  idAnswer++;
							  div.appendTo(fieldset);
							};
						    break;
						  };
						};
					  fieldset.appendTo(mainSection);
					}; 
					
					spanMinuti = $("<span>");
					spanMinuti.appendTo(timer);
					spanSecondi = $("<span>");
					spanSecondi.appendTo(timer);
					timerClock = setInterval(incrementTimer, 1000);
					
					btnInvia = $("<input type='button'>");
					btnInvia.prop("value", "Invia");
					btnInvia.addClass("invia");
					btnInvia.appendTo(mainSection);
					btnInvia.on("click", function() {
					  sendAnswers();
					});
				  });
  
  
  
  let minuti = 0;
  let secondi = 0;
  function incrementTimer() {
	if(secondi == 59) {
	  secondi = 0;
	  minuti++;
	} else {
	  secondi ++;
	};
	if(minuti == 2) {
	  sendAnswers();
	};
	spanSecondi.text(pad(secondi));
	spanMinuti.text(pad(minuti) + ":");
  };
  
  function sendAnswers() {
	btnInvia.off();
	clearInterval(timerClock);
					  btnInvia.css({"background-color": "#ccc", "color": "#999"});
					  let punti = 0;
					  let radioIndex = 0;
					  for(let i = 0; i < elencoDomande.length; i++) {
					    for(let question of elencoDomande[i].domande) {
					      let currentAnswer = $("#mainSection fieldset div").eq(radioIndex).children("input");
						  // se la domanda che stiamo controllando ha una risposta ...
						  if(currentAnswer.is(":checked")) {
						    if(question.risposta == currentAnswer.filter(":checked").val()) {
						   	  punti += 1;  
							} else {
							  if(currentAnswer.filter(":checked").val() == "T") {
								$("#mainSection fieldset div").eq(radioIndex).children("label").eq(0).css("color", "red");	
							  } else {
								$("#mainSection fieldset div").eq(radioIndex).children("label").eq(1).css("color", "red");  
							  };
							  punti -= 0.25;  
							};
						  };
						  radioIndex++;
						};  
					  }; 
					  alert(punti);
  };
});


 
// Una semplice funzione per aggiungere uno 0 davanti ad un numero < 10
function pad(number) {
     return (number < 10 ? '0' : '') + number;
}
