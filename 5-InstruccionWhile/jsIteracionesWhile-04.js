/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado=prompt("Ingrese un numero entre 0 y 9 inclusive.");
	while(numeroIngresado<0 || numeroIngresado>10)
	{
	numeroIngresado = prompt("Numero erróneo. Ingrese otro número entre 0 y 9 inclusive.");
	}

	txtIdNumero.value=numeroIngresado;

}//FIN DE LA FUNCIÓN