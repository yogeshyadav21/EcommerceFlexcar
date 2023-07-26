//Add the Delivery Address
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#myForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const inputHouseNumber = event.target.elements["inputHouseNumber"].value;
    const inputCity = event.target.elements["inputCity"].value;
    const inputDistrict = event.target.elements["inputDistrict"].value;
    const inputZip = event.target.elements["inputZip"].value;
    const inputLandmark = event.target.elements["inputLandmark"].value;
    const inputState = event.target.elements["inputState"].value;

    document.getElementById("addressButton").innerHTML =
      "Edit Delivery Address";

    document.getElementById(
      "address"
    ).innerHTML = `House Number = ${inputHouseNumber}, ${inputLandmark}, ${inputCity}, ${inputDistrict}(${inputState}), ${inputZip}`;
  });
});

// Adding the order summary
let orderSummary = document.getElementById("orderSummary");

document.addEventListener("DOMContentLoaded", () => {
  cart.forEach((id) => {
    let orderSummaryElement = document.createElement("tr");
    orderSummaryElement.innerHTML = `
        <td>${items[id].title}</td>
        <td>${CartPrices[`cart-card-${id}`] / items[id].price}</td>
        <td>$${items[id].price}</td>
        <td>$${CartPrices[`cart-card-${id}`]}</td>
        `;
    orderSummary.appendChild(orderSummaryElement);
  });
  let x = document.createElement("div");
  x.innerHTML = `<div style="margin-top:1rem;"><strong>Total Value: </strong>$${cartValue}</div>`;
  orderSummary.appendChild(x);
});

//Proceed to Pay
document.getElementById("proceedPay").addEventListener("click", () => {
  if (
    document.getElementById("address").innerHTML &&
    document.getElementById("orderSummary").innerHTML
  ) {
    const toast = new bootstrap.Toast(document.getElementById("liveToast"));
    toast.show();
    setInterval(() => {
      location.href = "index.html";
    }, 3000);

    //Clearing the fields
    cart.forEach(() => {
      cart.pop();
    });
    wishlist.forEach(() => {
      wishlist.pop();
    });
    cartValue = 0;
    for (let key in CartPrices) {
      delete CartPrices[key];
    }
    sessionStorage.clear();
  } else if (document.getElementById("address").innerHTML) {
    location.href = "index.html";
    alert("Please Add Item To The Cart");
  } else{
    alert("Delivery Address is Mandatory");
  }
});

function validate(){
  console.log("validate function called");

  const closeButton = document.getElementById("closeModalButton");
  closeButton.click();
}