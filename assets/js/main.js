"use strict";

const weather = require("./weather");
const events = require("./events");

weather.getForecast("3", "Nashville TN");
events.activateDropdown();