//Defino la funcion

const calcularPrecio=(precioBase,descuento)=>{

    //Si el precio base es menor o igual a 0, ó  descuento menor a 0 ó descuento mayor a 100
    if(precioBase<=0 || descuento<0 || descuento>100){
        return "Los valores ingresados son inválidos"
    }
    //Si no cumple la condición anterior, pasa a la siguiente

    //Si el descuento es igual a 0
    else if(descuento==0){
        return precioBase
    }
    //Si tampoco cumple con esta condición, salta a la siguiente

    //Si el descuento es mayor a 0 y menor igual a 100
    else if(descuento>0 && descuento<=100){
        const valorDescuento=precioBase*(descuento/100)
        const precioFinal=precioBase-valorDescuento
        return `El precio final con descuento es:  ${precioFinal}`
    }

    //Si no cumple ninguno, entra a esta condición
    else{
        return "No cumple ninguna condición anterior"
    }
}

//Llamo la función, el valor que se retorna se guarda dentro de la variable precio 
const precio=calcularPrecio(1000,90)

//Muestra el resultado
console.log(precio)