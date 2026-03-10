// 1. Знаходимо кнопку за її ID
const themeBtn = document.getElementById('theme-toggle');

// 2. Додаємо реакцію на клік
themeBtn.addEventListener('click', function() {
    
    // 3. Звертаємося до тегу body і "перемикаємо" клас dark-theme
    document.body.classList.toggle('dark-theme');
    
    // Повідомлення для перевірки в консолі
    console.log("Тему змінено!");
});