/* Script de Interatividade */

// Fechar menu mobile ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.remove('active');
    });
});

// Adicionar animação ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar cards e sections
document.querySelectorAll('.skill-card, .project-card, .achievement').forEach(el => {
    observer.observe(el);
});

// Smooth scroll auxiliar
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Event listeners para botões de scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        smoothScroll(target);
    });
});

// Animação de aparecimento ao carregar a página
window.addEventListener('load', () => {
    document.querySelectorAll('.hero-content, .navbar').forEach(el => {
        el.style.opacity = '1';
    });
});

console.log('Portfolio carregado! ✨');
