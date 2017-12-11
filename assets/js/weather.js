"use strict";

const api_key = "69ef02f6918aed70d9b7951bef8663e1";
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

module.exports.getWeather = zip => {
    let request = new XMLHttpRequest();
    request.open("GET", `http://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&appid=${api_key}&units=imperial`);
    request.addEventListener("load", displayWeather);
    request.send();
};

const displayWeather = () => {
    let data = JSON.parse(event.target.responseText);
    let forecast = data.list;
    let targetDiv = document.getElementById("forecast");
    console.log(forecast);
    forecast.forEach(object => {
        let card = document.createElement("div");
        card.classList = "card";

        let img = document.createElement("img");
        img.src = `assets/img/${object.weather[0].icon}.svg`;
        img.classList = "card-img-top";
        card.appendChild(img);

        let cardBody = document.createElement("div");
        cardBody.classList = "card-body";

        let cardTitle = document.createElement("h3");
        let date = new Date(object.dt*1000);
        cardTitle.innerText = week[date.getDay()];
        cardBody.appendChild(cardTitle);

        let cardSubtitle = document.createElement("div");
        cardSubtitle.innerText = `${object.main.temp_min} / ${object.main.temp_max}`;
        cardSubtitle.classList = "card-subtitle text-muted";
        cardBody.appendChild(cardSubtitle);

        card.appendChild(cardBody);

        targetDiv.appendChild(card);
    });
};