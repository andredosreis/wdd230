const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

const mykey = "7b58e6c1f234a97e9ae137f0a8f989a6";
const mylat = "39.74738560624877";
const mylong = "-8.80898110846988";

// Construct a full using temperature literals
const myurl = `https://api.openweathermap.org/data/2.5/weather?lat=${mylat}&lon=${mylong}&appid=${mykey}&units=imperial`;

// TRY TO GRAB THE CURRENT WEATHER DATA
async function apiFetch() {
    try {
        const response = await fetch(myurl);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to display results
function displayResults(data) {
    myTown.innerHTML = `Location: ${data.name}`;
    myDescription.innerHTML = `Weather: ${data.weather[0].description}`;
    myTemperature.innerHTML = `Temperature: ${data.main.temp}°F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    myGraphic.setAttribute('src', iconsrc);
    myGraphic.setAttribute('alt', data.weather[0].description);
}

// Call the function to fetch and display weather data
apiFetch();
