"use strict";

const weather = require("./weather");
const viewer = require("./view");

const activateDropdown = () => {
    let dropdown = document.getElementById("forecastTypeDropdown");
    let inputGroup = dropdown.parentNode;
    let options = inputGroup.getElementsByTagName("a");
    inputGroup.addEventListener("click", event => {
        let term = document.getElementById("location").value;
        if (event.target.classList.contains("dropdown-item")) {
            let type = event.target.dataset.type;
            if (term != "") {
                document.getElementById("forecast").innerHTML = "";
                weather.getForecast(type, term);
            } else {
                viewer.displayError("Please enter a location to search");
            }
        }
    });
};

module.exports = {activateDropdown};