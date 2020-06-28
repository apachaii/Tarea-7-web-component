let image_id;
let image_value;

class Stars extends HTMLElement{

     constructor(){
         
         super()
     }

     connectedCallback() {
         const svg = this.getAttribute('svg')
         this.innerHTML =`<img id="img1" src="${svg}.svg" value="1" alt="star">
                          <img id="img2" src="${svg}.svg" value="2" alt="star">
                          <img id="img3" src="${svg}.svg" value="3" alt="star"> 
                          <img id="img4" src="${svg}.svg" value="4" alt="star">
                          <img id="img5" src="${svg}.svg" value="5" alt="star">`
                          document.getElementById('img1').onclick = function(){
                            console.log('1');;
                         }
                         document.getElementById('img2').onclick = function(){
                            console.log('2');;
                         }
                         document.getElementById('img3').onclick = function(){
                            console.log('3');;
                         }
                         document.getElementById('img4').onclick = function(){
                            console.log('4');;
                         }
                         document.getElementById('img5').onclick = function(){
                            console.log('5');;
                         }
                        //   image_id=document.getElementById('img1');
                        //   image_value= image_id.getAttribute('value')
                        //   valueToStart(image_id,image_value)
        }
        
}


// function valueToStart(id,value){
//     document.getElementById(`${id}`).addEventListener('click', ()=>{
//         console.log(`${value}`);
//     });
// }

window.customElements.define('stars-one',Stars)

