/* 

    Il programma dovrà chiedere all'utente:

    1) il nome del passeggero;
    2) l'età del passeggero;
    3) il numero di chilometri che vuole percorrere il passeggeo;

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

const passengerAgeNumber = parseInt(passengerAge);

if(isNaN(passengerAgeNumber)) {

    alert('Perfavore inserisci solo caratteri numerici!');

}

if (passengerAgeNumber < 18) {
    
    console.log('Sei Minorenne');

} else if (passengerAgeNumber >= 65) {

    console.log('Hai già un piede nella fossa');

} else {
    console.log('Non hai diritto a nessuno sconto, devi pagare per intero.');
}


// Punto 3                                                 OK

const distance = prompt('Quanta km devi percorrere?');
console.log(distance);

const distanceInNumber = parseInt(distance);

if(isNaN(distanceInNumber)) {

    alert('Perfavore inserisci solo caratteri numerici!');

}


// Parte a)                                                 OK

let ticketPrice = (distanceInNumber * 0.21);
console.log(ticketPrice); 

// Parte b) e c)                                            OK

if (passengerAgeNumber < 18) {

    ticketPriceUnder = (ticketPrice * 0.8);
    console.log(ticketPriceUnder);

} else if (passengerAgeNumber >= 65) {

    ticketPriceOver = (ticketPrice * 0.6);
    console.log(ticketPriceOver);

}

// Punto 4

document.getElementById('your-ticket').innerHTML = (ticketPrice);