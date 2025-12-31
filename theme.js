const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  root.classList.add("dark");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  root.classList.toggle("dark");

  const isDark = root.classList.contains("dark");
  toggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
