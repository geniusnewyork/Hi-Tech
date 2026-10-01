/**
 * HI-TECH Mobile Hub — Catalogue Filters & Brand Switcher
 * 
 * Supports category tabs, brand pills, search filtering, and state preservation.
 */

const FiltersController = (function() {
  let currentCategory = "all";
  let currentBrand = "all";
  let searchQuery = "";

  function init() {
    bindCategoryTabs();
    bindBrandButtons();
    bindSearchInput();
    applyFilters();
  }

  function bindCategoryTabs() {
    const tabButtons = document.querySelectorAll(".category-tab-btn");
    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        tabButtons.forEach(b => {
          b.classList.remove("active");
          b.setAttribute("aria-selected", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");

        currentCategory = btn.getAttribute("data-category") || "all";
        applyFilters();
      });
    });
  }

  function bindBrandButtons() {
    const brandButtons = document.querySelectorAll(".brand-filter-btn");
    brandButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        brandButtons.forEach(b => {
          b.classList.remove("active");
          b.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");

        currentBrand = btn.getAttribute("data-brand") || "all";
        applyFilters();
      });
    });
  }

  function bindSearchInput() {
    const searchInput = document.getElementById("phoneSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = (e.target.value || "").trim().toLowerCase();
        applyFilters();
      });
    }
  }

  function applyFilters() {
    if (typeof PRODUCTS_DATA === "undefined" || !PRODUCTS_DATA.mobiles) return;

    let filtered = PRODUCTS_DATA.mobiles.slice();

    // 1. Filter by category
    if (currentCategory !== "all") {
      if (currentCategory === "featured") {
        filtered = filtered.filter(p => p.featured || p.category === "featured");
      } else if (currentCategory === "popular") {
        filtered = filtered.filter(p => p.category === "popular");
      } else if (currentCategory === "latest") {
        filtered = filtered.filter(p => p.category === "latest");
      }
    }

    // 2. Filter by brand
    if (currentBrand !== "all") {
      const brandLower = currentBrand.toLowerCase();
      if (brandLower === "other") {
        const topBrands = ["apple", "samsung", "oneplus", "xiaomi", "vivo", "oppo", "realme"];
        filtered = filtered.filter(p => !topBrands.includes(p.brand.toLowerCase()));
      } else {
        filtered = filtered.filter(p => p.brand.toLowerCase() === brandLower);
      }
    }

    // 3. Search query filter
    if (searchQuery) {
      filtered = filtered.filter(p => {
        const titleMatch = p.name.toLowerCase().includes(searchQuery);
        const brandMatch = p.brand.toLowerCase().includes(searchQuery);
        const descMatch = (p.description || "").toLowerCase().includes(searchQuery);
        const specsMatch = (p.specs || []).some(s => s.toLowerCase().includes(searchQuery));
        return titleMatch || brandMatch || descMatch || specsMatch;
      });
    }

    // Render filtered list
    ProductsRenderer.renderMobiles(filtered);
  }

  return {
    init,
    applyFilters
  };
})();

if (typeof module !== "undefined" && module.exports) {
  module.exports = FiltersController;
}
