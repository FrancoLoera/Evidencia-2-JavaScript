function numero_secreto() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intentos = 1;
    let adivinado = false;

    while (!adivinado && intentos <= 5) {
        const intento = parseInt(prompt("Adivina el número secreto (entre 1 y 100):"));

        if (intento === numeroSecreto) {
            adivinado = true;
            alert(`¡Felicidades! Lo lograste`);
        } else if (intento < numeroSecreto) {
            alert(`El número secreto es mayor al número ingresado, te queda ${5 - intentos} intento(s)`);
        } else {
            alert(`El número secreto es menor al número ingresado, te queda ${5 - intentos} intento(s)`);
        }

        intentos++;
    }

    if (intentos > 5 && !adivinado) {
        alert(`Suerte para la próxima, el número secreto es ${numeroSecreto}`);
    }
}