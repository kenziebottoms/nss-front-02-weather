"use strict";

const api_key = require("./api_key");
const viewer = require("./view");

const threeDayForecast = term => {
    return new Promise((resolve, reject) => {
        let url = `http://api.wunderground.com/api/${api_key}/forecast/q/${term}.json`;
        let request = new XMLHttpRequest();
        request.open("GET", url);
        request.onload = () => resolve(["3", request.responseText]);
        request.onerror = () => reject(request.statusText);
        request.send();
    });
};

const forecastTypes = {
    "3" : threeDayForecast,
    // "10" : tenDayForecast,
    // "hourly" : hourlyForecast,
};

const getForecast = (type, term) => {
    let promise = forecastTypes[type](term);
    console.log(promise);
    promise.then(
        viewer.displayForecast,
        viewer.displayError
    );
};

module.exports = {getForecast};