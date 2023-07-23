class NavigationBar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top z-0">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="./images/flexcar-seeklogo.com.svg"
              alt="Logo"
              width="100"
              height="24"
              class="d-inline-block align-text-top"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>
            <i class="fa-solid fa-heart fa-xl" style="margin-right: 2%" onclick="openWishlist()"></i>
            <i class="fa-solid fa-cart-shopping fa-xl" onclick="openCart()"></i>
          </div>
        </div>
      </nav>`;
    };
}

customElements.define('navigation-bar', NavigationBar);