const template = document.createElement('template');
template.innerHTML=`
  <style>
    #productCard{
      background-color: white;
      margin: 10px;
     padding: 10px;
    }
    #imageDisplay{
      position: relative;
    }
    #imageDisplay img{    
      max-width: 200px;
      max-height: 200px;
    }
    img{
      width: 200px;
      height: 200px;
    }
    #imageDisplay div{
      position: absolute;
      top: 0;
      right: 0;
      
      width: 200px;
      min-height: 30px;
      height: 200px;
      
      background-color: turquoise;
      
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #discount{
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      color: white;
      font-size: 1.1em;
    }
    #title{
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1.6em;
      margin-bottom: 0;
    }
    #price{
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1.8em;
      color: aqua;
      margin-top: .5em;
      margin-bottom: 0;
    }
    #original-price{
      margin-top: .5em;
      text-decoration: line-through;
      margin-bottom: 0;
    }
  </style>
  <div id="productCard">
    <div id="imageDisplay">
      <img src="" alt="product image">
      <div>
        <p id="discount">100%</p>
      </div>
    </div>
    <h1 id="title"></h1>
    <h1 id="price"></h1>
    <p id="original-price"></p>
  </div>
`
const validDiscount = /^([0-9][0-9]?|100)%?$/;

class productCard extends HTMLElement{

  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(
      template.content.cloneNode(true)
    );

    this.set_visuals();
  }

  set_visuals = () => {
    // Put the image
    this.shadowRoot.querySelector('img').src =
      this.getAttribute('retail-image');

    // Put the title of the product
    this.shadowRoot.querySelector('#title').innerHTML =
      this.getAttribute('title');

    // Get the actual discount
    const discount = this.getAttribute('discount');

    let is_discount_valid = !(discount === null);
    is_discount_valid = is_discount_valid && validDiscount.exec(discount);

    // if there is discount, display it.
    if (is_discount_valid){

      const actual_discount = is_discount_valid[0];
      this.shadowRoot.querySelector('#discount').innerHTML =
        `${actual_discount}%`;

      // if there is no price, calculate it
      const price = this.getAttribute('price');
      const original_price = this.getAttribute('original_price');
      if (price){
        this.shadowRoot.querySelector('#price').innerHTML = price;
      } else {
        const calculated_price = (1-parseInt(actual_discount)/100)*parseInt(original_price);
        this.shadowRoot.querySelector('#price').innerHTML = calculated_price;
      }

      if (original_price){
        this.shadowRoot.querySelector('#original-price').innerHTML = original_price;
      } else {
        this.shadowRoot.querySelector('#original-price').remove();
      }
    }
    // if there is no discount, don't show discount, and only display price
    else {
      this.shadowRoot.querySelector('#imageDisplay div').remove();
      this.shadowRoot.querySelector('#original-price').remove();
    }
  }

  static get observedAttributes() { return [
    'retail-image',
    'title',
    'discount',
    'price',
    'original_price',
  ]; }

  attributeChangedCallback() {
    this.set_visuals();
  }
}

window.customElements.define('retail-card', productCard);