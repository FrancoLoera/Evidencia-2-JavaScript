function ocultar_loader() {
    const loader = document.getElementById("loader");
    const estado = window.getComputedStyle(loader).display;

    if (estado === "none") {
        loader.style.display = "inline-block";
    } else {
        loader.style.display = "none";
    }
}