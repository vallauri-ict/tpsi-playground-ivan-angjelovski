"use strict";

const URL = "http://localhost:3000";

$(document).ready(function () {
  let intestazione = [
    {
      tag: "th",
      text: "Modello",
      width: "15%",
    },
    {
      tag: "th",
      text: "Alimentazione",
      width: "15%",
    },
    {
      tag: "th",
      text: "Colore",
      width: "15%",
    },
    {
      tag: "th",
      text: "Anno",
      width: "10%",
    },
    {
      tag: "th",
      text: "Immagine",
      width: "20%",
    },
    {
      tag: "th",
      text: "Dettagli",
      width: "13%",
    },
    {
      tag: "th",
      text: "Elimina",
      width: "12%",
    },
  ];

  let _lstMarche = $("#lstMarche");
  let _lstModelli = $("#lstModelli");
  let _table = $("table");
  let _dettagli = $(".row").eq(2).children("div").eq(1);

  _dettagli.hide();

  let request = inviaRichiesta("get", `${URL}/marche`);

  request.fail(errore);
  // marche == data
  request.done(function (marche) {
    for (const marca of marche) {
      let option = $("<option>");
      option.appendTo(_lstMarche);
      option.val(marca.id).text(marca.nome);
    }

    // devo fare nel done, dopo che ha caricato l'elenco delle
    // automobili, perchè l'esecuzione è in thread diversi
    // quindi, non avendo elementi, dopo averli aggiunti seleziona
    // il primo
    _lstMarche.prop("selectedIndex", "-1");
  });

  _lstMarche.on("change", function () {
    _lstModelli.empty();
    let codMarca = _lstMarche.val();
    let request = inviaRichiesta("get", `${URL}/modelli?codMarca=${codMarca}`);
    request.fail(errore);
    request.done(function (modelli) {
      for (const modello of modelli) {
        let option = $("<option>");
        option.appendTo(_lstModelli);
        option.val(modello.id);
        option.text(modello.nome + " - " + modello.alimentazione);
        // salvo dentro ogni opzione tutte le info
        // relative al modello per cui stiamo creando
        // l'option
        option.prop("modello", modello);
      }
      _lstModelli.prop("selectedIndex", -1);
    });
  });

  _lstModelli.on("change", function () {
    _table.empty();
    // // le [] restituiscono un puntatore js
    // // la eq() restituisce un puntatore jquery
    // console.log(_lstModelli.children("option").eq(_lstModelli.prop("selectedIndex")).text());
    let opzioneSelezionata = _lstModelli.children("option").eq(_lstModelli.prop("selectedIndex"));
    // salva dentro il listbox le info relative
    // al modello selezionato
    _lstModelli.prop("modello", opzioneSelezionata.prop("modello"));
    let codModello = _lstModelli.val();
    let request = inviaRichiesta(
      "get",
      `${URL}/automobili?codModello=${codModello}`
    );
    request.fail(errore);
    request.done(function (automobili) {
      let thead = $("<thead>");
      thead.appendTo(_table);

      let tr = $("<tr>");
      tr.appendTo(thead);
      for (const colonna of intestazione) {
        let th = $(`<${colonna.tag}>`);
        th.appendTo(tr);
        th.text(`${colonna.text}`);
        th.css("width", `${colonna.width}`);
      };

      let tbody = $("<tbody>");
      tbody.appendTo(_table);
      for (const automobile of automobili) {
          let tr = $("<tr>");
          tr.appendTo(tbody);

          let td = $("<td>");
          td.appendTo(tr);
          td.text(_lstModelli.prop("modello").nome);

          td = $("<td>");
          td.appendTo(tr);
          td.text(_lstModelli.prop("modello").alimentazione);

          td = $("<td>");
          td.appendTo(tr);
          td.text(automobile.colore);

          td = $("<td>");
          td.appendTo(tr);
          td.text(automobile.anno);

          td = $("<td>");
          td.appendTo(tr);
          let img = $("<img>");
          img.appendTo(td);
          img.prop("src", `img/${automobile.img}`);
          img.css("width", "65px")

          td = $("<td>");
          td.appendTo(tr);
          let button = $("<button>");
          button.appendTo(td);
          button.addClass("btn btn-xs btn-success");
          button.text("Dettagli");
          // salviamo in una property direttamente il json
          // dell'automobile che corrisponde al bottone
          button.prop("automobile", automobile); 
          button.on("click", dettagli);

          td = $("<td>");
          td.appendTo(tr);
          button = $("<button>");
          button.appendTo(td);
          button.addClass("btn btn-xs btn-secondary");
          button.text("Elimina");
          button.prop("id", automobile.id);
          button.on("click", elimina);
      }
    });
  });

  function dettagli() {
    _dettagli.show();
    // console.log($(this).prop("automobile")); restituisce il json dell'automobile associata al bottone cliccato
    $("#txtId").val($(this).prop("automobile").id);
    $("#txtNome").val(_lstModelli.prop("modello").nome);
    $("#txtAlimentazione").val(_lstModelli.prop("modello").alimentazione);
    $("#txtCilindrata").val(_lstModelli.prop("modello").cilindrata);
    $("#txtTarga").val($(this).prop("automobile").targa);
    $("#txtColore").val($(this).prop("automobile").colore);
    $("#txtAnno").val($(this).prop("automobile").anno);
    $("#txtKm").val($(this).prop("automobile").km);
    $("#txtPrezzo").val($(this).prop("automobile").prezzo);
  };

  function elimina() {
    // delete x cancellare un record
    let deleteRequest = inviaRichiesta("delete", `${URL}/automobili/${$(this).prop("id")}`);
    deleteRequest.fail(errore);
    deleteRequest.done(function() {
      alert("Record eliminato correttamente");
      // forza l'evento change, come se avessi
      // cliccato un option del listbox
      _lstModelli.trigger("change");
    });
  };

  let btnSalva = $("#btnSalva");
  btnSalva.on("click", function() {
    let editRequest = inviaRichiesta("patch", `${URL}/automobili/${$("#txtId").val()}`, {"prezzo": $("#txtPrezzo").val()});
    editRequest.fail(errore);
    editRequest.done(function() {
      alert("Record aggiornato correttamente");
      _lstModelli.trigger("change");
    });
  });
});
