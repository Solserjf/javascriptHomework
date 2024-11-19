// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;/*чому id тут підсвічується кольором?*/
        this.name = name;/*чому name тут підсвічується кольором?*/
        this.surname = surname;/*чому surname тут не підсвічується кольором?*/
        this.email = email;/*чому email тут не підсвічується кольором?*/
        this.phone = phone;/*чому phone тут  підсвічується кольором?*/
        this.order = order;/*чому order тут не підсвічується кольором?*/
    }
}
/*пам'ятаю з лекцій щось ніби таке - що підсвічується те, що раніше вже використовувалось у інших файлах, і інтелідж це пам'ятає, але surname, email, phone - у мене було в попередніх файлах - але вони не підсвічуються...чому? */
const Clients = [
    new Client(1, 'asya', 'gretho', 'ababagalamaga@.gmail', '+01234568799', ['laptop',  'phone', 'tv']),
    new Client(2, 'basya', 'bretho', 'acabagalamaga@.gmail', '+01234568789', ['laptop', 'camera', 'phone', 'tv', 'game console', 'microwave', 'vacuum cleaner', 'headphones']),
    new Client(3, 'vasya', 'vretho', 'adabagalamaga@.gmail', '+01234568779', ['laptop', 'camera', 'phone', 'tv', 'headphones']),
    new Client(4, 'gasya', 'sretho', 'arabagalamaga@.gmail', '+01234568769', ['laptop', 'camera', 'phone', 'tv', 'microwave', 'headphones']),
    new Client(5, 'sasya', 'tretho', 'awabagalamaga@.gmail', '+01234568759', ['laptop', 'camera', 'phone', 'tv', 'microwave', 'game console', 'headphones']),
    new Client(6, 'fasya', 'kretho', 'aqabagalamaga@.gmail', '+01234568749', ['laptop', 'camera', 'phone', 'headphones']),
    new Client(7, 'dasya', 'lretho', 'atabagalamaga@.gmail', '+01234568739', ['laptop', 'camera', 'phone', 'tv']),
    new Client(8, 'lasya', 'zretho', 'amabagalamaga@.gmail', '+01234568729', ['laptop', 'camera', 'headphones', 'tv']),
    new Client(9, 'zasya', 'dretho', 'anabagalamaga@.gmail', '+01234568719', ['laptop', 'phone']),
    new Client(10, 'hasya', 'mretho', 'alabagalamaga@.gmail', '+01234568709', ['laptop'])
]
console.log(Clients);/*виводиться весь масив кл-тів і їх замовлення*/
// console.log(Clients[0].order);/*виводиться лише замовлення першого кл-та*/
// console.log((Clients[0]));/*виводиться перший кл-нт і його замовлення*/