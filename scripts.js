document.addEventListener('mousemove', (e) => {
  const trail = document.createElement('div');
  trail.className = 'stitch-trail';
  trail.style.left = `${e.pageX}px`;
  trail.style.top = `${e.pageY}px`;
  document.body.appendChild(trail);
  setTimeout(() => trail.remove(), 100);
});

document.addEventListener('DOMContentLoaded', function() {
  // Header scroll effect
  const header = document.querySelector('.stitched-header');
  let lastScrollY = window.scrollY;
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
      header.style.padding = '0.5rem 0';
    } else {
      header.style.boxShadow = 'none';
      header.style.padding = '0.75rem 0';
    }
    
    // Hide header on scroll down, show on scroll up
    if (window.scrollY > lastScrollY && window.scrollY > 200) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    
    lastScrollY = window.scrollY;
  });

  // Scroll animation for elements
  const fadeElements = document.querySelectorAll('.fade-in');
  
  function checkFade() {
    fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
      
      if (isVisible) {
        element.classList.add('visible');
      }
    });
  }
  
  // Initial check
  checkFade();
  
  // Check on scroll
  window.addEventListener('scroll', checkFade);
  
  // Product card hover animation
  const productCards = document.querySelectorAll('.stitched-card');
  
  productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Animate the hero button on hover
  const heroBtn = document.querySelector('.hero-image .btn');
  if (heroBtn) {
    heroBtn.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
    });
    
    heroBtn.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  }
  
  // Initialize all animations
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
  });
});
