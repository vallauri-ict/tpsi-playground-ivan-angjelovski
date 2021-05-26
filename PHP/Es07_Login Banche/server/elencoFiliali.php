<?php
	header("content-type:application/json; charset=utf-8");
	require("php-mysqli.php");
	
	// step 0 controllo session
	_checkSession("cCorrentista");
	
	$cCorrentista = $_SESSION["cCorrentista"];
	
	$con = _connection();
	
    $sql = "SELECT filiali.Nome, filiali.cFiliale FROM conti, filiali WHERE conti.cFiliale = filiali.cFiliale AND conti.cCorrentista = $cCorrentista";
	$rs = _execute($con, $sql);

    $sql2 = "SELECT Nome FROM correntisti WHERE correntisti.cCorrentista = $cCorrentista";
	$rs2 = _execute($con, $sql2);
	
	// count conta il numero di valori in un vettore enumerativo
	if ($rs && $rs2)
	{
		$ris = []; // $ris = array(); uguale --> dichiarano array enumerativi e associativi automaticamente
		$ris["nome"] = $rs2[0]["Nome"];
		$ris["filiali"] = $rs;
		
		echo(json_encode($ris));
	}
	else
	{
		http_response_code(500);
	    $con->close();
        die("Errore esecuzione query");
	}
    
	$con->close();
?>