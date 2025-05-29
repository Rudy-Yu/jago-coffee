// JavaScript untuk meningkatkan interaktivitas dan menggantikan fungsi PHP

// Data testimonial statis
const testimonials = [
    {
        name: 'Rizky',
        text: 'The cart design and the concept of cafe-on-wheels are really cool! It\'s giving a whole new experience for customers',
        rating: 5
    },
    {
        name: 'Ayu',
        text: 'A solution for people who want to get a cafe quality coffee with a home-made coffee price. Jago Coffee rocks!',
        rating: 5
    },
    {
        name: 'Budi',
        text: 'My go-to whenever I crave for a coffee but too lazy to spend a delivery fee. Jago Coffee is indeed the solution',
        rating: 5
    },
    {
        name: 'Putri',
        text: 'You can book Jago Coffee for events too! The baristas are super friendly. Cool!',
        rating: 5
    }
];

// Data menu statis
const menuItems = [
    {
        name: 'Americano',
        price: 'IDR 15K',
        class: 'menu-item-1'
    },
    {
        name: 'Cappuccino',
        price: 'IDR 18K',
        class: 'menu-item-2'
    },
    {
        name: 'Latte',
        price: 'IDR 20K',
        class: 'menu-item-3'
    },
    {
        name: 'Matcha Latte',
        price: 'IDR 22K',
        class: 'menu-item-4'
    },
    {
        name: 'Chocolate',
        price: 'IDR 20K',
        class: 'menu-item-5'
    },
    {
        name: 'Espresso',
        price: 'IDR 12K',
        class: 'menu-item-6'
    }
];

// Fungsi untuk menampilkan testimonial
function renderTestimonials() {
    const testimonialGrid = document.querySelector('.testimonial-grid');
    if (!testimonialGrid) return;
    
    testimonialGrid.innerHTML = '';
    
    testimonials.forEach(testimonial => {
        const testimonialElement = document.createElement('div');
        testimonialElement.className = 'testimonial animate-on-scroll';
        
        let starsHTML = '';
        for (let i = 0; i < testimonial.rating; i++) {
            starsHTML += '<i class="fas fa-star"></i>';
        }
        
        testimonialElement.innerHTML = `
            <div class="testimonial-stars">
                ${starsHTML}
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <p class="testimonial-author">— ${testimonial.name}</p>
        `;
        
        testimonialGrid.appendChild(testimonialElement);
    });
}

