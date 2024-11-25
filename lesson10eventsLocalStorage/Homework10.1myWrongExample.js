// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

document.createElement('p');/*створив ел-нт параграф*/
p.setAttribute('id', 'text');/*створив до ел-ту параграф id "text"*/
let text = document.getElementById('text');
text.innerText = 'hello';/*впровадив безпосередньо текст в параграф*/
let button = document.createElement('button');/*створив кнопку*/
button.onclick = function(){
    document.getElementById('text').style.display = 'none';
};
/*ЧОМУ ЦЕЙ ВАРІАНТ НЕ ПРАЦЮЄ??*/