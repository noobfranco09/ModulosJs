
export function areaRectangulo(l1,l2)
{
    if(l1 >0 && l2>0)
        {
            return (l1*l2)
        }
        else
        {
            let error="Ingrese una base o una altura mayor de cero";
            return error;
        }
}

export function perimetroRectangulo(l1,l2,l3,l4)
{
    //l1,l2... hace referencia a los lados del rectángulo

    if(l1>0 && l2>0 && l3>0 && l4>0)
        {
            return (l1*l2*l3*l4)
        }
        else
        {
            let error="Las longitudes de los lados deben de ser mayores a cero";
            return error;
        }

}

 export function diagonalRectangulo(l1,l2)
 {
    // se hace uso del teoréma de pitagoras, se eleva al cuadrado el lado a y el lado b (vertical y horizontal) luego se saca su raíz cuadrada
    if(l1>0 && l2>0)
        {
            return ( Math.sqrt(((l1*l1)+ (l2*l2))))
        }
        else
        {
            let error="Las longitudes de los lados deben de ser mayores a cero";
            return error;
        }

 } 