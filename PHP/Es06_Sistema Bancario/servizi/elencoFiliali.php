<?php
	header("content-type:application/json; charset=utf-8");
	require("php-mysqli.php");
	
	if(isset($_REQUEST["cBanca"]))
	{
		$cBanca = $_REQUEST["cBanca"];
	}
	else
	{
		http_response_code(400);
		die("Parametro mancante: codice banca");
	}
	
	$con=_connection();
	
    $sql= "SELECT cFiliale, Nome FROM filiali WHERE cBanca=$cBanca"; //restituisce un vettore enumerativo di json
    
	$rs=_execute($con,$sql);
    
	if (!$rs ) {
       http_response_code(500);
	   $con->close();
       die("Errore esecuzione query");
    }else{
        echo(json_encode($rs));//serve a serializzare rs
    }
    
	$con->close();
?>