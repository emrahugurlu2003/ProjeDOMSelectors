const myHeader = document.getElementById(`header`);

myHeader.style.color = `red`;
myHeader.style.backgroundColor = `green`;
//console.log(myHeader);

const list = document.getElementsByTagName(`li`);
list[0].style.color = `orange`;
list[list.length - 1].style.color = `magenta`;

list[3].innerHTML = `Emo`;
console.log(list[2].innerHTML);
//console.log(list[2].textContent);

list[2].innerHTML += `<li>Emo4</li>`;

const classDegiskeni = document.getElementsByClassName(`list`);
//console.log(classDegiskeni);
//HTML collection doner bunu array haline çevirmek için
const itemListArray = Array.from(classDegiskeni);
//console.log(itemListArray);
//array içinde dolaşmak için forEach kullanılır.
//Her bir item için ne yapacağını da fonlsiyon olarak yazdım.
//hem log etti hem de her birinde attribute set derek ilerledi!
itemListArray.forEach((item) => console.log((item.style.color = `purple`)));

//HTML collection doner bunu array haline çevirmek için 2.YOL
const itemListSpread = [...itemListArray];
//doğrudan array oldu
//console.log(itemListSpread);

//Şimdi bu array ile oynayalım. orjinali bozmadan manuple edelim
itemListSpread.map((item) => console.log((item.style.color = `red`)));

const tagSecme = document.querySelector(`h1`);
const classSecme = document.querySelector(`.list`);
const idSecme = document.querySelector(`#btn`);
const listeSecme = document.querySelectorAll(`ul li`);
