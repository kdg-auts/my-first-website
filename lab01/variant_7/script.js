// 1. Знаходимо елементи
const title = document.getElementById('title');
const desc = document.getElementById('description');
const btn = document.getElementById('lang-btn');

// 2. Створюємо "перемикач" стану (true - українська, false - англійська)
let isUkrainian = true;

// 3. Обробка кліку
btn.addEventListener('click', function() {
    if (isUkrainian) {
        // Змінюємо на англійську
        title.textContent = "Welcome!";
        desc.textContent = "This is an example of a page with an interface language switcher.";
        btn.textContent = "Переключити на українську";
        isUkrainian = false;
    } else {
        // Змінюємо назад на українську
        title.textContent = "Ласкаво просимо!";
        desc.textContent = "Це приклад сторінки з можливістю зміни мови інтерфейсу.";
        btn.textContent = "Switch to English";
        isUkrainian = true;
    }
    
    console.log("Мову змінено. Поточний стан (UA): " + isUkrainian);
});