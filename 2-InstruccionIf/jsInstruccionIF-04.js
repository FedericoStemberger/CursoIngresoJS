function mostrar()
{
	/*STEMBERGER FEDERICO 1°D
	Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .*/
	var edad;
		
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	/*PRIMERA FORMA
	if(edad>12)
	{
		if(edad<18)
		{
			alert("La persona es adolescente");
		}
	}
	*/

	/*SEGUNDA FORMA
	if(!(edad<13) && !(edad>17))
	{
		alert("La persona es adolescente");
	}
	*/
	
	//TERCERA FORMA
	if(edad>12 && edad<18)
	{
		alert("La persona es adolescente");
	}
	

}//FIN DE LA FUNCIÓN