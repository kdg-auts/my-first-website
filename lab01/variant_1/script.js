// 1. Знаходимо кнопку в документі за її ID
const button = document.getElementById('buy-btn');

// 2. Додаємо прослуховувач події "клік"
button.addEventListener('click', function() {
    
    // 3. Змінюємо текст всередині кнопки
    button.textContent = "У кошику";
    
    // 4. Додаємо до кнопки новий CSS-клас (сірий колір)
    button.classList.add('in-cart');
    
    // Виведемо повідомлення в консоль (для перевірки в DevTools)
    console.log("Товар додано до кошика!");
});