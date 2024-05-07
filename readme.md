# ESERCIZIO: PalieDispari

>[!NOTE]
>
> nome repo: js-paliedispari

## Palindroma:
1. Chiedere all’utente di inserire una parola;
2. Creare una funzione per capire se la parola inserita è palindroma.

### Svolgimento:
1. nomino una funzione con parametro `parola`
2. chiedo all'utente di scrivere una parola per mezzo del `prompt` che assegnero al parametro della funzione `parolaUtente`;
3. all'interno della funzione trasformo la stringa in arrey tramite `parola.split('')`;
4. con il metodo `parola.reverse()` inverto l'ordine dell'arrey;
5. trasformo nuovamete l'arrey in stringa `parola.join('')`;
6. scrivo una istruzione condizionale:
```
if (parolaUtente === parola) {
    console.log('la parola che hai scritto è palindroma');
} else {
    console.log('la parola che hai scritto non è palindroma');
}
```

##### Fine

## Pari e Dispari:
1. L’utente sceglie pari o dispari e inserisce un numero da 1 a 5;
2. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione);
3. Sommiamo i due numeri;
4. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione);
5. Dichiariamo chi ha vinto.

### Svolgimento:


##### FINE