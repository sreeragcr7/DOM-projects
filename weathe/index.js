const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.city');
const card = document.querySelector('.card');
const apiKey = 'c83a1edfdb42e2ba4ec625d323998bf6'

weatherForm.addEventListener('submit', async event => {
    event.preventDefault();

    const city = cityInput.value;

    if(city){

        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);

        }catch(error){
            console.error(error);
            displayError(error);
        }
        
    }else{
        displayError('Please Enter a City')
    }
});

async function getWeatherData(city) {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);
    console.log(response);

    if(!response.ok){
        throw new Error('Could not fetch weather data.')
    }
    return await response.json();

}

function displayWeatherInfo(data) {
      console.log(data)
      const {name: city, main: {temp, humidity}, weather: [{description, id}]} = data;
      card.textContent = "";
      card.style.display = 'flex';

      const cityDisplay = document.createElement('h1');
      const tempDisplay = document.createElement('p');
      const humidDisplay = document.createElement('p');
      const descDisplay = document.createElement('p');
      const weatherEmoji = document.createElement('p');

      cityDisplay.textContent = city;
      tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`; //farenheight (temp - 273.15) * 9/5 + 32
      humidDisplay.textContent = `humidity: ${humidity}`;
      descDisplay.textContent = description;
      weatherEmoji.textContent = getWeatherEmoji(id);

      cityDisplay.classList.add('displayCity')
      tempDisplay.classList.add('displayTemp')
      humidDisplay.classList.add('humidity')
      descDisplay.classList.add('desc')
      weatherEmoji.classList.add('emoji')

      card.appendChild(cityDisplay);
      card.appendChild(tempDisplay);
      card.appendChild(humidDisplay);
      card.appendChild(descDisplay);
      card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatheId){
    
    switch(true){
        case (weatheId >= 200 && weatheId < 300):
        return "⛈️";
        case (weatheId >= 300 && weatheId < 400):
        return "🌧️";
        case (weatheId >= 500 && weatheId < 600):
        return "🌧️";
        case (weatheId >= 600 && weatheId < 700):
        return "❄️";
        case (weatheId >= 700 && weatheId < 800):
        return "🌫️";
        case (weatheId === 800):
        return "🌞";
        case (weatheId >= 801 && weatheId < 810):
        return "🌥️";
        default: return '🤔';
            
    };
};

function displayError(message){

    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = message;
    errorDisplay.classList.add('error');

    card.textContent = '';
    card.style.display = 'flex';
    card.appendChild(errorDisplay);

}