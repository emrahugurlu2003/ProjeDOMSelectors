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

if (newPar.classList.contains(`d`)) {
  console.log(`içeriyormusss`);
} else {
  newPar.classList.add(`yeniClass`);
}

newPar.classList.toggle(`white`);
//olmadıgı için white eklendi
newPar.classList.toggle(`blue`);
//zaten oldugu için blue çıkarıldı

console.log(newPar.getAttribute(`class`));
//newPar ın class larını istiyorum, getir dedim
console.log(newPar.getAttribute(`id`));
//newPar ın id lerini istiyorum, getir dedim
console.log(newPar.getAttribute(`name`));
//newPar name lerini  istiyorum, getir dedim
console.log(newPar.getAttribute(`type`));
//newPar ın type larını istiyorum, getir dedim

const degisken1 = document.getElementById(`input`);
console.log(degisken1.value);
console.log(newPar);
