import * as circulo from './circulo.js';
import * as rectangulo from './rectangulo.js';
import * as triangulorectangulo from './trianguloRectangulo.js';


let formCirculo=document.querySelector('#formCirculo');
formCirculo.addEventListener('submit',resultadoCirculo)
function resultadoCirculo(e)
{
    e.preventDefault();
    let col=document.createElement('div');
    col.setAttribute('class','col-12');

    let row=document.createElement('div');
    row.setAttribute('class','row');
    let radioCirculo= document.querySelector('#radio').value;
    let contenedorCirculo=document.querySelector('#colCirculo');
    col.appendChild(document.createTextNode(circulo.circuloDiametro(radioCirculo)))
    row.appendChild(col);
    contenedorCirculo.appendChild(row);
}