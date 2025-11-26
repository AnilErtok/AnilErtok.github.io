// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Aktif menü
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll("section");
    const scrollPos = window.scrollY + 150;

    sections.forEach(sec => {
        if (scrollPos > sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
            document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
            const activeLink = document.querySelector(`nav a[href="#${sec.id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
});

// NAVBAR SHRINK (küçülme efekti)
window.addEventListener("scroll", function () {
    const nav = document.querySelector(".nav-container");
    if (window.scrollY > 80) {
        nav.classList.add("shrink");
    } else {
        nav.classList.remove("shrink");
    }
});
