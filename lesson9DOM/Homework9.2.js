// #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
const arr =  ['Main','Products','About us','Contacts'];
const ul = document.createElement('ul');
ul.classList.add('ul');
for (const arrElement of arr) {
   const li =  document.createElement('li');
   li.innerText = arrElement;
    ul.appendChild(li);
}
document.body.appendChild(ul);