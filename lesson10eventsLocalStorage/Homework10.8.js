// #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let button = document.getElementsByTagName('button');
const tableForm = document.forms['tableForm'];
const table = document.getElementById('table');

tableForm.onsubmit = function (ev) {
    table.innerText = '';
    ev.preventDefault();/*щоб не перезавантажувалась сторінка*/
    const linesValue = +tableForm.line.value;
    const cellsValue = +tableForm.cell.value;
    const contentValue = tableForm.content.value;
    console.log(linesValue, cellsValue, contentValue);

    for (let i = 0; i < linesValue; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cellsValue; j++) {
            const td = document.createElement('td');
            td.innerText = contentValue;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    console.log(table);
}
/*чому подію визначаємо як "форма повинна реагувати на submit? а не button повинен реагувати на onclick?? У завданні говориться що При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом."*/