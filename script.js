document.addEventListener('DOMContentLoaded', () => {
    const periodicTable = document.querySelector('.periodic-table');
    const infoBox = document.getElementById('info-box');

    // Fetch data from the API
    fetch('https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json')
        .then(response => response.json())
        .then(data => {
            const elements = data.elements;
            elements.forEach(element => {
                const elementDiv = document.createElement('div');
                elementDiv.classList.add('element');
                elementDiv.setAttribute('data-symbol', element.symbol);
                elementDiv.setAttribute('data-name', element.name);
                elementDiv.setAttribute('data-number', element.number);
                elementDiv.setAttribute('data-mass', element.atomic_mass);
                elementDiv.textContent = element.symbol;
                periodicTable.appendChild(elementDiv);
            });

            periodicTable.addEventListener('mouseover', (event) => {
                if (event.target.classList.contains('element')) {
                    const name = event.target.getAttribute('data-name');
                    const number = event.target.getAttribute('data-number');
                    infoBox.textContent = `Name: ${name}, Atomic Number: ${number}`;
                }
            });

            periodicTable.addEventListener('mouseout', (event) => {
                if (event.target.classList.contains('element')) {
                    infoBox.textContent = 'Hover over an element';
                }
            });

            periodicTable.addEventListener('click', (event) => {
                if (event.target.classList.contains('element')) {
                    const name = event.target.getAttribute('data-name');
                    const number = event.target.getAttribute('data-number');
                    const mass = event.target.getAttribute('data-mass');
                    alert(`Element: ${name}\nAtomic Number: ${number}\nAtomic Mass: ${mass}`);
                }
            });
        })
        .catch(error => console.error('Error fetching the periodic table data:', error));
});
