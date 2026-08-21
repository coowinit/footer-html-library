(() => {
  "use strict";

  const mobileQuery = window.matchMedia("(max-width: 720px)");
  const sections = document.querySelectorAll(".footer-accordion");

  if (!sections.length) return;

  const setSectionState = (section, isOpen) => {
    const button = section.querySelector(".footer-section-toggle");
    const content = section.querySelector(".footer-section-content");

    if (!button || !content) return;

    button.setAttribute("aria-expanded", String(isOpen));
    content.hidden = !isOpen;
  };

  const syncLayout = () => {
    sections.forEach((section) => {
      // Mobile: collapsed by default. Desktop/tablet: always visible.
      setSectionState(section, !mobileQuery.matches);
    });
  };

  sections.forEach((section) => {
    const button = section.querySelector(".footer-section-toggle");

    if (!button) return;

    button.addEventListener("click", () => {
      if (!mobileQuery.matches) return;

      const isOpen = button.getAttribute("aria-expanded") === "true";
      setSectionState(section, !isOpen);
    });
  });

  if (typeof mobileQuery.addEventListener === "function") {
    mobileQuery.addEventListener("change", syncLayout);
  } else {
    mobileQuery.addListener(syncLayout);
  }

  syncLayout();
})();
