function dataGrid() {
    filas = parseInt(document.getElementById("filas").value);

    if (filas <= 0) {
        alert("Por favor, ingrese un número válido de filas.");
        return;
    }

    let tabla = `<table class='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>`;

    for (let i = 1; i <= filas; i++) {
        let nombre = prompt(`Ingrese el nombre para la fila ${i}:`);

        tabla += `<tr>
                    <td>${i}</td>
                    <td>${nombre}</td>
                    <td><button class='btn btn-danger' onclick='this.parentElement.parentElement.remove()'>Eliminar</button></td>
                    <td><button class='btn btn-warning'>Editar</button></td>
                  </tr>`;
    }
    tabla += `</tbody></table>`;

    document.getElementById("resultado").innerHTML = tabla;
}