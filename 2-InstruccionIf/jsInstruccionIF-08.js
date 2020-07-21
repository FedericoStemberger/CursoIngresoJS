function mostrar()
{
	/*STEMBERGER FEDERICO 1°D
	Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
	pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'*/
	var edad;
	var estado;

	edad = txtIdEdad.value;
	estado = estadoCivil.value;

	/*PRIMERA FORMA
	if (edad>17 && estado == "Soltero")
	{
		alert("Es soltero y no es menor.");
	}*/

	//SEGUNDA FORMA
	if(edad>17)
	{
		if(estado == "Soltero")
		{
			alert("Es soltero y no es menor.");
		}
	}


}//FIN DE LA FUNCIÓN