function cambiar_propiedad () {
    parrafo = document.getElementById("parrafo");

    if (parrafo.style.fontSize === "16px") {
        parrafo.style.fontSize = "20px";
    } else {
        parrafo.style.fontSize = "16px";
    }
}