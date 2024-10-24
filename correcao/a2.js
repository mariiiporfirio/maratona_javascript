/* 1. Crie um programa que peça ao usuário um valor em graus Celsiuse converta para Fahrenheit. */

document.addEventListener('DOMContentLoaded', () => {
    const celsiusInput = document.getElementById('celsius');
    
    celsiusInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            converter();
        }
    });
});

function converter() {
    const celsius = document.getElementById('celsius').value;
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('resultado').innerText = (`${celsius}°C é igual a ${fahrenheit}°F.`);
}
