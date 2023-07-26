class AddressForm extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `<form class="row g-3" id="myForm">
        <div class="col-md-6">
          <label for="inputHouseNumber" class="form-label">House Number</label>
          <input type="text" class="form-control" id="inputHouseNumber" required>
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">City/Village</label>
          <input type="text" class="form-control" id="inputCity" required>
        </div>
        <div class="col-12">
          <label for="inputLandmark" class="form-label">Landmark</label>
          <input type="text" class="form-control" id="inputLandmark" placeholder="Nearest Landmark">
        </div>
        <div class="col-12">
          <label for="inputZip" class="form-label">Zip code</label>
          <input class="form-control" id="inputZip" placeholder="122101" type="number" min="100000" max="999999" required>
        </div>
        <div class="col-md-6">
          <label for="inputDistrict" class="form-label">District</label>
          <input type="text" class="form-control" id="inputDistrict">
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">State</label>
          <select class="form-control" id="inputState">
            <option selected>Select State</option>
            <option value="Andra Pradesh">Andra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madya Pradesh">Madya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Orissa">Orissa</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttaranchal">Uttaranchal</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="West Bengal">West Bengal</option>
            <option disabled style="background-color:#aaa; color:#fff">UNION Territories</option>
            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Lakshadeep">Lakshadeep</option>
            <option value="Pondicherry">Pondicherry</option>
          </select>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary" onclick="${validate()}}" style="align-self: center;">Submit</button>
        </div>
      </form>`;
    }
}

customElements.define('address-form', AddressForm);

function validate(){
  console.log("validate function called");
}