const CACHE_NAME = 'mommy-to-be-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/static/js/bundle.js',
  '/manifest.json',
  './images/mtb-black.png',
  './images/mtb-white.png',
];

// Install Service Worker and Cache Assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch Requests from Cache First, Then Network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

// Delete Old Cache on Activation
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Handle Before Install Prompt
let deferredPrompt;
self.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;

  // Notify the app about the install prompt availability
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({ type: 'INSTALL_PROMPT' });
    });
  });
});

// Listen for Messages from the App
self.addEventListener('message', async (event) => {
  if (event.data === 'SHOW_INSTALL_PROMPT' && deferredPrompt) {
    deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;

    if (choiceResult.outcome === 'accepted') {
      sendNotification('PWA Installed', 'You can now access the app offline.');
      console.log('User accepted the install prompt');
    } else {
      sendNotification(
        'Installation Canceled',
        'You can install the app later from the browser menu.'
      );
      console.log('User dismissed the install prompt');
    }

    deferredPrompt = null;
  }

  if (event.data === 'CHECK_INSTALLATION') {
    checkIfAppIsInstalled(event.source);
  }
});

// Function to check if app is installed
async function checkIfAppIsInstalled(client) {
  const isStandalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone;

  if (isStandalone) {
    sendNotification('App Installed', 'Continue using the installed version.');
    client.postMessage({ type: 'OPEN_IN_APP' });
  } else {
    client.postMessage({ type: 'SHOW_INSTALL_PROMPT' });
  }
}

// Function to send notifications
function sendNotification(title, body) {
  self.registration.showNotification(title, {
    body,
    icon: './images/mtb-black.png',
  });
}
