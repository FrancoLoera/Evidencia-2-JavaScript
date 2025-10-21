function alternar_display () {
    const imagen = document.getElementById("imagen");
    const estado = window.getComputedStyle(imagen).display;

    if (estado === "none") {
        imagen.style.display = "inline-block";
    } else {
        imagen.style.display = "none";
    }
}