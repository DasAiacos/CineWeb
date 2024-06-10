document.getElementById('registro').addEventListener('submit', function (event) {
    event.preventDefault();


    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(telefono)) {
        alert('El número de teléfono debe contener exactamente 10 dígitos.');
        return;
    }

    const formData = {
        nombre: nombre,
        correo: correo,
        telefono: telefono,
        asunto: asunto,
        mensaje: mensaje
    };

    // Guardar los datos en el localStorage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Mostrar mensaje
    alert('Datos enviados correctamente');

    // Reset the form
    document.getElementById('registro').reset();
});