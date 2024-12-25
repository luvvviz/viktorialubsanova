// Get all the links in the header
const navLinks = document.querySelectorAll('header nav ul li a');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
    // Remove focus from all nav links when scrolling
    navLinks.forEach(link => link.blur());
});
