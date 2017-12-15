"use strict";

module.exports.displayError = string => {
    let errorDiv = document.getElementById("errors");
    errorDiv.innerHTML = string;
    errorDiv.style("display", "block");
};