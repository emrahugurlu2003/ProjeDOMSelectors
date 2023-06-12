//create node ornegi
//p tag'i olusturalım
const newPar = document.createElement(`p`);
const text = document.createTextNode(`Emrah UĞURLU`);
newPar.appendChild(text);
const h2 = document.querySelector(`.item-list h2`);
h2.after(newPar); //h2.before(newPar);

newPar.id = `a`;
newPar.className = `b`;

newPar.setAttribute(`id`, `c`);
newPar.setAttribute(`class`, `d`);

newPar.classList.add(`bg-tomato`, `left`, `blue`);

newPar.classList.remove(`left`);

console.log(newPar);
