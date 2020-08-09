/*STEMBERGER FEDERICO 1°D
Ejercicio 9:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/
function mostrar()
{

	var estacion;
	var destino;
	var precio;

	precio = 15000;
	estacion = txtIdEstacion.value;
	destino = txtIdDestino.value;
	
	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{	
				case "Bariloche":
					precio = precio * 1.2;
					break;
				case "Cataratas":
					precio = precio * 0.9;
					break;
				case "Cordoba":
					precio = precio * 0.9;
					break;
				case "Mar del plata":
					precio = precio * 0.8;
					break;
			}
			break;	
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					precio = precio * 0.8;
					break;
				case "Cataratas":
					precio = precio * 1.1;
					break;
				case "Cordoba":
					precio = precio * 1.1;
					break;
				case "Mar del plata":
					precio = precio * 1.2;
					break;
			}
			break;
		case "Otoño":
			switch(destino)
			{	
				case "Bariloche":
					precio = precio * 1.1;
					break;
				case "Cataratas":
					precio = precio * 1.1;
					break;
				case "Cordoba":
					precio = precio;
					break;
				case "Mar del plata":
					precio = precio * 1.1;
					break;
			}
			break;
		case "Primavera":
			switch(destino)
			{	case "Bariloche":
					precio = precio * 1.1;
					break;
				case "Cataratas":
					precio = precio * 1.1;
					break;
				case "Cordoba":
					precio = precio;
					break;
				case "Mar del plata":
					precio = precio * 1.1;
					break;
			}
			break;
	}
	alert("El precio final de la tarifa es: $"+precio);

}//FIN DE LA FUNCIÓN