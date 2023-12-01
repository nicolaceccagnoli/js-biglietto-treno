/* 

    Il programma dovrà chiedere all'utente:

    1) il numero di chilometri che vuole percorrere il passeggeo;
    2) l'età del passeggero;

    Sulla base di queste informazioni dovrà calcolare:

    3) il prezzo totale del viaggio --> secondo queste regole:

    a) il prezzo del biglietto è definito in base ai km (0.21 € al km);
    b) va applicato uno sconto del 20% per i minorenni;
    c) va applicato uno sconto del 40% per gli over 65.

    4) L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

*/

// Punto 1.                                                 OK

const passengerName = prompt('Inserisci il tuo Nome:');
console.log(passengerName);

// Punto 2.                                                 OK

const passengerAge = prompt('Inserisci la tua età:');
console.log(passengerAge);
