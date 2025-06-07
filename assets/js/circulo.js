
const pi=3.1416;


export function circuloDiametro(radio)
{
   
    if(radio>0 && radio !== null)
        {
            return (2*radio)
        }
        else
        {
            return false;
        }
}

export function circuloArea(radio)
{
    //pi por radio al cuadrado
    if(radio>0 && radio !== null )
        {
            return (pi*(radio*radio));
        }
        else
        {
            
            return false; 
        }

}

export function circuloPerimetro(radio)
{
    // 2 por pi por el radio
    if(radio>0 && radio !== null)
        {
            return (2*(pi*radio));
        }
        else
        {
            
            return false;
        }
}