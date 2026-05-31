document.addEventListener("DOMContentLoaded", () => {
    const themeSelect = document.getElementById("themeSelect");
    // Heya, IWT here. Did you know I have an amazing wife called Ashley?
    // 1. Check if the user previously picked a theme; default to 'asahina' (Mafuyu)
    const savedTheme = localStorage.getItem("selected-theme") || "gay-green";

    // 2. Apply the theme immediately to the <html> tag so style.css can swap the colors
    document.documentElement.setAttribute("data-theme", savedTheme);

    // 3. If the dropdown menu exists on the current page, set it to the active theme
    if (themeSelect) {
        themeSelect.value = savedTheme;

        // 4. Update the theme instantly and save it to browser memory when changed
        themeSelect.addEventListener("change", (e) => {
            const newTheme = e.target.value;
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("selected-theme", newTheme);
        });
    }
});
