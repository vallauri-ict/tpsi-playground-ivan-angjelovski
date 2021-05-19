5. > **LEZIONE 5**
     5. > *Consegna PHP - Ese 5 Negozio Dischi*
   
## Contenuto:
Applicazione WEBFORM – AJAX per la vendita di dischi online avente:
- Una griglia di tutti gli elementi interni;
- Textbox contenenti le informazioni dei vari dischi (modificabili);
- Textbox della prima colonna (ID) di tipo **readonly**;
- I tre pulsanti sono realizzati tramite bootstrap, bottoni a cui assegnamo le seguenti classi --> 'btn btn-outline-dark';
- I pulsanti SALVA e ANNULLA sono inizialmente disabilitati.

## In corrispondenza dell’evento keyup su uno dei Textbox:
I pulsanti SALVA e ANNULLA della riga vengono automaticamente abilitati (a differenza di KeyPress, KeyUp sente anche il backspace).

## Il pulsante Salva:
Tramite una chiamata POST salva sul database i tre campi di testo contenenti le informazioni contenute nei Textbox e disabilita i pulsanti.

## Il pulsante Annulla:
Ripristina le informazioni originali andando a leggerle sul database e disabilita in pulsanti (ricaricando la pagina).

## Il pulsante Elimina:
Tramite una chiamata POST elimina il record dal database e ricarica la pagina.

## Il pulsante Inserisci:
Apre una nuova pagina **inserisci.html** per l’inserimento di un nuovo record. A fondo pagina un pulsante Salva richiama una procedura javascript che controlla che tutti i campi siano
stati compilati e, in caso affermativo, richiama in modalità POST una pagina **inserisci.php** che aggiorna il database e poi esegue esplicitamente un redirect alla pagina principale.
