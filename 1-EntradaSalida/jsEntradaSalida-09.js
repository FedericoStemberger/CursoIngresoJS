/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var sueldo10;

	sueldo = txtIdSueldo.value

	sueldo = parseInt(sueldo)

	sueldo10 = sueldo + ((sueldo*10)/100)
	
	txtIdResultado.value = sueldo10;
}
