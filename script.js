// Initialize AOS animations
AOS.init({
  duration: 800,
  once: true,
});

// Dark Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  // toggle icon moon/sun
  const icon = themeToggleBtn.querySelector('i');
  if (body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animated Counters
const counters = document.querySelectorAll('.stat-number');
const speed = 200; // lower is faster

const animateCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

// Run counters when visible
let countersStarted = false;
window.addEventListener('scroll', () => {
  const statsSection = document.getElementById('stats');
  const rect = statsSection.getBoundingClientRect();
  if (!countersStarted && rect.top < window.innerHeight) {
    animateCounters();
    countersStarted = true;
  }
});

// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

const showTestimonial = (index) => {
  testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
};

const nextTestimonial = () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
};

setInterval(nextTestimonial, 5000);

// Optional: Contact form submit (dummy)
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for contacting Optimum Consultancy! We will get back to you shortly.');
  form.reset();
});
