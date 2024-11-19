// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, manufacturer, yearOfManufacture, maximumSpeed, engineDisplacement){
        this.model = model;/*чому тут підкреслює і коли навожу курсором - то пише про дублювання 30 стрічок коду? Тому що цей код скопійовано з іншого файлу?*/
        this.manufacturer = manufacturer;
        this.yearOfManufacture = yearOfManufacture;
        this.maximumSpeed = maximumSpeed;
        this.engineDisplacement = engineDisplacement;
        this.drive = function (maximumSpeed){
            return `їдемо зі швидкістю ${maximumSpeed} на годину`;
        };
        this.info = function (model, manufacturer, yearOfManufacture, maximumSpeed, engineDisplacement){
            return `model -              ${this.model} 
                manufacturer -       ${this.manufacturer} 
                yearOfManufacture -  ${this.yearOfManufacture}
                maximumSpeed -       ${this.maximumSpeed}
                engineDisplacement - ${this.engineDisplacement}`;
        };
        this.increaseMaxSpeed = function (newSpeed){
            return maximumSpeed += newSpeed;
        };
        this.changeYear = function (newValue){
            return yearOfManufacture = newValue;
        };
        this.addDriver = function (driver){
            driver  = {
                id: '',
                licence: '',
                name: '',
                age: ''
            };
            return driver.push(Car);
        };
    }
}

let car1 = new Car('BMW', 'BMW6', '2015', 260, 3000);
console.log(car1);
console.log(car1.drive(260));
console.log(car1.info('BMW', 'BMW6', '2015', 260, 3000));
console.log(car1.increaseMaxSpeed(20));
console.log(car1.changeYear('2018'));
console.log(car1.addDriver({id:1, licence:'yes', name: 'john', age:40}));/*тут помилку видає: Uncaught TypeError: driver.push is not a function*/
/*робив самостійно, без підглядання у відеорозбір*/