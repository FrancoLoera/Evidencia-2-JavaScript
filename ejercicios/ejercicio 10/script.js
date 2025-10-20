function contador_votos() {
    // Contadores de votos
    let votosHiram = 0, votosAngel = 0, votosOmar = 0, votosNulos = 0;

    while (true) {
        // Pedir voto
        let voto = parseInt(prompt(
            "Votación: Elige un candidato ingresando su número:\n" +
            "1 - Hiram\n" +
            "2 - Ángel\n" +
            "3 - Omar\n" +
            "0 - Finalizar votación"
        ));

        if (voto === 0) break;

        if (voto === 1) votosHiram++;
        else if (voto === 2) votosAngel++;
        else if (voto === 3) votosOmar++;
        else if (voto > 0) votosNulos++;
        else alert("Ingrese un número válido (positivo).");
    }

    let totalVotos = votosHiram + votosAngel + votosOmar + votosNulos;
    let maxVotos = Math.max(votosHiram, votosAngel, votosOmar);

    let ganadores = [];
    if (votosHiram === maxVotos) ganadores.push("Hiram");
    if (votosAngel === maxVotos) ganadores.push("Ángel");
    if (votosOmar === maxVotos) ganadores.push("Omar");

    while (ganadores.length > 1) {
        alert(`Empate entre los candidatos: ${ganadores.join(" y ")}.\nSe requiere un voto adicional para desempatar.`);

        let inputDesempate = prompt(
            "Votación de desempate: ingresa el número del candidato ganador:\n" +
            ganadores.map((c, i) => `${i + 1} - ${c}`).join("\n")
        );

        if (inputDesempate === null) continue;

        let votoDesempate = parseInt(inputDesempate);

        if (!isNaN(votoDesempate) && votoDesempate >= 1 && votoDesempate <= ganadores.length) {
            let ganadorDesempate = ganadores[votoDesempate - 1];

            if (ganadorDesempate === "Hiram") votosHiram++;
            else if (ganadorDesempate === "Ángel") votosAngel++;
            else if (ganadorDesempate === "Omar") votosOmar++;

            totalVotos++;
            ganadores = [ganadorDesempate];
        } else {
            alert("Voto inválido. Intente de nuevo.");
        }
    }

    let ganador = ganadores[0];
    let votosGanador = (ganador === "Hiram") ? votosHiram : (ganador === "Ángel") ? votosAngel : votosOmar;
    let porcentajeAceptacion = 0;
    if (totalVotos > 0) {
        porcentajeAceptacion = ((votosGanador / totalVotos) * 100).toFixed(2);
    }

    alert(`Total de votos ${totalVotos} (${votosHiram} para Hiram, ${votosAngel} para Ángel, ${votosOmar} para Omar y ${votosNulos} nulos). El porcentaje de aceptación para el ganador es ${porcentajeAceptacion}%.`);
}