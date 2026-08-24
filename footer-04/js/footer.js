(() => {
  "use strict";

  const mobileQuery = window.matchMedia("(max-width: 767px)");
  const groups = [...document.querySelectorAll(".footer-nav-group")];

  if (!groups.length) return;

  const setState = (group, isOpen) => {
    const button = group.querySelector(".footer-nav-toggle");
    const list = group.querySelector(".footer-nav-list");

    if (!button || !list) return;

    button.setAttribute("aria-expanded", String(isOpen));
    list.hidden = mobileQuery.matches && !isOpen;
  };

  const closeOthers = (currentGroup) => {
    groups.forEach((group) => {
      if (group !== currentGroup) setState(group, false);
    });
  };

  groups.forEach((group) => {
    const button = group.querySelector(".footer-nav-toggle");
    if (!button) return;

    button.addEventListener("click", () => {
      if (!mobileQuery.matches) return;

      const isOpen = button.getAttribute("aria-expanded") === "true";
      closeOthers(group);
      setState(group, !isOpen);
    });
  });

  const syncLayout = () => {
    groups.forEach((group) => setState(group, !mobileQuery.matches));
  };

  if (typeof mobileQuery.addEventListener === "function") {
    mobileQuery.addEventListener("change", syncLayout);
  } else {
    mobileQuery.addListener(syncLayout);
  }

  syncLayout();
})();
