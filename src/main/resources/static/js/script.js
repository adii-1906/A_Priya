// Loading Animation
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loader-wrapper").style.opacity = "0";
    setTimeout(() => {
      document.querySelector(".loader-wrapper").style.display = "none";
    }, 500);
  }, 2000);
});

//document.addEventListener('mousedown', () => {
//  cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
//});
//
//document.addEventListener('mouseup', () => {
//  cursor.style.transform = 'translate(-50%, -50%) scale(1)';
//});

// Scrolled Header
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// About Section
const toggleBtn = document.getElementById("toggle-skills-btn");
const moreSkills = document.querySelector(".more-skills");

toggleBtn.addEventListener("click", () => {
  moreSkills.classList.toggle("hidden");
  toggleBtn.classList.toggle("expanded");
  toggleBtn.innerHTML = moreSkills.classList.contains("hidden")
    ? 'Show More <span class="arrow">▼</span>'
    : 'Show Less <span class="arrow">▲</span>';
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("animated");
      }, index * 200);
    }
  });
}, observerOptions);

document.querySelectorAll(".project-card").forEach((card) => {
  projectObserver.observe(card);
});

const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
    }
  });
}, observerOptions);

document.querySelectorAll(".timeline-content").forEach((item) => {
  timelineObserver.observe(item);
});

const achievementObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("animated");
      }, index * 200);
    }
  });
}, observerOptions);

document.querySelectorAll(".achievement-card").forEach((card) => {
  achievementObserver.observe(card);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    window.scrollTo({
      top: target.offsetTop - 100,
      behavior: "smooth",
    });
  });
});

// Menu Bar Toogling

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuToggleBtn");
  const menuIcon = document.getElementById("menuIcon");
  const navLinks = document.querySelector(".nav-links");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Toggle icon
    if (navLinks.classList.contains("active")) {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-times");
    } else {
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    }
  });

  // Optional: close menu on nav link click
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    });
  });
});

// Experience toogle
const toggleExpBtn = document.getElementById("toggle-experience-btn");
const hiddenExperiences = document.querySelector(".more-experiences");

toggleExpBtn.addEventListener("click", () => {
  hiddenExperiences.classList.toggle("hidden");
  toggleExpBtn.classList.toggle("active");
  toggleExpBtn.innerHTML = hiddenExperiences.classList.contains("hidden")
    ? 'Show More <span class="arrow">▼</span>'
    : 'Show Less <span class="arrow">▲</span>';
});
