// 1. Створюємо масив (список) цитат
const quotes = [
    "Почни з того, що необхідно. Потім роби те, що можливо.",
    "Найкращий спосіб передбачити майбутнє — створити його.",
    "Важливо не те, як повільно ти йдеш, а те, що ти не зупиняєшся.",
    "Складнощі — це просто шлях до успіху.",
    "Твоя єдина межа — це твоя уява."
];

// 2. Знаходимо елементи на сторінці
const textElement = document.getElementById('quote-text');
const btn = document.getElementById('next-btn');

// 3. Додаємо реакцію на клік
btn.addEventListener('click', function() {
    
    // 4. Генеруємо випадковий індекс від 0 до довжини списку
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // 5. Замінюємо текст на сторінці на цитату з масиву
    textElement.textContent = quotes[randomIndex];
    
    console.log("Вибрано цитату №" + randomIndex);
});