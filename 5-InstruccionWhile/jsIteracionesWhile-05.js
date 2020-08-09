/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;

	sexoIngresado = prompt("Ingrese 'f' o 'm'.");
	while(sexoIngresado!="f" && sexoIngresado!="m")
	{
		sexoIngresado = prompt("Error. Ingrese 'f' o 'm'.");
	}


	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN