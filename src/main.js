import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('main-header');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  const hamburger = document.querySelector('.hamburger');
  const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Handle header scroll and active state
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('bg-light/95', 'backdrop-blur-md', 'border-b', 'border-black/10', 'py-4');
      header.classList.remove('py-6', 'md:py-6');
    } else {
      header.classList.remove('bg-light/95', 'backdrop-blur-md', 'border-b', 'border-black/10', 'py-4');
      header.classList.add('py-6', 'md:py-6');
    }

    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(a => {
      a.classList.remove('bg-dark', 'text-white');
      if (current && a.getAttribute('href').includes(current)) {
        a.classList.add('bg-dark', 'text-white');
      }
    });

    // Toggle dark mode text depending on section
    const currentSection = document.getElementById(current);
    if (currentSection && currentSection.classList.contains('section-dark')) {
      header.classList.add('text-white');
      header.classList.remove('text-dark');
      if(window.scrollY > 50) {
         header.classList.remove('bg-light/95', 'border-black/10');
         header.classList.add('bg-dark/95', 'border-white/10');
      }
    } else {
      header.classList.remove('text-white');
      header.classList.add('text-dark');
      if(window.scrollY > 50) {
         header.classList.add('bg-light/95', 'border-black/10');
         header.classList.remove('bg-dark/95', 'border-white/10');
      }
    }
  });
  
  // Hamburger menu toggle logic
  hamburger.addEventListener('click', () => {
    const lines = hamburger.querySelectorAll('span');
    
    if (mobileNavOverlay.classList.contains('-translate-y-full')) {
      mobileNavOverlay.classList.remove('-translate-y-full');
      mobileNavOverlay.classList.add('translate-y-0');
      
      lines[0].classList.add('translate-y-[8px]', 'rotate-45', 'bg-white');
      lines[1].classList.add('opacity-0');
      lines[2].classList.add('-translate-y-[8px]', '-rotate-45', 'bg-white');
    } else {
      mobileNavOverlay.classList.add('-translate-y-full');
      mobileNavOverlay.classList.remove('translate-y-0');
      
      lines[0].classList.remove('translate-y-[8px]', 'rotate-45', 'bg-white');
      lines[1].classList.remove('opacity-0');
      lines[2].classList.remove('-translate-y-[8px]', '-rotate-45', 'bg-white');
    }
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNavOverlay.classList.add('-translate-y-full');
      mobileNavOverlay.classList.remove('translate-y-0');
      
      const lines = hamburger.querySelectorAll('span');
      lines[0].classList.remove('translate-y-[8px]', 'rotate-45', 'bg-white');
      lines[1].classList.remove('opacity-0');
      lines[2].classList.remove('-translate-y-[8px]', '-rotate-45', 'bg-white');
    });
  });

  window.dispatchEvent(new Event('scroll'));

  // ==========================================
  // GSAP Animations 
  // ==========================================

  // Universal On-Load Hero Animation (Plays on all devices)
  const heroTl = gsap.timeline({ defaults: { ease: 'power2.out' } })
  heroTl.to('.gsap-hero-headline', { y: 0, opacity: 1, duration: 1 })
        .to('.gsap-hero-element', { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 }, "-=0.6")

  // MatchMedia for Desktop/Tablet (ScrollTriggers)
  let mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    
    // About Section Scroll Trigger
    gsap.to("#about-title", {
      scrollTrigger: {
        trigger: "#about",
        start: "top 85%",
      },
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    });

    gsap.to(".gsap-about-left", {
      scrollTrigger: {
        trigger: "#about-content",
        start: "top 85%",
      },
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    });
    
    // Initial state setup for the x slide
    gsap.set(".gsap-about-left", { x: -30 });

    gsap.to(".gsap-about-right", {
      scrollTrigger: {
        trigger: "#about-content",
        start: "top 85%",
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    });
    gsap.set(".gsap-about-right", { y: 30 });

    // Services Section Stagger Reveal
    gsap.to(".gsap-service-row", {
      scrollTrigger: {
        trigger: "#services-wrapper",
        start: "top 85%",
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    });
    gsap.set(".gsap-service-row", { y: 20 });

    // Statistics Counter Effect
    const statNumbers = document.querySelectorAll(".gsap-stat-number");
    
    ScrollTrigger.create({
      trigger: "#statistics-wrapper",
      start: "top 85%",
      onEnter: () => {
        statNumbers.forEach(stat => {
          const target = parseFloat(stat.getAttribute("data-target"));
          const obj = { val: 0 };
          
          gsap.to(obj, {
            val: target,
            duration: 1.5,
            ease: "power2.out",
            onUpdate: function() {
              stat.innerHTML = Math.ceil(obj.val);
            }
          });
        });
      },
      once: true // Ensure it only counts up once
    });

    // Testimonials Reveal
    gsap.to(".gsap-testimonial-card", {
      scrollTrigger: {
        trigger: "#testimonials-wrapper",
        start: "top 85%",
      },
      x: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out"
    });
    gsap.set(".gsap-testimonial-card", { x: 30 });

    // Let's Talk Form Reveal
    gsap.to(".gsap-contact-field", {
      scrollTrigger: {
        trigger: "#contact-wrapper",
        start: "top 85%",
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out"
    });
    gsap.set(".gsap-contact-field", { y: 20 });

  }); // End matchMedia
});
