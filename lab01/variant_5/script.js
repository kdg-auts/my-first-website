// 1. Змінна для збереження відсотка
let progress = 0;

// 2. Знаходимо елементи
const bar = document.getElementById('progress-bar');
const statusText = document.getElementById('status');
const addBtn = document.getElementById('add-btn');
const resetBtn = document.getElementById('reset-btn');

// 3. Функція для оновлення вигляду
function updateDisplay() {
    bar.style.width = progress + "%";
    statusText.textContent = "Прогрес: " + progress + "%";
}

// 4. Додавання прогресу
addBtn.addEventListener('click', function() {
    if (progress < 100) {
        progress = progress + 10;
        updateDisplay();
    }
    
    if (progress === 100) {
        statusText.textContent = "Завершено!";
    }
});

// 5. Скидання
resetBtn.addEventListener('click', function() {
    progress = 0;
    updateDisplay();
});