(() => {
  "use strict";

  const mobileQuery = window.matchMedia("(max-width: 767px)");
  const groups = [...document.querySelectorAll(".footer-nav-group")];

  const setState = (group, isOpen) => {
    const button = group.querySelector(".footer-nav-toggle");
    const panel = group.querySelector(".footer-nav-panel");
    if (!button || !panel) return;

    const mobile = mobileQuery.matches;
    group.classList.toggle("is-open", isOpen);
    button.setAttribute("aria-expanded", String(isOpen));
    button.tabIndex = mobile ? 0 : -1;
    panel.setAttribute("aria-hidden", String(mobile && !isOpen));
    panel.inert = mobile && !isOpen;
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
      const wasOpen = group.classList.contains("is-open");
      closeOthers(group);
      setState(group, !wasOpen);
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
