<?php
	header("content-type:application/json; charset=utf-8");
	require("php-mysqli.php");
	
	if(isset($_REQUEST["username"]))
	{
		$username = $_REQUEST["username"];
	}
	else
	{
		http_response_code(400);
		$con->close();
		die("Parametro mancante: username");
	}
	
	if(isset($_REQUEST["password"]))
	{
		$password = $_REQUEST["password"];
	}
	else
	{
		http_response_code(400);
		$con->close();
		die("Parametro mancante: password");
	}
	
	$con = _connection();
	
	// le query sono case unsensitive quindi se avessimo fatto il controllo
	// della password con una AND qui non sarebbe stato giusto
	// anche se in realtà la codifica md5 rende la password un'impronta
	// quasi non eguagliabile da altre password
    $sql = "SELECT * FROM correntisti WHERE Nome = '$username'";
    
	$rs = _execute($con,$sql);
    
	// count conta il numero di valori in un vettore enumerativo
	if (!count($rs))
	{
		http_response_code(401);
	    $con->close();
        die("Credenziali non valide");
    }
	else
	{
		if($rs[0]["Pwd"] != $password) {
			http_response_code(401);
			$con->close();
			die("Credenziali non valide");
		} else {
			// andiamo a creare un oggetto session relativo all'utente corrente
			
			// accedo all'oggetto session di sistema
			session_start();
			// dentro la sessione relativa all'utente corrente creo un campo cCorrentista
			// all'interno del quale mi salvo l'id del correntista
			$_SESSION["cCorrentista"] = $rs[0]["cCorrentista"];
			$_SESSION["scadenza"] = time() + SCADENZA;
			
			// la session è sul server ma gli serve qualcosa per identificare il client
			// che fa le richieste, dunque bisogna salvare questa sessione (session name e id)
			// con cui il client gli dice al server chi è sostanzialmente
			// session name e id non sono visibili, sono decisi dal server

			// la gestione dei cookie da parte dei browser è trasparente, l'utente non deve
			// fare nulla e il browser si salva questi cookie in un'area protetta sua
			// ogni volta che viene aperta una pagina web il browser si va a vedere
			// i cookie appartenenti a quel dominio e li rende disponibili al server
			setcookie(session_name(), session_id(), time() + SCADENZA, "/");

			http_response_code(200); // default /!\ quando il servizio avviene con successo
			echo('{"ris": "ok"}');
		}
	}
    
	$con->close();
?>