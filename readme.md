# ESERCIZIO: PalieDispari

>[!NOTE]
>
> nome repo: js-paliedispari

## Palindroma:
1. Chiedere all’utente di inserire una parola;
2. Creare una funzione per capire se la parola inserita è palindroma.

### Svolgimento:
1. chiedo all'utente di scrivere una parola per mezzo del `prompt` che assegnero al parametro della funzione `parolaUtente`;
2. nomino una funzione con parametro `parola`
3. all'interno della funzione nomino una var `parolaInvertita` che la userò per trasformare la stringa in arrey tramite `.split('')`;
4. con la funzione `.reverse()` inverto l'ordine dell'arrey;
5. trasformo nuovamete l'arrey in stringa `.join('')`;
6. scrivo una istruzione condizionale assegnando a return un risultato/stringa di testo:
```
if (parola === parolaInvertita) {
    return 'stringa di testo';
} else {
    return 'altra stringa di testo';
}
```
7. nomino una variabile risultato che mi richiama la funzione.

##### Fine

## Pari e Dispari:
1. L’utente sceglie pari o dispari e inserisce un numero da 1 a 5;
2. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione);
3. Sommiamo i due numeri;
4. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione);
5. Dichiariamo chi ha vinto.

### Svolgimento:
1. definisco due variabili con valore il prompt che chieda all'utente di inserire un numero da 1 a 5 e di inserire pari o dispari;
2. definisco una funzione che generi un numero da 1 a 5 random per il computer:
```
fuction numeroComputer(){
    Let numeroRandom = Math.floor(Math.random() * 5) + 1;
    return numeroRandom;
}
```
3. sommo il valore numerico dell'utente con il numero risultante della funzione;
4. definisco una funzione che stabilisca se la somma dei nummeri calcolata in precedeza sia pari oppure dispari:
```
function pariDispari(numero) {
    return numero % 2 === 0; // vero
}
```
5. Attraverso un operatore ternario estraggo dal valore true se il risultato è pari o dispari: 
```
let risultato = pariDispari(somma);
risultato = risultato ? 'pari' : 'dispari';
```
6. stampo sia in console e sia a scheromo se l'utente ha vino o ha perso attraverso una istruzione condizionale:
```
if (risultato === sceltaUtente) {
    console.log('Hai Vinto');
    alert('Hai Vinto);
} else {
    console.log('Hai Perso');
    alert('Hai Perso);
}
```

##### FINE
