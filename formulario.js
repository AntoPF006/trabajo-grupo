function guardar() {
    // 1. Obtener los valores de los inputs
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const correo = document.getElementById('correo').value;

    // 2. Verificar que los campos no estén vacíos
    if (nombre === "" || apellido === "" || edad === "" || correo === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // 3. Mostrar el mensaje de éxito
    const mensaje = document.getElementById('mensaje');
    mensaje.innerText = "¡Registro exitoso de " + nombre + " " + apellido + "!";

    // 4. (Opcional) Limpiar el formulario después de enviar
    document.getElementById('miFormulario').reset();
}
