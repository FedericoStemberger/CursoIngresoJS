function mostrar()
{
	/* STEMBERGER FEDERICO 1°D
	Al ingresar una edad solo debemos informar si la persona NO es adolescente.*/
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	/*PRIMERA FORMA
	if(edad<13 || edad>17)
	{
		alert("La persona no es adolescente");
	}*/

	/*SEGUNDA FORMA
	if(edad<13)
	{
		alert("La persona no es adolescente");
	}
	if (edad>17)
	{
		alert("La persona no es adolescente");
	}*/

	//TERCERA FORMA
	if(edad<13)
	{
		alert("La persona no es adolescente");
	}
	else
	{
		if(edad>17)
		{
			alert("La persona no es adolescente");
		}
	}


}//FIN DE LA FUNCIÓN