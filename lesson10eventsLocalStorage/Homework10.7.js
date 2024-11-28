// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayName,objToAdd) {
    const newArr = localStorage.getItem(arrayName);
    if(!newArr){
        throw new Error('there is no such array here');/*далі код не працює, якщо тут формується примусово помилка*/
    }
        const array = JSON.parse(newArr);/*парсуємо масив до формату JS*/
    if(typeof objToAdd === 'object'){
        array.push(objToAdd);
    }
    const jsonArray = JSON.stringify(array);/*приводимо масив до стрінги*/
    localStorage.setItem(arrayName, jsonArray);/*передаємо масив у localStorage у вигляді стрінги*/
}

addToLocalStorage('sessionsList', {});