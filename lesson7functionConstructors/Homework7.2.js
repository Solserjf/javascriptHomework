// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
/*Є ПИТАННЯ ПО ЦІЙ ЗАДАЧІ НИЖЧЕ*/
let users = [
    new User (2, 'valya', 'safatov', 'googlevail.gmail.com', '+380915744661'),
    new User (3, 'yulya', 'baratov', 'googlesail.gmail.com', '+380935540221'),
    new User (1, 'kolya', 'ilatov', 'googletail.gmail.com', '+380915544221'),
    new User (4, 'lilya', 'baranov', 'googledail.gmail.com', '+380915544281'),
    new User (5, 'lyalya', 'gubanov', 'googlebail.gmail.com', '+380915544201'),
    new User (6, 'lyolya', 'gavrilov', 'googlenail.gmail.com', '+380915549217'),
    new User (7, 'nelya', 'ipatova', 'googlewail.gmail.com', '+380915544231'),
    new User (8, 'olya', 'ivatova', 'googlegail.gmail.com', '+380915544481'),
    new User (9, 'babulya', 'ilarionova', 'googlejail.gmail.com', '+380912844221'),
    new User (10, 'dedulya', 'bilatov', 'googlecail.gmail.com', '+380915364221')]
// console.log(users);

// let filteredUsers = users.filter(User=> User.id %2 ===0);/*тут виводиться все вірно*/
// let filteredUsers = users.filter(user => user.id %2 ===0);/*тут виводиться все вірно*/
let filteredUsers = users.filter(value => value.id %2 ===0);/*тут виводиться все вірно*/
// let filteredUsers = users.filter(value => User.id ===0);/*тут виводиться пустий масив, чому цей варіант не працює?*/
console.log(filteredUsers);

// let users = [
//     new User('2', 'valya', 'safatov', 'googlevail.gmail.com', '+380915744661'),
//     new User('3', 'yulya', 'baratov', 'googlesail.gmail.com', '+380935540221'),
//     new User('1', 'kolya', 'ilatov', 'googletail.gmail.com', '+380915544221'),
//     new User('4', 'lilya', 'baranov', 'googledail.gmail.com', '+380915544281'),
//     new User('5', 'lyalya', 'gubanov', 'googlebail.gmail.com', '+380915544201'),
//     new User('6', 'lyolya', 'gavrilov', 'googlenail.gmail.com', '+380915549217'),
//     new User('7', 'nelya', 'ipatova', 'googlewail.gmail.com', '+380915544231'),
//     new User('8', 'olya', 'ivatova', 'googlegail.gmail.com', '+380915544481'),
//     new User('9', 'babulya', 'ilarionova', 'googlejail.gmail.com', '+380912844221'),
//     new User('10', 'dedulya', 'bilatov', 'googlecail.gmail.com', '+380915364221')]
//
// let filteredUsers = users.filter(value => value.id % 2 === 0);/*тут виводиться все вірно, але питання: як відбувається перевірка на парність якщо значення id тут у нас - тип  string? value.id %2 ===0 тут же ми рівняємось до числа а не до стрінги.., */
// console.log(filteredUsers);