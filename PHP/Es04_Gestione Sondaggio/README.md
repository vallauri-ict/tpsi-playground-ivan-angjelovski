4. > **LEZIONE 4**
     4. > *Consegna PHP - Ese 4 Gestione Sondaggio*
   
## Esercizio:
Web app per la gestione di un sondaggio con le votazioni salvate su database e grafico per analisi sondaggio.

## All'avvio:
- La web app richiede al server una lista contenente l’elenco dei sondaggi disponibili, letti dal database;
- Il pulsante di submit invia una richiesta a pagina2.php a cui manda il codice del sondaggio selezionato.

## pagina2.php:
Consente all’utente di esprimere il proprio voto visualizzando:
- La domanda del sondaggio scelto;
- L’immagine del sondaggio;
- 3 radio button per la risposta;
- In corrispondenza del submit, invia al server una richiesta della risorsa risultati.php.

## risultati.php:
- **Inviare** i risultati al database;
- **Mostrare** al client una pagina di conferma che mostri al visitatore i risultati finora ottenuti dal sondaggio scelto. Con numero di Sì, No e Non So, la percentuale delle votazioni e un grafico a torta.
