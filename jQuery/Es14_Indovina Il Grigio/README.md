11. > **LEZIONE 14**
     11. > *Consegna jQuery - Ese 14 Indovina Il Grigio*

###### All’avvio:
-	Applicato al wrapper uno sfondo giallo chiaro #FF9 e reso fluttuante a sinistra (jQuery);
-	Generati dinamicamente 9 quadratini di tipo div assegnando a ciascuno una classe box caratterizzata dalle
seguenti proprietà (foglio CSS): altezza e larghezza 50px, bordo 1 px nero, margine
7px, colore del testo rosso, contenuto uguale all’indice (a partire da 1), fluttuante a sinistra;
-	Per ogni box generato un colore di sfondo grigio con valore di intensità generato casualmente fra 0 e 255.

###### In corrispondenza del mouseover su uno qualsiasi dei box:
-	Mostrato all’interno del tool tip il valore del colore di sfondo del relativo box (il
contenuto della funzione rgb). Il testo compare con una dissolvenza in entrata di 1 sec;
- In corrispondenza del mouseout il testo scompare con una dissolvenza in uscita di 1 sec.

###### In corrispondenza del click sul button:
-	L’utente deve aver impostato nei relativi text box il numero d’ordine del Box del quale intende indovinare
e il valore della tonalità di grigio;
-	In corrispondenza del click l’applicazione deve confrontare il valore inserito dall’utente con il tono di
grigio del corrispondenza box;
-	Se il numero inserito dall’utente è più piccolo rispetto al tono di grigio viene applicato al text box sfondo rosso
e testo bianco e visualizzato a fianco il messaggio “Troppo Piccolo”;
-	Se il numero inserito dall’utente è più grande rispetto al tono di grigio viene applicato al text box sfondo blu e
testo bianco e visualizzato a fianco il messaggio “Troppo Grande”;
-	Se il risultato è corretto viene applicato sfondo bianco e testo nero, visualizzato “BRAVO” ed applicato al box
uno sfondo giallo chiaro (lo stesso del wrapper) ed eliminati i bordi.