const CACHE_NAME = "static_cache";
const staticAssets = [
  "/Ecommerce/index.html",
  "/Ecommerce/app.js",
  "/Ecommerce/style.css",
  "/Ecommerce/checkOut.html",
  "/Ecommerce/checkOut.js",
  "/Ecommerce/navScript.js",
  "/Ecommerce/store.js",
  "/Ecommerce/form.js",
  "/Ecommerce/images/bagus-hernawan-A6JxK37IlPo-unsplash.jpg",
  "/Ecommerce/images/fabian-heimann-4R_WEmhx8og-unsplash.jpg",
  "/Ecommerce/images/flexcar-seeklogo.com.svg",
  "/Ecommerce/images/howard-bouchevereau-RSCirJ70NDM-unsplash.jpg",
  "/Ecommerce/images/maxim-hopman-Hin-rzhOdWs-unsplash.jpg",
  "/Ecommerce/images/tomasz-gawlowski-YDZPdqv3FcA-unsplash.jpg",
  "https://kit.fontawesome.com/3a23dfdecd.js",
  "/Ecommerce/toast.js",
];

//Adding to the Cache
self.addEventListener("install", (event) => {
  console.log("installed");
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache
        .addAll(staticAssets)
        .then(() => console.log("cache is added"))
        .catch((error) => console.log("error occured while caching", error));
    })
  );
});

//Adding the activate listener
self.addEventListener("activate", (event) => {
  console.log("activated");
  self.clients.claim();
});


//Retriving the data online first
self.addEventListener('fetch', event =>{
  event.respondWith(
    fetch(event.request).catch(error=>{
      return caches.match(event.request);

      
    })
  )
});
