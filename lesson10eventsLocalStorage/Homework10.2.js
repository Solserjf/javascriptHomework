// #j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let button = document.getElementsByTagName('button')[0];
let input = document.getElementById('age');
button.onclick = function (event) {
localStorage.setItem('age', input.value);
let userAge = localStorage.getItem('age');
    if (typeof userAge === 'number' && userAge >= 18) {
        console.log('Вхід дозволено')
    } else if (typeof userAge === 'number' && userAge < 18) {
        console.log('Вхід заборонено')
    } else {
        console.log('Потрібно ввести число від 0 до 100')
    }
}
/*ВИДАЄ ПОМИЛКУ - js:11 Uncaught SyntaxError: Unexpected token 'else', ЧОМУ? адже така конструкція як if - else if - else - існує..*/
/*ЩОСЬ ТУТ В ЛОГІЦІ МАБУТЬ НЕВІРНО?*/