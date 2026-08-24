(() => {
  "use strict";

  const mobileQuery = window.matchMedia("(max-width: 767px)");
  const groups = [...document.querySelectorAll(".footer-nav-group")];

  const setState = (group, isOpen) => {
    const button = group.querySelector(".footer-nav-toggle");
    const panel = group.querySelector(".footer-nav-panel");
    if (!button || !panel) return;

    group.classList.toggle("is-open", isOpen);
    button.setAttribute("aria-expanded", String(isOpen));
    button.tabIndex = mobileQuery.matches ? 0 : -1;
    panel.setAttribute("aria-hidden", String(mobileQuery.matches && !isOpen));
    panel.inert = mobileQuery.matches && !isOpen;
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

  const demoForm = document.querySelector("[data-demo-form]");
  if (demoForm) {
    demoForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = document.querySelector(".newsletter-status");

      if (!demoForm.checkValidity()) {
        demoForm.reportValidity();
        if (status) status.textContent = "Please enter a valid email address.";
        return;
      }

      if (status) status.textContent = "Demo form only — connect your email service before launch.";
    });
  }

  syncLayout();
})();
