
function toggleTheme() {

  const root = document.documentElement;

  if (root.classList.contains("light-theme")) {

    root.classList.remove("light-theme");
    localStorage.setItem("theme", "dark");
  } else {
    root.classList.add("light-theme");
    localStorage.setItem("theme", "light");
  }
}

window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  const root = document.documentElement;

  if (savedTheme === "light") {
    root.classList.add("light-theme");
  }
});
