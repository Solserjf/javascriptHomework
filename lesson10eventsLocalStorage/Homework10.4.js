// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиться цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
const div = document.createElement('div');
div.setAttribute('id', 'withNumber');
let currentNum = +localStorage.getItem('num');/*чому без плюса перед localStorage буде повертатися Null?*/
currentNum += 1;
localStorage.setItem('num', currentNum);/*localStorage приведе до стрінги currentNum*/
document.body.appendChild(div);
document.getElementById('withNumber').innerText = currentNum;

