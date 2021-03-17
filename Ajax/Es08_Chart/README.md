8. > **LEZIONE 8**
     8. > *Consegna Ajax - Ese 8 Chart*

## chartjs.org:
chartjs.org è una libreria JavaScript, responsive, open-source, molto flessibile, che permette di creare rapidamente grafici efficaci, alimentando il motore di rendering con dati e opzioni in formato JSON Su aspetta come parametro un canvas HTML5 (area di disegno) su cui tracciare il grafico. Per il suo utilizzo in una applicazione javascript è disponibile il seguente link cdn:

https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.js

Esempio di utilizzo della libreria:
```
var chart = new Chart(canvas, {
	type: 'pie',
	data: {
		"labels": keys,
		"datasets": [{
			"label": 'Titolo del grafico',
			"data": values,
			"backgroundColor": colors,
			"borderColor": borderColors,
			"borderWidth": 1  // default=2  
		}]
	}
});
```

I principali grafici supportati sono:
```
- 'doughnut' -> grafico a ciambella;
- 'pie' -> grafico a torta;
- 'bar' -> diagramma a barre verticali;
- 'radar' -> diagramma a ragnatela.
```

## Obiettivo:

Scrivere una applicazione che richieda, a [randomuser.me](https://randomuser.me/), un elenco di 100 persone. Visualizzare sotto forma di tabella (creata dinamicamente) il numero di persone appartenenti a ciascuna nazionalità. Riportare la stessa informazione sotto forma di grafico. Aggiungere dinamicamente in coda un pulsante che consenta di salvare l’immagine del grafico su disco.
