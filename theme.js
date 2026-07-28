document.addEventListener("DOMContentLoaded", () => {
    const themeSelect = document.getElementById("themeSelect");
    const savedTheme = localStorage.getItem("selected-theme") || "purple";
    document.documentElement.setAttribute("data-theme", savedTheme);
    if (themeSelect) {
        themeSelect.value = savedTheme;
        themeSelect.addEventListener("change", (e) => {
            const newTheme = e.target.value;
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("selected-theme", newTheme);
        });
    }
});
