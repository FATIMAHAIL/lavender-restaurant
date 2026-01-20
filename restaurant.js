// تأثير بسيط عند إضافة صنف للسلة
const addButtons = document.querySelectorAll('.add-btn');

addButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.style.backgroundColor = '#FF8C00';
        button.innerText = '✓';

        setTimeout(() => {
            button.style.backgroundColor = '#2D2D2D';
            button.innerText = '+';
        }, 1000);
    });
});

// رسالة ترحيب في الكونسول
console.log("مرحباً يا فاطمة! تم تشغيل موقع المطعم بنجاح.");