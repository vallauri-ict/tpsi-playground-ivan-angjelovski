<!DOCTYPE html>
<html lang="it">
	<head>
		<meta charset="UTF-8" />
		<title>PHP</title>
		
		<!-- CSS -->
		<link rel="stylesheet" href="index.css"/>
		
		<!-- Scripts -->
		<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
	</head>	
	<body>
		<?php
			require("php-mysqli.php");
		
			// step 1: lettura e controllo parametri
			if(isset($_REQUEST["lstSondaggi"]))
			{
				$id = $_REQUEST["lstSondaggi"];
			}
			else
			{
				die("Parametro mancante: ID");
			}

			// controllo cookies
			if(isset($_COOKIE["sondaggio-$id"]))
			{
				die("<h2>Hai già votato questo sondaggio!</h2>");
			}
			
			// step 2: connessione al database
			$con = _connection("4b_sondaggi");
			
			// step 3: esecuzione query
			// * --> prendi tutti i campi
			// SELECT seleziona le colonne
			// WHERE seleziona le righe
			$sql = "SELECT * FROM sondaggi WHERE ID = $id";
			// rs è sempre un vettore enumerativo di record
			// in questo caso noi ci prendiamo [0] quindi ci dà un json
			$rs = _execute($con, $sql)[0];
			
			// step 4: visualizzazione dei dati
			echo("<h1>Sondaggio su $rs[titolo]</h1>");
			echo("<img style='height: 250px;' src='img/$rs[img]'>");
			echo("<p>$rs[domanda]</p>");
		?>
		
		<form action="risultati.php" method="post">
			<input type="radio" name="optRisposta" value="nSi">Si
			<input type="radio" name="optRisposta" value="nNo">No
			<input type="radio" name="optRisposta" value="nNs">Non so
			<?php
				echo("<input type='hidden' name='id' value=$id>");
			?>
			<input type="submit">
		</form>

		<?php
		    // step 5: chiudere la connessione
			$con -> close();
		?>
	</body>
</html>