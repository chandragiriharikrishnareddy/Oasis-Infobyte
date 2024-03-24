document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperatureInput').value.trim();
    const unitSelect = document.getElementById('unitSelect').value;

    if (!temperatureInput || isNaN(temperatureInput)) {
        alert('Please enter a valid temperature!');
        return;
    }

    let convertedTemperature;
    let resultUnit;

    if (unitSelect === 'celsius') {
        convertedTemperature = convertToCelsius(parseFloat(temperatureInput));
        resultUnit = 'Celsius';
    } else if (unitSelect === 'fahrenheit') {
        convertedTemperature = convertToFahrenheit(parseFloat(temperatureInput));
        resultUnit = 'Fahrenheit';
    } else if (unitSelect === 'kelvin') {
        convertedTemperature = convertToKelvin(parseFloat(temperatureInput));
        resultUnit = 'Kelvin';
    }

    document.getElementById('resultDisplay').textContent = `Converted temperature: ${convertedTemperature} ${resultUnit}`;
});

function convertToCelsius(temperature) {
    return (temperature - 32) * (5 / 9);
}

function convertToFahrenheit(temperature) {
    return (temperature * (9 / 5)) + 32;
}

function convertToKelvin(temperature) {
    return temperature + 273.15;
}
