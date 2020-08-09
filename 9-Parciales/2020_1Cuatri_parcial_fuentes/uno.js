/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato  de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	var producto;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var i;
	var precioAlcoholMasBarato;
	var cantidadUnidadesAlcoholMasBarato;
	var fabricanteAlcoholMasBarato;
	var cantidadTotalBarbijos;
	var cantidadTotalAlcoholes;
	var cantidadTotalJabones;
	var cantidadIngresosDeBarbijos;
	var cantidadIngresosDeAlcoholes;
	var cantidadIngresosDeJabones;
	var promedioPorCompraBarbijos;
	var promedioPorCompraAlcoholes;
	var promedioPorCompraJabones;


	precioAlcoholMasBarato=0;
	cantidadUnidadesAlcoholMasBarato=0;
	cantidadTipoConMasUnidades=0;
	cantidadTotalBarbijos=0;
	cantidadTotalJabones=0;
	cantidadTotalAlcoholes=0;
	cantidadIngresosDeBarbijos=0;
	cantidadIngresosDeAlcoholes=0;
	cantidadIngresosDeJabones=0;
	promedioPorCompraAlcoholes=0;
	promedioPorCompraBarbijos=0;
	promedioPorCompraJabones=0;


	i=0
	while(i<5)
	{
		producto=prompt("¿Qué producto desea ingresar?");
		while(producto!="barbijo" && producto!="alcohol" && producto!="jabon")
		{
			producto=prompt("Debe ingresar un barbijo, alcohol o jabon")
		}
		precio=prompt("Ingrese el precio");
		while(precio>300 || precio<100)
		{
			precio=prompt("Ingrese un precio entre 100 y 300");
		}
		precio=parseFloat(precio);
		cantidad=prompt("Ingrese la cantidad");
		while(cantidad<1 || cantidad>1000)
		{
			cantidad=prompt("Ingrese una cantidad valida");
		}
		cantidad=parseInt(cantidad);
		marca=prompt("Ingrese la marca");
		fabricante=prompt("Ingrese el fabricante");

		if(producto=="alcohol")										//a)
		{
			if(precio<precioAlcoholMasBarato || precioAlcoholMasBarato==0)		
			{
				precioAlcoholMasBarato=precio;
				cantidadUnidadesAlcoholMasBarato=cantidad;
				fabricanteAlcoholMasBarato=fabricante;
			}
		}

		if(producto=="jabon")										//b)
		{
			cantidadTotalJabones=cantidadTotalJabones+cantidad;
			cantidadIngresosDeJabones=cantidadIngresosDeJabones+1;
			
		}
		else
		{
			if(producto=="alcohol")
			{
				cantidadTotalAlcoholes=cantidadTotalAlcoholes+cantidad;
				cantidadIngresosDeAlcoholes=cantidadIngresosDeAlcoholes+1;
			}
			else
			{
				cantidadTotalBarbijos=cantidadTotalBarbijos+cantidad;
				cantidadIngresosDeBarbijos=cantidadIngresosDeBarbijos+1;
			}
		}

		i=i+1
	}


	alert("La cantidad de unidades del alcohol mas barato es de "+cantidadUnidadesAlcoholMasBarato+". Y el fabricante es "+fabricanteAlcoholMasBarato);		//a)


	if(cantidadTotalAlcoholes>cantidadTotalBarbijos)																										//b)
	{
		if(cantidadTotalAlcoholes>cantidadTotalJabones)
		{
			promedioPorCompraAlcoholes=cantidadTotalAlcoholes/cantidadIngresosDeAlcoholes;
			alert("El promedio por compra de el tipo de producto con mas unidades es de "+promedioPorCompraAlcoholes);
		}
	}
	if(cantidadTotalBarbijos>cantidadTotalJabones)																											//b)
	{
		if(cantidadTotalBarbijos>cantidadTotalAlcoholes)
		{
			promedioPorCompraBarbijos=cantidadTotalBarbijos/cantidadIngresosDeBarbijos;
			alert("El promedio por compra de el tipo de producto con mas unidades es de "+promedioPorCompraBarbijos);
		}
	}
	if(cantidadTotalJabones>cantidadTotalAlcoholes)																											//b)
	{
		if(cantidadTotalJabones>cantidadIngresosDeBarbijos)
		{
			promedioPorCompraJabones=cantidadTotalJabones/cantidadIngresosDeJabones;
			alert("El promedio por compra de el tipo de producto con mas unidades es de "+promedioPorCompraJabones);
		}
	}

	alert("La cantidad total de jabones es de "+cantidadTotalJabones);																						//c)
}