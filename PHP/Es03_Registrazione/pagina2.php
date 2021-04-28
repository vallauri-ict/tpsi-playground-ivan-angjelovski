<!DOCTYPE html>
<html lang="it">
	<head>
		<meta charset="UTF-8" />
		<title>PHP</title>
		
		<!-- CSS -->
		<link rel="stylesheet" href="index.css"/>
	</head>	
	<body>   
		<h1>Pagina 2</h1> 
		<?php
			// lettura codice dal file 
			require("php-mysqli.php");
		
			// step 1: lettura e controllo dei parametri
			if(isset($_REQUEST["txtNome"]))
				$nome =	$_REQUEST["txtNome"];
			else 
				die("nome mancante");
			
			if(isset($_REQUEST["optIndirizzo"]))
				$indirizzo = $_REQUEST["optIndirizzo"];
			else 
				die("indirizzo mancante");
			
			if(isset($_REQUEST["chkHobbies"]))
			{
				$hobbies = $_REQUEST["chkHobbies"];
				$hobbies = implode(',', $hobbies);
			}
			else 
				$hobbies = "";
				
			if(isset($_REQUEST["lstCitta"]))
				$citta = $_REQUEST["lstCitta"];
			else 
				die("Residenza mancante");
				
			if(isset($_REQUEST["txtSegni"]))
				$segni = $_REQUEST["txtSegni"];
			else 
				$segni = "";
				
			if(isset($_REQUEST["lstScoperta"]))
			{
				$scoperta = $_REQUEST["lstScoperta"];
				$scoperta = implode(',', $scoperta);
			}
			else 
				$scoperta = "";
				
			// step 2: connessione al database
			$con = _connection("4b_studenti");
			
			// per accedere alle proprietà di un oggetto in php bisogna usare la '->'
			// il '.' si usa per concatenare
			
			// proteggo le variabili dall'sql injection
			$nome = $con -> real_escape_string($nome);
			$indirizzo = $con -> real_escape_string($indirizzo);
			$hobbies = $con -> real_escape_string($hobbies);
			$citta = $con -> real_escape_string($citta);
			$segni = $con -> real_escape_string($segni);
			$scoperta = $con -> real_escape_string($scoperta);
		
			// step 3: esecuzione della query
			$sql = "INSERT INTO studenti(nome, settore, hobbies, residenza, segni, media) VALUES ('$nome', '$indirizzo', '$hobbies', $citta, '$segni', '$scoperta')";
			$ris = _execute($con, $sql);
			echo("$ris");
		?>
	</body>
</html>