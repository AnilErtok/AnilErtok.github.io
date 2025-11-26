// -------------------- SMOOTH SCROLL --------------------
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// -------------------- AKTİF MENÜ --------------------
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll("section");
    const scrollPos = window.scrollY + 150; // 150px offset

    sections.forEach(sec => {
        if (scrollPos > sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
            document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
            const activeLink = document.querySelector(`nav a[href="#${sec.id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
});

// -------------------- NAVBAR SHRINK --------------------
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav-container");
    if (window.scrollY > 80) {
        nav.classList.add("shrink");
    } else {
        nav.classList.remove("shrink");
    }
});

// -------------------- LIGHTBOX GALERİ --------------------
// Lightbox galerisi
const galleryImages = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

// Kapatma butonu
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Boş alana tıklayınca kapanma
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
