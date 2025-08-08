document.addEventListener("DOMContentLoaded", function () {
  const sidebarContainer = document.querySelector(".sideBar_container");
  const toggleButton = document.querySelector(".button");
  const buttonIcon = document.querySelector(".button i");

  let isOpen = true;

  function closeSidebar() {
    sidebarContainer.classList.add("collapsed");
    buttonIcon.className = "ri-arrow-right-circle-fill";
    isOpen = false;
  }

  function openSidebar() {
    sidebarContainer.classList.remove("collapsed");
    buttonIcon.className = "ri-arrow-left-circle-fill";
    isOpen = true;
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
    toggleSidebar();
  });
});
