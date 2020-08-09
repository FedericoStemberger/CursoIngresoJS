/*STEMBERGER FEDERICO 1°D
Ejercicio 8:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/
function mostrar()
{
	var destinoIngresado;
	destinoIngresado =txtIdDestino.value;

	switch(destinoIngresado)
	{
		case "Cordoba":
		case "Bariloche":	
			alert("Hace frío");
			break;
		case "Mar del plata":
		case "Cataratas":	
			alert("Hace calor");
			break;
	}

}//FIN DE LA FUNCIÓN