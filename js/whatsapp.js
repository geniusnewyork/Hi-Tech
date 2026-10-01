/**
 * HI-TECH Mobile Hub — WhatsApp Link Generator
 * 
 * Provides robust URL encoding and formatting for WhatsApp click-to-chat links.
 */

const WhatsAppHelper = (function() {
  /**
   * Generates a direct WhatsApp URL with URL-encoded message text
   * @param {string} message - Message text to pre-fill in the customer's chat
   * @param {string} [phone] - Optional phone override (defaults to SHOP_CONFIG.whatsapp)
   * @returns {string} Fully formatted https://wa.me URL
   */
  function createUrl(message, phone) {
    const targetPhone = phone || (typeof SHOP_CONFIG !== "undefined" ? SHOP_CONFIG.whatsapp : "918607777717");
    const cleanPhone = String(targetPhone).replace(/[^0-9]/g, "");
    const msg = (message && typeof message === "string") ? message.trim() : (SHOP_CONFIG ? SHOP_CONFIG.whatsappDefaultMsg : "Hi HI-TECH Mobile Hub");
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
  }

  /**
   * Product Ask Price WhatsApp message
   */
  function getProductPriceMsg(productName) {
    return `Hi HI-TECH Mobile Hub, I want to know the price and availability of ${productName}.`;
  }

  /**
   * Product Check Availability WhatsApp message
   */
  function getProductAvailabilityMsg(productName) {
    return `Hi HI-TECH Mobile Hub, is ${productName} currently available?`;
  }

  /**
   * Service Enquiry WhatsApp message
   */
  function getServiceMsg(serviceTitle) {
    return `Hi HI-TECH Mobile Hub, I want to enquire about ${serviceTitle}.`;
  }

  /**
   * Repair Assistance WhatsApp message
   */
  function getRepairMsg(details) {
    if (!details) {
      return "Hi HI-TECH Mobile Hub, I need help with mobile repair.";
    }
    const lines = [
      "Hi HI-TECH Mobile Hub, I need repair assistance for my device:",
      `• Name: ${details.name || "Customer"}`,
      `• Phone: ${details.phone || "Not specified"}`,
      `• Brand: ${details.brand || "Not specified"}`,
      `• Model: ${details.model || "Not specified"}`,
      `• Issue: ${details.problem || "General repair checkup"}`
    ];
    return lines.join("\n");
  }

  /**
   * Exchange Enquiry WhatsApp message
   */
  function getExchangeMsg() {
    return "Hi HI-TECH Mobile Hub, I want to enquire about exchanging my phone.";
  }

  return {
    createUrl,
    getProductPriceMsg,
    getProductAvailabilityMsg,
    getServiceMsg,
    getRepairMsg,
    getExchangeMsg
  };
})();

if (typeof module !== "undefined" && module.exports) {
  module.exports = WhatsAppHelper;
}
