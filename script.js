let contenedorPersonajes = document.getElementById('personajes');
let contenedorMensaje = document.getElementById('mensaje');
const boton = document.querySelector(".interactive-button");

boton.addEventListener("click", () => {
    // Ocultar el botón
    boton.style.display = "none";
   // Crear el mensaje
    const mensaje = document.createElement("p");

   mensaje.textContent = "Gracias por visitar la API de Rick and Morty";
   mensaje.classList.add("mensaje-final");
   
   // Agregar el mensaje al contenedor
   boton.parentNode.appendChild(mensaje);

   setTimeout(() => {
    mensaje.remove();// Eliminar el mensaje del DOM
    boton.style.display = "block";
   },3000);

});


async function getPersonajes() {
    try {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json(); 

        // Crear tarjeta para cada personaje
        data.results.forEach(element => {
            const espacioPersonaje = document.createElement("div");

            espacioPersonaje.innerHTML = `<h4><span>Nombre: </span>${element.name}</h4>
            <h4><span>Especie: </span>${element.species}</h4>
            <h4><span>Genero: </span>${element.gender}</h4>
            <img src = "${element.image}" alt="${element.name}">`;


            contenedorPersonajes.append(espacioPersonaje); // Añadir tarjeta al contenedor

        });

    } catch (error) {
        alert(`Rick and Morty no responden: ${error}`);
    }
}
getPersonajes();

// Selecciona todos los enlaces que tienen href que inicie con #
document.querySelectorAll('a[href^="#"]').forEach(enlaceDesplazamiento => {
    // Para cada enlace seleccionado, añade un evento de click
    enlaceDesplazamiento.addEventListener("click", function (e) {
        e.preventDefault();// Evita el comportamiento predeterminado del enlace
        
        const seccionDestino = document.querySelector(this.getAttribute('href'));

        // Si el elemento objetivo existe, desplázate hacia él suavemente
        if (seccionDestino) {
            seccionDestino.scrollIntoView({
                behavior: "smooth", // Efecto de desplazamiento suave
                block: 'start' // Alinea la parte superior del objetivo con la ventana
            });
        }
    });
});