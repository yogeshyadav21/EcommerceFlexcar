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
let cartValue = 0;
let CartPrices = {};

function addToWishlist(id){
    if(wishlist.indexOf(id) != -1){
        return;
    }
    const wishlistContainer = document.getElementById("mywishlist");
    wishlist.push(id);
    const product = document.createElement("div");
    product.className = `card`;
    product.id= `wishlist-card-${id}`;
    product.style = "width: 18rem; margin-left: 50px; margin-bottom: 10px";
    product.innerHTML=`
    <div class="card-body">
        <div style=" display: flex; justify-content: space-around; align-items: center; margin-bottom: 10px;">
            <img src="${items[id].imgsrc}" style="height: 80px; width: 80px" alt="..." />
            <h5 class="card-title" style="display: inline; margin-left: 50px"> ${items[id].title} </h5>
        </div>
        <div style="display: flex; justify-content: center">
            <h2 class="d-inline">$${items[id].price}</h2>
          </div>
        <div style="display: flex; justify-content: space-around">
            <button class="btn btn-success" onClick="moveToCart(${id})">Move to Cart</button>
            <button class="btn btn-danger" onClick="removeFromWishlist(${id})">Remove</button>
        </div>
    </div>`;
    wishlistContainer.appendChild(product);
}

function moveToCart(id){
    removeFromWishlist(id);
    addToCart(id);
}

function removeFromWishlist(id){
    const wishlistContainer = document.getElementById("mywishlist");
    const item = document.getElementById(`wishlist-card-${id}`);
    wishlistContainer.removeChild(item);
    wishlist = wishlist.filter(function(ele) {
        return ele !== id;
    })
}

function addToCart(id){
    const cartContainer = document.getElementById("mycart");
    const product = document.createElement("div");
    product.className = `card`;
    product.id= `cart-card-${id}`;
    if(cart.indexOf(product.id) != -1){
        addItem(id);
        return;
    }
    cartValue+= items[id].price;
    CartPrices[product.id] = items[id].price;
    cart.push(product.id);
    product.style = "width: 18rem; margin-left: 50px; margin-bottom: 10px";
    product.innerHTML=`
        <div class="card-body">
            <div style=" display: flex; justify-content: space-around; align-items: center; margin-bottom: 10px;">
                <img src="${items[id].imgsrc}" style="height: 80px; width: 80px" alt="..." />
                <h5 class="card-title" style="display: inline; margin-left: 50px"> ${items[id].title} </h5>
            </div>
            <div class="d-flex justify-content-evenly mb-2">
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" class="btn"  style="border: black 1px solid" onclick="addItem(${id})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                          </svg>
                    </button>
                    <input type="text"  value="1"  id="${product.id}-itemCounter" style="width: 40px; text-align: center;" disabled/>
                    <button type="button" class="btn" style="border: black 1px solid" onclick="reduceItem(${id})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                          </svg>
                    </button>
                </div>
            </div>
            <hr>
            <div class="d-flex mb-2 justify-content-around">
                <div>
                    Total Price:
                </div>
                <div class="d-inline-flex">
                    <em id="${product.id}-quantity">1</em> x <em id="price">${items[id].price}</em> = <div id="${product.id}-total">$${items[id].price}</div>
                </div>
            </div>
            <div style="display: flex; justify-content: space-around">
                <button class="btn btn-danger" onClick="removeFromCart(${id})">Remove</button>
            </div>
        </div>
    `;
    cartContainer.appendChild(product);
}

function addItem(id){
    const productId = `cart-card-${id}`;
    const quantity = document.getElementById(productId+'-quantity');
    const total = document.getElementById(productId+'-total');
    const itemCounter = document.getElementById(productId+'-itemCounter');
    let val = Number.parseInt(itemCounter.getAttribute("value"));
    itemCounter.setAttribute("value",val+1);
    quantity.textContent = val+1;
    cartValue += items[id].price;
    CartPrices.productId += items[id].price;
    total.textContent = "$"+Number.parseInt(price.textContent*Number.parseInt(quantity.textContent));
}

function reduceItem(id){
    const productId = `cart-card-${id}`;
    const quantity = document.getElementById(productId+'-quantity');
    const total = document.getElementById(productId+'-total');
    const itemCounter = document.getElementById(productId+'-itemCounter');
    let val = Number.parseInt(itemCounter.getAttribute("value"));
    if(val == 1) return;
    itemCounter.setAttribute("value",val-1);
    quantity.textContent = val-1;
    cartValue -= items[id].price;
    CartPrices.productId -= items[id].price;
    total.textContent = "$"+Number.parseInt(price.textContent*Number.parseInt(quantity.textContent));
}


function removeFromCart(id){
    const cartContainer = document.getElementById("mycart");
    const productId = `cart-card-${id}`;
    const item = document.getElementById(productId);
    cartContainer.removeChild(item);
    cartValue -= CartPrices.productId;
    delete CartPrices.productId;
    cart = cart.filter(function(ele) {
        return ele !== productId;
    })
}