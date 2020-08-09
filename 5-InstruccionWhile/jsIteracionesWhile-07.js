/* STEMBERGER FEDERICO 1°D
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var suma;
	var acumulado;
	var respuesta;
	var numeroIngresado;

	suma=0;
	acumulado=0;
	respuesta="si";
	while(respuesta =="si")
	{
		numeroIngresado = prompt("Ingrese un numero :");
		numeroIngresado = parseInt(numeroIngresado);
		suma = suma + numeroIngresado
		acumulado = acumulado +1
		respuesta = prompt("¿Quiere ingresar otro un número?");
	}

	txtIdSuma.value=suma;
	txtIdPromedio.value=suma/acumulado;


}//FIN DE LA FUNCIÓN