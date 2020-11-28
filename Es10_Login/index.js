"use strict";

var utenti = [
  { user: "pippo", pwd: "pwdPippo1" },
  { user: "pluto", pwd: "pwdPluto1" },
  { user: "minnie", pwd: "pwdMinnie1" },
];

$(document).ready(function () {
  // textboxes
  let txtUser = $("#txtUser");
  let txtPwd = $("#txtPwd");
  // non funziona quando faccio $(this) in un altra funzione esterna
  txtUser.hover(
    function () {
      $(this).addClass("over");
    },
    function () {
      $(this).removeClass("over");
    }
  );
  txtPwd.hover(
    function () {
      $(this).addClass("over");
    },
    function () {
      $(this).removeClass("over");
    }
  );

  // messageboxes
  let msgUser = $("#msgUser");
  let msgPwd = $("#msgPwd");

  txtUser.on("focusout", function () {
    msgUser.text("");
    msgUser.hide();
    if (txtUser.val() == "") {
      $(this).css("border", "1px solid black");
      msgUser.text("Inserire l'utente").css("color", "red").fadeIn();
    } else if (userMatch()) {
      $(this).css("border", "1px solid black");
      msgUser.text("OK").css("color", "green").fadeIn();
    } else {
      $(this).css("border", "1px solid red");
      msgUser.text("Utente sbagliati").css("color", "red").fadeIn();
    }
  });

  txtPwd.on("focusout", function () {
    msgPwd.text("");
    msgPwd.hide();
    if (!passwordFormat()) {
      $(this).css("border", "1px solid black");
      msgPwd.text("Formato password non corretto").css("color", "red").fadeIn();
    } else if (passwordMatch()) {
      $(this).css("border", "1px solid black");
      msgPwd.text("OK").css("color", "green").fadeIn();
    } else {
      $(this).css("border", "1px solid red");
      alert("Utente o password sbagliati");
    }
  });

  function userMatch() {
    let match = false;
    // si usa un for of perchè si scorre un vettore enumerativo e poi dopo si entra
    // nel json dove si controlla il valore di txtUser e il valore dei vari user
    for (let utente of utenti) {
      if (txtUser.val() == utente.user) {
        match = true;
        break;
      }
    }
    return match;
  }

  function passwordFormat() {
    let lettera = false;
    let numero = false;
    if (txtPwd.val().length > 7) {
      for (let i = 0; i < txtPwd.val().length; i++) {
        let c = txtPwd.val().charAt(i);
        if (isLetter(c)) {
          lettera = true;
        } else if ($.isNumeric(c)) {
          numero = true;
        }
      }
    }
    let format = false;
    if (lettera && numero) {
      format = true;
    }
    return format;
  }

  function passwordMatch() {
    let match = false;
    for (let utente of utenti) {
      if (txtPwd.val() == utente.pwd && txtUser.val() == utente.user) {
        match = true;
        break;
      }
    }
    return match;
  }

  function isLetter(c) {
    if (c.toLowerCase() == c.toUpperCase()) {
      return false;
    } else {
      return true;
    }
  }
});
