4. > **LEZIONE 4**
     4. > *Consegna Ajax - Ese 4 Automobili*

Si vuole realizzare una applicazione per l’esposizione/vendita di automobili usate.
Il sistema è basato sul database allegato db.json costituito dalle seguenti tre tabelle
marche(id, nome); // fiat, audi, bmw
modelli(id, nome, codMarca, alimentazione, cilindrata);
automobili(id, codModello, targa, colore, anno, prezzo, km, img);
- All’interno della tabella modelli il campo codMarca contiene l’ID della marca a cui il modello
appartiene.
- La tabella automobili contiene l’elenco delle automobili fisicamente disponibili presso
l’autorivendita. Il campo codModello contiene l’ID del modello a cui il modello appartiene.
- il campo img contiene il link ad una immagine dell’automobile.

E' realizzara una applicazione single page che esegue le seguenti operazioni:
1. All’avvio richiede al json-server l’elenco delle marche trattate dal venditore. Questo elenco deve
essere caricato all’interno di una semplice lista, memorizzando l’ID all’interno del campo nascosto
value;
2. In corrispondenza della scelta di una marca dalla lista, l’applicazione richiede al server l’elenco di tutti
i modelli disponibili relativamente alla marca selezionata, modelli visualizzati all’interno di una
seconda lista salvando come prima l’ID nel campo nascosto value e visualizzando nome del modello
e tipo di alimentazione;
3. In corrispondenza della scelta di un modello dalla lista, l’applicazione richiede al server l’elenco di tutte
le automobili di quel modello presenti a magazzino e provvede visualizzare all’interno di una tabella html
creata dinamicamente le seguenti informazioni: nomeModello, alimentazione, colore, anno, img.
Le immagini hanno una altezza fissa di 65px;
4. Al termine di ogni riga sono posizionati:
- un pulsante dettagli che consente di visualizzare una nuova sezione contenente tutti i dettagli
dell’automobile selezionata, compresi alimentazione e cilindrata. Il campo prezzo è realizzato
mediante un textbox editabile con a fianco un pulsante salva;
- un pulsante elimina che consente di eliminare dal database l’automobile corrente. In
corrispondenza dell’ok, visualizzare un messaggio di conferma e ricaricare la sola tabella dei
dettagli.

Variazione: Viene effettuata una chiamata ajax invece di portarsi dietro il json del modello selezionato.