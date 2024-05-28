// Register the service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/your-repo-name/service-worker.js').then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        }, err => {
            console.log('Service Worker registration failed:', err);
        });
    });
}

// Check if the app is offline and display the message
window.addEventListener('load', () => {
    if (!navigator.onLine) {
        document.getElementById('offline-message').style.display = 'block';
    }
});

// Listen for online and offline events to update the message
window.addEventListener('online', () => {
    document.getElementById('offline-message').style.display = 'none';
});

window.addEventListener('offline', () => {
    document.getElementById('offline-message').style.display = 'block';
});
