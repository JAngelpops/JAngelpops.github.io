let imagenActual = 1;
const totalImagenes = 4;
function mostrarImagen(direccion) {
    // Ocultar imagen actual
    const imagenActualElement = document.getElementById(`itemCarrusel-${imagenActual}`);
    imagenActualElement.classList.remove('active');
    // Ocultar punto de navegación actual
    const puntoActualElement = document.querySelector('.puntoNavegacion.active');
    puntoActualElement.classList.remove('active');
    // Mostrar nueva imagen y punto de navegación
    imagenActual += direccion;
    if (imagenActual < 1) {
        imagenActual = totalImagenes;
    } else if (imagenActual > totalImagenes) {
        imagenActual = 1;
    }
    const nuevaImagenElement = document.getElementById(`itemCarrusel-${imagenActual}`);
    nuevaImagenElement.classList.add('active');
    const nuevoPuntoElement = document.querySelector(`.puntoNavegacion:nth-child(${imagenActual})`);
    nuevoPuntoElement.classList.add('active');
}
