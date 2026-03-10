// 1. Знаходимо всі потрібні елементи
const formBlock = document.getElementById('form-block');
const successBlock = document.getElementById('success-block');
const sendBtn = document.getElementById('send-btn');
const backBtn = document.getElementById('back-btn');

// 2. Функція для обробки натискання "Надіслати"
sendBtn.addEventListener('click', function() {
    // Додаємо клас "приховано" до форми
    formBlock.classList.add('hidden');
    // Видаляємо клас "приховано" з блоку подяки
    successBlock.classList.remove('hidden');
    
    console.log("Форма надіслана!");
});

// 3. Функція для кнопки "Назад" (щоб можна було протестувати ще раз)
backBtn.addEventListener('click', function() {
    successBlock.classList.add('hidden');
    formBlock.classList.remove('hidden');
});