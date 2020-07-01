for (let i = 0; i < 9; i++) {

    fetch('https://dog.ceo/api/breeds/image/random')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    let imgae = myJson['message']
    const retailcard = document.createElement("retail-card");
    retailcard.setAttribute("retail-image",imgae)
    retailcard.setAttribute("title","Perro")
    retailcard.setAttribute("discount","10")
    retailcard.setAttribute("price","90")
    retailcard.setAttribute("original_price","100")
    const place = document.getElementById("cont");
    place.appendChild(retailcard);
    
  });

 }
