//create node ornegi
//p tag'i olusturalım
const newPar = document.createElement(`p`);
const text = document.createTextNode(`Emrah UĞURLU`);
newPar.appendChild(text);
const h2 = document.querySelector(`.item-list h2`);
h2.after(newPar); //h2.before(newPar);
console.log(newPar);
