/**
 * HI-TECH Mobile Hub — Smart WhatsApp System
 * 
 * Centralized WhatsApp click-to-chat utility supporting contextual messages,
 * safe URL encoding, and direct opening.
 */

const WhatsAppSystem = (function() {
  /**
   * Generates a fully qualified https://wa.me URL
   * @param {string} message - Message text
   * @param {string} [phone] - Optional phone override
   * @returns {string} Encoded WhatsApp URL
   */
  function createUrl(message, phone) {
    const targetPhone = phone || (typeof SHOP_CONFIG !== "undefined" ? SHOP_CONFIG.whatsapp : "918607777717");
    const cleanPhone = String(targetPhone).replace(/[^0-9]/g, "");
    const msg = (message && typeof message === "string") 
      ? message.trim() 
      : (SHOP_CONFIG && SHOP_CONFIG.messages ? SHOP_CONFIG.messages.general : "Hello HI-TECH Mobile Hub");
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
  }

  /**
   * Opens WhatsApp directly with the provided message
   * @param {string} message - Message text
   * @param {string} [phone] - Optional phone override
   */
  function openWhatsApp(message, phone) {
    const url = createUrl(message, phone);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  // Pre-configured Contextual Message Builders
  function getGeneralMessage() {
    return (typeof SHOP_CONFIG !== "undefined" && SHOP_CONFIG.messages)
      ? SHOP_CONFIG.messages.general
      : "Hello HI-TECH Mobile Hub, I found your website and would like some information.";
  }

  function getProductMessage(productName) {
    return `Hello HI-TECH Mobile Hub, I am interested in ${productName || 'this mobile'}. Please share price and availability.`;
  }

  function getProductAvailabilityMessage(productName) {
    return `Hello HI-TECH Mobile Hub, is ${productName || 'this product'} currently available in your Hansi shop?`;
  }

  function getRepairMessage(details) {
    if (!details) {
      return "Hello HI-TECH Mobile Hub, I need help with mobile repair/service.";
    }
    const lines = [
      "Hello HI-TECH Mobile Hub, I need repair assistance for my phone:",
      `• Name: ${details.name || "Customer"}`,
      `• Phone: ${details.phone || "Not specified"}`,
      `• Brand: ${details.brand || "Not specified"}`,
      `• Model: ${details.model || "Not specified"}`,
      `• Problem: ${details.problem || "Checkup needed"}`
    ];
    return lines.join("\n");
  }

  function getAccessoriesMessage(category) {
    return `Hello HI-TECH Mobile Hub, I am looking for ${category || 'mobile accessories'}. Please share available options.`;
  }

  function getExchangeMessage() {
    return "Hello HI-TECH Mobile Hub, I want to know about phone exchange/upgrade options.";
  }

  function getLocationMessage() {
    return "Hello HI-TECH Mobile Hub, can you please share your exact shop location and directions in Hansi?";
  }

  return {
    createUrl,
    openWhatsApp,
    getGeneralMessage,
    getProductMessage,
    getProductAvailabilityMessage,
    getRepairMessage,
    getAccessoriesMessage,
    getExchangeMessage,
    getLocationMessage
  };
})();

// Global alias for compatibility
const WhatsAppHelper = WhatsAppSystem;

if (typeof module !== "undefined" && module.exports) {
  module.exports = WhatsAppSystem;
}
