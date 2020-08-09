/* STEMBERGER FEDERICO 1°D
Ejercicio 7:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste*/
function mostrar()
{
	var destinoIngresado;
	destinoIngresado =txtIdDestino.value;
	
	switch(destinoIngresado)
	{
		case "Cordoba":
			alert("Se encuentra en el sur");
			break;
		case "Mar del plata":
			alert("Se encuentra en el este");
			break;
		case "Bariloche":
			alert("Se encuentra en el oeste");
			break;
		case "Cataratas":
			alert("Se encuentra en el norte");
			break;
	}		
}//FIN DE LA FUNCIÓN