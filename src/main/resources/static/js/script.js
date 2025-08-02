document.addEventListener('DOMContentLoaded', function () {

    // Loading Animation
    const loaderWrapper = document.querySelector('.loader-wrapper');
    if (loaderWrapper) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loaderWrapper.style.opacity = '0';
                setTimeout(() => {
                    loaderWrapper.style.display = 'none';
                }, 500);
            }, 2000);
        });
    }

    // Scrolled Header
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // About Section "Show More" Toggle
    const toggleSkillsBtn = document.getElementById('toggle-skills-btn');
    if (toggleSkillsBtn) {
        const moreSkills = document.querySelector('.more-skills');
        toggleSkillsBtn.addEventListener('click', () => {
            moreSkills.classList.toggle('hidden');
            toggleSkillsBtn.classList.toggle('expanded');
            toggleSkillsBtn.innerHTML = moreSkills.classList.contains('hidden')
                ? 'Show More <span class="arrow">▼</span>'
                : 'Show Less <span class="arrow">▲</span>';
        });
    }
    
    // Experience Section "Show More" Toggle
    const toggleExpBtn = document.getElementById('toggle-experience-btn');
    if (toggleExpBtn) {
        const hiddenExperiences = document.querySelector('.more-experiences');
        toggleExpBtn.addEventListener('click', () => {
            hiddenExperiences.classList.toggle('hidden');
            toggleExpBtn.classList.toggle('active');
            toggleExpBtn.innerHTML = hiddenExperiences.classList.contains('hidden')
                ? 'Show More <span class="arrow">▼</span>'
                : 'Show Less <span class="arrow">▲</span>';
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const projectCards = document.querySelectorAll('.project-card');
    if (projectCards.length > 0) {
        const projectObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animated');
                    }, index * 200);
                }
            });
        }, observerOptions);
        projectCards.forEach(card => projectObserver.observe(card));
    }

    const timelineItems = document.querySelectorAll('.timeline-content');
    if (timelineItems.length > 0) {
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);
        timelineItems.forEach(item => timelineObserver.observe(item));
    }

    const achievementCards = document.querySelectorAll('.achievement-card');
    if (achievementCards.length > 0) {
        const achievementObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animated');
                    }, index * 200);
                }
            });
        }, observerOptions);
        achievementCards.forEach(card => achievementObserver.observe(card));
    }

    // Smooth scroll for anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Bar Toggling
    const menuBtn = document.getElementById('menuToggleBtn');
    if (menuBtn) {
        const menuIcon = document.getElementById('menuIcon');
        const navLinks = document.querySelector('.nav-links');

        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isActive = navLinks.classList.contains('active');
            menuIcon.classList.toggle('fa-times', isActive);
            menuIcon.classList.toggle('fa-bars', !isActive);
        });

        // Close menu on nav link click for mobile
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuIcon.classList.add('fa-bars');
                    menuIcon.classList.remove('fa-times');
                }
            });
        });
    }

});