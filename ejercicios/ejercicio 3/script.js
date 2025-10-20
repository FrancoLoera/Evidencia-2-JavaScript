function tipo_triangulo() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    if (num1 === num2 && num2 === num3) {
        console.log('El tipo de tríangulo es: Equilátero: todos los lados son iguales.')
        alert('El tipo de tríangulo es: Equilátero: todos los lados son iguales.')
    } else if (num1 === num2 || num1 === num3 || num2 === num3) {
        console.log('El tipo de tríangulo es: Isósceles: dos de sus lados son iguales y otro diferente.')
        alert('El tipo de tríangulo es: Isósceles: dos de sus lados son iguales y otro diferente.')
    } else {
        console.log('El tipo de tríangulo es: Escaleno: todos los lados son diferentes.')
        alert('El tipo de tríangulo es: Escaleno: todos los lados son diferentes.')
    }
}