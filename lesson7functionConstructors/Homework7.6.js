// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, yearOfManufacture, maximumSpeed, engineDisplacement, drive, info, increaseMaxSpeed, changeYear, addDriver){
    this.model = model;
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

let car1 = new Car('Toyota','Corolla', '2010', 220, '1800', 220, ['Toyota', 'Corolla','2010','220','1800'], 40, '2015', {id:1, licence:'yes', name: 'pit', age:30});
console.log(car1);
console.log(car1.drive(220));
console.log(car1.info('Toyota', 'Corolla', '2010', 220, 1800));
console.log(car1.increaseMaxSpeed(40));
console.log(car1.changeYear('2015'));
console.log(car1.addDriver({id:1, licence:'yes', name: 'pit', age:30}));/*тут помилку видає: Uncaught TypeError: driver.push is not a function*/
/*робив самостійно, без підглядання у відеорозбір*/

