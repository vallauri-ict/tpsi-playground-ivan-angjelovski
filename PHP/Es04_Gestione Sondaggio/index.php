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
		?>
	
		<h1>Seleziona il sondaggio a cui vuoi partecipare</h1>
		<hr>
		<h3>Sondaggi disponibili:</h3>
		<!-- method è get di default -->
		<form id="form1" action="pagina2.php" method="get">
			<!-- il pulsante submit manda i name, se non c'è name non li manda -->
			<!-- i parametri vengono passati nel formato [name]=[value] -->
			<select name="lstSondaggi">
				<?php
					// step 1: non ci sono parametri, lo saltiamo
					
					// step 2: connessione al database
					$con = _connection("4b_sondaggi");
					
					// step 3: esecuzione query
					$sql = "SELECT ID, titolo FROM sondaggi";
					// rs è un vettore enumerativo di record
					$rs = _execute($con, $sql);
					
					// step 4: visualizzazione dei dati
					foreach ($rs as $item)
					{
						// se lo inserisco dentro una stringa non vale questo --> $titolo = $item["titolo"];
						echo("<option value=$item[ID]>$item[titolo]</option>");
					}
				?>
			</select>
			<!-- se è all interno di una form il tag button assume type submit di default -->
			<input type="submit" value="Vai">
		</form>
		<?php
		    // step 5: chiudere la connessione
			$con -> close();
		?>
	</body>
</html>