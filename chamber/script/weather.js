// Função para converter Fahrenheit para Celsius
function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5 / 9).toFixed(1); // Converte e arredonda para 1 casa decimal
}

// Função para atualizar o clima
function updateWeather(data) {
    const weather = document.querySelector('#weather');
    const town = document.querySelector('#town');
    const description = document.querySelector('#description');
    const temperature = document.querySelector('#temperature');
    const graphic = document.querySelector('#graphic');

    // Atualiza o clima atual
    town.textContent = data.current.name;
    description.textContent = data.current.weather[0].description;
    temperature.textContent = `${fahrenheitToCelsius(data.current.main.temp)}°C`;
    graphic.src = `https://openweathermap.org/img/w/${data.current.weather[0].icon}.png`;
    graphic.alt = data.current.weather[0].description;

    // 3 Day Forecast
    let table = document.createElement('table');
    let tableHead = document.createElement('thead');
    let tableBody = document.createElement('tbody');
    let tableRow = document.createElement('tr');
    let tableHeadData = document.createElement('th');
    tableHeadData.textContent = '3 Day Forecast';
    tableHeadData.setAttribute('colspan', '3');
    tableHead.appendChild(tableHeadData);
    table.appendChild(tableHead);

    for (let i = 0; i < 3; i++) {
        let tableData = document.createElement('td');
        let icon = document.createElement('img');
        let iconsrc = `https://openweathermap.org/img/w/${data.forecast.list[i].weather[0].icon}.png`;
        let desc = data.forecast.list[i].weather[0].description;
        icon.setAttribute('src', iconsrc);
        icon.setAttribute('alt', desc);
        tableData.appendChild(icon);
        tableData.innerHTML += `<br>${fahrenheitToCelsius(data.forecast.list[i].main.temp)}&deg;C`;
        tableRow.appendChild(tableData);
    }
    tableBody.appendChild(tableRow);
    table.appendChild(tableBody);
    table.setAttribute('id', 'forecast');
    weather.appendChild(table);
}

// Função para obter o clima atual e a previsão de 3 dias
function fetchWeather() {
    const apiKey = "7b58e6c1f234a97e9ae137f0a8f989a6";
    const lat = "39.74738560624877";
    const lon = "-8.80898110846988";

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
        .then(response => response.json())
        .then(data => {
            const currentWeather = data;
            return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
                .then(response => response.json())
                .then(forecastData => {
                    updateWeather({ current: currentWeather, forecast: forecastData });
                });
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

// Chama a função para obter o clima ao carregar a página
document.addEventListener('DOMContentLoaded', fetchWeather);
