(() => {
  "use strict";

  const mobileQuery = window.matchMedia("(max-width: 720px)");
  const groups = document.querySelectorAll(".footer-nav-group");

  if (!groups.length) return;

  const closeAll = () => {
    groups.forEach((group) => {
      group.classList.remove("is-open");
      const button = group.querySelector(".footer-nav-toggle");
      if (button) button.setAttribute("aria-expanded", "false");
    });
  };

  groups.forEach((group) => {
    const button = group.querySelector(".footer-nav-toggle");
    if (!button) return;

    button.addEventListener("click", () => {
      if (!mobileQuery.matches) return;

      const wasOpen = group.classList.contains("is-open");

      // Keep the mobile footer concise: only one navigation group open at a time.
      closeAll();

      if (!wasOpen) {
        group.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  const syncLayout = () => {
    closeAll();
  };

  if (typeof mobileQuery.addEventListener === "function") {
    mobileQuery.addEventListener("change", syncLayout);
  } else {
    mobileQuery.addListener(syncLayout);
  }

  syncLayout();
})();
