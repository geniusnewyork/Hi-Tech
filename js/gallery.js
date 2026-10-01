/**
 * HI-TECH Mobile Hub — Gallery Controller & Lightbox System
 * 
 * Provides responsive masonry-style gallery rendering, category filtering,
 * and a fully accessible, keyboard-operable Lightbox modal.
 */

const GalleryController = (function() {
  let currentCategory = "All";
  let currentActiveItems = [];
  let currentLightboxIndex = 0;

  // DOM Elements
  let gridEl = null;
  let lightboxModal = null;
  let lightboxImg = null;
  let lightboxCaption = null;
  let lightboxTitle = null;
  let lightboxTag = null;
  let prevBtn = null;
  let nextBtn = null;
  let closeBtn = null;

  function init() {
    gridEl = document.getElementById("galleryGrid");
    lightboxModal = document.getElementById("galleryLightbox");
    lightboxImg = document.getElementById("lightboxImage");
    lightboxCaption = document.getElementById("lightboxCaption");
    lightboxTitle = document.getElementById("lightboxTitle");
    lightboxTag = document.getElementById("lightboxTag");
    prevBtn = document.getElementById("lightboxPrev");
    nextBtn = document.getElementById("lightboxNext");
    closeBtn = document.getElementById("lightboxClose");

    bindFilterTabs();
    bindLightboxEvents();
    render();
  }

  function bindFilterTabs() {
    const filterButtons = document.querySelectorAll(".gallery-filter-btn");
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => {
          b.classList.remove("active");
          b.setAttribute("aria-selected", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");

        currentCategory = btn.getAttribute("data-category") || "All";
        render();
      });
    });
  }

  function render() {
    if (!gridEl || typeof GALLERY_DATA === "undefined") return;

    if (currentCategory === "All") {
      currentActiveItems = GALLERY_DATA.slice();
    } else {
      currentActiveItems = GALLERY_DATA.filter(item => item.category.toLowerCase() === currentCategory.toLowerCase());
    }

    if (currentActiveItems.length === 0) {
      gridEl.innerHTML = `<p class="empty-state-desc">No gallery photos found in this category.</p>`;
      return;
    }

    const html = currentActiveItems.map((item, index) => {
      return `
        <figure class="gallery-item" data-index="${index}" tabindex="0" role="button" aria-label="Open image: ${item.title}">
          <div class="gallery-thumb-wrap">
            <img src="${item.thumbnail || item.image}" alt="${item.alt || item.title}" class="gallery-thumb-img" loading="lazy">
            <div class="gallery-overlay">
              <span class="gallery-expand-icon" aria-hidden="true">🔍</span>
              <span class="gallery-category-pill">${item.category}</span>
            </div>
          </div>
          <figcaption class="gallery-caption">
            <h4 class="gallery-item-title">${item.title}</h4>
            <p class="gallery-item-desc">${item.caption}</p>
          </figcaption>
        </figure>
      `;
    }).join("");

    gridEl.innerHTML = html;

    // Attach click and enter listeners to gallery items
    const items = gridEl.querySelectorAll(".gallery-item");
    items.forEach(el => {
      el.addEventListener("click", () => {
        const idx = parseInt(el.getAttribute("data-index"), 10);
        openLightbox(idx);
      });
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const idx = parseInt(el.getAttribute("data-index"), 10);
          openLightbox(idx);
        }
      });
    });
  }

  function bindLightboxEvents() {
    if (!lightboxModal) return;

    if (closeBtn) {
      closeBtn.addEventListener("click", closeLightbox);
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", showPrev);
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", showNext);
    }

    // Backdrop click
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal || e.target.classList.contains("lightbox-backdrop")) {
        closeLightbox();
      }
    });

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (!lightboxModal || !lightboxModal.classList.contains("is-open")) return;

      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        showPrev();
      } else if (e.key === "ArrowRight") {
        showNext();
      }
    });
  }

  function openLightbox(index) {
    if (!lightboxModal || currentActiveItems.length === 0) return;

    currentLightboxIndex = index;
    updateLightboxContent();

    lightboxModal.classList.add("is-open");
    lightboxModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");

    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    if (!lightboxModal) return;

    lightboxModal.classList.remove("is-open");
    lightboxModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
  }

  function showPrev() {
    if (currentActiveItems.length <= 1) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + currentActiveItems.length) % currentActiveItems.length;
    updateLightboxContent();
  }

  function showNext() {
    if (currentActiveItems.length <= 1) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % currentActiveItems.length;
    updateLightboxContent();
  }

  function updateLightboxContent() {
    const item = currentActiveItems[currentLightboxIndex];
    if (!item) return;

    if (lightboxImg) {
      lightboxImg.src = item.image;
      lightboxImg.alt = item.alt || item.title;
    }
    if (lightboxTitle) {
      lightboxTitle.textContent = item.title;
    }
    if (lightboxTag) {
      lightboxTag.textContent = item.category;
    }
    if (lightboxCaption) {
      lightboxCaption.textContent = item.caption;
    }
  }

  return {
    init,
    render,
    openLightbox,
    closeLightbox
  };
})();

if (typeof module !== "undefined" && module.exports) {
  module.exports = GalleryController;
}
