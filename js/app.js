//- chidere all'utente il suo nome
//  - creare variabile name
let nome;
//  - fare prompt dove chiedi il nome all'utente
//  - assegnare a name il risultato del prompt
nome = prompt("Ciao come ti chiami?");
//  - stamparlo con il console.log
console.log(nome);
//- chiedere all'utente il suo cognome
//  - creare variabile username
let username 
//  - fare prompt dove chiedi il nome all'utente
//  - assegnare a username il risultato del prompt
username = prompt("Quale il tuo cognome?");
//  - stamparlo con il console.log
console.log(username);
//- chiedere all'utente il suo colore perferito
//  - creare variabile color
let color;
//  - fare prompt dove chiedi il nome all'utente
//  - assegnare a color il risultato del prompt
color = prompt("Quale il tuo colore perferito");
//  - stamparlo con il console.log
console.log(color);
//- password generata dagli input dell'utente
//  - creare variabile password dove concateni le variabili name username e color piu il numero 21
const password = nome + username + color + 21
// stamparlo con il console.log
console.log(password)
// creare variabile che andara a modificare il dom tramite id 
const passwordDomElement = document.getElementById("password");
// passare la variabile password a passwordDomElement
passwordDomElement.innerHTML = password;