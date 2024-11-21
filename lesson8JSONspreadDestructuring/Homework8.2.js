// #iz6emEsP2BA
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let mapedCoursesAndDurationArray = coursesAndDurationArray.map((value, index) => ({...   value, id: index + 1}));/*інлайн конструкція*/
// let mapedCoursesAndDurationArray = coursesAndDurationArray.map(function (value, index)  {
//     return {...value, id: index + 1};
// });/*не інлайн конструкція*/
console.log(mapedCoursesAndDurationArray);
/*ПИТАННЯ? ДЛЯ ЧОГО МИ БЕРЕМО ДОДАТКОВО У КРУГЛІ ДУЖКИ {...value, id: index + 1}??? САМИХ ФІГУРНИХ ДУЖОК НЕДОСТАТНЬО??*/
/*ОСЬ ОТ ТУТ В НЕ ІНЛАЙН КОНСТРУКЦІЇЇ КРУГЛИХ ДУЖОК НАВКОЛО ФІГУРНИХ НЕМАЄ, І ВСЕ ПРАЦЮЄ ЯК ТРЕБА, ЦЕ ТОМУ ЩО ТУТ Є RETURN? ЧИ СПРАВА В ІНШОМУ?*/