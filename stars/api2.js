

const container = document.getElementById("cont");

fetch('https://dog.ceo/api/breeds/image/random')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    let imgae = myJson['message']
    const retailcard = document.createElement("stars-one");
    // var att = document.createAttribute("retail-image");
    // att.value = imgae;
    // console.log(imgae)
    // retailcard.setAttributeNode(att)
    retailcard.setAttribute("svg","M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z")
    container.appendChild(retailcard)
    
  });
