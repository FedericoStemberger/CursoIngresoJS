/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
    var precio1;
    var precio2;
    var precio3;
    var resultado;

function Sumar () 
{
    precio1=txtIdPrecioUno.value;
    precio2=txtIdPrecioDos.value;
    precio3=txtIdPrecioTres.value;

    precio1=parseFloat(precio1);
    precio2=parseFloat(precio2);
    precio3=parseFloat(precio3);

    resultado=precio1+precio2+precio3;
    alert("La suma de los precios da: "+resultado);

}
function Promedio () 
{
    precio1=txtIdPrecioUno.value;
    precio2=txtIdPrecioDos.value;
    precio3=txtIdPrecioTres.value;

    precio1=parseFloat(precio1);
    precio2=parseFloat(precio2);
    precio3=parseFloat(precio3);

    resultado=(precio1+precio2+precio3)/3;
    alert("El promedio de los precios da: "+resultado);
}
function PrecioFinal () 
{
    precio1=txtIdPrecioUno.value;
    precio2=txtIdPrecioDos.value;
    precio3=txtIdPrecioTres.value;

    precio1=parseFloat(precio1);
    precio2=parseFloat(precio2);
    precio3=parseFloat(precio3);

    resultado=(precio1+precio2+precio3)*1.21;
    alert("El precio final de los precios da: "+resultado);
}