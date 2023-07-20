import items from "./items";

let offlineQueue = [];
let onlineQueue = [];
let wishlist = [];
let cart = [];
const wishlistContainer = document.getElementById("mywishlist");
const cartContainer = document.getElementById("mycart");


function addToWishlist(id){

    const item = wishlistContainer.appendChild(document.createElement("a"));
    item.href = "#";
    item.textContent ="New item";
    console.log(item);
}

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