// Fungsi untuk menampilkan menu
function renderMenu() {
    const menuGrid = document.querySelector('.menu-grid');
    if (!menuGrid) return;
    
    menuGrid.innerHTML = '';
    
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = `menu-item ${item.class} animate-on-scroll`;
        
        menuItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.price}</p>
        `;
        
        menuGrid.appendChild(menuItem);
    });
}

// Fungsi untuk validasi form kontak
function validateContactForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = document.getElementById('contact-submit');
    
    let isValid = true;
    
    // Validasi nama
    if (!nameInput.value.trim()) {
        showError(nameInput, 'Nama tidak boleh kosong');
        isValid = false;
    } else {
        clearError(nameInput);
    }
    
    // Validasi email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
        showError(emailInput, 'Email tidak boleh kosong');
        isValid = false;
    } else if (!emailPattern.test(emailInput.value)) {
        showError(emailInput, 'Format email tidak valid');
        isValid = false;
    } else {
        clearError(emailInput);
    }
    
    // Validasi pesan
    if (!messageInput.value.trim()) {
        showError(messageInput, 'Pesan tidak boleh kosong');
        isValid = false;
    } else {
        clearError(messageInput);
    }
    
    // Jika form valid, tampilkan loading indicator
    if (isValid) {
        submitButton.innerHTML = 'MENGIRIM... <span class="loading"></span>';
        submitButton.disabled = true;
    }
    
    return isValid;
}

// Fungsi untuk validasi form newsletter
function validateNewsletterForm() {
    const emailInput = document.getElementById('newsletter-email');
    const submitButton = document.getElementById('newsletter-submit');
    
    let isValid = true;
    
    // Validasi email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
        showError(emailInput, 'Email tidak boleh kosong');
        isValid = false;
    } else if (!emailPattern.test(emailInput.value)) {
        showError(emailInput, 'Format email tidak valid');
        isValid = false;
    } else {
        clearError(emailInput);
    }
    
    // Jika form valid, tampilkan loading indicator
    if (isValid) {
        submitButton.innerHTML = 'MENGIRIM... <span class="loading"></span>';
        submitButton.disabled = true;
    }
    
    return isValid;
}

// Fungsi untuk menampilkan error
function showError(input, message) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error-message') || document.createElement('div');
    
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    
    if (!formGroup.querySelector('.error-message')) {
        formGroup.appendChild(errorElement);
    }
    
    input.classList.add('error-input');
}

// Fungsi untuk menghapus error
function clearError(input) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error-message');
    
    if (errorElement) {
        formGroup.removeChild(errorElement);
    }
    
    input.classList.remove('error-input');
}

// Fungsi untuk menampilkan pesan sukses
function showSuccessMessage(container, message) {
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = message;
    
    container.innerHTML = '';
    container.appendChild(successMessage);
    
    // Hapus pesan setelah 5 detik
    setTimeout(() => {
        successMessage.style.opacity = '0';
        setTimeout(() => {
            container.removeChild(successMessage);
        }, 500);
    }, 5000);
}

// Fungsi untuk animasi scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('animated');
        }
    });
}

// Fungsi untuk tombol back to top
function handleBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
}

// Fungsi untuk smooth scroll
function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition - 80; // Offset for header
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// Fungsi untuk mendapatkan tahun saat ini
function getCurrentYear() {
    return new Date().getFullYear();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Render konten dinamis
    renderTestimonials();
    renderMenu();
    
    // Set tahun saat ini di footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = getCurrentYear();
    }
    
    // Tambahkan kelas untuk animasi scroll
    document.querySelectorAll('.about-grid, .value-card, .menu-item, .step, .testimonial').forEach(element => {
        element.classList.add('animate-on-scroll');
    });
    
    // Inisialisasi animasi scroll
    animateOnScroll();
    
    // Event listener untuk scroll
    window.addEventListener('scroll', function() {
        animateOnScroll();
        handleBackToTop();
    });
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const overlay = document.getElementById('overlay');
    
    if (mobileMenuBtn && mobileMenu && mobileMenuClose && overlay) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        overlay.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Event listener untuk form kontak dengan Formspree
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateContactForm()) {
                const formData = new FormData(contactForm);
                const formAction = contactForm.getAttribute('action');
                
                fetch(formAction, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(data => {
                    const formContainer = document.querySelector('.contact-form-container');
                    showSuccessMessage(formContainer, 'Terima kasih! Pesan Anda telah kami terima.');
                    contactForm.reset();
                    document.getElementById('contact-submit').innerHTML = 'SEND MESSAGE';
                    document.getElementById('contact-submit').disabled = false;
                })
                .catch(error => {
                    console.error('Error:', error);
                    document.getElementById('contact-submit').innerHTML = 'SEND MESSAGE';
                    document.getElementById('contact-submit').disabled = false;
                    alert('Terjadi kesalahan. Silakan coba lagi nanti.');
                });
            }
        });
    }
    
    // Event listener untuk form newsletter
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateNewsletterForm()) {
                const formData = new FormData(newsletterForm);
                const formAction = newsletterForm.getAttribute('action');
                
                fetch(formAction, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(data => {
                    const formContainer = document.querySelector('.newsletter-form-container');
                    showSuccessMessage(formContainer, 'Terima kasih telah berlangganan newsletter kami!');
                    newsletterForm.reset();
                    document.getElementById('newsletter-submit').innerHTML = 'SUBSCRIBE';
                    document.getElementById('newsletter-submit').disabled = false;
                })
                .catch(error => {
                    console.error('Error:', error);
                    document.getElementById('newsletter-submit').innerHTML = 'SUBSCRIBE';
                    document.getElementById('newsletter-submit').disabled = false;
                    alert('Terjadi kesalahan. Silakan coba lagi nanti.');
                });
            }
        });
    }
    
    // Tambahkan tombol back to top
    const backToTopButton = document.createElement('div');
    backToTopButton.id = 'back-to-top';
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopButton);
    
    // Event listener untuk tombol back to top
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Event listener untuk smooth scroll pada semua link anchor
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (this.getAttribute('href') === '#') return;
            
            const target = this.getAttribute('href');
            smoothScroll(target, 800);
            
            // Close mobile menu if open
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
});
