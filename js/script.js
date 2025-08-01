// 1. Shrink header on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    header.classList.toggle('shrink', window.scrollY > 50);
});

document.addEventListener('DOMContentLoaded', () => {
  // 2. Typing effect
    const text = "Hello, I'm Daniela Escobar";
    const typingEl = document.querySelector('.typing-text');
    let index = 0;
    function type() {
        if (index < text.length) {
        typingEl.textContent += text.charAt(index++);
        setTimeout(type, 100);
        }
    }
    type();

  // 3. Menu open/close logic
    const toggle    = document.querySelector('.menu-toggle');
    const closeBtn  = document.querySelector('.menu-close button');
    const navbar    = document.querySelector('.navbar');

  // Open menu (hamburguesa)
    toggle.addEventListener('click', () => {
        navbar.classList.add('open');
    });

  // Close menu (X dentro del menú)
    closeBtn.addEventListener('click', () => {
        navbar.classList.remove('open');
    });

  // 4. Form submission logic
    const form    = document.getElementById('contact-form');
    const message = document.getElementById('form-message');
    if (form) {
        form.addEventListener('submit', async e => {
        e.preventDefault();
        const data = new FormData(form);
        try {
            const res = await fetch('https://formspree.io/f/manbbeav', {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
            });
            if (res.ok) {
            form.reset();
            message.textContent = 'Your message has been sent. Thank you!';
            } else {
            message.textContent = 'Oops! Something went wrong.';
            }
        } catch {
            message.textContent = 'Network error. Please try again.';
        }
        message.classList.remove('hidden');
        setTimeout(() => {
            message.classList.add('hidden');
            message.textContent = '';
        }, 5000);
        });
    }
});
