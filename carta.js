document.addEventListener("DOMContentLoaded", function(){
    



const valores = ["A","2","3","4","5","6","7","8","9","10","j","Q","k"];
const palos = ["♥", "♦", "♠", "♣"];

let boton =document.getElementById("boton")

boton.addEventListener("click",function(e){
     e.preventDefault()

 let randomNumeros=   Math.floor(Math.random()*valores.length )
    console.log(valores[randomNumeros])
    let randomPalos=   Math.floor(Math.random()*palos.length )
    console.log(palos[randomPalos])
    

    let simboloArriba= document.getElementById("simboloArriba") 
    let simboloAbajo= document.getElementById("simboloAbajo") 
    let numero= document.getElementById("numero")

    numero.textContent=(valores[randomNumeros])
    simboloArriba.textContent=(palos[randomPalos])
    simboloAbajo.textContent=(palos[randomPalos])

    if (palos[randomPalos] == "♥" ||  palos[randomPalos] == "♦") {
        simboloAbajo.style.color="red";
        simboloArriba.style.color="red";
        numero.style.color="red";
          
    } else {

       simboloAbajo.style.color="black";
        simboloArriba.style.color= "black";
        numero.style.color="black";
    }
   
  })
})