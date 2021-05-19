<?php
	header("content-type:application/json; charset=utf-8");
	require("php-mysqli.php");
	
	if(isset($_REQUEST["cFiliale"]))
	{
		$cFiliale = $_REQUEST["cFiliale"];
	}
	else
	{
		http_response_code(400);
		die("Parametro mancante: codice filiale");
	}
	
	$con=_connection();
	
    $sql= "SELECT * FROM conti, correntisti WHERE correntisti.cCorrentista = conti.cCorrentista and conti.cFiliale=$cFiliale";
    
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