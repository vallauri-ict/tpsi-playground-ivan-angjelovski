'use strict'

let _form1;

$(document).ready(function() {
    _form1 = $("#form1");
});

function visualizza(codice) {
    let msg = "";
	let _chk;
	let _opts;

    switch (codice) {
        case 1:
            msg = _form1.find("input[type=text]:first-of-type").val();
            break;
		case 2:
			// msg = _form1.children("label:nth-of-type(2)");
			// msg = _form1.children("label").eq(1);
			msg = _form1.children("label").filter(":nth-of-type(2)").children("select").val();
			break;
		case 3:
			// non posso più usare children perchè input non è figlio diretto
			// SOLO I FIGLI DIRETTI SI POSSONO PRENDERE
			_chk = _form1.children("fieldset").eq(0).find("input[type=checkbox]");
			// for(let item of _chk) dovremmo fare $item perchè restituisce puntatori javascript ad oggetti 
			for(let i=0; i<_chk.length; i++){
				msg += _chk.eq(i).prop("name") + " - " + _chk.eq(i).val() + "\n"; // _chk.eq(i) == $(_chk[i])
			}
			break;
		case 4:
			// _chk = _form1.children("fieldset").eq(0).find("input[type=checkbox]:checked"); 
			// _chk = _form1.children("fieldset").eq(0).find("input[type=checkbox]").is(":checked"); // is restituisce un booleano
			_chk = _form1.children("fieldset").eq(0).find("input[type=checkbox]").filter(":checked");
			_chk.each(function(i, ref){
				msg += $(ref).prop("name") + " - " + _chk.eq(i).val() + "\n";
			});
			/*for(let i=0; i<_chk.length; i++){
				msg += _chk.eq(i).prop("name") + " - " + _chk.eq(i).val() + "\n";
			}*/
			break;
		case 5:
			_chk = _form1.children("fieldset").eq(0).find("input[type=checkbox]").not(":checked"); 
			_chk.each(function(i, ref){
				msg += $(ref).prop("name") + " - " + _chk.eq(i).val() + "\n";
			});
			break;
		case 6:
			_opts = _form1.children("fieldset:nth-of-type(2)").find("input[type=radio]");
			if(_opts.is(":checked"))
				msg = _opts.filter(":checked").val();
			else 
				msg = "Nessun radio button selezionato";
			break;
		case 7:
			_opts = _form1.children("fieldset:nth-of-type(2)").find("input[type=radio]").not(":checked");
			_opts.each(function (i, ref){
				msg += $(ref).val() + "\n";
			});
			break;
		case 8:
			// let _select = _form1.children("select:last-of-type")
			let _select = _form1.find("select").last();
			_select.children("option:selected").each(function(i, ref){
				msg += $(ref).val() + "\n";
			});
			let selected = _select.val();
			for(let item of _select.val()){
				msg += item + " - ";
			};
			break;
	}
    alert(msg);
}

function imposta(codice){
	switch(codice){
		case 1:
			_form1.find("input[type=text]").first().val("nuovo valore");
			break;
		case 2:
			// _form1.find("select").first().prop("selectedIndex", 1);
			_form1.find("select").first().children("option").eq(2).prop("selected", true);
			break;
		case 3:
			let chks = _form1.children("fieldset").eq(0).find("input[type=checkbox]");
			chks.first().prop("checked", true);
			// per selezionare più checkbox bisogna passargli un vettore enumerativo coi value
			chks.val(["opzione 1", "opzione 3"]); // value adesso è in scrittura
			break;
		case 4:
			_form1.children("fieldset").eq(1).find("input[type=radio]").eq(1).prop("checked", true);
			break;
		case 5:
			let _select = _form1.children("select").last();
			_select.children("option").eq(1).prop("selected", true);
			_select.children("option").eq(3).prop("selected", true);
			// _select.val(["1", "3"]);
			break;
	}
}