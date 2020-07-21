function mostrar()
{
	/*STEMBERGER FEDERICO 1°D
	Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
	"EXCELENTE" para notas igual a 9 o 10,
	"APROBÓ" para notas mayores a 4,
	"Vamos, la proxima se puede" para notas menores a 4*/

	var numeroRandom;
	numeroRandom = Math.floor(Math.random() * 10) +1;

	/*PRIMERA FORMA
	if(numeroRandom>8)
	{
		alert("EXCELENTE"+numeroRandom);
	}

	else if(numeroRandom>4 && numeroRandom<9)
	{
		alert("APROBÓ"+numeroRandom);
	}

	else
	{
		alert("Vamos, la proxima se puede"+numeroRandom);
	}*/
		
	//SEGUNDA FORMA
	if(numeroRandom>8)
	{
		alert("EXCELENTE");
	}
	else
	{
		if(numeroRandom>4)
		{
			alert("APROBÓ");
		}
		else
		{
			alert("Vamos, la proxima se puede");
		}

	}
	
}//FIN DE LA FUNCIÓN