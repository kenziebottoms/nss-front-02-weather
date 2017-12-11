"use strict";

const api_key = require("./api_key");

const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

module.exports.getWeather = term => {
    let request = new XMLHttpRequest();
    request.open("GET", `http://api.wunderground.com/api/${api_key}/hourly/q/${term}.json`);
    request.addEventListener("load", displayWeather);
    request.send();
};

const displayWeather = () => {
    let data = JSON.parse(event.target.responseText);
    let results = data.response.results;
    console.log(results);
};