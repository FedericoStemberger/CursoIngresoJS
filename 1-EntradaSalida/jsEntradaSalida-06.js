/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroingresado1;
	var numeroingresado2;
	var resultado;

	numeroingresado1=txtIdNumeroUno.value;
	numeroingresado2=txtIdNumeroDos.value;

	numeroingresado1 = parseInt(numeroingresado1);
	numeroingresado2 = parseInt(numeroingresado2);
	
	resultado =numeroingresado1+numeroingresado2;
	
	alert("La suma es: "+resultado);
}

