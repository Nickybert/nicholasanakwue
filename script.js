document.addEventListener('DOMContentLoaded', function() {
    const publications = [
        "Anakwue, N., & Smith, J. (2023). The Role of Social Media in Modern Protest Movements. Journal of Digital Activism, 15(2), 112-128.",
        "Anakwue, N. (2022). Digital Security Practices Among Online Activist Communities. Proceedings of the International Conference on Cyber-Activism, London, UK.",
        "Johnson, L., Anakwue, N., & Brown, K. (2021). Transnational Digital Networks and Global Social Movements. New Media & Society, 23(4), 567-589."
    ];

    const publicationList = document.getElementById('publication-list');
    publications.forEach(pub => {
        const li = document.createElement('li');
        li.textContent = pub;
        publicationList.appendChild(li);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar color change on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.9)';
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    });

    // Animate elements when they come into view
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-pop-in');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, {
        threshold: 0.1
    });

    document.querySelectorAll('.topic, #publication-list li, .skill').forEach(el => {
        observer.observe(el);
    });
});
