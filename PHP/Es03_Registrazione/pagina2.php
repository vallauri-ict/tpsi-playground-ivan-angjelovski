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
		<h1>Pagina 2</h1> 
		<?php
			// step 1: lettura e controllo dei parametri
			// 
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
				
				
			echo("ciao mondo $hobbies");
		?>
	</body>
</html>