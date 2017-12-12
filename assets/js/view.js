"use strict";

module.exports.displayError = string => {
    let errorDiv = document.getElementById("errors");
    errorDiv.innerHTML = string;
    errorDiv.style("display", "block");
};

module.exports.displayHourlyForecast = forecast => {
    let forecastDiv = document.getElementById("forecast");
    [...forecast].forEach((obj, index) => {
        let hour = forecast[index];
        let card = document.createElement("div");
        card.classList = "hour card";
        
        let img = document.createElement("img");
        img.src = hour.icon_url;
        card.appendChild(img);

        forecastDiv.appendChild(card);
    });
    console.log(forecast);
};