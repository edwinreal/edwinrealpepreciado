function convertir() {
    var cantidad = parseFloat(document.getElementById('amount').value);
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;

    // Definir tasas de conversión
    var tasaUSD = 1;
    var tasaCOP = 140; // Ejemplo: 1 USD = 140 COP
    var tasaEUR = 0.82; // Ejemplo: 1 USD = 0.82 EUR

    // Realizar la conversión
    var resultado;
    if (fromCurrency === 'USD' && toCurrency === 'COP') {
        resultado = cantidad * tasaCOP;
    } else if (fromCurrency === 'USD' && toCurrency === 'EUR') {
        resultado = cantidad * tasaEUR;
    } else if (fromCurrency === 'COP' && toCurrency === 'USD') {
        resultado = cantidad / tasaCOP;
    } else if (fromCurrency === 'COP' && toCurrency === 'EUR') {
        resultado = (cantidad / tasaCOP) * tasaEUR;
    } else if (fromCurrency === 'EUR' && toCurrency === 'USD') {
        resultado = cantidad / tasaEUR;
    } else if (fromCurrency === 'EUR' && toCurrency === 'COP') {
        resultado = (cantidad / tasaEUR) * tasaCOP;
    } else {
        // Misma moneda
        resultado = cantidad;
    }

    // Mostrar el resultado
    document.getElementById('resultado').value = resultado.toFixed(2);
}
