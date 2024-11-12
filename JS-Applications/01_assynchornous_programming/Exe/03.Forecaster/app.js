function attachEvents() {
    let conditions = {
        Sunny: '\u2600',
        'Partly sunny': '⛅',
        Overcast: '☁',
        Rain: '☂',
    };

    const locationElm = document.querySelector('#location');
    const forecastElm = document.querySelector('#forecast');

    button = document.querySelector('#submit');
    button.addEventListener('click', getWeather);

    function getWeather() {
        forecastElm.innerHTML = `<div id="current">
                <div class="label">Current conditions</div>
            </div>
            <div id="upcoming">
                <div class="label">Three-day forecast</div>
            </div>`;
        const locationUrl = `http://localhost:3030/jsonstore/forecaster/locations`;

        fetch(locationUrl)
            .then((response) => response.json())
            .then((data) => {
                const town = data.find((el) => el.name.toLowerCase() === locationElm.value.toLowerCase());
                forecastElm.style.display = 'block';

                if (!town) {
                    throw new Error('Error (Invalid town name)!');
                }

                if (town) {
                    getWeatherCurrent(town.code);
                    getWeatherUpcoming(town.code);
                }

                locationElm.value = '';
            })
            .catch((error) => {
                forecastElm.innerHTML = `<p id="errorMessage">${error.message}</p>`;
            });
    }

    function getWeatherCurrent(locationCode) {
        if (document.getElementById('errorMessage')) {
            document.getElementById('errorMessage').remove();
        }
        const currentConditionsUrl = `http://localhost:3030/jsonstore/forecaster/today/${locationCode}`;

        fetch(currentConditionsUrl)
            .then((response) => response.json())
            .then((data) => {
                const div = document.createElement('div');
                div.className = 'forecasts';

                const symbol = document.createElement('span');
                symbol.className = 'condition symbol';
                symbol.textContent = conditions[data.forecast.condition];

                const town = document.createElement('span');
                town.className = 'forecast-data';
                town.textContent = data.name;

                const temp = document.createElement('span');
                temp.className = 'forecast-data';
                temp.textContent = `${data.forecast.low}°/${data.forecast.high}°`;

                const condition = document.createElement('span');
                condition.className = 'forecast-data';
                condition.textContent = data.forecast.condition;

                const conditionClass = document.createElement('span');
                conditionClass.className = 'condition';
                conditionClass.appendChild(town);
                conditionClass.appendChild(temp);
                conditionClass.appendChild(condition);

                div.appendChild(symbol);
                div.appendChild(conditionClass);

                document.querySelector('#current').appendChild(div);
            });
    }

    function getWeatherUpcoming(locationCode) {
        const currentConditionsUrl = `http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`;
        fetch(currentConditionsUrl)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data.forecast);

                const divForecastInfo = document.createElement('div');
                divForecastInfo.className = 'forecast-info';

                for (const day of data.forecast) {
                    console.log(day);

                    const spanClass = document.createElement('span');
                    spanClass.className = 'upcoming';
                    spanClass.innerHTML = `
                    <span class="symbol">${conditions[day.condition]}</span>
                    <span class="forecast-data">${day.low}°/${day.high}°</span>
                    <span class="forecast-data">${day.condition}</span>
                    </span>`;

                    divForecastInfo.appendChild(spanClass);
                }

                document.querySelector('#upcoming').appendChild(divForecastInfo);
            });
    }
}

attachEvents();
