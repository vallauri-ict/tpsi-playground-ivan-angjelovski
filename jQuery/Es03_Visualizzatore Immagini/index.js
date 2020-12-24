"use strict";

let pulsante = {
  width: "140px",
  height: "40px",
  "font-weight": "bold",
  "background-color": "orange",
  "border-radius": "50%",
};

window.onload = function () {
  let _btnIndietro = $("#btnIndietro");
  let _btnAvanti = $("#btnAvanti");
  let _img = $("#img");

  _img.css("width", "400px");

  _btnIndietro.css(pulsante);
  _btnAvanti.css(pulsante);

  let i = 0;
  _img.prop("src", "img/img" + (i + 1) + ".jpg");
  _btnIndietro.prop("disabled", true);
  setLineHeight();

  _btnIndietro.on("click", function () {
    i--;
    _img.prop("src", "img/img" + (i + 1) + ".jpg");
    setLineHeight();
    if (i == 0) {
      _btnIndietro.prop("disabled", true);
    }
    _btnAvanti.prop("disabled", false);
  });

  _btnAvanti.on("click", function () {
    i++;
    _img.prop("src", "img/img" + (i + 1) + ".jpg");
    setLineHeight();
    if (i == 6) {
      _btnAvanti.prop("disabled", true);
    }
    _btnIndietro.prop("disabled", false);
  });

  function setLineHeight() {
    // _btnAvanti.css("line-height", _img.css("height"));
    // _btnIndietro.css("line-height", _img.css("height"));
  }
};
