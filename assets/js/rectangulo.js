
export function areaRectangulo(l1,l2)
{
    if(l1 >0 && l1 !== null && l2>0 && l2 !== null)
        {
            return (l1*l2)
        }
        else
        {
            return false;
        }
}

export function perimetroRectangulo(l1,l2)
{
    //l1,l2... hace referencia a los lados del rectángulo

    if(l1>0 && l1 !== null && l2>0 && l2 !== null )
        {
            return (l1*l2*l1*l2)
        }
        else
        {
            return false;
        }

}

 export function diagonalRectangulo(l1,l2)
 {
    // se hace uso del teoréma de pitagoras, se eleva al cuadrado el lado a y el lado b (vertical y horizontal) luego se saca su raíz cuadrada
    if(l1 >0 && l1 !== null && l2>0 && l2 !== null)
        {
            return ( Math.sqrt(((l1*l1)+ (l2*l2))))
        }
        else
        {
            return false;
        }

 } 