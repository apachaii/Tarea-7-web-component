<script src="app.js"></script>

let product2=document.getElementById('img1').getAttribute('value');

class SelectOption extends HTMLElement{

    constructor(){
        super()
    }

    connectedCallback() {
        this.innerHTML =`<h1>${product2}</h1>`
       }
}


window.customElements.define('select-one',SelectOption)