function random(min, max) {
  return Math.floor((Math.random() * (max-min)) + min);
}


for (let i = 1; i < 16; i++) {

    fetch('https://dog.ceo/api/breeds/image/random')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    let imgae = myJson['message']
    const retailcard = document.createElement("retail-card");
    retailcard.setAttribute("retail-image",imgae)
    retailcard.setAttribute("title",`Perro ${i}`)
    retailcard.setAttribute("discount",`${random(0,100)}`)
    retailcard.setAttribute("original_price",`${random(1000,10000)}`)
    // retailcard.setAttribute("price",`${1000}`)
    const place = document.getElementById("cont");
    place.appendChild(retailcard);
    
  });

 }
