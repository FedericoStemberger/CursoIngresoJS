function mostrar()
{
    var continente;
    var cantidadDias;
    var precioDia;
    var totalSinDescuento;
    var medioDePago;
    var totalConDescuento;

    continente=Marca.value;
    precioDia=100;
    totalSinDescuento=0;
    cantidadDias=prompt("¿Cuántos días desea viajar?");
    medioDePago=prompt("¿Por que medio desea pagar(debito, mercadopago o efectivo?");
    totalSinDescuento=precioDia*cantidadDias;

    switch(continente)
    {
        case "América":
            totalConDescuento=totalSinDescuento-(totalSinDescuento*0.5)
            if(medioDePago=="debito")
            {
                totalConDescuento=totalSinDescuento-(totalSinDescuento*0.5)-(totalSinDescuento*0.1);
            }
            alert("Usted deberá abonar "+totalConDescuento);
            break;

        case "África":
            totalConDescuento=totalSinDescuento-(totalSinDescuento*0.6)
            if(medioDePago=="efectivo" || medioDePago=="mercadopago")
            {
                totalConDescuento=totalSinDescuento-(totalSinDescuento*0.6)-(totalSinDescuento*0.15);
            }
            alert("Usted deberá abonar "+totalConDescuento);
            break;

        case "Asia":
            totalConDescuento=totalSinDescuento*1.2;
            alert("Usted deberá abonar "+totalConDescuento);
            break;

        case "Europa":
            totalConDescuento=totalSinDescuento-(totalSinDescuento*0.2)
            if(medioDePago=="debito")
            {
                totalConDescuento=totalSinDescuento-(totalSinDescuento*0.2)-(totalSinDescuento*0.15);
            }
            else
            {
                if(medioDePago=="mercadopago")
                {
                    totalConDescuento=totalSinDescuento-(totalSinDescuento*0.2)-(totalSinDescuento*0.1);
                }
                else
                {
                    totalConDescuento=totalSinDescuento-(totalSinDescuento*0.2)-(totalSinDescuento*0.05);
                }
            }  
            alert("Usted deberá abonar "+totalConDescuento);
            break;
        
        case "Oceania":
            totalConDescuento=totalSinDescuento*1.2;
            alert("Usted deberá abonar "+totalConDescuento);
            break;
    }
}
