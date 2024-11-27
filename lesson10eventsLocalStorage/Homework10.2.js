// #j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const form = document.forms[0];/*forms[0] - тому що у нас тут одна єдина форма на сторінці а forms повертає колекцію (HTMLCollection) форм у поточному документі*/
form.onsubmit = function (ev){
    ev.preventDefault();/* preventDefault під час submit - щоб не відбувалось перезавантаження сторінки при натисканні enter у формі*/
}
let button = document.getElementsByTagName('button')[0];
let input = form.age;
button.onclick = function (event) {
localStorage.setItem('age', input.value);
let userAge = +localStorage.getItem('age');/*за допомогою плюса перед localStorage перетворюємо стрінгу на число, тому що приходить д нас стрінга */
    console.log(userAge);/*перевірка типу даних*/
    if (typeof userAge === 'number' && userAge >= 18) {
        console.log('Вхід дозволено')
    } else if (typeof userAge === 'number' && userAge < 18) {
        console.log('Вхід заборонено')
    } else {
        console.log('Потрібно ввести число від 0 до 100')
    }
}
