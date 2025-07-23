// Infinite Carousel Class
class ImprovedSlider {
    constructor() {
        this.container = document.querySelector(".slider-container");
        
        if (!this.container) return;
        
        this.slider = document.querySelector(".slider");
        this.slideWidth = 410; // 400px + 10px margin (5px sa svake strane)

        this.images = [
            "assets/gallery/Farbige/picture-8.JPG",
            "assets/gallery/Schwarz-Weiss/picture-39.JPG", 
            "assets/gallery/Farbige/picture-10.JPG",
            "assets/gallery/Schwarz-Weiss/picture-37.JPG",
        ];

        this.currentIndex = 1;
        this.isAnimating = false;
        this.isMobile = window.innerWidth < 992;

        this.init();
    }

    init() {
        this.createSlides();
        this.setupEventListeners();
        this.positionSlides();
        this.startAutoplay();
    }

    createSlides() {
        // Za desktop kreiraj 3 kopije, za mobilne samo 1 kopiju
        const copies = this.isMobile ? 1 : 3;
        const totalSlides = this.images.length * copies;
        
        for (let i = 0; i < totalSlides; i++) {
            const index = i % this.images.length;
            const slide = document.createElement("div");
            slide.className = "slide";
            slide.innerHTML = `<img src="${this.images[index]}" alt="Slide ${index + 1}" loading="lazy">`;
            this.slider.appendChild(slide);
        }
    }

    positionSlides() {
        const slides = this.slider.querySelectorAll(".slide");
        
        if (this.isMobile) {
            // Za mobilne/tablet - jednostavno centriraj trenutni slajd
            const offset = (this.container.offsetWidth - this.getSlideWidth()) / 2;
            const baseTransform = -this.currentIndex * this.getSlideWidth() + offset;
            this.slider.style.transform = `translateX(${baseTransform}px)`;
            
            slides.forEach((slide, index) => {
                slide.classList.toggle("active", index === this.currentIndex % this.images.length);
            });
        } else {
            // Za desktop - originalna logika
            const offset = (this.container.offsetWidth - this.slideWidth) / 2;
            const baseTransform = -this.currentIndex * this.slideWidth + offset;
            this.slider.style.transform = `translateX(${baseTransform}px)`;

            slides.forEach((slide, index) => {
                const normalizedIndex = this.normalizeIndex(index);
                slide.classList.toggle(
                    "active",
                    normalizedIndex === this.currentIndex % this.images.length
                );
            });
        }
    }

    // Pomerio si sa < 576 ? 310 : 410 posto si u CSS menjao @media (max-width) za .sldider-container: height:400px (bilo je 300) i max-width:350px (bilo je 300), plus i .slide min-width:350px (bilo je 300)
    getSlideWidth() {
        return this.isMobile ? (window.innerWidth < 576 ? 360 : 410) : this.slideWidth;
    }

    normalizeIndex(index) {
        return index % this.images.length;
    }

    moveSlides(direction) {
        if (this.isAnimating) return;
        this.isAnimating = true;

        if (this.isMobile) {
            // Jednostavna logika za mobilne
            this.currentIndex = (this.currentIndex + direction + this.images.length) % this.images.length;
            this.slider.style.transition = "transform 0.3s ease-out";
            this.positionSlides();
        } else {
            // Originalna logika za desktop
            const slides = this.slider.querySelectorAll(".slide");
            this.currentIndex += direction;

            this.slider.style.transition = "transform 0.3s ease-out";
            this.positionSlides();

            if (
                this.currentIndex >= this.images.length * 2 ||
                this.currentIndex <= this.images.length - 1
            ) {
                setTimeout(() => {
                    this.slider.style.transition = "none";
                    this.currentIndex =
                        this.currentIndex >= this.images.length * 2
                            ? this.currentIndex - this.images.length
                            : this.currentIndex + this.images.length;
                    this.positionSlides();
                }, 300);
            }
        }

        setTimeout(() => {
            this.isAnimating = false;
        }, 300);
    }

