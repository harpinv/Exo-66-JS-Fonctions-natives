let entier = document.getElementById('entier');
let operande = 10;
entier.innerText = operande * parseInt(entier.innerText);

let flottant = document.getElementById('flottant');
let numerique = document.getElementById('non-numerique');
let randon = document.getElementById('random');
let trun = document.getElementById('trunc');
let replase = document.getElementById('replace');

flottant.innerText = operande * parseFloat(flottant.innerText) + parseInt(entier.innerText);

if(isNaN(numerique.innerText)) {
    numerique.innerText = 0;
}

randon.innerText = Math.random();
trun.innerText = Math.trunc(parseFloat(trun.innerText));
replase.innerText = replase.innerText.replace('world', "Harpin Vincent");