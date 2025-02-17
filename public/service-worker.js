const CACHE_NAME = "mommy-to-be-v1"
const urlsToCache = [
  "/",
  "/index.html",
  "/static/js/bundle.js",
  "/manifest.json",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mtb%20trans-cy74Ab16q8jV7BJM56sNn481UgRzus.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ll%20trans-fUfRd3ldFOVw2cGqeLTRgHU39jMtc7.png",
]

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)))
})

self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request).then((response) => response || fetch(event.request)))
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})

