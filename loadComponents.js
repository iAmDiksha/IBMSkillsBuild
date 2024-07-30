// Function to load an HTML file and insert its content into the specified element
function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (response.ok) {
                return response.text();
            }
            throw new Error('Could not load the component');
        })
        .then(html => {
            document.getElementById(elementId).innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading component:', error);
        });
}

// Load Navbar and Footer
document.addEventListener('DOMContentLoaded', function() {
    loadHTML('navbar', 'navbar.html');
    loadHTML('footer', 'footer.html');
});
