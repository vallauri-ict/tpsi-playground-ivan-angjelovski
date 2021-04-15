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
		<h1>Esercizio 1 PHP</h1>
		<?php
			$nome = "pippo";
			echo ("Il mio nome è $nome <br>");
			visualizza ($nome);
			function visualizza($nome) {
				echo ("<p style='font-weight:bold'>Il mio nome è $nome </p>");
			}
		?>
		
		<h1>contenuto della variabile globale $_server</h1>
		<?php
		   foreach($_SERVER as $key=> $valore){
			   echo("$key : $valore <br>\n");
		   }
		?>
		
		<h1>Info sulle configurazione del server</h1>
		<?php
			echo(phpinfo());

		?>
	</body>
</html>