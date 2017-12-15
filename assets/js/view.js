"use strict";

// smart forecast display
const displayForecast = (meta) => {
    let type = meta[0];
    let data = JSON.parse(meta[1]);
    let forecast = data;
    displayForecastTypes[type](data);
};

// errors
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

// forecast display fns
const displayDailyForecast = (data) => {
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
const displayHourlyForecast = data => {
    let forecast = data.hourly_forecast;
    let tableStart = `<table class="table"><tbody>`;
    let tableEnd = `</tbody></table>`;
    let table = tableStart;
    if (forecast) {
        forecast.forEach(hour => {
            let info = [
                `<img src="${hour.icon_url}">`,
                hour.FCTTIME.weekday_name,
                hour.FCTTIME.civil,
                hour.condition,
                hour.temp.english + "&deg; F",
                hour.humidity + "% humidity"
            ];
            let tr = getTr(info);
            table += tr;
        });
        document.getElementById("forecast").innerHTML = table;
    } else if (data.response.results) {
        displayError("Please be a little more specific. Try adding a state.");
    }
};

// element builders
const getTr = (list) => {
    let tr = `<tr>`;
    list.forEach((item, index) => {
        tr += `<td>${list[index]}</td>`;
    });
    tr += `</tr>`;
    return tr;
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

// display fn map
let displayForecastTypes = {
    "hourly": displayHourlyForecast,
    "3": displayDailyForecast,
    "10": displayDailyForecast,
};

module.exports = { displayError, displayForecast, hideErrors };