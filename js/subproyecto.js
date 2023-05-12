function valortotal() {
//variables 
    let cantidad1,valor1,cantidad2,valor2
  //variables  
    cantidad1= document.getElementById("cantidad1").value
    valor1= document.getElementById("valor1").value
    cantidad2 = document.getElementById("cantidad2").value
    valor2 = document.getElementById("valor2").value
  
//multiplicaion primero producto
    restotal1 = cantidad1*valor1
   //multiplicaion segundo producto 
    restotal2 = cantidad2*valor2
    //primero impri
    document.getElementById("resp1").innerHTML="<div> su valor es "+ restotal1 +"</div>"
    //segundo impri
   document.getElementById("resp2").innerHTML= "<div> su valor es "+ restotal2+ "</div>"
   //suma

    fin = restotal1+restotal2;
    document.getElementById("respuesta").innerHTML="<div> total "+fin+"</div>"
}
function factura(){

    
    let producto1= document.getElementById("producto1").value
    let cantidad1= document.getElementById("cantidad1").value
    let valor1= document.getElementById("valor1").value
    let total1= cantidad1*valor1

    document.getElementById("respuesta-producto-1").innerHTML=producto1
    document.getElementById("respuesta-cantidad-1").innerHTML=cantidad1
    document.getElementById("respuesta-valor-1").innerHTML=valor1
    document.getElementById("valor-total1").innerHTML=total1

   let producto2= document.getElementById("producto2").value
   let cantidad2= document.getElementById("cantidad2").value
   let valor2= document.getElementById("valor2").value
   let total2= cantidad2*valor2

   document.getElementById("respuesta-producto-2").innerHTML=producto2
   document.getElementById("respuesta-cantidad-2").innerHTML=cantidad2
   document.getElementById("respuesta-valor-2").innerHTML=valor2
   document.getElementById("valor-total2").innerHTML=total2

    let sumaTotal= total1+total2
    document.getElementById("sumaTotal").innerHTML=sumaTotal
}