document.addEventListener('DOMContentLoaded', () => {

    // --- Hamburger Menu ---
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Close menu when link is clicked
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }

    // --- Parallax Effect ---
    const heroSection = document.querySelector('.hero');
    const detailHero = document.querySelector('.detail-hero');

    // Only apply parallax if not mobile (for better performance/experience)
    if (window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (heroSection) {
                // Move background at slower speed
                heroSection.style.backgroundPosition = `center ${scrolled * 0.5}px`;
            }
            if (detailHero) {
                // Adjust calculation based on element position if needed, 
                // but for hero at top, scrollY is fine.
                detailHero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
            }
        });
    }
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        window.addEventListener('load', () => {
            // Wait for logo/bar animation to finish (approx 2.0s) + small buffer
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
            }, 2000);
        });
    }

    // --- Smart Header Logic ---
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Downscroll
            header.classList.add('hide');
        } else {
            // Upscroll
            header.classList.remove('hide');
        }

        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });


    // --- Smooth scrolling for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                window.scrollTo({
                    top: target.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Cross-page Scroll Target (Moved from index.html) ---
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                const headerHeight = document.querySelector('.header').offsetHeight;
                window.scrollTo({
                    top: target.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }


    // --- Latest Cases Rendering (Moved from index.html) ---
    // --- Latest Cases Rendering (MicroCMS) ---
    const track = document.getElementById('cases-track');

    if (track) {
        // MicroCMS Configuration
        const SERVICE_ID = 'daikichinakama';
        const API_KEY = '8Q7EyRuVjhvLZ0S9AHs5ueadAzU2QzVNxcKS';
        const ENDPOINT = 'news';

        const fetchTopCases = async () => {
            try {
                const url = `https://${SERVICE_ID}.microcms.io/api/v1/${ENDPOINT}?limit=10`;
                const response = await fetch(url, {
                    headers: { 'X-MICROCMS-API-KEY': API_KEY }
                });
                if (!response.ok) throw new Error('API request failed');
                const data = await response.json();
                return data.contents;
            } catch (error) {
                console.error('Failed to fetch cases for top page:', error);
                return [];
            }
        };

        fetchTopCases().then(cases => {
            if (cases.length === 0) {
                track.innerHTML = '<p class="text-center" style="width:100%; padding:20px;">現在、買取事例はありません。</p>';
                return;
            }

            // Date Sort (Newest first) - typically API returns sorted but good to ensure
            cases.sort((a, b) => new Date(b.date) - new Date(a.date));

            const createCardParams = (c) => {
                // Normalize Image
                const imgUrl = c.image && c.image.url ? c.image.url : (c.mainImage || 'no-image.png');
                // Normalize Category
                const category = Array.isArray(c.category) ? c.category[0] : c.category;

                return `
                <div class="case-card">
                    <div class="case-img-box">
                        <img src="${imgUrl}" alt="${c.title}" loading="lazy">
                    </div>
                    <div class="case-info">
                        <span class="case-cat">${category}</span>
                        <h3 class="case-title">${c.title}</h3>
                        <div class="case-meta-bottom">
                            <div class="case-price">${c.price}</div>
                            <span class="case-date">${new Date(c.date).toLocaleDateString('ja-JP')}</span>
                        </div>
                    </div>
                </div>
                `;
            };

            track.innerHTML = cases.map(c => createCardParams(c)).join('');
        });
    }




    // --- FAQ Accordion ---
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            const answer = btn.nextElementSibling;

            if (btn.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.classList.add('open');
            } else {
                answer.style.maxHeight = 0;
                answer.classList.remove('open');
            }
        });
    });



    // --- Intersection Observer for scroll animations ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // --- Swiper Initialization ---
    const swiper = new Swiper('.reviews-swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });

    const animatedElements = document.querySelectorAll('.fade-in-up, .tag-anim');
    animatedElements.forEach(el => observer.observe(el));
});

// --- Modal Logic (Global Scope) ---
function openPreCheckModal() {
    const modal = document.getElementById('preCheckModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function closePreCheckModal() {
    const modal = document.getElementById('preCheckModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Close on click outside (Attached to window to ensure it exists)
window.addEventListener('click', (e) => {
    const modal = document.getElementById('preCheckModal');
    if (e.target === modal) {
        closePreCheckModal();
    }
});

// --- Hero Slideshow ---
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;

    let currentSlide = 0;
    const slideInterval = 5000;

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, slideInterval);
});

// --- Image Scroll Zoom ---
document.addEventListener('DOMContentLoaded', () => {
    const zoomImages = document.querySelectorAll('.img-zoom');
    if (zoomImages.length > 0) {
        const zoomObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    zoomObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });

        zoomImages.forEach(img => {
            zoomObserver.observe(img);
        });
    }
});

// --- Smart Mobile CTA ---
document.addEventListener('DOMContentLoaded', () => {
    const cta = document.querySelector('.fixed-cta');
    if (!cta) return;

    let lastScrollTop = 0;
    const threshold = 100; // Minimum scroll to trigger hide

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Show if at top or scrolling up
        if (scrollTop < lastScrollTop || scrollTop < 100) {
            cta.classList.remove('hidden');
        }
        // Hide if scrolling down and past threshold
        else if (scrollTop > lastScrollTop && scrollTop > threshold) {
            cta.classList.add('hidden');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, {
        passive: true
    });
});

// --- Ripple Effect ---
document.addEventListener('DOMContentLoaded', () => {
    const rippleBtns = document.querySelectorAll('.fixed-btn');
    rippleBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');

            // Position
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            this.appendChild(ripple);

            // Clean up
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});
