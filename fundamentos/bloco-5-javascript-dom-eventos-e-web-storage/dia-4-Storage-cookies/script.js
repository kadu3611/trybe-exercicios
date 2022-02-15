
 let input = document.getElementById('input')
 let texto = input.nodeValue
 console.log(texto)
 input.addEventListener("change",colorir);
function colorir() {
   
 
    document.body.style.backgroundColor = input.nodeValue
    
}

