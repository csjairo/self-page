const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;

const applyTheme = (theme) => {
  if (theme === "dark") {
    root.classList.add("dark");
    toggle.textContent = "☀️";
  } else {
    root.classList.remove("dark");
    toggle.textContent = "🌙";
  }
};

const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

toggle.addEventListener("click", () => {
  const isDark = root.classList.toggle("dark");
  const newTheme = isDark ? "dark" : "light";

  toggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", newTheme);
});
