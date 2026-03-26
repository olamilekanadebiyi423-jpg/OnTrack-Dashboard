const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Function to update the toggle button text based on the theme
const updateButtonText = (isDark) => {
    themeToggle.innerHTML = isDark ? "Switch to light ☀️" : "Switch to dark 🌙";
};

// Check for saved user preference on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    updateButtonText(true);
}

// Toggle listener
themeToggle.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') === 'dark';
    
    if (isDark) {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        updateButtonText(false);
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateButtonText(true);
    }
});