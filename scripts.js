document.addEventListener("DOMContentLoaded", function() {
    const mailButton = document.querySelector('.chat-btn');
    mailButton.addEventListener('click', function() {
        window.location.href = "mailto:info@nickteichmann.de";
    });
});


window.addEventListener('scroll', () => {
    const section = document.querySelector('.blog-section');
    const scrollY = window.scrollY;
    const newSize = 18 + Math.min(scrollY / 50, 1.5); // max 5px größer
    section.style.fontSize = `${newSize}px`;
});
