function calcularPrecio() {
    const horas = parseInt(document.getElementById("horas").value);
    const esAntiguoAlumno = document.getElementById("antiguoAlumno").checked;
    const esRepetidor = document.getElementById("repetidor").checked;
    const seleccionMatematicasI = document.getElementById("matematicasI").checked;
    const seleccionProgramacionBasica = document.getElementById("programacionBasica").checked;
    const seleccionMatematicasII = document.getElementById("matematicasII").checked;
    const seleccionProgramacionAvanzada = document.getElementById("programacionAvanzada").checked;

    const precioPorHora = 5;
    let precioTotal = 0;

    if (seleccionMatematicasII && !seleccionMatematicasI) {
        mostrarResultado("Error: No puedes seleccionar Matemáticas II sin haber seleccionado Matemáticas I.", "alert-danger");
        return;
    }

    const materiasSeleccionadas = [
        seleccionMatematicasI,
        seleccionProgramacionBasica,
        seleccionMatematicasII,
        seleccionProgramacionAvanzada
    ].filter(Boolean).length;

    precioTotal = horas * precioPorHora * materiasSeleccionadas;

    if (esAntiguoAlumno) {
        precioTotal *= 0.88;
    }

    if (esRepetidor) {
        precioTotal *= 2;
    }

    mostrarResultado(`Precio total mensual: €${precioTotal.toFixed(2)}`, "alert-info");
}

function mostrarResultado(mensaje, clase) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.style.display = "block";
    resultadoDiv.className = `mt-4 alert ${clase}`;
    resultadoDiv.innerHTML = mensaje;
}
