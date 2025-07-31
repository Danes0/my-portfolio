// Shrink header on scroll
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});

// Typing effect
document.addEventListener("DOMContentLoaded", () => {
    const text = "Hello, I'm Daniela Escobar";
    const typingEl = document.querySelector(".typing-text");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingEl.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    type();

    // Form submission logic
    const form = document.getElementById('contact-form');
    const message = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            const formData = new FormData(form);

            try {
                const response = await fetch('https://formspree.io/f/manbbeav', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    form.reset();
                    message.textContent = 'Your message has been sent. Thank you!';
                    message.classList.remove('hidden');
                } else {
                    message.textContent = 'Oops! Something went wrong. Please try again.';
                    message.classList.remove('hidden');
                }

                setTimeout(() => {
                    message.classList.add('hidden');
                    message.textContent = '';
                }, 5000);

            } catch (error) {
                message.textContent = 'Network error. Please try again later.';
                message.classList.remove('hidden');

                setTimeout(() => {
                    message.classList.add('hidden');
                    message.textContent = '';
                }, 5000);
            }
        });
    }
});
