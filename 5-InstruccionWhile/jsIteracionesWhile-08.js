/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var suma;
	var acumulado;
	var respuesta;
	var numeroIngresado;
	var producto

	suma=0;
	acumulado=0;
	producto=1
	respuesta="si";
	while(respuesta =="si")
	{
		numeroIngresado = prompt("Ingrese un numero :");
		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado>0)
		{
			suma = suma + numeroIngresado;
		}
		if(numeroIngresado<0)
		{
			producto= producto * numeroIngresado
		}
		
		acumulado = acumulado +1
		respuesta = prompt("¿Quiere ingresar otro un número?");
	}

	txtIdSuma.value=suma;
	txtIdProducto.value=producto
	
}//FIN DE LA FUNCIÓN