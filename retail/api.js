

const container = document.getElementById("cont");

fetch('https://dog.ceo/api/breeds/image/random')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    let imgae = myJson['message']
    const retailcard = document.createElement("retail-card");
    // var att = document.createAttribute("retail-image");
    // att.value = imgae;
    // console.log(imgae)
    // retailcard.setAttributeNode(att)
    retailcard.setAttribute("retail-image","https://images.dog.ceo/breeds/hound-blood/n02088466_6532.jpg")
    retailcard.setAttribute("title","celular")
    retailcard.setAttribute("discount","9")
    retailcard.setAttribute("price","900")
    retailcard.setAttribute("original_price","100")
    container.appendChild(retailcard)
    
  });

