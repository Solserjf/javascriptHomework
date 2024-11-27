// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

const p = document.createElement('p');/*створив ел-нт параграф*/
p.setAttribute('id', 'text');/*створив до ел-ту параграф id "text"*/
p.innerText = 'hello';/*впровадив безпосередньо текст в параграф*/
document.body.appendChild(p);/*додали ел-нт p у DOM структуру*/
let button = document.createElement('button');/*створив кнопку*/
button.innerText = 'finally hidden';/*впровадив текст для кнопки*/
document.body.appendChild(button);/*додав ел-нт  button до структури  DOM*/
button.onclick = function(){/*створив подію реагування під час натискання кнопки*/
    p.style.display = 'none';
};
