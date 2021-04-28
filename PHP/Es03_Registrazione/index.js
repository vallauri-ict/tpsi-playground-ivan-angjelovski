"use strict"

$(document).ready(function(){
    $("select[name=lstCitta]").prop("selectedIndex",-1);
	$("#btnInvia").on("click",function(){
        let msg = "";
        if($("#txtNome").val() == "")
        {
            msg +="Nome mancante</br>";
        }
        if($("input[name=optIndirizzo]:checked").length == 0)
        {
            msg+="Indirizzo di studio non selezionato</br>";
        }
        if($("select[name=lstCitta]").prop("selectedIndex") == -1)
        {
            msg += "Città di residenza mancante";
        }
        if(msg != "")
        {
            $("#msg").html(msg);
        }
        else
        {
            $("#msg").html("");
            let form = $("#form1");
            form.prop("action", "pagina2.php");
			// nelle chiamate get i parametri della form sono visibili nella url
			// con le chiamate post i parametri vengono passati nascosti nel body
            form.prop("method","get");
            form.submit();
        }
    });
})