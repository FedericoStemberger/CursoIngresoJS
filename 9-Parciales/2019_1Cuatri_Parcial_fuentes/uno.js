
function mostrar()
{
    var perimetroPorLado;
	var perimetroTotal;
	
    perimetroPorLado=prompt("¿Cuantos mide un lado del triángulo?");
    while(!(perimetroPorLado>0 || perimetroPorLado<0))
    {
        perimetroPorLado=prompt("Debe ingresar un número");
    }
	perimetroPorLado=parseFloat(perimetroPorLado);
	perimetroTotal=perimetroPorLado*3;
	alert("El perimetro del triangulo es de "+perimetroTotal);

}
