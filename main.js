
let numIngresado = parseInt(prompt("Ingrese un numero menor a 50 por favor: "))

function calcular (numIngresado){
    for (let contador = numIngresado; contador <= 100; contador = contador + 5){
        console.log(contador)
        if( numIngresado<50){
            alert(contador)
        }
        else {
            alert("Ingresaste incorrectamente el numero")
            calcular(parseInt(prompt("Ingrese nuevamente un numero menor a 50")))
        }
    }
}

alert(calcular(numIngresado))



