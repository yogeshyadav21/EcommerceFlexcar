if(navigator.serviceWorker){
    let registration;
    const registerServiceWorker = async ()=> {
        registration = await navigator.serviceWorker.register('./sw.js');
    }
    registerServiceWorker();
} 

let wishlist = [];
let cart = [];
let cartValue = 0;
var CartPrices = {};
document.addEventListener("DOMContentLoaded",()=>{
    try {
        if(sessionStorage.getItem('wishlist') != null){ wishlist = JSON.parse(sessionStorage.getItem("wishlist"));}
        if(sessionStorage.getItem('cart') != null){ cart = JSON.parse(sessionStorage.getItem('cart'));}
        if(sessionStorage.getItem('cartValue') != null){ cartValue = JSON.parse(sessionStorage.getItem('cartValue'));}
        if(sessionStorage.getItem('cartPrices') != null){ CartPrices = JSON.parse(sessionStorage.getItem('cartPrices'));}
        
        wishlist.forEach((id)=>{addToWishlist(id,false)});
        cart.forEach((id)=>{addToCart(id,false)});
        renderCartValue();
    
    } catch (error) {
        console.error(error);
    }
});

function udpdateSessionStorage(key,value){
    sessionStorage.setItem(key,JSON.stringify(value));
}

function renderCartValue(){
    const cartValueContainer = document.getElementById('totalCartValue');
    const submitButton = document.getElementById("checkoutButton");
    if(cartValue>0){
        submitButton.style.display="block";
    }else{
        submitButton.style.display="none";
    }
    cartValueContainer.textContent = '$'+cartValue;
    udpdateSessionStorage("cartValue",cartValue);
}

function addToWishlist(id,save=true){
    if((wishlist.indexOf(id) != -1) && save){
        return;
    }
    const wishlistContainer = document.getElementById("mywishlist");
    if(save){
        wishlist.push(id);
        udpdateSessionStorage("wishlist",wishlist);
    }
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
    udpdateSessionStorage("wishlist",wishlist);
}

function addToCart(id,save=true){
    const cartContainer = document.getElementById("mycart");
    const product = document.createElement("div");
    product.className = `card`;
    const productId = `cart-card-${id}`;
    product.id = productId;
    if((cart.indexOf(id) != -1) && save){
        addItem(id);
        return;
    }
    product.style = "width: 18rem; margin-left: 50px; margin-bottom: 10px; z-index: 1;";
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
    
    if(save){
        cart.push(id);
        cartValue += (items[id].price);
        CartPrices[productId] = items[id].price;
        udpdateSessionStorage("cart",cart);
        udpdateSessionStorage("cartPrices",CartPrices);
        renderCartValue();
    }else{
        document.getElementById(productId+'-itemCounter').setAttribute("value",(CartPrices[productId])/items[id].price);
        document.getElementById(productId+'-quantity').textContent = (CartPrices[productId])/items[id].price;
        document.getElementById(productId+'-total').textContent = "$"+CartPrices[productId];
    }
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
    CartPrices[productId] = (CartPrices[productId]+items[id].price);
    console.log(`cartPrices: ${CartPrices} and productId: ${productId} and cartPrices[productId]: ${CartPrices[productId]}`);
    total.textContent = "$"+(CartPrices[productId]);
    udpdateSessionStorage("cart",cart);
    udpdateSessionStorage("cartPrices",CartPrices);
    renderCartValue();
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
    cartValue -= (items[id].price);
    CartPrices[productId] = CartPrices[productId]-items[id].price;
    total.textContent = "$"+CartPrices[productId];
    udpdateSessionStorage("cart",cart);
    udpdateSessionStorage("cartPrices",CartPrices);
    renderCartValue();
}


function removeFromCart(id){
    const cartContainer = document.getElementById("mycart");
    const productId = `cart-card-${id}`;
    const item = document.getElementById(productId);
    cartContainer.removeChild(item);
    cartValue -= CartPrices[productId];
    delete CartPrices[productId];
    cart = cart.filter(function(ele) {
        return ele != id;
    })
    udpdateSessionStorage("cart",cart);
    udpdateSessionStorage("cartPrices",CartPrices);
    renderCartValue();
}

function openWishlist() {
    document.getElementById("mywishlist").style.width = "400px";
  }
  function closeWishlist() {
    document.getElementById("mywishlist").style.width = "0";
  }
  function openCart() {
    document.getElementById("mycart").style.width = "400px";
  }
  function closeCart() {
    document.getElementById("mycart").style.width = "0";
  }

  window.addEventListener('online',()=>{console.log('User Online')});
  window.addEventListener('offline',()=>{console.log('User Offline')});


//Add the Delivery Address
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#myForm').addEventListener('submit', (event)=>{
        event.preventDefault();
        const inputHouseNumber = event.target.elements['inputHouseNumber'].value;
        const inputCity = event.target.elements['inputCity'].value;
        const inputDistrict = event.target.elements['inputDistrict'].value;
        const inputZip = event.target.elements['inputZip'].value;
        const inputLandmark = event.target.elements['inputLandmark'].value;
        const inputState = event.target.elements['inputState'].value;
        
        document.getElementById("addressButton").innerHTML = "Edit Delivery Address";

        document.getElementById("address").innerHTML=`House Number = ${inputHouseNumber}, ${inputLandmark}, ${inputCity}, ${inputDistrict}(${inputState}), ${inputZip}`;

    })
})

