const numeroadivinar = Math.floor(Math.random() * 100) +1;
console.log("numero adivinar", numeroadivinar)



function verificarnumero() {
    var numeroinput = parseInt(document.getElementById("numeroinput").value) 
    console.log("numero ingresado", numeroinput)
    var mensajes = document.getElementById("mensaje")
    if(numeroinput==numeroadivinar){
        mensajes.innerHTML="adivinaste el numero"
    } else if(numeroinput > numeroadivinar){
        mensajes.innerHTML="el numero ingresado es muy grande"
    }
    else{
        mensajes.innerHTML="el numero ingresado es demasiado abajo"
    }

}
