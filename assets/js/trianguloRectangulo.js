
let error="Los catetos deben tener una longitud mayor a cero";
export function areaTrianguloRectangulo(cateto1,cateto2)
{
    if(cateto1 >0 && cateto2>0)
        {
            return ((cateto1*cateto2)/2)
        }
        else
        {
            
            return error;
        }
}

export function perimetroTrianguloRectangulo(cateto1,cateto2)
{
    if(cateto1>0 && cateto2>0)
        {
            let hipotenusa= (Math.sqrt((cateto1*cateto1)+(cateto2*cateto2)))
            return (hipotenusa+cateto1+cateto2)
        }
        else
        {
            
            return error;
        }
}

export function hipotenusaTrianguloRectangulo(cateto1,cateto2)
{
    if(cateto1>0 && cateto2>0)
        {
            let hipotenusa= (Math.sqrt((cateto1*cateto1)+(cateto2*cateto2)))
            return hipotenusa;
        }
        else
        {
            
            return error;
        }
}