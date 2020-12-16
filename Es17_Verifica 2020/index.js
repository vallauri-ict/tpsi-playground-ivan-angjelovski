"use strict";

$(document).ready(function () {
  let wrapper = $("#elencoArticoli");
  let details = $(".details");
  let carrello = $("#carrello");

  let i = 0;
  for (let articolo of articoli) {
    let div = $("<div>");
    div.appendTo(wrapper);
    div.prop("id", `articolo-${i}`);
    i++;
    div.addClass("article");

    let img = $("<img>");
    img.appendTo(div);
    img.prop("src", `img/${articolo.src}.jpg`);
    img.prop("title", "Aggiungi al carrello");
    img.addClass("image");

    let divName = $("<div>");
    divName.appendTo(div);
    divName.addClass("name");
  }

  let index;
  $("#elencoArticoli .article .image").hover(
    function () {
      index = parseInt(wrapper.find(".image").index($(this)));
      wrapper.find(".name").eq(index).text(articoli[index].nome);
    },
    function () {
      wrapper.find(".name").eq(index).text("");
    }
  );

  let open = true;
  let btnCarrello = $("#btnCarrello");
  carrello.hide();
  btnCarrello.on("click", function () {
    if (open) {
      carrello.slideDown(1000);
      $(this).html("&#708 Chiudi carrello");
      open = false;
    } else {
      carrello.slideUp(1000);
      $(this).html("&#709 Apri carrello");
      open = true;
    }
  });

  details.hide();
  let clickIndex;
  wrapper.children(".article").on("click", function () {
	details.slideDown(1000);
    clickIndex = parseInt(wrapper.children(".article").index($(this)));
    details.empty();

    // close
    let divClose = $("<div>");
    divClose.appendTo(details);
    divClose.addClass("detail-close");

    let spanClose = $("<span>");
	spanClose.appendTo(divClose);
	spanClose.text("X");
	spanClose.on("click", function(){
	  details.slideUp(1000);
	});

    // image
    let divImg = $("<div>");
    divImg.appendTo(details);
    divImg.addClass("detail-img");

    let imgImg = $("<img>");
    imgImg.appendTo(divImg);
    imgImg.prop("src", `img/${articoli[clickIndex].src}.jpg`);

    // info
    let divInfo = $("<div>");
    divInfo.appendTo(details);
    divInfo.addClass("detail-info");

    let h4Info = $("<h4>");
    h4Info.appendTo(divInfo);
    h4Info.addClass("item-title");
    h4Info.text(articoli[clickIndex].nome);

    let pDetails = $("<p>");
    pDetails.appendTo(divInfo);
    pDetails.text(articoli[clickIndex].descrizione);

    let pPrice = $("<p>");
    pPrice.appendTo(divInfo);
    pPrice.text("$ " + articoli[clickIndex].prezzo);

    let btnAdd = $("<button>");
    btnAdd.appendTo(divInfo);
    btnAdd.addClass("item-add");
	btnAdd.html("Aggiungi al carrello");
	btnAdd.on("click", add);
  });

  function add() {
	let table = $("#carrello table");
	let addAnotherOne = true;
	let addQuantityIndex;
	for (let i = 1; i < $("#carrello table tbody tr").length; i++) {
	  if($("#carrello table tbody tr").eq(i).children("td").html() == articoli[clickIndex].nome) {
		addAnotherOne = false;
		addQuantityIndex = i;
	  };
	};
	if(addAnotherOne) {
	  let tr = $("<tr>");
	  tr.appendTo(table);

	  // th nome
	  let tdNome = $("<td>");
	  tdNome.appendTo(tr);
	  tdNome.text(articoli[clickIndex].nome);

	  // th prezzo
	  let tdPrezzo = $("<td>");
	  tdPrezzo.appendTo(tr); 
	  tdPrezzo.text("€ " + articoli[clickIndex].prezzo);
	 
	  // th quantità
	  let tdQuantita = $("<td>");
	  tdQuantita.appendTo(tr);
	  tdQuantita.text("1");

	  // th elimina
	  let tdElimina = $("<td>");
	  tdElimina.appendTo(tr);
	  tdElimina.on("click", deleteItem);
	  let imgElimina = $("<img>");
	  imgElimina.appendTo(tdElimina);
	  imgElimina.prop("src", "img/_cestino.png");
	  
	} else {
		let currentQuantity = parseInt($("#carrello table tbody tr").eq(addQuantityIndex).children("td").eq(2).html());
		$("#carrello table tbody tr").eq(addQuantityIndex).children("td").eq(2).text(currentQuantity + 1);
	};
  };

  function deleteItem() {
	let indexDelete = $("#carrello table tbody tr td:nth-of-type(4)").index($(this));
	$("#carrello table tr").eq(indexDelete + 1).remove();
  };
});


