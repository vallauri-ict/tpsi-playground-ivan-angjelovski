"use strict";

window.onload = function () {
  let _lstNazioni = document.getElementById("lstNazioni");
  let _divDettagli = document.getElementById("dettagli");

  caricaListaNazioni();
  caricaIntestazioni();
  caricaDati();

  _lstNazioni.addEventListener("change", caricaDati);

  function caricaListaNazioni() {
    let vetNazioni = [];
    let j = 0;
    for (let i = 0; i < json.results.length; i++) {
      if (!vetNazioni.includes(json.results[i].nat)) {
        vetNazioni.push(json.results[i].nat);
        let _option = document.createElement("option");
        _option.text = vetNazioni[j];
        _option.id = "opt" + json.results[i].nat;
        _lstNazioni.appendChild(_option);
        j++;
      }
    }
  }

  function caricaIntestazioni() {
    let intestazioni = ["name", "username", "state", "nat", "img"];
    let _thead = document.getElementById("thead");
    let _tr = document.createElement("tr");
    for (let i = 0; i < intestazioni.length; i++) {
      let _th = document.createElement("th");
      _th.innerHTML = intestazioni[i];
      _tr.appendChild(_th);
    }
    _thead.appendChild(_tr);
  }

  function caricaDati() {
    let _tbody = document.getElementById("tbody");
    _tbody.innerHTML = "";
    let ids = 0;
    for (const item of json.results) {
      let _tr = document.createElement("tr");

      let _td = document.createElement("td");
      _td.innerHTML = item.name.first + " " + item.name.last;
      _tr.appendChild(_td);

      _td = document.createElement("td");
      _td.innerHTML = item.login.username;
      _tr.appendChild(_td);

      _td = document.createElement("td");
      _td.innerHTML = item.location.state;
      _tr.appendChild(_td);

      _td = document.createElement("td");
      _td.innerHTML = item.nat;
      _tr.appendChild(_td);

      _td = document.createElement("td");
      let _img = document.createElement("img");
      _img.src = item.picture.thumbnail;
      _img.addEventListener("click", visualizzaDettagli);
      _img.id = ids;
      ids++;
      _td.appendChild(_img);
      _tr.appendChild(_td);

      // faccio questo per evitare che mi si sballi il visualizza dettagli che ho fatto con un progressivo
      if (_lstNazioni.value == "tutti" || _lstNazioni.value == item.nat) {
        _tbody.appendChild(_tr);
      }
    }
  }

  function visualizzaDettagli() {
    _divDettagli.innerHTML = "";

    let _p = document.createElement("p");
    _p.innerHTML =
      "<img src=" +
      json.results[this.id].picture.large +
      ">" +
      "<br>" +
      json.results[this.id].name.first +
      " " +
      json.results[this.id].name.last +
      "<br>" +
      json.results[this.id].email +
      "<br>" +
      json.results[this.id].phone +
      "<br>" +
      json.results[this.id].cell;
    _divDettagli.appendChild(_p);

    let _button = document.createElement("button");
    _button.innerHTML = "elimina";
    _button.id = this.id;
    _button.addEventListener("click", elimina);
    _divDettagli.appendChild(_button);
  }

  function elimina() {
    _divDettagli.innerHTML = "";

    let isLastRecord = 0;
    for (const item of json.results) {
      if (item.nat == json.results[this.id].nat) {
        isLastRecord++;
      }
    }
    if (isLastRecord == 1) {
      _lstNazioni.removeChild(
        document.getElementById("opt" + json.results[this.id].nat)
      );
    }
    json["results"].splice(this.id, 1);
    caricaDati();
  }
};
