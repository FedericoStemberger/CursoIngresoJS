function mostrar()
{
  var nombre1;
  var nombre2;
  var peso1;
  var peso2;
  var sumaPesos;
  var promedioPesos;

 sumaPesos=0
 promedioPesos=0

  nombre1=prompt("ingrese su nombre");
  nombre2=prompt("ingrese el nombre de su pareja");
  peso1=prompt("ingrese su peso");
  peso1=parseFloat(peso1);
  peso2=prompt("Ingrese el peso de su pareja");
  peso2=parseFloat(peso2);
  sumaPesos=peso1+peso2;
  promedioPesos=sumaPesos/2;

  alert(" ustedes se llaman "+nombre1+" y "+nombre2+" pesan "+peso1+" y "+peso2+" kilos, que sumados son "+sumaPesos+" kilos y el promedio de peso "+promedioPesos)
}
