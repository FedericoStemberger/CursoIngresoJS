/*
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{	
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var respuesta;
	var temperaturaMaxima;
	var nombrePersonaConTemperaturaMax;
	var mayoresDeEdadViudos;
	var hombresSolterosOViudos;
	var ancianosConFiebre;
	var cantidadSolteros;
	var sumaEdadesSolteros;
	var proemdioEdadSolteros;

	temperaturaMaxima=0;
	mayoresDeEdadViudos=0;
	hombresSolterosOViudos=0;
	ancianosConFiebre=0;
	cantidadSolteros=0;
	sumaEdadesSolteros=0;

	respuesta="si";
	while(respuesta=="si")
	{
		nombre=prompt("¿Cuál es su nombre?");
		edad=prompt("¿Cuál es su edad?");
		edad=parseInt(edad);
		while(!(edad>0 || edad<0))
		{
			edad=prompt("Error, ingrese una edad valida.");
		}
		edad=parseInt(edad);
		sexo=prompt("Ingrese su sexo (f o m)");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Error. Debe ingresar f para femenino o m para masculino");
		}
		estadoCivil=prompt("Ingrese su estado civil(soltero, casado o viudo)");
		while(estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo")
		{
			estadoCivil=prompt("Debe ingresar si es soltero, casado o viudo");
		}
		temperatura=prompt("Ingrese su temperatura corporal");
		temperatura=parseFloat(temperatura);



		if(temperatura>temperaturaMaxima)					//a)
		{
			temperaturaMaxima=temperatura;
			nombrePersonaConTemperaturaMax=nombre;
		}
		
		if(edad>18)											//b)
		{
			if(estadoCivil=="viudo")
			{
				mayoresDeEdadViudos=mayoresDeEdadViudos+1;
			}
		}
		
		if(sexo=="m")										//c)
		{
			if(estadoCivil=="soltero" || estadoCivil=="viudo")
			{
				hombresSolterosOViudos=hombresSolterosOViudos+1;
			}
		}
		
		if(edad>60)											//d)
		{
			if(temperatura>38)
			{
				ancianosConFiebre=ancianosConFiebre+1;
			}
		}

		if(sexo=="m")										//e)
		{
			if(estadoCivil=="soltero")
			{
				cantidadSolteros=cantidadSolteros+1;
				sumaEdadesSolteros=sumaEdadesSolteros+edad;
			}
		}
		respuesta=prompt("¿Desea seguir ingresando datos?");
	}

	alert("La persona con mayor temperatura se llama "+nombrePersonaConTemperaturaMax);						
	alert("La cantidad de mayores de edad viudos es de "+mayoresDeEdadViudos);
	alert("La cantidad de hombres solteros o viudos es de "+hombresSolterosOViudos);
	alert("La cantidad de personas de la tercera edad con mas de 38 de temperatura es de "+ancianosConFiebre);
	
	proemdioEdadSolteros=sumaEdadesSolteros/cantidadSolteros;
	alert("El promedio de edad de los hombres solteros es de "+proemdioEdadSolteros);

}
