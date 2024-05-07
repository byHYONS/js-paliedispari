// reset
'use strict'

// 1. chiedo all'utente di scrivere una parola per mezzo del `prompt` che assegnerò al parametro della funzione parolaUtente;
// 2. nomino una funzione con parametro parola;
// 3. all'interno della funzione nomino una var parolaInvertita che la userò per trasformre la stringa in arrey tramite .split('');
// 4. con il metodo .reverse() inverto l'ordine dell'arrey;
// 5. trasformo nuovamete l'arrey in stringa con .join('');
// 6. scrivo una istruzione condizionale assegnando a return un risultato/stringa di testo;
// 7. nomino una variabile risultato che mi richiama la funzione.


const parolaUtente = prompt('Inserisci una parola:');

function paroraPalindroma(parola){

    let parolaInvertita = parola.split('').reverse();
    console.log({parola});
    console.log(parolaInvertita);

    parolaInvertita = parolaInvertita.join('');
    console.log(parolaInvertita);
    
    if (parola === parolaInvertita){
        return `"${parola.toUpperCase()}" è una parola Palindroma`;

    } else {
        return `"${parola.toUpperCase()}" non è una parola Palindroma`;
        
    }    

}

const risultato = paroraPalindroma(parolaUtente);
console.log(risultato);
alert(risultato);


// FINE
