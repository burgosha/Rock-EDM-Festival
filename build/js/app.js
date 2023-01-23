document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
})
function iniciarApp() {
    crearGaleria();
}
function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');
    for(let i = 1; i <= 12; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
        <source srcset="build/img/thumb/${i}.avif" type="image/avif">
        <source srcset="build/img/thumb/${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen galeria">
        `;
        imagen.onclick = function() {
            mostrarImagen(i);
        }
        galeria.appendChild(imagen);
    }
}
function mostrarImagen(id) {
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
    <source srcset="build/img/grande/${id}.avif" type="image/avif">
    <source srcset="build/img/grande/${id}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="imagen galeria">
    `;
    
    //Crea el overlay con la Imagen y el boton cerrar Modal
    
    const overlay = document.createElement('DIV');//Crea un div
    overlay.appendChild(imagen);//Contiene la imagen
    overlay.classList.add('overlay');//Le agrega una clase
    overlay.onclick = function() { //Remueve el overlay
        const body = document.querySelector('body'); 
        body.classList.remove('fijar-body');
        overlay.remove();
    }

    //Boton para cerrar el Modal
    const cerrarModal = document.createElement('p');
    cerrarModal.textContent = 'X';
    cerrarModal.classList.add('btn-cerrar');
    cerrarModal.onclick = function() {
        const body = document.querySelector('body'); //Remueve el overlay
        body.classList.remove('fijar-body');
        overlay.remove();
    };
    overlay.appendChild(cerrarModal);//agrega el boton cerrar Modal
 
    //Añade el overlay al HTML
    const body = document.querySelector('body'); //Selecciona el body
    body.appendChild(overlay);//Agrega la imagen al body
    body.classList.add('fijar-body'); //Agrega la clase para fijar el body, esto luego se modifica en globales .scss
}