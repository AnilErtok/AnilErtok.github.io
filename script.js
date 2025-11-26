// Smooth Scroll
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Aktif menü
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll("section");
    let scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
        if (scrollPos > sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
            document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
            document.querySelector('.nav-link[href="#' + sec.id + '"]').classList.add('active');
        }
    });
});
