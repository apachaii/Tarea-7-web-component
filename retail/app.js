// const container = document.getElementById("cont");
// const retailcard = document.createElement("retail-card");
 
// retailcard.setAttribute("retail-image","https://images.dog.ceo/breeds/hound-blood/n02088466_6532.jpg")
// retailcard.setAttribute("title","celular")
// retailcard.setAttribute("discount","9")
// retailcard.setAttribute("price","900")
// retailcard.setAttribute("original_price","100")
// container.appendChild(retailcard)

for (let i = 0; i < 9; i++) {

    fetch('https://dog.ceo/api/breeds/image/random')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    let imgae = myJson['message']
    const retailcard = document.createElement("retail-card");
    retailcard.setAttribute("retail-image",imgae)
    retailcard.setAttribute("title","perro")
    retailcard.setAttribute("discount","10")
    retailcard.setAttribute("price","90")
    retailcard.setAttribute("original_price","100")
    const place = document.getElementById("cont");
    place.appendChild(retailcard);
    
  });

 }



