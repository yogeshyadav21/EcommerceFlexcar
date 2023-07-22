
let offlineQueue = [];
let onlineQueue = [];
let wishlist = [];
let cart = [];

console.log(items);

function addToWishlist(id){
    const wishlistContainer = document.getElementById("mywishlist");
    const b = document.createElement("div");
    b.className = "card";
    b.style = "width: 18rem; margin-left: 50px;";
    b.innerHTML=`
    <div class="card-body">
        <div style=" display: flex; justify-content: space-around; align-items: center; margin-bottom: 10px;">
            <img src="./images/bagus-hernawan-A6JxK37IlPo-unsplash.jpg" style="height: 80px; width: 80px" alt="..." />
            <h5 class="card-title" style="display: inline; margin-left: 50px"> Iphone X </h5>
        </div>
        <div style="display: flex; justify-content: space-around">
            <button class="btn btn-success">Move to Cart</button>
            <button class="btn btn-danger">Remove</button>
        </div>
    </div>`;
    wishlistContainer.appendChild(b);
}
