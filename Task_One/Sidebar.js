document.addEventListener("DOMContentLoaded", function () {
  const sidebarContainer = document.querySelector(".sideBar_container");
  const toggleButton = document.querySelector(".button");
  const buttonIcon = document.querySelector(".button i");
  const logoContainer = document.querySelector(".logo");
  const logoImg = document.querySelector("#logoImg");
  const miniLogo = document.querySelector("#miniLogo");
  const sidebarList = document.querySelector(".sidebar_list");
  const linkContainers = document.querySelectorAll(".link_container");
  const linkTexts = document.querySelectorAll(".link-text");

  let isOpen = true;

  const originalWidth = sidebarContainer.offsetWidth;
  const collapsedWidth = 80;

  //smooth
  sidebarContainer.style.transition = "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
  logoContainer.style.transition = "opacity 0.3s ease, transform 0.3s ease";
  logoImg.style.transition = "width 0.3s ease, height 0.3s ease";
  sidebarList.style.transition = "left 0.3s ease";
  buttonIcon.style.transition = "transform 0.3s ease";

  linkContainers.forEach((container, index) => {
    container.style.transition = `width 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${
      index * 0.02
    }s, padding 0.3s ease`;
    container.style.overflow = "hidden";
    container.style.whiteSpace = "nowrap";
  });

  linkTexts.forEach((text, index) => {
    text.style.transition = `opacity 0.2s ease ${
      index * 0.02
    }s, transform 0.3s ease`;
    text.style.display = "inline-block";
  });

  function closeSidebar() {
    sidebarContainer.classList.add("collapsed");
    buttonIcon.className = "ri-arrow-right-circle-fill";
    isOpen = false;
    buttonIcon.style.transform = "rotate(180deg)";
    toggleButton.setAttribute("aria-label", "Expand sidebar");
    console.log("Sidebar closed");
  }

  function openSidebar() {
    sidebarContainer.classList.remove("collapsed");
    buttonIcon.className = "ri-arrow-left-circle-fill";
    isOpen = true;
    buttonIcon.style.transform = "rotate(0deg)";
    toggleButton.setAttribute("aria-label", "Collapse sidebar");
    console.log("Sidebar opened");
  }

  function toggleSidebar() {
    if (isOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }

  toggleButton.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    toggleSidebar();
    console.log("Toggle button clicked, isOpen:", isOpen);
  });

  linkContainers.forEach((container, index) => {
    container.addEventListener("click", function () {
      linkContainers.forEach((c) => c.classList.remove("active"));

      this.classList.add("active");

      console.log(`Clicked on: ${this.getAttribute("data-tooltip")}`);
    });

    container.addEventListener("mouseenter", function () {
      if (!sidebarContainer.classList.contains("collapsed")) {
        this.style.transform = "translateX(5px)";
      }
    });

    container.addEventListener("mouseleave", function () {
      if (!sidebarContainer.classList.contains("collapsed")) {
        this.style.transform = "translateX(0)";
      }
    });
  });

  setInterval(() => {
    const buttonRect = toggleButton.getBoundingClientRect();
    console.log("Button position:", {
      top: buttonRect.top,
      right: buttonRect.right,
      visible: buttonRect.width > 0 && buttonRect.height > 0,
    });
  }, 5000);

  function ensureButtonVisibility() {
    toggleButton.style.display = "flex";
    toggleButton.style.visibility = "visible";
    toggleButton.style.opacity = "1";
  }

  ensureButtonVisibility();

  sidebarContainer.addEventListener("transitionend", function () {
    ensureButtonVisibility();
    console.log("Transition ended, button visibility ensured");
  });
});
