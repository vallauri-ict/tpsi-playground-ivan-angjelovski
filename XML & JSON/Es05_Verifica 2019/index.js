"use strict";

window.onload = function () {
  let _table = document.getElementById("table");
  let _lstIngredienti = document.getElementById("lstIngredienti");
  _lstIngredienti.addEventListener("change", caricaTabellaCocktails);
  
  let _optTutti = document.getElementById("optTutti");
  let _optAlcolici = document.getElementById("optAlcoholic");
  let _optNonAlcolici = document.getElementById("optNonAlcoholic");
  _optTutti.addEventListener("click", caricaTabellaCocktails);
  _optAlcolici.addEventListener("click", caricaTabellaCocktails);
  _optNonAlcolici.addEventListener("click", caricaTabellaCocktails);
  
  caricaListaIngredienti();
  caricaTabellaCocktails();
 

  // ********************* FUNZIONI *********************
  function creaIntestazione() {
    let intestazioni = ["", "id", "name", "alcoholic", "main ingredient", ""];
    let larghezze = [40, 40, 60, 70, 70, 40];
    let _tr = document.createElement("tr");
    for (let i = 0; i < intestazioni.length; i++) {
      let _th = document.createElement("th");
      _th.innerHTML = intestazioni[i];
      _th.style.width = larghezze[i] + "px";
      _tr.appendChild(_th);
    }
    _table.appendChild(_tr);
  }

  function caricaListaIngredienti() {
    // let vetIngredienti = ingredients.ingredients;
    let vetIngredienti = ingredients["ingredients"]; // "" !!!

    // ordinamento vetIngredienti
    // si fa in questo modo perchè il programma deve sapere in base a quale campo deve ordinare il vettore
    // nel nostro caso c'è un solo campo ma il programma non lo sa
    vetIngredienti.sort(function (record1, record2) {
      if (
        record1.strIngredient1.toUpperCase() <
        record2.strIngredient1.toUpperCase()
      ) {
        return -1;
      } else if (
        record1.strIngredient1.toUpperCase() >
        record2.strIngredient1.toUpperCase()
      ) {
        return 1;
      }
      // se sono uguali rimangono al loro posto
      else {
        return 0;
      }
    });
    console.log(vetIngredienti);

    // caricamento listbox
    let _option = document.createElement("option");
    _option.text = "";
    _lstIngredienti.appendChild(_option);
    for (const item of vetIngredienti) {
      _option = document.createElement("option");
      _option.text = item["strIngredient1"];
      _lstIngredienti.appendChild(_option);
    }
  }

  function caricaTabellaCocktails() {
    let vetCocktails = cocktails["drinks"];
    _table.innerHTML = "";
    creaIntestazione();
    for (const item of vetCocktails) {
      if(((_optTutti.checked) || ((_optAlcolici.checked) && (item.strAlcoholic == "Alcoholic")) || ((_optNonAlcolici.checked) && (item.strAlcoholic == 
	  "Non alcoholic"))) && ((_lstIngredienti.value == "") || (_lstIngredienti.value == item.strIngredient1))) {
        let _tr = document.createElement("tr");

        // immagine
        let _td = document.createElement("td");
        let _img = document.createElement("img");
        // dobbiamo mettere item perchè stiamo scorrendo un vettore di oggetti
        _img.src = item.strDrinkThumb;
        _img.style.width = "40px";
        _td.appendChild(_img);
        _tr.appendChild(_td);

        // id
        _td = document.createElement("td");
        _td.innerHTML = item.idDrink;
        _tr.appendChild(_td);

        // nome
        _td = document.createElement("td");
        _td.innerHTML = item.strDrink;
        _tr.appendChild(_td);

        // alcoholic
        _td = document.createElement("td");
        _td.innerHTML = item.strAlcoholic;
        _tr.appendChild(_td);

        // main ingredient
        _td = document.createElement("td");
        _td.innerHTML = item.strIngredient1;
        _tr.appendChild(_td);

        // dettagli
        _td = document.createElement("td");
        let _a = document.createElement("a");
        _a.text = "dettagli";
        _a.href = "#";
        _a.idDrink = item.idDrink;
        _a.addEventListener("click", visualizzaDettagli);
        _td.appendChild(_a);
        _tr.appendChild(_td);

        _table.appendChild(_tr);
      }
    }
  }

  function visualizzaDettagli() {
    let _divDettagli = document.getElementById("dettagli");
    _divDettagli.innerHTML = "";
    for (const item of cocktails.drinks) {
      // this = pulsante che ha scatenato la medesima funzione
      if (item.idDrink == this.idDrink) {
        // h3
        let _h3 = document.createElement("h3");
        _h3.innerHTML = item.strDrink;
        _divDettagli.appendChild(_h3);

        // ingredienti
        let _igredients = document.createElement("p");
        let ingredients = "";
        for (let i = 0; i < 5; i++) {
          if (item["strIngredient" + (i + 1)] != null) {
            ingredients += item["strIngredient" + (i + 1)] + " - ";
          }
        }
        _igredients.innerHTML = ingredients;
        _divDettagli.appendChild(_igredients);

        let _img = document.createElement("img");
        _img.src = item.strDrinkThumb;
        _img.style.width = "140px";
        _divDettagli.appendChild(_img);

        // interrompe la ricerca, perchè id è univoco
        break;
      }
    }
  }
};
