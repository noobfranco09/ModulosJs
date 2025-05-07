
const pi=3.1416;
export const error="Ingrese un radio válido";

export function circuloDiametro(radio)
{
   
    if(radio>0)
        {
            return (2*radio)
        }
        else
        {
            return error
        }
}

export function circuloArea()
{
    //pi por radio al cuadrado
    if(radio>0)
        {
            return (pi*(radio*radio));
        }
        else
        {
            
            return error;
        }

}

export function circuloPerimetro(radio)
{
    // 2 por pi por el radio
    if(radio>0)
        {
            return (2*(pi*radio));
        }
        else
        {
            
            return error;
        }
}