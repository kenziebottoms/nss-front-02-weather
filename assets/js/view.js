"use strict";

const displayError = string => {
    let errorDiv = document.getElementById("errors");
    errorDiv.innerHTML = string;
    errorDiv.style.display = "block";
};
const hideErrors = () => {
    let errorDiv = document.getElementById("errors");
    errorDiv.innerHTML = "";
    errorDiv.style.display = "none";
};

const displayForecast = (meta) => {
    let type = meta[0];
    let data = JSON.parse(meta[1]);
    let forecast = data;
    displayForecastTypes[type](data);
};

const displayHourlyForecast = data => {
    let forecast = data.hourly_forecast;
    let tableStart = `<table class="table"><tbody>`;
    let tableEnd = `</tbody></table>`;
    let table = tableStart;
    if (forecast) {
        forecast.forEach(hour => {
            console.log(hour);
            let tr = `<tr>
                <td><img src="${hour.icon_url}"></td>
                <td>${hour.FCTTIME.weekday_name}</td>
                <td>${hour.FCTTIME.civil}</td>
                <td>${hour.condition}</td>
                <td>${hour.temp.english}&deg;F</td>
                <td>${hour.humidity}% humidity</td>
            </tr>`;
            table += tr;
        });
        document.getElementById("forecast").innerHTML = table;
    } else if (data.response.results) {
        displayError("Please be a little more specific. Try adding a state.");
    }
};

const displayThreeDayForecast = data => {
    if (data.forecast) {
        let textForecast = data.forecast.txt_forecast;
        let forecastDiv = document.getElementById("forecast");
        let cardsDiv = document.createElement("div");
        cardsDiv.id = "cards";
        forecastDiv.appendChild(cardsDiv);
        textForecast.forecastday.forEach(day => {
            let card = getCard(day.icon_url, day.title, '', day.fcttext);
            cardsDiv.innerHTML += card;
        });
    } else if (data.response.results) {
        displayError("Please be a little more specific. Try adding a state.");
    }
};

const displayTenDayForecast = data => {
    if (data.forecast) {
        let textForecast = data.forecast.txt_forecast;
        let forecastDiv = document.getElementById("forecast");
        let cardsDiv = document.createElement("div");
        cardsDiv.id = "cards";
        forecastDiv.appendChild(cardsDiv);
        textForecast.forecastday.forEach(day => {
            let card = getCard(day.icon_url, day.title, '', day.fcttext);
            cardsDiv.innerHTML += card;
        });
    } else if (data.response.results) {
        displayError("Please be a little more specific. Try adding a state.");
    }
};

const getCard = (img, title, subtitle, body) => {
    let card = `<div class="card">
        <div class="card-body">
            ${img ? '<img src="' + img + '">' : ''}
            <h3 class="card-title">${title}</h3>
            <h4 class="card-subtitle">${subtitle}</h4>
            ${body}
        </div>
    </div>`;
    return card;
};

let displayForecastTypes = {
    "hourly": displayHourlyForecast,
    "3": displayThreeDayForecast,
    "10": displayTenDayForecast,
};

module.exports = { displayError, displayForecast, hideErrors };