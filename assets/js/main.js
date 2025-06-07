import * as circulo from './circulo.js';
import * as rectangulo from './rectangulo.js';
import * as triangulorectangulo from './trianguloRectangulo.js';


let formCirculo=document.querySelector('#formCirculo');
formCirculo.addEventListener('submit',resultadoCirculo);
function resultadoCirculo(e)
{
    e.preventDefault();
    let col=document.createElement('div');
    col.setAttribute('class','col-12');
    let row=document.createElement('div');
    row.setAttribute('class','row');
    let radioCirculo= document.querySelector('#radio').value;
    let contenedorCirculo=document.querySelector('#colCirculo'); 
    contenedorCirculo.innerHTML = '';
    if(circulo.circuloDiametro(radioCirculo) === false  && circulo.circuloArea(radioCirculo) === false && circulo.circuloPerimetro(radioCirculo) === false)
        {
            col.classList.add('error')
            col.appendChild(document.createTextNode('Por favor, llena los campos'));
            row.appendChild(col);
            contenedorCirculo.appendChild(row);
            alert('Por favor,llena todos los campos del formulario del circulo ');
        }
        else
        {
            col.classList.add('correcto')
            col.appendChild(document.createTextNode("El diametro es igual a : "+circulo.circuloDiametro(radioCirculo)))
            col.appendChild(document.createElement('br'))
            col.appendChild(document.createTextNode("El área es igual a : "+circulo.circuloArea(radioCirculo)))
            col.appendChild(document.createElement('br'))
            col.appendChild(document.createTextNode("El perímetro es igual a : "+circulo.circuloPerimetro(radioCirculo)))
            row.appendChild(col);
            contenedorCirculo.appendChild(row);
        }

}

let formRectangulo=document.querySelector('#formRectangulo');
formRectangulo.addEventListener('submit',resultadoRectangulo);
function resultadoRectangulo(e)
{
     e.preventDefault();
    let contenedorRectangulo=document.querySelector('#colRectangulo');
    let row = document.createElement('div');
    row.setAttribute('class','row');

    contenedorRectangulo.innerHTML='';

    let col=document.createElement('div');
    col.setAttribute('class','col-12');

    let l1=document.querySelector('#l1').value;
    let l2=document.querySelector('#l2').value;

    if(rectangulo.areaRectangulo(l1,l2) === false && rectangulo.diagonalRectangulo(l1,l2)=== false && rectangulo.perimetroRectangulo(l1,l2) === false)
        {
            col.classList.add('error')
            col.appendChild(document.createTextNode('Por favor, llena los campos'));
            row.appendChild(col);
            contenedorRectangulo.appendChild(row);
            alert('Por favor,llena todos los campos del formulario del rectangulo ');
        }
        else
        {
            col.classList.add('correcto')
            col.appendChild(document.createTextNode("El área del rectangulo es igual a : "+rectangulo.areaRectangulo(l1,l2)));
            col.appendChild(document.createElement('br'));
            col.appendChild(document.createTextNode("La diagonal del rectangulo es igual a : "+rectangulo.diagonalRectangulo(l1,l2)));
            col.appendChild(document.createElement('br'));
            col.appendChild(document.createTextNode("El perímetro del rectangulo es igual a : "+rectangulo.perimetroRectangulo(l1,l2)));
            col.appendChild(document.createElement('br'));
            row.appendChild(col);
            contenedorRectangulo.appendChild(row);
        }
    
}

let formTriangulo=document.querySelector('#formTriangulo');
formTriangulo.addEventListener('submit',resultadoTriangulo);
function resultadoTriangulo(e)
{
   e.preventDefault();

   let contenedorTriangulo=document.querySelector('#colTriangulo');
   contenedorTriangulo.innerHTML='';

   let row=document.createElement('div');
   row.setAttribute('class','row');

   let col=document.createElement('div');
   col.setAttribute('class','col-12');
   let cateto1=document.querySelector('#cateto1').value;
   let cateto2=document.querySelector('#cateto2').value;

   

   col.appendChild(document.createTextNode("El área del triángulo es : "+ triangulorectangulo.areaTrianguloRectangulo(cateto1,cateto2)));
   row.appendChild(col);
   contenedorTriangulo.appendChild(row);

}