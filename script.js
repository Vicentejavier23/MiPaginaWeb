/* ============================================
MENÚ HAMBURGUESA - FUNCIONA EN MÓVIL
   ============================================ */

// Seleccionar elementos
const menuToggle = document.getElementById('menuToggle');  // Botón ☰
const menu = document.getElementById('menu');             // Menú <nav>
const menuItems = document.querySelectorAll('.menu a');   // Links del menú

console.log('✓ menuToggle:', menuToggle);
console.log('✓ menu:', menu);
console.log('✓ menuItems:', menuItems);

// Verificar que los elementos existan
if (!menuToggle || !menu) {
    console.error('❌ ERROR: No se encontraron los elementos');
} else {
    console.log('✓ Todos los elementos encontrados correctamente');
}

// ============================================
// Evento: Click en el botón hamburguesa
// ============================================

if (menuToggle && menu) {
    menuToggle.addEventListener('click', function() {
        console.log('Botón ☰ clickeado');
        menu.classList.toggle('active');      // Abre/cierra menú
        menuToggle.classList.toggle('active'); // Rota el botón
    });
}

// ============================================
// Evento: Click en los links del menú
// ============================================

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        console.log('Link clickeado');
        menu.classList.remove('active');       // Cierra el menú
        menuToggle.classList.remove('active'); // Desrota el botón
    });
});

// ============================================
// Evento: Scroll - cerrar menú automáticamente
// ============================================

window.addEventListener('scroll', function() {
    menu.classList.remove('active');
    menuToggle.classList.remove('active');
});

// ============================================
// FORMULARIO DE CONTACTO CON EMAILJS
// ============================================
document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const resultado = document.getElementById("resultado");
    resultado.innerText = "Enviando Mensaje...";

    try {
        await emailjs.sendForm("service_s93h6yk", "template_av4tu99", this);
        await emailjs.sendForm("service_s93h6yk", "template_vi5qpge", this);
        resultado.innerText = "Mensaje Enviado Correctamente ✔️";
        this.reset();
    } catch (error) {
        resultado.innerText = "Error al enviar ❌ " + error.text;
    }
});

