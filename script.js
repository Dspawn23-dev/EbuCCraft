// script.js
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');
    
    // Hide the loading screen
    loadingScreen.style.display = 'none';
    
    // Show the main content
    content.style.display = 'block';
});
