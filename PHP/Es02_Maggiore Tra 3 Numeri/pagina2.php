<!DOCTYPE html>
<html lang="it">
	<head>
		<meta charset="UTF-8" />
		<title>PHP</title>
		
		<!-- CSS -->
		<link rel="stylesheet" href="index.css"/>
		
		<!-- Scripts -->
		<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
		<script src="index.js"></script>
	</head>	
	<body>   
		<h1>Grazie della tua richiesta</h1>
		
		<?php
			// $_REQUEST Vettore associativo globale con tutte le variabili
			$n1 = 0;
			$n2 = 0;
			$n3 = 0;
			
			// Controllo parametri
			if(isset($_REQUEST["n1"]) && is_numeric($_REQUEST["n1"]))
				$n1 = $_REQUEST["n1"];
			else
				// die interrompe l'esecuzione dello script
				die("primo numero non valido");
			
			if(isset($_REQUEST["n2"]) && is_numeric($_REQUEST["n2"]))
				$n2 = $_REQUEST["n2"];
			else
				die("secondo numero non valido");
			
			if(isset($_REQUEST["n3"]) && is_numeric($_REQUEST["n3"]))
				$n3 = $_REQUEST["n3"];
			else
				die("terzo numero non valido");
			
			// Controllo maggiore
			if($n1 > $n2 && $n1 > $n3)
			{
				echo("Il numero maggiore è il primo e vale $n1");
			}
			else if($n2 > $n3)
			{
				echo("Il numero maggiore è il secondo e vale $n2");
			}
			else
			{
				echo("Il numero maggiore è il terzo e vale $n3");
			}

			echo("<br>Tipo di richiesta:<b> $_SERVER[REQUEST_METHOD]</b><br>");
			$url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
			echo("URL richiedente: $url");
		?>
	</body>
</html>