17. > **LEZIONE 17**
     17. > *Consegna jQuery - Ese 17 Verifica 2020*

All’avvio l’applicazione caricati all’interno del contenitore elencoArticoli una preview delle
immagini di tutti gli articoli presenti nel database.
- In corrispondenza del mouseover ogni immagine visualizzaTO un tooltip “Aggiungi al carrello”;
- In corrispondenza del mouseover sull’immagine, sotto l’immagine viene visualizzato il suo nome
dell’articolO;
- In corrispondenza del mouse out il nome viene nascosto.

Dettagli:
- Il contenitore dei dettagli è inizialmente nascosto;
- In corrispondenza del click su un articolo viene visualizzato il contenitore dei dettagli tramite una
animazione di tipo slideDown della durata di 1 secondo;
All’interno del contenitore dei dettagli vengono visualizzati tutti i dettagli dell’articolo selezionato
(sovrascrivendo l’eventuale articolo precedente). 

Il contenitore dei dettagli:
- In corrispondenza del click sul pulsante di chiusura, la finestra dei dettagli viene chiusa tramite una
animazione di tipo slideUp della durata di 1 secondo.

Carrello:
- In corrispondenza del click sul pulsante “Apri carrello” viene visualizzato il carrello contenente gli
acquisti finora effettuati e viene modificata la scritta del pulsante in “Chiudi carrello”.
- In corrispondenza del click sul pulsante “Aggiungi al Carrello”, l’articolo corrispondente viene
aggiunto all’interno del carrello. Se l’articolo era già presente nel carrello viene incrementata la quantità;
- Su ogni riga del carrello c'è un’immagine del cestino che, al click, consente di eliminare l’intera
riga corrispondente.