/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;

	importe = txtIdImporte.value;

	importe = parseInt(importe);

	//descuento = importe - ((importe*25)/100)
	descuento = importe*0.75;
	txtIdResultado.value = descuento;
}
