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
//itemListArray.forEach((item) => console.log((item.style.color = `purple`)));

//HTML collection doner bunu array haline çevirmek için 2.YOL
const itemListSpread = [...itemListArray];
//doğrudan array oldu
//console.log(itemListSpread);

//Şimdi bu array ile oynayalım. orjinali bozmadan manuple edelim
//itemListSpread.map((item) => console.log((item.style.color = `red`)));

const tagSecme = document.querySelector(`h1`);
const classSecme = document.querySelector(`.list`);
const idSecme = document.querySelector(`#btn`);
const listeSecme = document.querySelectorAll(`ul li`);

//TRAVERSING: Bir element üzerinden baka bir element ulaşma

//Yukarı yonde traverse: child->parent
const listYukari = document.querySelector(`li`);
//ilk li yi buldu, yani HTML yi
/* console.log(
  listYukari.parentElement.parentElement.parentElement.parentElement
    .parentElement
); */
//once ul'ye oradan da section'a oradan da maine'e oradan da body'e oradan da html'ye gitti
//aynısını paretNode ile de yapmak mumkun.

//uzun uzun ilermek yerine hızlıca atmaka da mumkun.
//En yakın section'a zıplayalım:

const listYukari2 = document.querySelector(`li`); /* en başa donelim */
console.log(listYukari2.closest(`section`));

//---------------------------------------
//Aşağı yonde traverse: parent->child
const addItem = document.querySelector(`.add-item`);
//addItem adlı degiskene section atandı
console.log(addItem.children);
//section içinde 3 tane chilren vardı, onları log etti.
//her bir child ulaşmak için:
addItem.children[0].style.color = `green`;
addItem.children[1].style.backgroundColor = `orange`;
addItem.children[2].style.backgroundColor = `purple`;

//doğrudan ilk ve son elemanlara da gidilebilir.
addItem.lastElementChild.style.color = `magenta`;
addItem.firstElementChild.style.color = `magenta`;

//Yatay yonde traverse : child->child
const ulDegiskeni = document.querySelector(`ul`);
const listsDegiskeni = ulDegiskeni.children;
console.log(itemListSpread);

const js = listsDegiskeni[2];
console.log(js);

const a =
  js.previousElementSibling.previousElementSibling.nextElementSibling
    .nextElementSibling.nextElementSibling;
console.log(a);
