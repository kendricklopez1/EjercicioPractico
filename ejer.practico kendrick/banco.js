document.getElementById('retirarBtn').addEventListener('click', function() {
    const nombreUsuario = document.getElementById('nombreUsuario').value;
    const cantidadRetiro = parseInt(document.getElementById('cantidadRetiro').value);

    if (!nombreUsuario || isNaN(cantidadRetiro) || cantidadRetiro <= 0) {
        alert('Ingresa un nombre de usuario y una cantidad válida.');
        return;
    }

    const billetes = [100, 50, 20, 10, 5, 1];
    const cantidadBilletes = [];

    let cantidadRestante = cantidadRetiro;

    for (let i = 0; i < billetes.length; i++) {
        const billete = billetes[i];
        const cantidad = Math.floor(cantidadRestante / billete);
        if (cantidad > 0) {
            cantidadBilletes.push({ valor: billete, cantidad });
            cantidadRestante %= billete;
        }
    }
    document.getElementById('nombreResultado').innerHTML = `<h2>La cantidad a retirar de: ${nombreUsuario}</h2>`;
    document.getElementById('c100').value = getCantidadPorValor(cantidadBilletes, 100);
    document.getElementById('c50').value = getCantidadPorValor(cantidadBilletes, 50);
    document.getElementById('c20').value = getCantidadPorValor(cantidadBilletes, 20);
    document.getElementById('c10').value = getCantidadPorValor(cantidadBilletes, 10);
    document.getElementById('c5').value = getCantidadPorValor(cantidadBilletes, 5);
    document.getElementById('c1').value = getCantidadPorValor(cantidadBilletes, 1);
});


function getCantidadPorValor(cantidadBilletes, valor) {
    for (let i = 0; i < cantidadBilletes.length; i++) {
        if (cantidadBilletes[i].valor === valor) {
            return cantidadBilletes[i].cantidad;
        }
    }
    return 0;
}