// 1. Знаходимо фігуру, кнопку та текст опису
const shape = document.getElementById('shape');
const info = document.getElementById('shape-info');
const btn = document.getElementById('transform-btn');

// 2. Обробка натискання
btn.addEventListener('click', function() {
    
    // 3. Перемикаємо клас "circle"
    shape.classList.toggle('circle');
    
    // 4. Перевіряємо, чи є зараз у фігури клас "circle", щоб змінити текст
    if (shape.classList.contains('circle')) {
        info.textContent = "Зараз це: Коло (200x200)";
        btn.textContent = "Повернути квадрат";
    } else {
        info.textContent = "Зараз це: Квадрат (150x150)";
        btn.textContent = "Перетворити фігуру";
    }
    
    console.log("Форму змінено!");
});