/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
	var numeroingresado1;
	var numeroingresado2;
	var resultado;

function sumar()
{	
	numeroingresado1=txtIdNumeroUno.value
	numeroingresado2=txtIdNumeroDos.value

	numeroingresado1 = parseInt(numeroingresado1)
	numeroingresado2 = parseInt(numeroingresado2)
	resultado =numeroingresado1+numeroingresado2

	alert("El resultado de la suma es: "+resultado);	
}

function restar()
{
	numeroingresado1=txtIdNumeroUno.value
	numeroingresado2=txtIdNumeroDos.value

	numeroingresado1 = parseInt(numeroingresado1)
	numeroingresado2 = parseInt(numeroingresado2)
	resultado =numeroingresado1-numeroingresado2

	alert("El resultado de la resta es: "+resultado);
}

function multiplicar()
{ 
	numeroingresado1=txtIdNumeroUno.value
	numeroingresado2=txtIdNumeroDos.value

	numeroingresado1 = parseInt(numeroingresado1)
	numeroingresado2 = parseInt(numeroingresado2)
	resultado =numeroingresado1*numeroingresado2

	alert("El resultado de la multiplicación es: "+resultado);
}

function dividir()
{
	numeroingresado1=txtIdNumeroUno.value
	numeroingresado2=txtIdNumeroDos.value

	numeroingresado1 = parseInt(numeroingresado1)
	numeroingresado2 = parseInt(numeroingresado2)
	resultado =numeroingresado1/numeroingresado2

	alert("El resultado de la división es: "+resultado);
}

