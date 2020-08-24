/*
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/
function mostrar()
{
    var producto;
    var precio;
    var cantidad;
    var marca;
    var fabricante;
    var i;
    var precioJabonMasCaro;
    var cantidadUnidadesDelJabonMasCaro;
    var fabricanteDelJabonMasCaro;
    var cantidadTotalDeAlcoholes;
    var cantidadTotalDeBarbijos;
    var cantidadTotalDeJabones;
    var cantidadIngresosDeAlcoholes;
    var cantidadIngresosDeBarbijos;
    var cantidadIngresosDeJabones;
    var promedioAlcoholesPorCompra;
    var promedioBarbijosPorCompra;
    var promedioJabonesPorCompra;

    precioJabonMasCaro=0;
    cantidadTotalDeAlcoholes=0;
    cantidadTotalDeBarbijos=0;
    cantidadTotalDeJabones=0;
    cantidadIngresosDeAlcoholes=0;
    cantidadIngresosDeBarbijos=0;
    cantidadIngresosDeJabones=0;
    promedioAlcoholesPorCompra=0;
    promedioBarbijosPorCompra=0;
    promedioJabonesPorCompra=0;

    i=0
    while(i<5)
    {
        producto=prompt("Ingrese el tipo de producto (alcohol, barbijo o jabon");
        while(producto!="alcohol" && producto!="barbijo" && producto!="jabon")
        {
            producto=prompt("Error, reingrese el producto");
        }
        precio=prompt("Ingrese el precio");
        precio=parseFloat(precio);
        while(precio<100 || precio>300)
        {
            precio=prompt("Ingrese un precio entre 100 y 300");
        }
        precio=parseFloat(precio);
        cantidad=prompt("Ingrese la cantidad");
        cantidad=parseInt(cantidad);
        while(cantidad<1 || cantidad>1000)
        {
            cantidad=prompt("Debe ingresar al menos un producto y hasta mil unidades. Ingrese la cantidad nuevamente");
        }
        marca=prompt("Ingrese la marca");
        fabricante=prompt("Ingrese el fabricante");

        if(producto=="jabon")
        {
            if(precio>precioJabonMasCaro)
            {
                precioJabonMasCaro=precio;
                cantidadUnidadesDelJabonMasCaro=cantidad;
                fabricanteDelJabonMasCaro=fabricante;
            }
            cantidadTotalDeJabones=cantidadTotalDeJabones+cantidad;
            cantidadIngresosDeJabones=cantidadIngresosDeJabones+1;
        }
        else
        {
            if(producto=="alcohol")
            {
                cantidadTotalDeAlcoholes=cantidadTotalDeAlcoholes+cantidad;
                cantidadIngresosDeAlcoholes=cantidadIngresosDeAlcoholes+1;
            }
            else
            {
                cantidadTotalDeBarbijos=cantidadTotalDeBarbijos+cantidad;
                cantidadIngresosDeBarbijos=cantidadIngresosDeBarbijos+1;
            }
        }
        i=i+1
    }

    alert("La cantidad del mas caro de los jabones es de "+cantidadUnidadesDelJabonMasCaro+" y su fabricante es "+fabricanteDelJabonMasCaro);

    if(cantidadTotalDeAlcoholes>cantidadTotalDeBarbijos)
    {
        if(cantidadTotalDeAlcoholes>cantidadTotalDeJabones)
        {
            promedioAlcoholesPorCompra=cantidadTotalDeAlcoholes/cantidadIngresosDeAlcoholes;
            alert("El promedio por compra del producto con mas unidades por compra es de "+promedioAlcoholesPorCompra);
        }
    }
    if(cantidadTotalDeBarbijos>cantidadTotalDeAlcoholes)
    {
        if(cantidadTotalDeBarbijos>cantidadTotalDeJabones)
        {
            promedioBarbijosPorCompra=cantidadTotalDeBarbijos/cantidadIngresosDeBarbijos;
            alert("El promedio por compra del producto con mas unidades por compra es de "+promedioBarbijosPorCompra);
        }
    }
    if(cantidadTotalDeJabones>cantidadTotalDeAlcoholes)
    {
        if(cantidadTotalDeJabones>cantidadTotalDeBarbijos)
        {
            promedioJabonesPorCompra=cantidadTotalDeJabones/cantidadIngresosDeJabones;
            alert("El promedio por compra del producto con mas unidades por compra es de "+promedioJabonesPorCompra);
        }
    }

    alert("La cantidad de barbijos que se compraron en total es de "+cantidadTotalDeBarbijos);










}
