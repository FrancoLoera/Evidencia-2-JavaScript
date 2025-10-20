function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    let resultado = '<table class="table table-striped w-auto mt-4">';

    for (let i = 1; i <= 10; i++) {
        resultado += `<tr>
                                <td class="text-end">${num1} X ${i} = </td>
                                <td class="ps-0">${num1 * i}</td>
                            </tr>`;
    }

    resultado += '</table>';
    document.getElementById('resultado').innerHTML = resultado;
}