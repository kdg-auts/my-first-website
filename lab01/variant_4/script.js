// 1. Створюємо змінну для збереження кількості кліків
let count = 0;

// 2. Знаходимо елементи на сторінці
const display = document.getElementById('counter-value');
const clickBtn = document.getElementById('click-btn');
const resetBtn = document.getElementById('reset-btn');

// 3. Обробка кліку на головну кнопку
clickBtn.addEventListener('click', function() {
    // Збільшуємо число на 1
    count = count + 1;
    
    // Оновлюємо текст на екрані
    display.textContent = count;
    
    console.log("Поточне значення: " + count);
});

// 4. Обробка кліку на кнопку "Скинути"
resetBtn.addEventListener('click', function() {
    count = 0; // Обнуляємо змінну
    display.textContent = count; // Оновлюємо екран
    console.log("Лічильник скинуто");
});