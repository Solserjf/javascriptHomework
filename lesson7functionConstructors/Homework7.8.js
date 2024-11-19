// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {

    constructor(name, age, footSize){
        this.name = name;
        this. age = age;
        this.footSize = footSize;
    }
}

let cinderella = [
    new Cinderella('Olivia', 21, 37),
    new Cinderella('Emma', 22, 38),
    new Cinderella('Charlotte', 23, 36),
    new Cinderella('Amelia', 24, 38),
    new Cinderella('Ava', 25, 38),
    new Cinderella('Sophia', 26, 37),
    new Cinderella('Isabella', 27, 39),
    new Cinderella('Mia', 28, 40),
    new Cinderella('Evelyn', 29, 41),
    new Cinderella('Harper', 30, 42)
]
console.log(cinderella);

class Prince {
    constructor(name, age, footSize){
        this.name = name;
        this. age = age;
        this.footSize = footSize;
    }
}

let prince = new Prince('Andryu', 31, 36);

for (const cinderellaItem of cinderella) {
     if(cinderellaItem.footSize === prince.footSize){
      console.log('Congratulations! 100% match!');
     }else{
         console.log('Cinderella not found!');
     }
}

let foundCinderella = cinderella.find(value => value.footSize === 36);
console.log(foundCinderella);
/*зробив самостійно не дивлячись у відеорозбір*/