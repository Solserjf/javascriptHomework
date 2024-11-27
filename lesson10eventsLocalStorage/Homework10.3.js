// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

const form = document.forms.registration;
const info = document.getElementById('info');
const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', () => {
    console.log('button clicked');
let inputName = form.name.value;
let inputSurname = form.surname.value;
let inputAge = form.age.value;
console.log(inputName, inputSurname, inputAge);
info.innerText = inputName + ' ' + inputSurname + ' ' + inputAge;
} );


