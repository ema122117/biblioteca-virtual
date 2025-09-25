// Smooth scrolling para los enlaces del navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Función para generar PDF de préstamo
function generarPDFPrestamo() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const libro = document.getElementById('libro').value;
    const comentarios = document.getElementById('comentarios').value;

    if (!nombre || !correo || !libro) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Configurar fuente
    doc.setFont('helvetica');

    // Título
    doc.setFontSize(20);
    doc.setTextColor(44, 62, 80);
    doc.text('BIBLIOTECA VIRTUAL', 105, 30, { align: 'center' });

    doc.setFontSize(16);
    doc.text('Solicitud de Préstamo', 105, 45, { align: 'center' });

    // Línea separadora
    doc.setDrawColor(52, 152, 219);
    doc.setLineWidth(1);
    doc.line(20, 55, 190, 55);

    // Información del solicitante
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);

    doc.text('DATOS DEL SOLICITANTE:', 20, 75);
    doc.text(`Nombre: ${nombre}`, 20, 90);
    doc.text(`Correo: ${correo}`, 20, 105);
    doc.text(`Fecha de solicitud: ${new Date().toLocaleDateString('es-ES')}`, 20, 120);

    // Información del libro
    doc.text('LIBRO SOLICITADO:', 20, 145);
    doc.text(`Título: ${libro}`, 20, 160);

    if (comentarios) {
        doc.text('COMENTARIOS ADICIONALES:', 20, 185);
        const splitComments = doc.splitTextToSize(comentarios, 170);
        doc.text(splitComments, 20, 200);
    }

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(128, 128, 128);
    doc.text('Biblioteca Virtual - Tel: +57 311 777 000', 105, 280, { align: 'center' });

    // Guardar PDF
    doc.save(`Solicitud_Prestamo_${nombre.replace(/\s+/g, '_')}.pdf`);
}

// Función para generar PDF de contacto
function generarPDFContacto() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Configurar fuente
    doc.setFont('helvetica');

    // Título
    doc.setFontSize(20);
    doc.setTextColor(44, 62, 80);
    doc.text('BIBLIOTECA VIRTUAL', 105, 30, { align: 'center' });

    doc.setFontSize(16);
    doc.text('Información de Contacto', 105, 45, { align: 'center' });

    // Línea separadora
    doc.setDrawColor(52, 152, 219);
    doc.setLineWidth(1);
    doc.line(20, 55, 190, 55);

    // Información de contacto
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);

    doc.setFontSize(14);
    doc.text('TELÉFONO:', 20, 150);
    doc.setFontSize(12);
    doc.text('+57 311 777 000', 20, 165);
    doc.text('Horario: Lunes a Viernes, 9:00 - 18:00', 20, 180);

    doc.setFontSize(14);
    doc.text('CORREOS ELECTRÓNICOS:', 20, 205);
    doc.setFontSize(12);
    doc.text('Información general: info@bibliotecavirtual.com', 20, 220);
    doc.text('Préstamos: prestamos@bibliotecavirtual.com', 20, 235);
    doc.text('Soporte técnico: soporte@bibliotecavirtual.com', 20, 250);

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(128, 128, 128);
    doc.text(`Generado el ${new Date().toLocaleDateString('es-ES')} a las ${new Date().toLocaleTimeString('es-ES')}`, 105, 280, { align: 'center' });

    // Guardar PDF
    doc.save('Contacto_Biblioteca_Virtual.pdf');
}

// Función para generar PDF de contacto personalizado
function generarPDFContactoPersonalizado() {
    const nombre = document.getElementById('nombreContacto').value;
    const correo = document.getElementById('correoContacto').value;

    if (!nombre || !correo) {
        alert('Por favor, completa tu nombre y correo electrónico.');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Configurar fuente
    doc.setFont('helvetica');

    // Título
    doc.setFontSize(20);
    doc.setTextColor(44, 62, 80);
    doc.text('BIBLIOTECA VIRTUAL', 105, 30, { align: 'center' });

    doc.setFontSize(16);
    doc.text('Carta de Contacto', 105, 45, { align: 'center' });

    // Línea separadora
    doc.setDrawColor(52, 152, 219);
    doc.setLineWidth(1);
    doc.line(20, 55, 190, 55);

    // Información personal
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text('DATOS PERSONALES:', 20, 75);

    doc.text('DATOS PERSONALES:', 20, 75);  
    doc.text(`Nombre: ${nombre}`, 20, 90);
    doc.text(`Correo: ${correo}`, 20, 105);
    doc.text(`Fecha: ${new Date().toLocaleDateString('es-ES')}`, 20, 120);

    // Información de contacto de la biblioteca
    doc.setFontSize(14);
    doc.setTextColor(44, 62, 80);
    doc.text('INFORMACIÓN DE CONTACTO DE LA BIBLIOTECA:', 20, 150);

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);

    doc.text('TELÉFONO:', 20, 170);
    doc.text('+57 311 777 000', 30, 185);
    doc.text('Horario: Lunes a Viernes, 9:00 - 18:00', 30, 200);

    doc.text('CORREOS ELECTRÓNICOS:', 20, 220);
    doc.text('• Información general: info@bibliotecavirtual.com', 30, 235);
    doc.text('• Préstamos: prestamos@bibliotecavirtual.com', 30, 250);
    doc.text('• Soporte técnico: soporte@bibliotecavirtual.com', 30, 265);

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(128, 128, 128);
    doc.text(`Carta generada para ${nombre} el ${new Date().toLocaleDateString('es-ES')}`, 105, 280, { align: 'center' });

    // Guardar PDF
    doc.save(`Carta_Contacto_${nombre.replace(/\s+/g, '_')}.pdf`);

    // Limpiar formulario
    document.getElementById('contactoForm').reset();

    alert(`¡Carta de contacto generada exitosamente para ${nombre}!`);
}

// Manejar envío del formulario
document.getElementById('prestamoForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const libro = document.getElementById('libro').value;

    if (nombre && correo && libro) {
        alert(`¡Solicitud enviada correctamente!\n\nGracias ${nombre}, hemos recibido tu solicitud para el libro "${libro}". Te contactaremos pronto al correo ${correo}.`);

        // Limpiar formulario
        this.reset();
    }
});

// Actualizar navbar activo al hacer scroll
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
