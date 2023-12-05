function mostrar(){
    document.getElementById('cuadradoForm').style.display='none';
    document.getElementById('circuloForm').style.display='none';
    document.getElementById('rectanguloForm').style.display='none';
    
    let seleccion= document.getElementById('figura').value;

    
    if (seleccion === 'salir') {
        // Mensaje de despedida animado
        despedidaAnimada();
        return;
    }

    let figuraForm = document.getElementById(seleccion + "Form");
    figuraForm.style.display = 'block';

    //document.getElementById(seleccion + "Form").style.display='block';
    //document.getElementById(`${seleccion}Form`).style.display='block';
}


function calcular(){
    let seleccion = document.getElementById('figura').value;
    let resultadoArea = document.getElementById('resultado');
    let area;
    switch(seleccion) {
        case 'circulo':
            let radio = document.getElementById('radio').value;
            area = Math.PI*radio*radio;
            break;
        case 'cuadrado':
            let lado = document.getElementById('lado').value;
            area = lado*lado;
            break;
        case 'rectangulo':
            let base = document.getElementById('base').value;
            let altura = document.getElementById('altura').value;
            area = base*altura;
            break;
        default:
            document.write("ADIOS CUIDATE");
            return;
    }

    // MUESTRA EL RESULTADO
    resultadoArea.textContent = "El area del "+ seleccion + " es " + area.toFixed(2);
}

function despedidaAnimada() {
    // Ocultar todos los demás elementos
    document.getElementById('formularioContenedor').style.display = 'none';
    document.getElementById('resultado').style.display = 'none';

    // Mostrar pantalla de despedida con imagen y mensaje
    let despedidaContainer = document.getElementById('despedidaContainer');
    let despedidaImagen = document.getElementById('despedidaImagen');

    // Modificar la imagen y mensaje de despedida
     // Cambia 'ruta/de/la/imagen.jpg' por la ruta correcta de tu imagen
    despedidaImagen.src = 'imagenes/despedida.jpg'; 
    despedidaImagen.alt = 'Despedida';
    despedidaImagen.title = 'Despedida';

    // Mostrar la pantalla de despedida con animación
    despedidaContainer.style.display = 'block';
}


/*
function despedidaAnimada() {
    // Mostrar pantalla de despedida con imagen y mensaje
    let despedidaContainer = document.getElementById('despedidaContainer');
    let despedidaImagen = document.getElementById('despedidaImagen');

    // Modificar la imagen y mensaje de despedida
    // Cambia 'ruta/de/la/imagen.jpg' por la ruta correcta de tu imagen
    despedidaImagen.src = 'chino.png'; 
    despedidaImagen.alt = 'Despedida';
    despedidaImagen.title = 'Despedida';

    // Mostrar la pantalla de despedida con animación
    despedidaContainer.style.display = 'block';
    despedidaContainer.style.opacity = 0;
    let opacity = 0;
    const fadeInInterval = setInterval(() => {
        opacity += 0.1;
        despedidaContainer.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(fadeInInterval);
        }
    }, 100);
}

*/