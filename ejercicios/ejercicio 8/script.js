function conversor () {
    let decimal = parseInt(document.getElementById('decimal').value);
    let binario = "";

    while (decimal > 0) {
        binario = (decimal % 2) + binario;
        decimal = Math.floor(decimal / 2);
    }

    if (binario === "") binario = "0";

    document.getElementById('binario').value = binario;

}