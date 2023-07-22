if(navigator.serviceWorker){
    navigator.serviceWorker.register('sw.js');
} 

if ('caches' in window) {
    console.log("yes");
  } else {
    console.log("no");
  }
let offlineQueue = [];
let onlineQueue = [];
let wishlist = [];
let cart = [];


function addToWishlist(id){
    if(wishlist.indexOf(id) != -1){
        return;
    }
    const wishlistContainer = document.getElementById("mywishlist");
    wishlist.push(id);
    const b = document.createElement("div");
    b.className = `card`;
    b.id= `card-${id}`;
    b.style = "width: 18rem; margin-left: 50px; margin-bottom: 10px";
    b.innerHTML=`
    <div class="card-body">
        <div style=" display: flex; justify-content: space-around; align-items: center; margin-bottom: 10px;">
            <img src="${items[id].imgsrc}" style="height: 80px; width: 80px" alt="..." />
            <h5 class="card-title" style="display: inline; margin-left: 50px"> ${items[id].title} </h5>
        </div>
        <div style="display: flex; justify-content: center">
            <h2 class="d-inline">$${items[id].price}</h2>
          </div>
        <div style="display: flex; justify-content: space-around">
            <button class="btn btn-success">Move to Cart</button>
            <button class="btn btn-danger" onclick="removeFromWishlist(${id})">Remove</button>
        </div>
    </div>`;
    wishlistContainer.appendChild(b);
}

function removeFromWishlist(id){
    const wishlistContainer = document.getElementById("mywishlist");
    const item = document.getElementById(`card-${id}`);
    wishlistContainer.removeChild(item);
    wishlist = wishlist.filter(function(ele) {
        return ele !== id;
    })
}
