// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let p = document.getElementById('text');
let button = document.getElementsByTagName('button')[0];
button.onclick = function (){
    p.style.display = 'none';
};
