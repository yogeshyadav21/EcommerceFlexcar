const CACHE_NAME = "static_cache";
const staticAssets = [
  "/index.html",
  "/app.js",
  "/style.css",
  "/images/flexcar-seeklogo.com.svg",
  "/images/bagus-hernawan-A6JxK37IlPo-unsplash.jpg",
  "/images/maxim-hopman-Hin-rzhOdWs-unsplash.jpg",
  "/images/tomasz-gawlowski-YDZPdqv3FcA-unsplash.jpg",
  "/images/fabian-heimann-4R_WEmhx8og-unsplash.jpg",
  "https://kit.fontawesome.com/3a23dfdecd.js",
];

//Adding the Cache
self.addEventListener("install", (event) => {
  console.log("installed");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache
        .addAll(staticAssets)
        // .then(() => console.log("cache is added"))
        // .catch((error) => console.log("error occured whle caching", error));
    })
  );
});

//Adding the activate
self.addEventListener("activate", (event) => {
  console.log("activated");
  self.skipWaiting();
});


//Retriving the data
self.addEventListener("fetch", (event) => {
  console.log("fetched");
  event.respondWith(fetch(event.request).catch(error => {
    return caches.match(event.request);
  }))
});
