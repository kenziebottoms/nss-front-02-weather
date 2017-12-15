"use strict";

const api_key = require("./api_key");
const viewer = require("./view");

// smart forecast fetcher
const fetchForecast = (type, term) => {
    viewer.hideErrors();
    let promise = fetchData(term, type);
    promise.then(
        viewer.displayForecast,
        viewer.displayError
    );
};

// fetch fns (xhr fns)
const fetchData = (term, type) => {
    return new Promise((resolve, reject) => {
        let url = `http://api.wunderground.com/api/${api_key}/${forecastQueries[type]}/q/${term}.json`;
        let request = new XMLHttpRequest();
        request.open("GET", url);
        request.onload = () => resolve([type, request.responseText]);
        request.onerror = () => reject(request.statusText);
        request.send();
    });
};

// api query map
const forecastQueries = {
    "3": "forecast",
    "10": "forecast10day",
    "hourly": "hourly"
};

module.exports = { fetchForecast };