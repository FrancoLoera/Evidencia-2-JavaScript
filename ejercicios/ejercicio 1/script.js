function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    const operacion = document.getElementById('operaciones').value;

    switch (operacion) {
        case 'sumar':
            alert(`La suma del número ${num1} y número ${num2} es ${num1 + num2}`);
            break;

        case 'restar':
            alert(`La resta del número ${num1} y número ${num2} es ${num1 - num2}`);
            break;

        case 'multiplicar':
            alert(`La multiplicación del número ${num1} y número ${num2} es ${num1 * num2}`);
            break;
        
        case 'dividir':
            alert(`La división del número ${num1} y número ${num2} es ${num1 / num2}`);
            break;

        case 'residuo':
            alert(`El residuo del número ${num1} dividido entre el número ${num2} es ${num1 % num2}`);
            break;
    }
}