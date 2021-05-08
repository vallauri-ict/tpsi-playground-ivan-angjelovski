<!DOCTYPE html>
<html lang="it">
	<head>
		<meta charset="UTF-8" />
		<title>PHP</title>
		
		<!-- CSS -->
		<link rel="stylesheet" href="index.css"/>

        <!-- Chart JS -->
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

        <!-- Scripts -->
        <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
		<script src="index.js"></script>
	</head>	
	<body>
		<?php
            require("php-mysqli.php");

            // $_GET vettore che contiene tutti i parametri get
            // $_POST vettore che contiene tutti i parametri post

			// step 1: lettura e controllo parametri
            if(isset($_REQUEST["optRisposta"])) 
            {
                $ris = $_REQUEST["optRisposta"];
            }
            else 
            {
                die("Parametro mancante: optRisposta");
            }

            if(isset($_REQUEST["id"])) 
            {
                $id = $_REQUEST["id"];
            }
            else 
            {
                die("Parametro mancante: id");
            }

            // step 2: connessione
            $con = _connection("4b_sondaggi");

            // step 3: esecuzione query
            $sql = "UPDATE sondaggi SET $ris = $ris + 1 WHERE id = $id";
            $rs = _execute($con, $sql);
            
            // step 4: costruzione pagina
            if($rs)
            {
                echo("<h2>Grazie per aver votato</h2>");
            }
            else
            {
                die("<h2>Errore nell'esecuzione della query</h2>");
            }

            // lancio una seconda query per visualizzare
            $sql = "SELECT * FROM sondaggi WHERE id = $id";
            $rs = _execute($con, $sql)[0];

            $nSi = $rs["nSi"];
            $nNo = $rs["nNo"];
            $nNs = $rs["nNs"];

            $totale = $nSi + $nNo + $nNs;

            echo("<h3>Risposte: </h3>");
            echo("<p>Si: $nSi <br>
                  No: $nNo <br>
                  Non so: $nNs</p>");
            echo("<div style='margin:0 auto; width:400px; height:400px'><canvas id='idCanvas'></canvas></div>");
            echo("<script> creaDiagramma($nSi, $nNo, $nNs); </script>");

            // salvataggio cookies sul client
            setcookie("sondaggio-$id", "true", time() + 60, "/");

            // step 5: chiudere la connessione
			$con -> close();
		?>
	</body>
</html>