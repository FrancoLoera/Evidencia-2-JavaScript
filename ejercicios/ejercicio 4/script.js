function suma_ciclo() {
    let num = 1;
    let suma_par = 0;
    let suma_impar = 0;

    while (num != 0) {
        num = parseFloat(prompt("Ingrese un número (0 para terminar): "));

        if (num === 0) break;

        if (num % 2 === 0) {
            suma_par += num;
        } else {
            suma_impar += num;
        }
    }

    alert(`La suma de los números pares es ${suma_par} y la suma de los números impares es ${suma_impar}`);
}