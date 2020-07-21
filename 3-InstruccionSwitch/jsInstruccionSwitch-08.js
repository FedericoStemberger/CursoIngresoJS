function mostrar()
{
/*Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/

	var destinoIngresado;
	destinoIngresado =txtIdDestino.value;

	switch(destinoIngresado)
	{
		case "Cordoba":
		{	
			alert("Hace frío");
			break;
		}
		case "Mar del plata":
		{	
			alert("Hace calor");
			break;
		}
		case "Bariloche":
		{	
			alert("Hace frío");
			break;
		}
		case "Cataratas":
		{	
			alert("Hace calor");
			break;
		}
	}

}//FIN DE LA FUNCIÓN