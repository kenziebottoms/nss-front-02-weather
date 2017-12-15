"use strict";

const displayError = string => {
    let errorDiv = document.getElementById("errors");
    errorDiv.innerHTML = string;
    errorDiv.style("display", "block");
};

const displayForecast = (meta) => {
    let type = meta[0];
    let data = JSON.parse(meta[1]);
    let forecast = data;
    forecastTypes[type](data);
};

const displayThreeDayForecast = data => {
    let textForecast = data.forecast.txt_forecast;
    let forecastDiv = document.getElementById("forecast");
    textForecast.forecastday.forEach(day => {
        let card = getCard(day.icon_url, day.title, '', day.fcttext);
        forecastDiv.innerHTML += card;
    });
};

const getCard = (img, title, subtitle, body) => {
    let card = `<div class="card">
        <div class="card-body">
            ${img ? '<img src="'+img+'">' : ''}
            <h3 class="card-title">${title}</h3>
            <h4 class="card-subtitle">${subtitle}</h4>
            ${body}
        </div>
    </div>`;
    return card;
};

let forecastTypes = {
    "3": displayThreeDayForecast,
};

module.exports = {displayError, displayForecast};