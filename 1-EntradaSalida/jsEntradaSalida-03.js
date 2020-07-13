/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
		nombreIngresado=txtIdNombre.value;
	
	/* Esta es otra forma de hacerlo:
	nombreIngresado=document.getElementById('txtIdNombre').value */

	alert(nombreIngresado);
}
/* Cuando me aparezca este mensaje "[object HTMLInputElement]" significa que me olvide el '.value'*/