    setupEventListeners() {
        // Click/Touch navigacija
        this.container.addEventListener("click", (e) => {
            if (this.isMobile) {
                // Za mobilne - ceo container je touch area
                const rect = this.container.getBoundingClientRect();
                const isLeft = e.clientX < rect.left + rect.width / 2;
                this.moveSlides(isLeft ? -1 : 1);
            } else {
                // Za desktop - originalna logika
                const rect = this.container.getBoundingClientRect();
                const isLeft = e.clientX < rect.left + rect.width / 2;
                this.moveSlides(isLeft ? -1 : 1);
            }
        });

        // Touch events za mobilne
        let startX = 0;
        let currentX = 0;
        let isDragging = false;

        this.container.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
            this.stopAutoplay();
        });

        this.container.addEventListener("touchmove", (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
        });

        this.container.addEventListener("touchend", (e) => {
            if (!isDragging) return;
            isDragging = false;
            
            const diffX = startX - currentX;
            if (Math.abs(diffX) > 50) { // Minimum swipe distance
                this.moveSlides(diffX > 0 ? 1 : -1);
            }
            
            this.startAutoplay();
        });

        // Resize event
        window.addEventListener("resize", () => {
            const newIsMobile = window.innerWidth < 992;
            if (newIsMobile !== this.isMobile) {
                // Recreate slider for different layout
                this.isMobile = newIsMobile;
                this.slider.innerHTML = '';
                this.createSlides();
            }
            this.positionSlides();
        });

        // Hover events (samo za desktop)
        if (!this.isMobile) {
            this.container.addEventListener("mouseenter", () => {
                this.stopAutoplay();
            });

            this.container.addEventListener("mouseleave", () => {
                this.startAutoplay();
            });
        }
    }

    startAutoplay() {
        this.stopAutoplay();
        this.autoplayInterval = setInterval(() => {
            this.moveSlides(1);
        }, 4000);
    }

    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
}

let currentLanguage = 'de';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // initializeSlideshow();
    new ImprovedSlider();
    populateGallery();
    bindEventListeners();
});

function populateGallery() {
    const colorfulGallery = document.getElementById('colorful-gallery');
    const bwGallery = document.getElementById('bw-gallery');
    const olderGallery = document.getElementById('older-gallery');

    // Clear existing content
    colorfulGallery.innerHTML = '';
    bwGallery.innerHTML = '';
    olderGallery.innerHTML = '';

    // Populate colorful gallery
    galleryData.colorful.forEach(item => {
        const galleryItem = createGalleryItem(item, 'colorful');
        colorfulGallery.appendChild(galleryItem);
    });

    // Populate black & white gallery
    galleryData.blackwhite.forEach(item => {
        const galleryItem = createGalleryItem(item, 'blackwhite');
        bwGallery.appendChild(galleryItem);
    });

    // Populate older works gallery
    galleryData.older.forEach(item => {
        const galleryItem = createGalleryItem(item, 'older');
        olderGallery.appendChild(galleryItem);
    });
}

function createGalleryItem(item, category) {
    const div = document.createElement('div');
    div.className = 'gallery-item';

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = currentLanguage === 'de' ? item.title : item.titleEn;

    const caption = document.createElement('span');
    caption.textContent = currentLanguage === 'de' ? item.title : item.titleEn;

    div.appendChild(img);
    div.appendChild(caption);

    div.addEventListener('click', () => {
        openModal(item, category);
    });

    return div;
}


function openModal(item, category) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDetails = document.getElementById('modal-details');
    const modalImage = document.getElementById('modal-image');

    modalTitle.textContent = currentLanguage === 'de' ? item.title : item.titleEn;
    
    let details = '';
    if (item.subtitle) {
        details += `"${item.subtitle}"<br>`;
    }
    if (item.size) {
        details += `${item.size}<br>`;
    }
    if (item.medium) {
        details += currentLanguage === 'de' ? item.mediumDe : item.medium;
    }
    modalDetails.innerHTML = details;

    // Set modal image
    modalImage.src = item.image;
    modalImage.alt = currentLanguage === 'de' ? item.title : item.titleEn;
    // modalImage.style.display = 'block';

    
    modal.style.display = 'flex';

    document.querySelector('.nav-wrapper').style.display = 'none';
    
    document.body.style.overflow = 'hidden';
}

function bindEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            showSection(targetSection);
            updateActiveNavLink(this);
        });
    });

    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
            updateActiveLangBtn(this);
        });
    });

    // Modal close
    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('modal').style.display = 'none';
        document.querySelector('.nav-wrapper').style.display = '';
        document.body.style.overflow = '';
    });

    // Modal background close
    document.getElementById('modal').addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
            document.querySelector('.nav-wrapper').style.display = '';
            document.body.style.overflow = '';
        }
    });

    // Contact form
    // document.querySelector('form').addEventListener('submit', function(e) {
    //     e.preventDefault();
    //     alert(currentLanguage === 'de' ? 'Nachricht gesendet!' : 'Message sent!');
    //     this.reset();
    // });
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function updateActiveNavLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

function updateActiveLangBtn(activeBtn) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.style.display = 'inline-block';
    });

    activeBtn.classList.add('active');
    activeBtn.style.display = 'none';

    // Prikaži samo suprotni jezik
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (!btn.classList.contains('active')) {
            btn.textContent = currentLanguage === 'de' ? 'EN' : 'DE';
        }
    });
}


function switchLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        const section = link.getAttribute('data-section');
        link.textContent = content[lang].nav[section];
    });

    // Update gallery section titles
    document.querySelectorAll('.section-title').forEach((title, index) => {
        if (index === 0) title.textContent = content[lang].gallery.colorful;
        if (index === 1) title.textContent = content[lang].gallery.blackwhite;
        if (index === 2) title.textContent = content[lang].gallery.older;
        if (index === 3) title.textContent = content[lang].about.title;
    });

    // Update about section
    const aboutSection = document.querySelector('#about .about-content');
    if (aboutSection) {
        aboutSection.querySelector('h2').textContent = content[lang].about.title;
        aboutSection.querySelector('.about-text').innerHTML = content[lang].about.content;
        aboutSection.querySelector('.quote').textContent = content[lang].about.quote;
    }

    // Update contact section
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        contactSection.querySelector('h2').textContent = content[lang].contact.title;
        contactSection.querySelector('p').textContent = content[lang].contact.subtitle;
        contactSection.querySelector('label[for="name"]').textContent = content[lang].contact.name;
        contactSection.querySelector('label[for="email"]').textContent = content[lang].contact.email;
        contactSection.querySelector('label[for="subject"]').textContent = content[lang].contact.subject;
        contactSection.querySelector('label[for="message"]').textContent = content[lang].contact.message;
        contactSection.querySelector('.submit-btn').textContent = content[lang].contact.send;
    }

    // Repopulate gallery with new language
    populateGallery();

    // Update language toggle buttons
    const activeBtn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
    updateActiveLangBtn(activeBtn);
}

// Burger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const subNav = document.getElementById('sub-nav');
    
    burgerMenu.addEventListener('click', function() {
        subNav.classList.toggle('show');
        
        // Animate burger menu
        this.classList.toggle('active');
        
        // Close menu when clicking on nav links
        const navLinks = subNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                subNav.classList.remove('show');
                burgerMenu.classList.remove('active');
            });
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!burgerMenu.contains(e.target) && !subNav.contains(e.target)) {
            subNav.classList.remove('show');
            burgerMenu.classList.remove('active');
        }
    });
});

// Optional: Add burger menu animation
const style = document.createElement('style');
style.textContent = `
    .burger-menu.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .burger-menu.active span:nth-child(2) {
        opacity: 0;
    }
    
    .burger-menu.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(style);

document.querySelectorAll('.lang-btn').forEach(btn => {
if (btn.classList.contains('active')) {
    btn.style.display = 'none';
}
});

// Back to Top functionality
const backToTopBtn = document.getElementById('backToTop');
const navbar = document.getElementById('navbar');

// Show/hide back to top dugme
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }

    // Sticky navigation
    if (window.pageYOffset > 100) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Back to top click
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


window.addEventListener("scroll", function () {
    if (window.innerWidth < 900) {
        const nav = document.querySelector(".nav-wrapper");

        if (window.scrollY > 200) {
            nav.classList.add("is-sticky");
        } else {
            nav.classList.remove("is-sticky");
        }
    }
});

window.onload = function() {
    // Reset the form fields when the page loads
    document.getElementById("form").reset();
};