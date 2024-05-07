// reset
'use strict'

// 1. definisco due variabili con valore il prompt che chieda all'utente di inserire un numero da 1 a 5 e di inserire pari o dispari;
// 2. definisco una funzione che generi un numero random per il computer;
// 3. sommo il valore numerico dell'utente con il numero risultante della funzione;
// 4. definisco una funzione che prenda l'input dell'utente `pari o dispari` e la somma dei nummeri calcolata in precedeza;
// 5. se la somma dei due numeri è pari e l'utente ha scritto paro, vince l'utente, altrimenti vince il computer.

const numeroUtente = numeroRandom(1, 5);
console.log({numeroUtente});

const sceltaUtente = 'pari';
console.log({sceltaUtente});

// funzione per generare numero randomico
function numeroRandom(min, max){
    console.log({min});
    console.log({max});
    let numeroCasuale = Math.floor(Math.random() * max) + min;
    console.log({numeroCasuale});

    return numeroCasuale; 
}

const somma = numeroUtente + numeroRandom(5, 1);
console.log({somma});

// funzione per stabilire se un numero è pari o dispari
function pariDispari(numero) {
    console.log({numero});
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(pariDispari());

pariDispari(somma);

console.log(`Hai scelto ${sceltaUtente} è uscito ${(pariDispari() ? 'Pari' : 'Dispari')} ${(pariDispari() ? 'HAI VINTO' : 'HAI PERSO')}`);


// FINE
