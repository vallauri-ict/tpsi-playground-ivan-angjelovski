<!doctype html>
<html lang="it">

<head>
    <meta charset="UTF-8" />
    <title> upload </title>
</head>

<body>
    <h1 align="center">Upload</h1>

    <?php
        // lettura parametri
        if(isset($_REQUEST["txtUser"]))
        {
            $txtUser = $_REQUEST["txtUser"];
        }
        else
        {
            http_response_code(500);
            die("Parametro mancante: txtUser");
        }

        // i file binari vengono ricevuti all'interno di questo vettore
        // ($_FILES)
        if(isset($_FILES["txtFiles"]))
        {
            $txtFiles = $_FILES["txtFiles"];
        }
        else
        {
            http_response_code(500);
            die("Parametro mancante: txtFiles");
        }

        $overwrite = false;

        if(isset($_REQUEST["chkOverwrite"]))
        {
            $overwrite = true;
        }

        $txtFiles = $_FILES["txtFiles"];
        for ($i = 0; $i < count($txtFiles["name"]); $i++)
        {
            // basename sostituisce solamente "l'ultimo /" di un path
            $filename = basename($txtFiles["name"][$i]);
            $size = $txtFiles["size"][$i];

            if($size > 1000000)
            {
                echo("Il file $filename eccede le dimensioni massime di 1 MB e non può essere caricato");
                // fa ritornare all'inizio del ciclo,
                // riprende il ciclo dall'inizio passando al prossimo file in questo caso
                continue;
            }

            $mimeType = $txtFiles["type"][$i];
            // pathinfo sostituisce l'estensione del file
            $ext = pathinfo($filename, PATHINFO_EXTENSION);
            $target_file = "uploads/$filename";
            
            if(file_exists($target_file))
            {
                if(!$overwrite)
                {
                    echo("Il file $filename è già esistente e non è stata impostata la sovrascrittura");
                    continue;
                }
            }

            if(move_uploaded_file($txtFiles["tmp_name"][$i], $target_file))
            {
                echo("Il file è stato caricato correttamente <br>");
                echo("Name: $filename <br>");
                echo("Size: $size <br>");
                echo("Type: $mimeType <br>");
                echo("Extension: $ext <br>");
                echo("User: $txtUser <br><br>");
            }
            else
            {
                echo("Errore nel caricamento del file $filename");
            }
        }
    ?>
</body>

</html>