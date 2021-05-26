"use strict";

$(function () {
	let _wrapper=$("#wrapper");
	let _divTitolo = $("#divTitolo");
    let _divFiliali = $("#divFiliali");
    let _divMovimenti = $("#divMovimenti").find("tbody");
	_wrapper.hide();
	
	let _btnLogout = $("#btnLogout");
	
	let _richiestaFiliali = inviaRichiesta("get", "server/elencoFiliali.php");
	
	_richiestaFiliali.fail(errore);
	
	_richiestaFiliali.done(function (data) {
		console.log(data)
		_wrapper.show();
		_divMovimenti.parent().hide();

		_divTitolo.append($("<p>").html("Benvenuto " + "<b>" + data.nome + "</b>").css("text-align", "right"));
		
		_divFiliali.css("text-align", "center");
		for(let filiale of data["filiali"]) {
			let opt = $("<input type='radio' name='optFiliali'>");
			opt.appendTo(_divFiliali);
			opt.val(filiale.cFiliale);
			
			let span = $("<span>");
			span.appendTo(_divFiliali);
			span.text(filiale.Nome);
			
			$("<br>").appendTo(_divFiliali);
		}
		
		let btn = $("<button class='btn btn-primary'>");
		btn.appendTo(_divFiliali);
		btn.text("Visualizza movimenti");
		btn.on("click", function(){
			_divMovimenti.parent().show();
			_divMovimenti.empty();

			let cFiliale = $("input[type='radio']:checked").val();
			let request = inviaRichiesta("post", "server/elencoMovimenti.php", {"cFiliale": cFiliale});
			request.fail(errore);
			request.done(function(data){
				console.log(data);
				for (let movimento of data) {
					let tr = $("<tr>");
					tr.appendTo(_divMovimenti);

					let td = $("<td>");
					td.text(movimento.cMov);
					td.appendTo(tr);

					td = $("<td>");
					td.text(movimento.descrizione);
					td.appendTo(tr);

					td = $("<td>");
					td.text(movimento.Data);
					td.appendTo(tr);

					td = $("<td>");
					td.text(movimento.Importo);
					td.appendTo(tr);
				}
			});
		});
    });
	
	_btnLogout.on("click", function(){
		let request = inviaRichiesta("post", "server/logout.php");
		request.fail(errore);
		request.done(function(){
			alert("Sei stato disconnesso correttamente");
			window.location.href = "login.html";
		});
	});
	
});
