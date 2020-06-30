const template = document.createElement('template');
template.innerHTML=`
  <style>
    #markdown{
      display: flex;
      height: 100%;
    }
    #markdown-input{
      flex: 50%;
      
      display: flex;
      flex-direction: column;
    }
    #markdown-input textarea{
      flex: 1;
    }
    #markdown-output{
      flex: 50%;
      background-color: white;
      border: black 2px;
    }
  </style>
  <div id="markdown">
    <div id="markdown-input">
      <h1>markdown:</h1>
      <textarea id="text_input"></textarea>
      <button type="button">Parse</button> 
    </div>
    <div id="markdown-output">
    </div>
  </div>
`

class Markdown extends HTMLElement{

  // markdown_to_html transform the markdown and displays it
  markdown_to_html = () => {

    // get the text from the input
    const text_input = this.shadowRoot.querySelector('#text_input');
    const markdown_text = text_input.value;

    // transform the markdown in html
    // insert the html in the output
    const output = this.shadowRoot.querySelector('#markdown-output');
    console.log(output);
    output.innerHTML = toHtml(markdown_text);
  }

  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(
      template.content.cloneNode(true)
    );

    // Connect the button to the effect of translating
    this.shadowRoot.querySelector('button').onclick= this.markdown_to_html;

    console.log(this.shadowRoot);
  }
}

window.customElements.define('inserted-markdown', Markdown);