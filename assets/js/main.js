/**
 * Main JavaScript for Akmal Rasya's Portfolio
 * - Dark Mode & Light Mode Theme Toggle with LocalStorage
 * - Sticky Navbar & Active Section Scroll Spy
 * - Mobile Drawer Menu Toggle with Touch Optimization
 * - Interactive Project Category Filter
 * - One-Click Copy Email (akmalrasya234@gmail.com) & Terminal Code Snippet with Toast
 * - Floating Back-to-Top Button
 * - Scroll Reveal Animation (IntersectionObserver)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const htmlElement = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const navItems = document.querySelectorAll('.nav-link');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyCodeBtn = document.getElementById('copy-code-btn');
  const floatingTopBtn = document.getElementById('floating-top');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  // Correct Contact Email
  const MY_EMAIL = 'akmalrasya234@gmail.com';

  /* ----------------------------------------------------
   * 1. Dark Mode / Light Mode Switcher
   * ---------------------------------------------------- */
  const savedTheme = localStorage.getItem('portfolio-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme
  const currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'dark');
  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = htmlElement.getAttribute('data-theme') || 'dark';
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      showToast(`Mode ${newTheme === 'dark' ? 'Gelap (Dark)' : 'Terang (Light)'} aktif`);
    });
  }

  function applyTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    if (themeToggleBtn) {
      const isDark = theme === 'dark';
      themeToggleBtn.setAttribute('title', isDark ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap');
      themeToggleBtn.setAttribute('aria-label', isDark ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap');
    }
  }

  /* ----------------------------------------------------
   * 2. Navbar Scroll Effect & Back-to-Top Button
   * ---------------------------------------------------- */
  const handleScroll = () => {
    const scrollPos = window.scrollY;

    // Navbar background
    if (scrollPos > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Floating Back to Top Button
    if (floatingTopBtn) {
      if (scrollPos > 280) {
        floatingTopBtn.classList.add('show');
      } else {
        floatingTopBtn.classList.remove('show');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  if (floatingTopBtn) {
    floatingTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ----------------------------------------------------
   * 3. Mobile Hamburger Menu Toggle
   * ---------------------------------------------------- */
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close when clicking any nav item or mobile CTA
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    const mobileCta = document.querySelector('.mobile-cta-btn');
    if (mobileCta) {
      mobileCta.addEventListener('click', () => {
        closeMobileMenu();
      });
    }

    // Close when clicking outside of navLinks
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  function openMobileMenu() {
    hamburger.classList.add('open');
    navLinks.classList.add('open');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeMobileMenu() {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  }

  /* ----------------------------------------------------
   * 4. Active Nav Link on Scroll (Scroll Spy)
   * ---------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');

  const highlightNavLink = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 110;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItems.forEach(link => link.classList.remove('active'));
          targetNavLink.classList.add('active');
        }
      }
    });
  };

  window.addEventListener('scroll', highlightNavLink, { passive: true });

  /* ----------------------------------------------------
   * 5. Interactive Project Category Filter
   * ---------------------------------------------------- */
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Switch active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          if (filterValue === 'all') {
            card.classList.remove('hidden');
          } else {
            const categories = card.getAttribute('data-category') || '';
            if (categories.includes(filterValue)) {
              card.classList.remove('hidden');
            } else {
              card.classList.add('hidden');
            }
          }
        });
      });
    });
  }

  /* ----------------------------------------------------
   * 6. Copy Code in Terminal Visual
   * ---------------------------------------------------- */
  if (copyCodeBtn) {
    copyCodeBtn.addEventListener('click', () => {
      const codeText = `<?php
namespace Developer;

class AkmalRasya {
    public string $role = "Backend Developer";
    public string $campus = "PENS Surabaya";
    public array $stack = ["Laravel", "Python"];
    public array $db = ["MySQL", "PostgreSQL"];
    public array $services = ["RESTful API"];
    public bool $openToWork = true;
}`;
      copyToClipboard(codeText, 'Kode profil berhasil disalin!');
    });
  }

  /* ----------------------------------------------------
   * 7. Copy Email to Clipboard
   * ---------------------------------------------------- */
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      copyToClipboard(MY_EMAIL, `Email (${MY_EMAIL}) berhasil disalin!`);
    });
  }

  /* ----------------------------------------------------
   * 8. Clipboard Helper & Toast Notification
   * ---------------------------------------------------- */
  function copyToClipboard(text, successMsg) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg);
      }).catch(() => {
        fallbackCopyText(text, successMsg);
      });
    } else {
      fallbackCopyText(text, successMsg);
    }
  }

  function fallbackCopyText(text, successMsg) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
      showToast(successMsg);
    } catch (err) {
      showToast('Gagal menyalin otomatis, silakan salin manual.');
    }
    document.body.removeChild(textArea);
  }

  let toastTimeout;
  function showToast(message) {
    if (!toast) return;
    if (toastMessage) {
      toastMessage.textContent = message;
    }

    clearTimeout(toastTimeout);
    toast.classList.add('show');

    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  /* ----------------------------------------------------
   * 9. Scroll Reveal Animation
   * Setiap konten dianimasikan sekali saat pertama kali masuk layar.
   * ---------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    // Browser lama: tampilkan semua konten tanpa animasi
    revealEls.forEach(el => el.classList.add('revealed'));
  }
});
