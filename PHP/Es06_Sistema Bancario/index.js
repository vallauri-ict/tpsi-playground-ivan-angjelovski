"use strict";

// forma abbreviata del document.ready(function(){});
$(function () {
	let _wFiliali=$("#wrapFiliali");
	let _wCorrentisti= $("#wrapCorrentisti");
    let _lstBanche = $("#lstBanche");
	let _lstFiliali = $("#lstFiliali");
	let _tbody = $("#tabCorrentisti").children("tbody");

    //_wFiliali.css("display", "none");
	_wCorrentisti.css("display", "none");
	
    _lstBanche.prop("selectedIndex", -1);
	_lstBanche.on("change", function(){
		_wCorrentisti.hide();
		let request = inviaRichiesta("get", "servizi/elencoFiliali.php", { 
			"cBanca": _lstBanche.val(), 
		});
		request.done(function(data){
			console.log(data);
			for(const filiale of data){
				let op = $("<option>");
				op.appendTo(_lstFiliali);
				op.val(filiale["cFiliale"]);
				op.text(filiale.Nome);
			}
			_lstFiliali.prop("selectedIndex", -1);
		});
		request.fail(errore);
	});
	
	_lstFiliali.on("change", function(){
		let request = inviaRichiesta("get", "servizi/elencoCorrentisti.php", { 
			"cFiliale": _lstFiliali.val(), 
		});
		_tbody.empty();
		request.done(function(data){
			console.log(data);
			for(const correntista of data){
				let tr = $("<tr>");
				tr.appendTo(_tbody);
				
				let td = $("<td>");
				td.appendTo(tr);
				td.text(correntista.cCorrentista);
				
				td = $("<td>");
				td.appendTo(tr);
				td.text(correntista.Nome);
				
				td = $("<td>");
				td.appendTo(tr);
				td.text(correntista.cComune);
				
				td = $("<td>");
				td.appendTo(tr);
				td.text(correntista.Telefono);
				
				td = $("<td>");
				td.appendTo(tr);
				td.text(correntista.cConto);
				
				td = $("<td>");
				td.appendTo(tr);
				td.text(correntista.Saldo);
			}
			_wCorrentisti.show();
		});
		request.fail(errore);
	});
});