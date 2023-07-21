class CardElement extends HTMLElement{
  connectedCallback(){
      this.innerHTML = `
      <div class="grid-container">
      <div class="card" style="width: 18rem">
        <img
          src="./images/bagus-hernawan-A6JxK37IlPo-unsplash.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body" style="display: flex; flex-direction: column">
          <h5 class="card-title">Iphone X</h5>
          <p class="card-text">
            Meet the iPhone X - the device that's so smart that it responds to a
            tap, your voice, and even a glance. Elegantly designed with a large
            14.73 cm (5.8) Super Retina screen and a durable front-and-back
            glass, this smartphone is designed to impress. What's more, you can
            charge this iPhone wirelessly.
          </p>
          <div style="position: absolute; bottom: 1rem">
            <button class="btn btn-warning">Add To Wishlist</button>
            <button class="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img
          src="./images/maxim-hopman-Hin-rzhOdWs-unsplash.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">APPLE 2020 Macbook Air M1</h5>
          <p class="card-text">
            This Apple Macbook is powered by the Apple M1 chip and is easily
            portable so that you can carry it with you anywhere you want. This
            thin and light notebook is equipped with an 8-core CPU to handle all
            your tasks more efficiently. The 8-core GPU of this notebook takes
            graphic-intensive games and apps to a whole new level.
          </p>
          <div style="position: absolute; bottom: 1rem">
            <button class="btn btn-warning">Add To Wishlist</button>
            <button class="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img
          src="./images/tomasz-gawlowski-YDZPdqv3FcA-unsplash.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">SONY WH-CH510</h5>
          <p class="card-text">
            Conversations and music flow seamlessly with these lightweight and
            compact headphones from Sony that come equipped with a microphone
            and Bluetooth technology.
          </p>
          <div style="position: absolute; bottom: 1rem">
            <button class="btn btn-warning">Add To Wishlist</button>
            <button class="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img
          src="./images/fabian-heimann-4R_WEmhx8og-unsplash.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">FOSSIL</h5>
          <p class="card-text">
            1.83" UltraVU Display with 500 nits Brightness, SingleSync BT
            Calling, 110+ Multisports, Sleep Monitor with REM Sleep, Stress
            Monitor, 24*7 HRM, SpO2, Women's Health, Music & Camera Control,
            In-Built Alarm.
          </p>
          <div style="position: absolute; bottom: 1rem">
            <button class="btn btn-warning">Add To Wishlist</button>
            <button class="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>`;
  };
}

customElements.define('card-elements', CardElement);



