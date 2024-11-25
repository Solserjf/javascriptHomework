// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let inputName = document.getElementById('name');
let inputSurname = document.getElementById('surname');
let inputAge = document.getElementById('age');
let userImageName = localStorage.getItem('name', inputName);
let userImageSurname =  localStorage.getItem('surname', inputSurname);
let userInputAge = localStorage.getItem('age', inputAge);
document.write(`${userImageName}, ${userImageSurname}, ${userInputAge}`);
/*ЩОСЬ ТУТ Я НАМУДРИВ, МАБУТЬ ВСЕ НЕВІРНО, ПОЯСНІТЬ*/