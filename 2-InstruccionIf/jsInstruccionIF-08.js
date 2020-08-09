/*STEMBERGER FEDERICO 1°D
Agregado A:
Hacerlo en el ejercicio 08 del IF:

Se pide ingresar una edad y un estado cicvil
	a todos los mayores de edad, mostrar el mensaje "se responsable"
	a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
	a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	a los niños tambien informar "hagan la tarea" 
	a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"
	a los mayores de edad solteros, tambien informar "a vivir la vida"
	a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	a los divorciados informar tambien "a intentarlo nuevamente"

    la menor cantidad de if 
    no repetir los alert o los mensajes 
    
*/
function mostrar()
{
	var edad;
	var estado;

	edad = txtIdEdad.value;
	estado = estadoCivil.value;

	if(edad>17)
	{
		alert("se responsable");
		switch(estado)
		{
			case "Soltero":
				alert("a vivir la vida");
				break;
			case "Casado":
				alert("a disfrutar la pareja");
				break;
		}
		if(edad>60)
		{
			alert("sos persona de riesgo");
		}
	}
	else
	{
		alert("respeta a tus mayores");
		if(edad>12)
		{
			if(estado != "Soltero")
			{
				alert(" sos muy joven para no ser soltero");
			}
		}
		else
		{
			alert("hagan la tarea");
		}
	}

	if (estado == "Divorciado")
	{
		alert("a intentarlo nuevamente");
	}




}//FIN DE LA FUNCIÓN