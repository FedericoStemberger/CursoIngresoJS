function mostrar()
{
	//Al ingresar una edad solo debemos informar si la persona NO es adolescente.
	var edad;

	edad = txtIdEdad.value;

	if(edad<=12 || edad>=18)
	{
		alert("La persona no es adolescente");
	}

}//FIN DE LA FUNCIÓN