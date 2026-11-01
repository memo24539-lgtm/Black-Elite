// ======================================
// BLACK ELITE - FUNCIONES DE LA TIENDA
// ======================================

// Coloca tu número de WhatsApp.
// México: 52 + lada + número, sin espacios ni signos.
const numeroWhatsApp = "527226155280";

// ======================================
// MENÚ DE NAVEGACIÓN
// ======================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    const abierto = navMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", abierto);
    menuToggle.textContent = abierto ? "✕" : "☰";
});

// Cerrar menú al seleccionar una sección
navMenu.querySelectorAll("a").forEach(enlace => {
    enlace.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// ======================================
// FILTROS DE PRODUCTOS
// ======================================

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

// Activar los botones de filtros
botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {
        filtrarProductos(boton.dataset.filter);
    });
});

// ======================================
// ENLACES DE CATEGORÍAS
// ======================================

document.querySelectorAll(".text-link").forEach(enlace => {

    enlace.addEventListener("click", () => {
        const categoria = enlace.dataset.filter;

        if (categoria) {
            filtrarProductos(categoria);
        }
    });

});

// ======================================
// FUNCIONES DE WHATSAPP
// ======================================

function abrirWhatsApp(mensaje) {

   if (!numeroWhatsApp || numeroWhatsApp.length < 12) {
   }

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
}

// Botones de consulta de productos
document.querySelectorAll(".buy-btn").forEach(boton => {

    boton.addEventListener("click", () => {

        const producto = boton.dataset.product;

        const mensaje =
            `Hola, BLACK ELITE. Me interesa el producto: ${producto}. ¿Me pueden compartir el precio y la disponibilidad?`;

        abrirWhatsApp(mensaje);

    });

});

// Botón de contacto general
const contacto = document.getElementById("contactButton");

contacto.addEventListener("click", evento => {

    evento.preventDefault();

    abrirWhatsApp(
        "Hola, BLACK ELITE. Quisiera información sobre sus productos y entregas."
    );

});

// ======================================
// AÑO AUTOMÁTICO DEL PIE DE PÁGINA
// ======================================

document.getElementById("year").textContent =
    new Date().getFullYear();