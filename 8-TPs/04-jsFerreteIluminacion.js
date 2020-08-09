/*Las lámparas están al mismo precio de $35 pesos final.
A.  Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
B.  Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.  Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.  Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, si es “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.  Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos en 
    informar del impuesto con el siguiente mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó. 

 */


 function CalcularPrecio() 
{
    var lamparitas;
    var marca;
    var precio
    precio = 35;
    var precioSinDescuento;
    var precioConDescuento;
    var ingresosBrutos;

    lamparitas = txtIdCantidad.value;
    marca = Marca.value;

    //VERSION IF

    if(lamparitas>5)
    {
        if(marca == "ArgentinaLuz")
        {
            precioSinDescuento = lamparitas*precio;
            precioConDescuento = precioSinDescuento - (precioSinDescuento*0.5);
            txtIdprecioDescuento.value = precioConDescuento;
        }      
        else
        {
            if(marca == "FelipeLamparas")
            {
                precioSinDescuento = lamparitas*precio;
                precioConDescuento = precioSinDescuento - (precioSinDescuento*0.5);
                txtIdprecioDescuento.value = precioConDescuento;
            }
            if(marca == "JeLuz")
            {
                precioSinDescuento = lamparitas*precio;
                precioConDescuento = precioSinDescuento - (precioSinDescuento*0.5);
                txtIdprecioDescuento.value = precioConDescuento;
            }
            if(marca == "HazIluminacion")
            {
                precioSinDescuento = lamparitas*precio;
                precioConDescuento = precioSinDescuento - (precioSinDescuento*0.5);
                txtIdprecioDescuento.value = precioConDescuento;
            }
            if(marca == "Osram")
            {
                precioSinDescuento = lamparitas*precio;
                precioConDescuento = precioSinDescuento - (precioSinDescuento*0.5);
                txtIdprecioDescuento.value = precioConDescuento;
            }
        }
    }
    else
    {
        if(lamparitas == 5)
        {
            if(marca == "ArgentinaLuz")
            {
                precioSinDescuento = lamparitas*precio;
                precioConDescuento = precioSinDescuento - (precioSinDescuento*0.4);
                txtIdprecioDescuento.value = precioConDescuento;
            } 
            else
            {        
                if(marca == "FelipeLamparas")
                {
                    precioSinDescuento = lamparitas*precio;
                    precioConDescuento = precioSinDescuento - (precioSinDescuento*0.3);
                    txtIdprecioDescuento.value = precioConDescuento;
                }
                if(marca == "JeLuz")
                {
                    precioSinDescuento = lamparitas*precio;
                    precioConDescuento = precioSinDescuento - (precioSinDescuento*0.3);
                    txtIdprecioDescuento.value = precioConDescuento;
                }
                if(marca == "HazIluminacion")
                {
                    precioSinDescuento = lamparitas*precio;
                    precioConDescuento = precioSinDescuento - (precioSinDescuento*0.3);
                    txtIdprecioDescuento.value = precioConDescuento;
                }
                if(marca == "Osram")
                {
                    precioSinDescuento = lamparitas*precio;
                    precioConDescuento = precioSinDescuento - (precioSinDescuento*0.3);
                    txtIdprecioDescuento.value = precioConDescuento;
                }
            }
        
        }
        if(lamparitas == 4)
        {
            if(marca == "ArgentinaLuz")
            {
                precioSinDescuento = lamparitas*precio;
                precioConDescuento = precioSinDescuento - (precioSinDescuento*0.25);
                txtIdprecioDescuento.value = precioConDescuento;
            } 
            else
            {
                if(marca == "FelipeLamparas")
                {
                    precioSinDescuento = lamparitas*precio;
                    precioConDescuento = precioSinDescuento - (precioSinDescuento*0.25);
                    txtIdprecioDescuento.value = precioConDescuento;
                }
                if(marca == "JeLuz")
                {
                    precioSinDescuento = lamparitas*precio;
                    precioConDescuento = precioSinDescuento - (precioSinDescuento*0.2);
                    txtIdprecioDescuento.value = precioConDescuento;
                }
                if(marca == "HazIluminacion")
                {
                    precioSinDescuento = lamparitas*precio;
                    precioConDescuento = precioSinDescuento - (precioSinDescuento*0.2);
                    txtIdprecioDescuento.value = precioConDescuento;
                }
                if(marca == "Osram")
                {
                    precioSinDescuento = lamparitas*precio;
                    precioConDescuento = precioSinDescuento - (precioSinDescuento*0.2);
                    txtIdprecioDescuento.value = precioConDescuento;
                }
            }
        
        }
        if(lamparitas == 3)
        {
            if(marca == "ArgentinaLuz")
            {
                precioSinDescuento = lamparitas*precio;
                precioConDescuento = precioSinDescuento - (precioSinDescuento*0.15);
                txtIdprecioDescuento.value = precioConDescuento;
            } 
            else
            {
                if(marca == "FelipeLamparas")
                {
                    precioSinDescuento = lamparitas*precio;
                    precioConDescuento = precioSinDescuento - (precioSinDescuento*0.1);
                    txtIdprecioDescuento.value = precioConDescuento;
                }
                if(marca == "JeLuz")
                {
                    precioSinDescuento = lamparitas*precio;
                    precioConDescuento = precioSinDescuento - (precioSinDescuento*0.05);
                    txtIdprecioDescuento.value = precioConDescuento;
                }
                if(marca == "HazIluminacion")
                {
                    precioSinDescuento = lamparitas*precio;
                    precioConDescuento = precioSinDescuento - (precioSinDescuento*0.05);
                    txtIdprecioDescuento.value = precioConDescuento;
                }
                if(marca == "Osram")
                {
                    precioSinDescuento = lamparitas*precio;
                    precioConDescuento = precioSinDescuento - (precioSinDescuento*0.05);
                    txtIdprecioDescuento.value = precioConDescuento;
                }
            }
        }
    }

    if(precioConDescuento>120)
    {
        ingresosBrutos = precioConDescuento*0.1
        alert("IIBB Usted pago "+ingresosBrutos)
    }

    /*

    //VERSION SWITCH

    switch(marca)
    {
        case "ArgentinaLuz":
        {
            if(lamparitas>5)
            {
                precio = lamparitas*precio;
                descuento = precio*0.5;
                txtIdprecioDescuento.value = descuento;
            }      
            else
            {
                if(lamparitas == 5)
                {
                    precio = lamparitas*precio;
                    descuento = precio*0.4;
                    txtIdprecioDescuento.value = descuento;
                }
                if(lamparitas == 4)
                {
                    precio = lamparitas*precio;
                    descuento = precio*0.25;
                    txtIdprecioDescuento.value = descuento;
                }
                if(lamparitas == 3)
                {
                    precio = lamparitas*precio;
                    descuento = precio*0.15;
                    txtIdprecioDescuento.value = descuento;
                }
            }
            break;
        }
      
        case "FelipeLamparas":
        {
            if(lamparitas>5)
            {
                precio = lamparitas*precio;
                descuento = precio*0.5;
                txtIdprecioDescuento.value = descuento;
            } 
            else
            {        
                if(lamparitas == 5)
                {
                   precio = lamparitas*precio;
                    descuento = precio*0.3;
                    txtIdprecioDescuento.value = descuento;
                }
                if(lamparitas == 4)
                {
                    precio = lamparitas*precio;
                    descuento = precio*0.25;
                    txtIdprecioDescuento.value = descuento;
                }
                if(lamparitas == 3)
                {
                    precio = lamparitas*precio;
                    descuento = precio*0.1;
                    txtIdprecioDescuento.value = descuento;
                }
            }
            break;
        
        }
        case "JeLuz":
        {
            if(lamparitas>5)
            {
                precio = lamparitas*precio;
                descuento = precio*0.5;
                txtIdprecioDescuento.value = descuento;
            } 
            else
            {
                if(lamparitas == 5)
                {
                    precio = lamparitas*precio;
                    descuento = precio*0.3;
                    txtIdprecioDescuento.value = descuento;
                }
                if(lamparitas == 4)
                {
                    precio = lamparitas*precio;
                    descuento = precio*0.2;
                    txtIdprecioDescuento.value = descuento;
                }
                if(lamparitas == 3)
                {
                    precio = lamparitas*precio;
                    descuento = precio*0.05;
                    txtIdprecioDescuento.value = descuento;
                }
            }
            break;
        
        }
        case "HazIluminacion":
        {
            if(lamparitas>5)
            {
                precio = lamparitas*precio;
                descuento = precio*0.5;
                txtIdprecioDescuento.value = descuento;
            } 
            else
            {
                if(lamparitas == 5)
                {
                    precio = lamparitas*precio;
                    descuento = precio*0.3;
                    txtIdprecioDescuento.value = descuento;
                }
                if(lamparitas == 4)
                {
                    precio = lamparitas*precio;
                    descuento = precio*0.2;
                    txtIdprecioDescuento.value = descuento;
                }
                if(lamparitas == 3)
                {
                    precio = lamparitas*precio;
                    descuento = precio*0.05;
                    txtIdprecioDescuento.value = descuento;
                }
            }
            break;
        }
        case "Osram":
        {
            if(lamparitas>5)
            {
                precio = lamparitas*precio;
                descuento = precio*0.5;
                txtIdprecioDescuento.value = descuento;
            }     
            else
            {
                if(lamparitas == 5)
                {
                    precio = lamparitas*precio;
                    descuento = precio*0.3;
                    txtIdprecioDescuento.value = descuento;
                }
                if(lamparitas == 4)
                {
                    precio = lamparitas*precio;
                    descuento = precio*0.2;
                    txtIdprecioDescuento.value = descuento;
                }
                if(lamparitas == 3)
                {
                    precio = lamparitas*precio;
                    descuento = precio*0.05;
                    txtIdprecioDescuento.value = descuento;
                }
            }
            break;
        }
        
    }
    */
}

