/**
 * HI-TECH Mobile Hub — Navigation Controller
 * 
 * Manages sticky header scrolling transitions, mobile drawer menu,
 * accessibility attributes, keyboard trap, and smooth scroll spy.
 */

const NavigationController = (function() {
  let headerEl = null;
  let toggleBtn = null;
  let menuDrawer = null;
  let backdropEl = null;
  let navLinks = [];
  let isOpen = false;

  function init() {
    headerEl = document.getElementById("mainHeader");
    toggleBtn = document.getElementById("mobileMenuToggle");
    menuDrawer = document.getElementById("mobileNavDrawer");
    backdropEl = document.getElementById("navBackdrop");

    if (menuDrawer) {
      navLinks = menuDrawer.querySelectorAll(".nav-link");
    }

    bindScrollEffect();
    bindMobileEvents();
    bindKeyboardNavigation();
  }

  function bindScrollEffect() {
    if (!headerEl) return;

    const onScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollY > 30) {
        headerEl.classList.add("header-scrolled");
      } else {
        headerEl.classList.remove("header-scrolled");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Check initial position
    onScroll();
  }

  function bindMobileEvents() {
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        toggleMenu();
      });
    }

    if (backdropEl) {
      backdropEl.addEventListener("click", () => {
        closeMenu();
      });
    }

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });

    // Also close on desktop header nav links smooth scroll
    const desktopLinks = document.querySelectorAll(".desktop-nav .nav-link");
    desktopLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#") && href.length > 1) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            const headerHeight = headerEl ? headerEl.offsetHeight : 70;
            const targetPos = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({
              top: targetPos,
              behavior: "smooth"
            });
            // Update URL hash without jump
            history.pushState(null, null, href);
          }
        }
      });
    });
  }

  function bindKeyboardNavigation() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
        if (toggleBtn) toggleBtn.focus();
      }
    });
  }

  function toggleMenu() {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function openMenu() {
    isOpen = true;
    if (toggleBtn) {
      toggleBtn.setAttribute("aria-expanded", "true");
      toggleBtn.classList.add("is-active");
    }
    if (menuDrawer) {
      menuDrawer.classList.add("is-open");
      menuDrawer.setAttribute("aria-hidden", "false");
    }
    if (backdropEl) {
      backdropEl.classList.add("is-visible");
    }
    // Prevent background scrolling
    document.body.classList.add("menu-open");

    // Trap focus inside drawer
    if (navLinks.length > 0) {
      setTimeout(() => {
        navLinks[0].focus();
      }, 100);
    }
  }

  function closeMenu() {
    isOpen = false;
    if (toggleBtn) {
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.classList.remove("is-active");
    }
    if (menuDrawer) {
      menuDrawer.classList.remove("is-open");
      menuDrawer.setAttribute("aria-hidden", "true");
    }
    if (backdropEl) {
      backdropEl.classList.remove("is-visible");
    }
    document.body.classList.remove("menu-open");
  }

  return {
    init,
    openMenu,
    closeMenu,
    toggleMenu
  };
})();

if (typeof module !== "undefined" && module.exports) {
  module.exports = NavigationController;
}
