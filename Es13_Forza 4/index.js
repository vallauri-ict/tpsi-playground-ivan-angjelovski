"use strict"

const RIGHE = 6;
const COLONNE = 7;
const GIALLO = "rgb(255, 255, 0)";
const ROSSO = "rgb(255, 0, 0)";
const GRIGIO = "rgb(187, 187, 187)";
let turno = GIALLO;

 $(document).ready(function(){
	let wrapper = $("#wrapper");
	let header = $("#header");
	
	// se il programma dovesse passare per questa parte di codice
	// usiamo i delegated events perchè altrimenti aggiungerebbe
	// un'altra volta l'evento e verrebbe eseguito due volte
	
	// creazione pedine header
	for(let i = 0; i < COLONNE; i++) {
		let pedina = $("<div>");
		pedina.addClass("pedina");
		pedina.appendTo(header);
		// solo .hover restituisce le callback e .on("hover") no
		pedina.hover(function() {
			$(this).css("background-color", turno);
		}, function() {
			$(this).css("background-color", GRIGIO);
		});
	};
	
	// creazione pedine wrapper
	for(let i = 0; i < RIGHE; i++) {
		for(let j = 0; j < COLONNE; j++) {
			let pedina = $("<div>");
			pedina.addClass("pedina");
			pedina.appendTo(wrapper);
			pedina.prop("id", `btn-${i}-${j}`);
		};
	};
	
	header.on("click", "div", down);

	function down() {
    //restituisce l'indice di $(this) all'interno di header
    let colonna = header.children("div").index($(this));
    let riga = RIGHE - 1; //posizione prima cella libera di default
    for (let i = 0; i < RIGHE; i++) {
      let p = $(`#btn-${i}-${colonna}`);
      if (p.css("backgroundColor") != GRIGIO) {
        riga = i - 1;
        break;
      }
    }
    //se cè una cella libera faccio questo
    if (riga != -1) {
      let pedina = $("<div>");
      pedina.appendTo(wrapper);
      pedina.addClass("pedina");
      pedina.css({
        backgroundColor: turno,
        position: "absolute",
        left: colonna * 60 + 5,
        top: "-60px",
      });
      header.off();
      pedina.animate({ top: riga * 60 + 5, }, 200 * (riga + 1), function () {
            if (turno == GIALLO) {
                turno = ROSSO;
              } else {
                turno = GIALLO;
              };
            $(`#btn-${riga}-${colonna}`).css({"backgroundColor": turno});
          header.on("click","div", down);
        });
    } else {
      alert("Mossa non valida");
    };
  }

 });
// Una semplice funzione per aggiungere uno 0 davanti ad un numero < 10
function pad(number) {
     return (number < 10 ? '0' : '') + number;
};