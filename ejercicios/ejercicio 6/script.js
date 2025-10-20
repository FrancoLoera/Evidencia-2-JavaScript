function math_abs() {
    num = parseFloat(document.getElementById("abs").value);

    alert(`El valor absoluto de ${num} es ${Math.abs(num)}`);
}

function math_ceil() {
    num = parseFloat(document.getElementById("ceil").value);

    alert(`El valor absoluto de ${num} es ${Math.ceil(num)}`);
}

function math_random() {
    let num = Math.random();

    alert(`Número aleatorio generado: ${num}`);
}

function math_max_min() {
    let lista = [];

    for (let i = 0; i < 5; i++) {
        num = parseFloat(prompt(`${i + 1}. Ingrese un número:`));
        lista.push(num);
    }

    alert(`Tu lista contiene los números: ${lista}\nEl número máximo es ${Math.max(...lista)}\nEl número mínimo es ${Math.min(...lista)}`);
}

function number_nan() {
    let texto = Number("Hola");
    let num = 123;

    alert(`¿"Number(${texto})" es NaN? ${Number.isNaN(texto)}\n¿${num} es NaN? ${Number.isNaN(num)}`);
}

function to_fixed() {
    let num = parseFloat(document.getElementById("fixed").value);

    alert(`El número ${num} redondeado a 2 decimales es ${num.toFixed(2)}`);
}

function date() {
    let fecha = new Date();

    alert(`La fecha y hora actual es: ${fecha}`);
}

function string_length() {
    let cadena = document.getElementById("string").value;

    alert(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
}

function string_case() {
    let cadena = document.getElementById("string2").value;

    alert(`Cadena original: "${cadena}"\nEn mayúsculas: "${cadena.toUpperCase()}"\nEn minúsculas: "${cadena.toLowerCase()}"`);
}

function math_floor() {
    let num = parseFloat(document.getElementById("floor").value);

    alert(`El número ${num} redondeado hacia abajo es ${Math.floor(num)}`);
}