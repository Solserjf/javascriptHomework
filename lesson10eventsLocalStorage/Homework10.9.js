// <!--#bq1zkx7WP-->
// <!--*** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"-->
// <!--при перезавантаженні сторінки до значення додається по 10грн, але !!!-->
// <!--зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.-->
// <!--При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається-->

const priceBlock = document.getElementById('price-block');/*Отримуємо елемент блоку з ціною*/
const currentTime = Date.now();/*Отримуємо поточний час*/
let savedPrice = localStorage.getItem('price');/*Зчитуємо дані з localStorage*/
const lastUpdate = localStorage.getItem('lastUpdate');/*Зчитуємо дані з localStorage*/
const formatPrice = (price) => `${price}грн`;/*Функція для додавання "грн", якщо його немає*/
if (!savedPrice) {/*Якщо ціна не збережена в localStorage, встановлюємо початкове значення ціни - 100грн*/
    savedPrice = '100грн';
    localStorage.setItem('price', savedPrice);
    priceBlock.textContent = savedPrice;
} else {
    if (!lastUpdate || currentTime - Number(lastUpdate) > 10000) {/*Перевіряємо, чи минуло 10 секунд з моменту останнього оновлення*/
        const numericPrice = Number(savedPrice.replace('грн', ''));
        const newPrice = numericPrice + 10;/*Якщо минуло більше 10 секунд, збільшуємо ціну*/
        // Форматуємо ціну та зберігаємо
        savedPrice = formatPrice(newPrice);
        localStorage.setItem('price', savedPrice);
        localStorage.setItem('lastUpdate', currentTime.toString());
    }
    priceBlock.textContent = savedPrice;
}

