function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;

    precio=prompt("Ingrese el precio");
    precio=parseFloat(precio);
    descuento=prompt("Ingrese el descuento");
    descuento=parseFloat(descuento);

    precioFinal=precio-(precio*descuento/100);
    elPrecioFinal.value=precioFinal;
}
