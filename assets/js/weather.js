"use strict";

const api_key = require("./api_key");
const viewer = require("./view");

const hourlyForecast = term => {
    return new Promise((resolve, reject) => {
        let url = `http://api.wunderground.com/api/${api_key}/hourly/q/${term}.json`;
        let request = new XMLHttpRequest();
        request.open("GET", url);
        request.onload = () => resolve(["hourly", request.responseText]);
        request.onerror = () => reject(request.statusText);
        request.send();
    });
};

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

const tenDayForecast = term => {
    return new Promise((resolve, reject) => {
        let url = `http://api.wunderground.com/api/${api_key}/forecast10day/q/${term}.json`;
        let request = new XMLHttpRequest();
        request.open("GET", url);
        request.onload = () => resolve(["10", request.responseText]);
        request.onerror = () => reject(request.statusText);
        request.send();
    });
};

const forecastTypes = {
    "3" : threeDayForecast,
    "10" : tenDayForecast,
    "hourly" : hourlyForecast,
};

const getForecast = (type, term) => {
    viewer.hideErrors();
    let promise = forecastTypes[type](term);
    promise.then(
        viewer.displayForecast,
        viewer.displayError
    );
};

module.exports = {getForecast};