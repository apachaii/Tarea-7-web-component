const template = document.createElement('template');
template.innerHTML=`
  <style>
    #markup{
      display: flex;
      height: 100%;
    }
    #markup-input{
      flex: 50%;
      
      display: flex;
      flex-direction: column;
    }
    #markup-input textarea{
      flex: 1;
    }
    #markup-output{
      flex: 50%;
      background-color: white;
      border: black 2px;
    }
  </style>
  <div id="markup">
    <div id="markup-input">
      <h1>Markup:</h1>
      <textarea id="text_input"></textarea>
      <button type="button">Parse</button> 
    </div>
    <div id="markup-output">
    </div>
  </div>
`

class Markup extends HTMLElement{

  // markup_to_html transform the markup and displays it
  markup_to_html = () => {

    // get the text from the input
    const text_input = this.shadowRoot.querySelector('#text_input');
    const markup_text = text_input.value;
    console.log(markup_text);

    // transform the markup in html
    // insert the html in the output
    this.shadowRoot.querySelector('#markup-output').innerHTML = toHtml(markup_text);
  }

  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(
      template.content.cloneNode(true)
    );

    // Connect the button to the effect of translating
    this.shadowRoot.querySelector('button').onclick= this.markup_to_html;

    console.log(this.shadowRoot);
  }
}

window.customElements.define('inserted-markup', Markup);