function promedio_calificaciones () {
    const num = parseFloat(document.getElementById("calificaciones").value);
    let calificaciones = [];

    for (let i = 1; i <= num; i++) {
        let calificacion = parseFloat(prompt("Ingrese la calificación " + i + ":"));
        calificaciones.push(calificacion);
    }

    let suma = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    let promedio = suma / calificaciones.length;

    if (promedio >= 70.0) {
        alert(`Estudiante aprobado. Promedio: ${promedio}`);
    } else {
        alert(`Estudiante reprobado. Promedio: ${promedio}`);
    }
}