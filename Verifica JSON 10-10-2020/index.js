"use strict";

let intestazioni = ["idMeal", "strMeal", "img", "", ""];
let larghezze = ["50px", "310px", "60px", "40px", "40px"];

window.onload = function () {
  let _table = document.getElementById("table");
  let _divDettagli = document.getElementById("dettagliWrapper");
  // puntatori bottoni navigazione
  let _btnFirst = document.getElementById("first");
  let _btnPrevPage = document.getElementById("revPage");
  let _btnNextPage = document.getElementById("nextPage");
  let _btnLast = document.getElementById("last");
  let _lblPagina = document.getElementById("nPagina");



  // indici
  let selectedRadio = "Breakfast";

  let nextPage = 1;
  let prevPage = nextPage - 7;

  creaRadioButton();
  caricaDati();

  function creaRadioButton() {
    for (const item in categoryList) {
      let _radioWrapper = document.getElementById("radioWrapper");
      let _radioButton = document.createElement("input");
      _radioButton.type = "radio";
      _radioButton.name = "category";
      _radioButton.value = item;
      _radioButton.addEventListener("click", caricaDatiSelezionati);
      if (_radioButton.value == "Breakfast") {
        _radioButton.checked = true;
      }
      _radioWrapper.appendChild(_radioButton);

      let _span = document.createElement("span");
      _span.innerHTML = item;
      _radioWrapper.appendChild(_span);

      let _br = document.createElement("br");
      _radioWrapper.appendChild(_br);
    }
  }

  function creaIntestazioni() {
    let _tr = document.createElement("tr");
    for (let i = 0; i < intestazioni.length; i++) {
      let _th = document.createElement("th");
      _th.innerHTML = intestazioni[i];
      _th.style.width = larghezze[i];
      _tr.appendChild(_th);
    }
    _table.appendChild(_tr);
  }

  function caricaDatiSelezionati() {
    selectedRadio = this.value;
    _divDettagli.innerHTML = "";
    caricaDati();
  }

  function caricaDati() {
    _table.innerHTML = "";
    creaIntestazioni();
    let cont = 0;
    for (const item of categoryList[selectedRadio]) {
      let _tr = document.createElement("tr");

      let _td = document.createElement("td");
      _td.innerHTML = item.idMeal;
      _tr.appendChild(_td);

      _td = document.createElement("td");
      _td.innerHTML = item.strMeal;
      _tr.appendChild(_td);

      _td = document.createElement("td");
      let _img = document.createElement("img");
      _img.src = item.strMealThumb;
      _img.style.width = "55px";
      _img.id = item.idMeal;
      _img.addEventListener("click", apriYoutube);
      _td.appendChild(_img);
      _tr.appendChild(_td);

      _td = document.createElement("td");
      _img = document.createElement("img");
      _img.src = "img/lente.jpg";
      _img.style.width = "30px";
      _img.id = item.idMeal;
      _img.addEventListener("click", visualizzaDettagli);
      _td.appendChild(_img);
      _tr.appendChild(_td);

      _td = document.createElement("td");
      _img = document.createElement("img");
      _img.src = "img/delete.png";
      _img.style.width = "30px";
      _img.id = item.idMeal;
      _img.addEventListener("click", elimina);
      _td.appendChild(_img);
      _tr.appendChild(_td);

      _table.appendChild(_tr);
      cont++;
      if(cont == 7) {
        break;
      }
    }
  }

  function visualizzaDettagli() {
    _divDettagli.innerHTML = "";
    let _p = document.createElement("p");
    for (let i = 0; i < details.meals.length; i++) {
      for (const key in details.meals[i].meals[0]) {
        if (details.meals[i].meals[0][key] == this.id) {
          _p.innerHTML += "<b>" + details.meals[i].meals[0].strMeal + "</b> ";
          _p.innerHTML += details.meals[i].meals[0].strInstructions;
          break;
        }
      }
    }
    _divDettagli.appendChild(_p);
  }

  function elimina() {
    _divDettagli.innerHTML = "";
    for (let i = 0; i < categoryList[selectedRadio].length; i++) {
      if (categoryList[selectedRadio][i].idMeal == this.id) {
        categoryList[selectedRadio].splice(i, 1);
        break;
      }
    }
    caricaDati();
  }

  function apriYoutube() {
    for (const item of details["meals"]) {
      if (item["meals"][0].idMeal == this.id) {
        window.open(item["meals"][0].strYoutube);
        break;
      }
    }
  }
};
