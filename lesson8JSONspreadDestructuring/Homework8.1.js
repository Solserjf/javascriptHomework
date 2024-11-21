// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
//
function deepCopy(obj){
    if(obj){
        let userJSONCopied = JSON.parse(JSON.stringify(obj));
        let map = new Map();
        for (const objKey in obj) {
            map.set(obj[objKey],typeof obj[objKey]);
            if(map.get(obj[objKey]) === 'function'){
                userJSONCopied[objKey] = obj[objKey].bind({});
            }
        } return userJSONCopied;
    } throw new Error('щось пішло не так...');
}

let user = {
    name: 'vasya',
    skills: ['html', 'js'],
    greeting: function () {
        console.log('greeting');
    }
}
console.log(deepCopy(user));

