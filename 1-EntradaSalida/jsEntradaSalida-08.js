/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

function SacarResto()
{
    var numeroingresado1;
    var numeroingresado2;
    var resultado;

    numeroingresado1 = txtIdNumeroDividendo.value
    numeroingresado2 = txtIdNumeroDivisor.value

    numeroingresado1 = parseInt(numeroingresado1)
    numeroingresado2 = parseInt(numeroingresado2)

    resultado = numeroingresado1%numeroingresado2
    
    alert("El resto es: "+resultado);


    
}
