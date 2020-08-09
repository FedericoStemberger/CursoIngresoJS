/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
  var cantidadBolsas;
  var precioBolsas;
  var producto;
  var respuesta;
  var totalAPagar;
  var totalPorIngreso;
  var totalBolsas;
  var cantidadBolsasMaxima;
  var tipoConMasCantidadBolsas;
  var precioBolsasMaximo;
  var tipoConMayorPrecioBolsas;

  totalBolsas=0
  totalPorIngreso=0
  totalAPagar=0
  cantidadBolsasMaxima=0
  precioBolsasMaximo=0

  respuesta="si";
  while(respuesta=="si")
  {
    producto=prompt("¿Desea comprar arena, cal o cemento?");
    while(producto!="arena" && producto!="cal" && producto!="cemento")
    {
      producto=prompt("Ingreso incorrecto. Ingrese nuevamente su producto.");
    }
    cantidadBolsas=prompt("¿Cuantas bolsas desea comprar?");
    while(cantidadBolsas<1)
    {
      cantidadBolsas=prompt("Debe ingresar un numero de bolsas mayor a 0. Reingrese la cantidad de bolsas.");
    }
    cantidadBolsas=parseInt(cantidadBolsas);
    precioBolsas=prompt("Ingrese el precio por bolsa");
    while(!(precioBolsas>0))
    {
      precioBolsas=prompt("El precio por cada bolsa debe ser mayor a 0. Reingrese el precio.")
    }
    precioBolsas=parseFloat(precioBolsas);
    
    totalPorIngreso=cantidadBolsas*precioBolsas;  //a)
    totalAPagar=totalAPagar+totalPorIngreso;      //a)

    totalBolsas=totalBolsas+cantidadBolsas;       //b)

    if(cantidadBolsas>cantidadBolsasMaxima)       //d)
    {
      cantidadBolsasMaxima=cantidadBolsas;
      tipoConMasCantidadBolsas=producto;
    }

    if(precioBolsas>precioBolsasMaximo)           //f)
    {
      precioBolsasMaximo=precioBolsas;
      tipoConMayorPrecioBolsas=producto;
    }

    respuesta=prompt("¿Desea ingresar otra compra?");
  }

  alert("El total a pagar es "+totalAPagar);      //a)

  if(totalBolsas>30)
  {
    totalAPagar=totalAPagar-(totalAPagar*0.15);   //b)
    alert("El total a pagar es de "+totalAPagar); //b)
  }
  else
  {
    if(totalBolsas>10)
    {
      totalAPagar=totalAPagar-(totalAPagar*0.25); //b)
      alert("El total a pagar es de "+totalAPagar); //b)
    }
  }
  
  alert("El tipo con mas cantidad de bolsas es "+tipoConMasCantidadBolsas); //d)

  alert("El tipo con el mayor precio es "+tipoConMayorPrecioBolsas); //f)


}
