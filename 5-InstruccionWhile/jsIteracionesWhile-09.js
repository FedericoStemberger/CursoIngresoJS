/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var banderaDelPrimero;
	var flag;
	//iniciar variables
	banderaDelPrimero=0
	flag=0
		
	do
	{
		numeroIngresado=prompt("Ingrese un número.");
		numeroIngresado=parseInt(numeroIngresado);
		if(flag==0)
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			flag = 1;
		}
		else
		{
			if()
			{

			}
		}
		numeroIngresado=prompt("¿Desea ingresar otro número?")
	}while(respuesta=="si")
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN