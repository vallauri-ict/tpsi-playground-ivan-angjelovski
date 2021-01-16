1. > **LEZIONE 1**
     1. > *Consegna Ajax - Ese 01 RandomUser*

Il sito <a href="https://randomuser.me">RandomUser</a> gestisce una folta anagrafica di persone inventate, compresa la
fotografia. Ad ogni refresh mostra a centro video tutte le informazioni di un'unica persona generata
random (nome, mail, data di nascita, indirizzo, numero di telefono, password).
Fornisce anche un servizio /api attraverso il quale può restituire al chiamante un certo numero di
record random in formato XML o JSON (che è il default, quindi può anche essere omesso).<br>
<a href="https://randomuser.me/api/?format=xml&results=5">Genera 5 utenti casuali in formato XML</a><br>
<a href="https://randomuser.me/api/?format=json&results=5">Genera 5 utenti casuali in formato JSON</a><br>
<a href="https://randomuser.me/api/?results=5&gender=male">Genera 5 utenti casuali in formato JSON non specificando</a> 

Esempio di record JSON:
```{"gender":"male",
"name" : {"title":"mr", "first":"jeff", "last":"macrae"},
"location" :{ "street":"3726 new road", "city":"st davids",
"state":"merseyside", "postcode":"T5 3AJ"},
"email":"jeff.macrae@example.com",
"login":{"username":"beautifuldog250",
"password":"stoner",
"salt":"RlR2XPyo",
"md5":"4be80d04964ee023ddd9e15d60c8f77e",
"sha1":"da02bb1ce150c2478eae2be81126d6473a6a71fb",
"sha256":"4982eccd025aac4037c4b3431488fe829c1d30eefbc227fc640f345700c69273"
},
"dob":"1963-01-18 02:15:37",
"registered":"2005-01-08 09:05:14",
"phone":"019467 93281", "cell":"0791-787-027",
"id" : {"name":"NINO", "value":"NK 36 94 71 C"},
"picture":{"large":"https://randomuser.me/api/portraits/men/6.jpg","medium":"ht
tps://randomuser.me/api/portraits/med/men/6.jpg","thumbnail":"https://rando
muser.me/api/portraits/thumb/men/6.jpg"},
"nat":"GB"
}
```

Realizzata la parte del sito con sfondo bianco con l’aggiunta di:
- [x] Pulsanti di navigazione (avanti e indietro);
- [x] Slider di selezione del numero di record da caricare;
- [x] Radio buttons di selezione Male/Female/Tutti;
- [x] Checkbox relativi alle nat degli utenti da visualizzare (impostare manualmente 5 o 6 nomi: Brasile, Germania, Italia, etc.).

Clicca <a href="https://github.com/vallauri-ict/randomuser-ivan-angjelovski">qui</a> per vedere il <a href="https://github.com/vallauri-ict/randomuser-ivan-angjelovski">Progetto</a> completato.
