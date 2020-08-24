function mostrar()
{
    var numero1;
    var numero2;
    var resultado;

    numero1=prompt("Ingrese un numero");
    numero2=prompt("Ingrese el segundo numero");

    if(numero1==numero2)
    {
        alert(numero1+numero2)
    }
    else
    {
        if(numero1<numero2)
        {
            numero1=parseFloat(numero1);
            numero2=parseFloat(numero2);
            resultado=numero1+numero2
            alert(resultado);
        }
        else
        {
            numero1=parseFloat(numero1);
            numero2=parseFloat(numero2);
            resultado=numero1-numero2
            alert(resultado);
            if(resultado>10)
            {
                alert("la resta es "+resultado+" y superó el 10")
            }

        }
    }
}
