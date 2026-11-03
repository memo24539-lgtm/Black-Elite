// BLACK ELITE - FUNCIONES GENERALES

const numeroWhatsApp = "527226155280";

// MENÚ RESPONSIVO
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        const abierto = navMenu.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", abierto);

        menuToggle.textContent = abierto ? "✕" : "☰";

    });

    navMenu.querySelectorAll("a").forEach(enlace => {

        enlace.addEventListener("click", () => {

            navMenu.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "☰";

        });

    });

}


// FILTROS DE PRODUCTOS
const botonesFiltro = document.querySelectorAll(".filter");
const productos = document.querySelectorAll(".product-card");

function filtrarProductos(categoria) {

    productos.forEach(producto => {

        if (
            categoria === "todos" ||
            producto.dataset.category === categoria
        ) {

            producto.hidden = false;

        } else {

            producto.hidden = true;

        }

    });

    botonesFiltro.forEach(boton => {

        boton.classList.toggle(
            "active",
            boton.dataset.filter === categoria
        );

    });

}

botonesFiltro.forEach(boton => {

    boton.addEventListener("click", () => {

        filtrarProductos(boton.dataset.filter);

    });

});


// ENLACES DE CATEGORÍAS
document.querySelectorAll(".text-link").forEach(enlace => {

    enlace.addEventListener("click", () => {

        const categoria = enlace.dataset.filter;

        if (categoria) {

            filtrarProductos(categoria);

        }

    });

});


// FUNCIÓN DE WHATSAPP
function abrirWhatsApp(mensaje) {

    if (!numeroWhatsApp || numeroWhatsApp.length < 12) {

        alert("Revisa el número de WhatsApp configurado.");

        return;

    }

    const url =
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

}


// BOTONES DE COMPRA
document.querySelectorAll(".buy-btn").forEach(boton => {

    boton.addEventListener("click", () => {

        const producto = boton.dataset.product;

        const mensaje =
            `Hola, BLACK ELITE. Me interesa el producto: ${producto}. ¿Me pueden compartir información sobre tallas y disponibilidad?`;

        abrirWhatsApp(mensaje);

    });

});


// BOTÓN DE CONTACTO
const contacto = document.getElementById("contactButton");

if (contacto) {

    contacto.addEventListener("click", evento => {

        evento.preventDefault();

        abrirWhatsApp(
            "Hola, BLACK ELITE. Quisiera información sobre sus productos y entregas."
        );

    });

}


// AÑO AUTOMÁTICO
const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}