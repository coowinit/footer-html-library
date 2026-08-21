(() => {
  "use strict";

  const mobileQuery = window.matchMedia("(max-width: 720px)");
  const groups = document.querySelectorAll(".footer-nav-group");

  if (!groups.length) return;

  const setGroupState = (group, isOpen) => {
    const button = group.querySelector(".footer-nav-toggle");
    const list = group.querySelector(".footer-nav-list");

    if (!button || !list) return;

    button.setAttribute("aria-expanded", String(isOpen));
    list.hidden = !isOpen;
  };

  const syncLayout = () => {
    groups.forEach((group) => {
      if (mobileQuery.matches) {
        // Mobile default: all groups collapsed.
        setGroupState(group, false);
      } else {
        // Desktop/tablet: all links visible.
        setGroupState(group, true);
      }
    });
  };

  groups.forEach((group) => {
    const button = group.querySelector(".footer-nav-toggle");
    if (!button) return;

    button.addEventListener("click", () => {
      if (!mobileQuery.matches) return;

      const isOpen = button.getAttribute("aria-expanded") === "true";
      setGroupState(group, !isOpen);
    });
  });

  if (typeof mobileQuery.addEventListener === "function") {
    mobileQuery.addEventListener("change", syncLayout);
  } else {
    mobileQuery.addListener(syncLayout);
  }

  syncLayout();
})();
