
let error="Los catetos deben tener una longitud mayor a cero";
export function areaTrianguloRectangulo(cateto1,cateto2)
{
    if(cateto1 >0 && cateto1 !== null && cateto2>0 && cateto2 !== null)
        {
            return ((cateto1*cateto2)/2)
        }
        else
        {
            
            return false;
        }
}

export function perimetroTrianguloRectangulo(cateto1,cateto2)
{
    if(cateto1 >0 && cateto1 !== null && cateto2>0 && cateto2 !== null)
        {
            let hipotenusa= (Math.sqrt((cateto1*cateto1)+(cateto2*cateto2)))
            return (hipotenusa+cateto1+cateto2)
        }
        else
        {
            
            return false;
        }
}

export function hipotenusaTrianguloRectangulo(cateto1,cateto2)
{
    if(cateto1 >0 && cateto1 !== null && cateto2>0 && cateto2 !== null)
        {
            let hipotenusa= (Math.sqrt((cateto1*cateto1)+(cateto2*cateto2)))
            return hipotenusa;
        }
        else
        {
            
            return false;
        }
}