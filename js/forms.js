/**
 * HI-TECH Mobile Hub — Repair Enquiry Form Controller
 * 
 * Static-first client form. Validates repair inputs and opens direct
 * WhatsApp chat with the customer's repair request pre-formatted.
 * Does not pretend to persist data to a server.
 */

const FormsController = (function() {
  let formEl = null;
  let statusBanner = null;

  function init() {
    formEl = document.getElementById("repairEnquiryForm");
    statusBanner = document.getElementById("repairFormStatus");

    if (formEl) {
      formEl.addEventListener("submit", handleSubmit);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    clearErrors();

    const nameInput = document.getElementById("repairName");
    const phoneInput = document.getElementById("repairPhone");
    const brandInput = document.getElementById("repairBrand");
    const modelInput = document.getElementById("repairModel");
    const problemInput = document.getElementById("repairProblem");

    const name = nameInput ? nameInput.value.trim() : "";
    const phone = phoneInput ? phoneInput.value.trim() : "";
    const brand = brandInput ? brandInput.value.trim() : "";
    const model = modelInput ? modelInput.value.trim() : "";
    const problem = problemInput ? problemInput.value.trim() : "";

    let hasError = false;

    // Validate Name
    if (!name || name.length < 2) {
      showFieldError("repairName", "Please enter your name (at least 2 letters).");
      hasError = true;
    }

    // Validate Phone Number (Indian mobile format: 10 digits, optionally starting with +91 or 0)
    const cleanPhoneDigits = phone.replace(/[^0-9]/g, "");
    if (cleanPhoneDigits.length < 10) {
      showFieldError("repairPhone", "Please enter a valid 10-digit mobile number.");
      hasError = true;
    }

    // Validate Device Brand
    if (!brand) {
      showFieldError("repairBrand", "Please select or specify your device brand.");
      hasError = true;
    }

    // Validate Device Model
    if (!model || model.length < 2) {
      showFieldError("repairModel", "Please enter the phone model (e.g. Galaxy S21, iPhone 12, Note 11).");
      hasError = true;
    }

    // Validate Problem
    if (!problem || problem.length < 4) {
      showFieldError("repairProblem", "Please describe the problem you are facing with your device.");
      hasError = true;
    }

    if (hasError) {
      showBanner("Please fix the highlighted fields above.", "error");
      return;
    }

    // Build the formatted WhatsApp message
    const msg = WhatsAppHelper.getRepairMsg({
      name,
      phone,
      brand,
      model,
      problem
    });

    const whatsappUrl = WhatsAppHelper.createUrl(msg);

    // Show honest static notice
    showBanner("Your enquiry is ready to send on WhatsApp! Opening chat now...", "success");

    // Open WhatsApp in a new tab
    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }, 600);
  }

  function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!field) return;

    field.classList.add("input-error");
    field.setAttribute("aria-invalid", "true");

    const errorEl = document.getElementById(`${fieldId}Error`);
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.style.display = "block";
    }
  }

  function clearErrors() {
    const errorFields = document.querySelectorAll(".input-error");
    errorFields.forEach(f => {
      f.classList.remove("input-error");
      f.removeAttribute("aria-invalid");
    });

    const errorMsgs = document.querySelectorAll(".field-error-msg");
    errorMsgs.forEach(m => {
      m.textContent = "";
      m.style.display = "none";
    });

    if (statusBanner) {
      statusBanner.className = "form-status-banner";
      statusBanner.style.display = "none";
      statusBanner.textContent = "";
    }
  }

  function showBanner(text, type) {
    if (!statusBanner) return;
    statusBanner.textContent = text;
    statusBanner.className = `form-status-banner banner-${type}`;
    statusBanner.style.display = "block";
  }

  return {
    init,
    handleSubmit
  };
})();

if (typeof module !== "undefined" && module.exports) {
  module.exports = FormsController;
}
