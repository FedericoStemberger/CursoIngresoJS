function mostrar()
{
/*
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/
	var estacion;
	var destino;
	precio = 15000;

	estacion = txtIdEstacion.value;
	destino = txtIdDestino.value;
	
	switch(estacion)
	{
		case "Invierno":
		{
			switch(destino)
			{	case "Bariloche":
				{
					precio = precio * 1.2
					alert("El precio final de la tarifa es: $"+precio);
					break;
				}
				case "Cataratas":
				{
					precio = precio * 0.9
					alert("El precio final de la tarifa es: $"+precio);
					break;
				}
				case "Cordoba":
				{
					precio = precio * 0.9
					alert("El precio final de la tarifa es: $"+precio);
					break;
				}
				case "Mar del plata":
				{
					precio = precio * 0.8
					alert("El precio final de la tarifa es: $"+precio);
					break;
				}
			}
		break;	
		}	
		case "Verano":
		{
			switch(destino)
			{	case "Bariloche":
				{
					precio = precio * 0.8
					alert("El precio final de la tarifa es: $"+precio);
					break;
				}
				case "Cataratas":
				{
					precio = precio * 1.1
					alert("El precio final de la tarifa es: $"+precio);
					break;
				}
				case "Cordoba":
				{
					precio = precio * 1.1
					alert("El precio final de la tarifa es: $"+precio);
					break;
				}
				case "Mar del plata":
				{
					precio = precio * 1.2
					alert("El precio final de la tarifa es: $"+precio);
					break;
				}
			}
		break;
		}
		case "Otoño":
		{
			switch(destino)
			{	case "Bariloche":
				{
					precio = precio * 1.1
					alert("El precio final de la tarifa es: $"+precio);
					break;
				}
				case "Cataratas":
				{
					precio = precio * 1.1
					alert("El precio final de la tarifa es: $"+precio);
					break;
				}
				case "Cordoba":
				{
					precio = precio
					alert("El precio final de la tarifa es: $"+precio);
					break;
				}
				case "Mar del plata":
				{
					precio = precio * 1.1
					alert("El precio final de la tarifa es: $"+precio);
					break;
				}
			}
		break;
		}
		case "Primavera":
		{
			switch(destino)
			{	case "Bariloche":
				{
					precio = precio * 1.1
					alert("El precio final de la tarifa es: $"+precio);
					break;
				}
				case "Cataratas":
				{
					precio = precio * 1.1
					alert("El precio final de la tarifa es: $"+precio);
					break;
				}
				case "Cordoba":
				{
					precio = precio 
					alert("El precio final de la tarifa es: $"+precio);
					break;
				}
				case "Mar del plata":
				{
					precio = precio * 1.1
					alert("El precio final de la tarifa es: $"+precio);
					break;
				}
			}
		break;
		}
	}
}//FIN DE LA FUNCIÓN