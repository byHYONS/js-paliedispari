// reset
'use strict'

// 1. definisco due variabili con valore il prompt che chieda all'utente di inserire un numero da 1 a 5 e di inserire pari o dispari;
// 2. definisco una funzione che generi un numero random per il computer;
// 3. sommo il valore numerico dell'utente con il numero risultante della funzione;
// 4. definisco una funzione che prenda l'input dell'utente `pari o dispari` e la somma dei nummeri calcolata in precedeza;
// 5. se la somma dei due numeri è pari e l'utente ha scritto paro, vince l'utente, altrimenti vince il computer.

// definissco in variabile il minimo e il massimo da inserire come parametri alla funzione numeroRandom():
const numMin = 1;
const numMax = 5;

// chiedo il numero all'utente con la convalida:
let numeroUtente;
while (true) {
    numeroUtente = prompt('Inserisci un numero da 1 a 5:');
    console.log({numeroUtente});
    numeroUtente = Number(numeroUtente);

    if (!isNaN(numeroUtente) && numeroUtente >= numMin && numeroUtente <= numMax){
        break

    } else {
        console.log('Hai inserito un valore non numerico o un numero inferiore a 1 e superiore a 5. Riscrivi il numero corretto!');
    }    
} 
console.log(typeof numeroUtente);

// chiedo pari o dispari all'utente con la convalida:
let sceltaUtente;
while (true){
    sceltaUtente = prompt('Scegli Pari o Dispari:');
    sceltaUtente = sceltaUtente.toLowerCase();

    if (sceltaUtente === 'pari' || sceltaUtente === 'dispari') {
        break

    } else {
        console.log('Hai scritto un valore diverso da Pari o Dispari. Riscrivi il valore!');
    }
}
console.log({sceltaUtente});

// funzione per generare un numero randomico:
function numeroRandom(min, max){

    let numeroCasuale = Math.floor(Math.random() * max) + min;
    console.log({numeroCasuale});

    return numeroCasuale; 
}

const somma = numeroUtente + numeroRandom(numMin, numMax);
console.log({somma});

// funzione per stabilire se un numero è pari o dispari:
function pariDispari(numero) {

    return numero % 2 === 0; // vero
}

// do il valore di vero o falso al risultato:
let risultato = pariDispari(somma);

risultato = risultato ? 'pari' : 'dispari';
console.log({risultato});

// stampiamo il valore in console e con l'alert:
if (risultato === sceltaUtente) {
    console.log(`Hai scelto ${sceltaUtente} è uscito ${risultato}: Hai Vinto`);
    alert(`Hai scelto ${sceltaUtente} è uscito ${risultato}: HAI VINTO!`);

} else {
    console.log(`Hai scelto ${sceltaUtente} è uscito ${risultato}: Hai Perso`);
    alert(`Hai scelto ${sceltaUtente} è uscito ${risultato}: HAI PERSO!`);

}

// FINE
