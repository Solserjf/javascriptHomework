// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

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
console.log(Clients.sort((a, b) => a.order.length - b.order.length));