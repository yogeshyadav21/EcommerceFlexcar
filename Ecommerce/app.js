if(navigator.serviceWorker){
    navigator.serviceWorker.register('sw.js');
} 

if ('caches' in window) {
    console.log("yes");
  } else {
    console.log("no");
  }