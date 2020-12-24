"use strict";

$(document).ready(function () {
  let _lampadina = $(".lampadina");
  let _btnAccendi = $("#btnAccendi");
  let _btnSpegni = $("#btnSpegni"); // $ restituisce una collezione jQuery di più elementi
  let _descrizione = $("#descrizione");
  let _contenuto = $("#contenuto");

  // se ci fossero più elementi btnSpegni sarebbero tutti nascosti
  // alle collezioni jQuery si possono dare solo funzioni jQuery !!!
  // in jQuery c'è hide per nascondere un oggetto
  _btnSpegni.hide();
  _lampadina.hide(); // come se avessi fatto display: none;, rimuove l'oggetto e la sua occupazione

  _btnAccendi.on("click", function () {
    _lampadina.addClass("accesa"); // aggiunge la classe agli oggetti della collezioni _lampadina
    _lampadina.fadeIn(2000, function () {
      _btnAccendi.hide();
      _btnSpegni.show();
    });
  });

  _btnSpegni.on("click", function () {
    _lampadina.fadeOut(500, function () {
      _btnSpegni.hide();
      _btnAccendi.show();
    });
    _lampadina.removeClass("accesa");
  });

  let descrizione = {
    "width": "160px",
    "height": "40px",
    "text-align": "center",
    "lineHeight": "40px",
    "background-color": "#aaa",
    "textDecoration": "underline",
    "fontSize": "14pt",
    "cursor": "pointer",
    "borderRadius": "10px",
    "margin-left": "10px"
  };

  // proprietà jQuery che aggiunge un css json
  _descrizione.css(descrizione);
  _contenuto.hide();

  _descrizione.on("mouseover", function(){
    _contenuto.slideDown(100);
  });

  _descrizione.on("mouseout", function(){
    _contenuto.slideUp(100);
  });
});
