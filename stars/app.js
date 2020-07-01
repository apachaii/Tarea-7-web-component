const ids = ['s1', 's2', 's3','s4','s5'];

class Stars extends HTMLElement{

     constructor(){
         
         super()
     }

     connectedCallback() {

         const svg = this.getAttribute('svg')
         this.innerHTML = `
         <style>
        svg:hover {
         transform:scale(1.25);
              }
         
         .contenedor{
            background: white;
            height: 5%;
            width: 10%;
            margin-left: 50%;
            margin-top:10%;
         }
       </style>

         <div class="contenedor">
         <svg class="icono" id="s1" value="1"  width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
         <path d="${svg}"/>
         </svg>
         <svg class="icono" id="s2" value="2" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
         <path d="${svg}"/>
         </svg>
         <svg class="icono" id="s3" value="3" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
         <path d="${svg}"/>
         </svg>
         <svg class="icono" id="s4" value="4" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
         <path d="${svg}"/>
         </svg>
         <svg class="icono" id="s5" value="5" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
         <path d="${svg}"/>
         </svg>
         </div>
        `
                        let btns = document.getElementsByClassName( 'icono' );
                        for ( let btn of btns ) {
                           btn.onclick = function() {
                              reset()
                              let va = btn.getAttribute("value")
                              change(va)
                           }
                         }                         
                         
        }
        
}



function change(key){
   
   switch (key) {
      case '1':
         document.getElementById('s1').style.fill = '#BABA22';
         break;
      case '2':
            ids.slice(0, 2).forEach(id => 
            document.getElementById(id).style.fill = '#BABA22'
            );

         break;

      case '3':
            ids.slice(0, 3).forEach(id => 
            document.getElementById(id).style.fill = '#BABA22'
            );

         break;
      case '4':
            ids.slice(0, 4).forEach(id => 
            document.getElementById(id).style.fill = '#BABA22'
            );

         break;

      case '5':

            ids.forEach(id => 
            document.getElementById(id).style.fill = '#BABA22'
            );
            console.log(ids.slice(0, 4))
         break;

      default:
         break;
   }

}

function reset(){
      ids.forEach(id => 
      document.getElementById(id).style.fill = 'black'
      );
   
}

window.customElements.define('stars-one',Stars)

