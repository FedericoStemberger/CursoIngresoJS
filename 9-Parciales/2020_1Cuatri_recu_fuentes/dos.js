/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
*/
function mostrar()
{
  var producto;
  var cantidad;
  var precio;
  var respuesta;
  var importeTotalSinDescuento;
  var improteTotalConDescuento;
  var resultado;
  var mayorCantidadDeBolsas;
  var tipoConMayorCantBolsas;
  var precioTipoConMayorPrecio;
  var tipoConMayorPrecio;
  var cantidadTotalBolsas;

  importeTotalSinDescuento=0;
  improteTotalConDescuento=0;
  mayorCantidadDeBolsas=0;
  precioTipoConMayorPrecio=0;
  cantidadTotalBolsas=0;

  respuesta="si"
  while(respuesta=="si")
  {
    producto=prompt("Ingrese el producto(arena, cal o cemento)");
    while(producto!="arena" && producto!="cal" && producto!="cemento")
    {
      producto=prompt("Debe ingresar arena, cal o cemento");
    }
    cantidad=prompt("Ingrese la cantidad de bolsas");
    while(cantidad==NaN)
    {
      prompt("Ingrese la cantidad nuevamente");
    }
    cantidad=parseInt(cantidad);
    precio=prompt("Ingrese el precio por bolsa");
    precio=parseFloat(precio);
    while(!(precio>0))
    {
      precio=prompt("El precio debe ser mayor a 0");
    }
    precio=parseFloat(precio);

    resultado=cantidad*precio;
    importeTotalSinDescuento=importeTotalSinDescuento+resultado;
    cantidadTotalBolsas=cantidadTotalBolsas+cantidad;

    if(cantidad>mayorCantidadDeBolsas)
    {
      mayorCantidadDeBolsas=cantidad;
      tipoConMayorCantBolsas=producto;
    }
    if(precio>precioTipoConMayorPrecio)
    {
      precioTipoConMayorPrecio=precio;
      tipoConMayorPrecio=producto;
    }


    respuesta=prompt("¿Desea ingresar otro producto?")
  }

  alert("El importe total a pagar sin descuento es de "+importeTotalSinDescuento);                          //a)
  if(cantidadTotalBolsas>30)                                                                                //b)
  {
    improteTotalConDescuento=importeTotalSinDescuento-(importeTotalSinDescuento*0.25);
  }
  else
  {
    if(cantidadTotalBolsas>10)
    {
      improteTotalConDescuento=importeTotalSinDescuento-(importeTotalSinDescuento*0.15);
    }
    else
    {
      improteTotalConDescuento=importeTotalSinDescuento;
    }
  
  
  
  }
  alert("El importe total a pagar con descuento es de "+improteTotalConDescuento);                          //b)
  alert("El producto de construccion con mas cantidad de bolsas vendidas es: "+tipoConMayorCantBolsas);     //c)
  alert("El producto de construccion con el precio mas caro es: "+tipoConMayorPrecio);                      //d)

}
