/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

var centígrados;
var fahrenheit;
var resultado;

function FahrenheitCentigrados () 
{
    fahrenheit = txtIdTemperatura.value;
    fahrenheit = parseFloat(fahrenheit);
    
    resultado = (fahrenheit -32)*5/9;
    alert(fahrenheit+" Fahrenheit son "+resultado+" centígrados");
}

function CentigradosFahrenheit () 
{
	centígrados = txtIdTemperatura.value;
    centígrados = parseFloat(centígrados);
    
    resultado = (centígrados *9/5)+32;
    alert(centígrados+" centígrados son "+resultado+" Fahrenheit");
}
