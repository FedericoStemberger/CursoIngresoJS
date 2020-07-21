function mostrar()
{
	/*STEMBERGER FEDERICO 1°D
	Al ingresar una edad debemos informar solo si la persona es mayor de edad */
	
	var edad;

	edad=txtIdEdad.value;
	edad = parseInt(edad);

	if(edad>17)
	{
		alert("La persona es mayor de edad");
	}

}//FIN DE LA FUNCIÓN