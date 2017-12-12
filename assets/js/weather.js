"use strict";

const api_key = require("./api_key");

const viewer = require("./view");

const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

module.exports.getWeather = term => {
    let request = new XMLHttpRequest();
    request.open("GET", `http://api.wunderground.com/api/${api_key}/hourly/q/${term}.json`);
    request.addEventListener("load", parseWeather);
    request.send();
};

const parseWeather = () => {
    let data = JSON.parse(event.target.responseText);
    if (data.hourly_forecast) {
        viewer.displayHourlyForecast(data.hourly_forecast);
    } else {
        viewer.displayError("Please enter a more specific location value. (Try adding a state.)");
    }
};