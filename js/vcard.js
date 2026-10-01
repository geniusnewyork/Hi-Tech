/**
 * HI-TECH Mobile Hub — Digital Visiting Card (vCard / .vcf) Generator
 * 
 * Allows visitors to instantly save HI-TECH Mobile Hub contact info directly
 * into Android and iOS address books with one click.
 */

const VCardController = (function() {
  function downloadVCard() {
    const config = typeof SHOP_CONFIG !== "undefined" ? SHOP_CONFIG : {
      name: "HI-TECH Mobile Hub",
      phoneRaw: "+918607777717",
      city: "Hansi",
      state: "Haryana",
      country: "India",
      instagram: "https://www.instagram.com/hitechmobile77/"
    };

    const currentUrl = (config.website && config.website.length > 5) 
      ? config.website 
      : window.location.href.split("#")[0];

    const vCardContent = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${config.name}`,
      `ORG:${config.name}`,
      `TITLE:Mobile Showroom & Repair Center`,
      `TEL;TYPE=WORK,VOICE:${config.phoneRaw}`,
      `TEL;TYPE=CELL,VOICE:${config.phoneRaw}`,
      `ADR;TYPE=WORK:;;${config.city};${config.state};;${config.country}`,
      `URL:${currentUrl}`,
      `NOTE:HI-TECH Mobile Hub — Smartphones, Accessories, Repair & Exchange in Hansi, Haryana.`,
      `X-SOCIALPROFILE;type=instagram:${config.instagram}`,
      "END:VCARD"
    ].join("\r\n");

    try {
      const blob = new Blob([vCardContent], { type: "text/vcard;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "HI-TECH-Mobile-Hub.vcf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (err) {
      console.warn("Direct blob download failed, falling back to data URI", err);
      window.location.href = `data:text/vcard;charset=utf-8,${encodeURIComponent(vCardContent)}`;
    }
  }

  function init() {
    const saveContactButtons = document.querySelectorAll(".btn-save-contact");
    saveContactButtons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        downloadVCard();
      });
    });
  }

  return {
    init,
    downloadVCard
  };
})();

if (typeof module !== "undefined" && module.exports) {
  module.exports = VCardController;
}
