"use strict";

let elencoArticoli;

$(document).ready(function () {
  let wrapper = $("#elencoArticoli");
  let details = $(".details");

  $.ajax({
    url: "http://localhost:3000/fotocamere",
    timeout: 5000,
    success: visualizza,
    error: errore,
  });

  details.hide();
  wrapper.on("mouseover", "img", function () {
    $(this).next().text($(this).prop("name"));
  });
  wrapper.on("mouseout", "img", function () {
    $(this).next().text("");
  });

  wrapper.on("click", ".article", function () {
    details.empty();

    details.slideDown(1000);

    let pos = $(this).prop("id").split("-")[1];

    let div = $("<div>");
    div.appendTo(details);
    div.addClass("detail-close");

    let span = $("<span>");
    span.appendTo(div);
    span.text("X");
    span.on("click", function () {
      details.slideUp(1000);
    });

    let divImg = $("<div>");
    divImg.appendTo(details);
    divImg.addClass("detail-img");
    let img = $("<img>");
    img.appendTo(divImg);
    img.prop("src", `images/${elencoArticoli[pos].src}.jpg`);

    let divInfo = $("<div>");
    divInfo.appendTo(details);
    divInfo.addClass("detail-info");
    let h4 = $("<h4>");
    h4.appendTo(divInfo);
    h4.addClass("item-title");
    h4.text(elencoArticoli[pos].nome);
    let p = $("<p>");
    p.appendTo(divInfo);
    p.text(elencoArticoli[pos].descrizione);
    let pPrice = $("<p>");
    pPrice.appendTo(divInfo);
    pPrice.text(elencoArticoli[pos].prezzo);
    let button = $("<button>");
    button.appendTo(divInfo);
    button.addClass("item-add");
    button.text("Aggiungi al carrello");
    button.prop("nome", elencoArticoli[pos].nome);
    button.prop("prezzo", elencoArticoli[pos].prezzo);
    button.on("click", aggiungi);
  });

  let aperto = false;

  $("#btnCarrello").on("click", function () {
    if (aperto) {
      $("#carrello").slideUp(1000);
      $(this).html("&#709 Apri carrello");
    } else {
      $("#carrello").slideDown(1000);
      $(this).html("&#708 Chiudi carrello");
    }
    aperto = !aperto;
  });

  function aggiungi() {
    let table = $("#carrello table");
    let nome = $(this).prop("nome");
    let prezzo = $(this).prop("prezzo");

    let trovato = false;
    // each è un metodo asincrono, parte su un thread differente
    table.find("tr").each(function (i, ref) {
      if ($(ref).children("td").eq(0).text() == nome) {
        let qta = parseInt($(ref).children("td").eq(2).text());
        qta++;
        $(ref).children("td").eq(2).text(qta);
        trovato = true;
      }
    });

    if (!trovato) {
      let tr = $("<tr>");
      tr.appendTo(table);

      let tdNome = $("<td>");
      tdNome.appendTo(tr);
      tdNome.text(nome);

      let tdPrezzo = $("<td>");
      tdPrezzo.appendTo(tr);
      tdPrezzo.text(prezzo);

      let tdQta = $("<td>");
      tdQta.appendTo(tr);
      tdQta.text("1");

      let tdElimina = $("<td>");
      tdElimina.appendTo(tr);
      let imgElimina = $("<img>");
      imgElimina.appendTo(tdElimina);
      imgElimina.prop("src", "images/_cestino.png");
      imgElimina.on("click", function () {
        $(this).parent().parent().remove();
      });
    }
  }

  function visualizza(data) {
    console.log(data);
    // salvo l'elenco dei dati nella variabile globale
    // elencoArticoli
    elencoArticoli = data;
    let i = 0;
    for (const item of data) {
      let article = $("<div>");
      article.appendTo(wrapper);
      article.prop("id", `article-${i}`);
      article.addClass("article");

      let articleImg = $("<img>");
      articleImg.appendTo(article);
      articleImg.prop("name", item.nome);
      articleImg.prop("src", `images/${item.src}.jpg`);
      articleImg.prop("title", "Aggiungi al carrello");
      articleImg.addClass("image");

      let articleName = $("<div>");
      articleName.appendTo(article);
      articleName.addClass("name");

      i++;
    }
  }
});

function errore(jqXHR, textStatus, str_error) {
  if (jqXHR.status == 0) alert("connection refused or server timeout");
  else if (jqXHR.status == 200)
    alert("Errore Formattazione dati\n" + jqXHR.responseText);
  else alert("Server Error: " + jqXHR.status + " - " + jqXHR.responseText);
}
