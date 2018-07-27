# Whither the Weather?

![](https://img.shields.io/badge/data-weather_underground_api-yellow.svg)
![](https://img.shields.io/badge/template-none-lightgrey.svg)
![](https://img.shields.io/badge/js-jquery-blue.svg)
![](https://img.shields.io/badge/modularity-browserify-yellow.svg)
![](https://img.shields.io/badge/css_preprocessor-scss-ff69b4.svg)
![](https://img.shields.io/badge/css_framework-bootstrap-5F2C7C.svg)
![](https://img.shields.io/badge/mvp-working-brightgreen.svg)

### Run Locally
```
git clone git@github.com:kenziebottoms/nss-front-02-weather.git
npm install
grunt
hs -o
```

### Requirements

:white_check_mark: Use the ~~OpenWeather~~ Weather Underground API to build a weather forecast search tool

- [x] Pick three types of forecasts to choose from.
- [x] User inputs zipcode and selects forecast type from a dropdown.
- [x] Use an XHR to fetch the api data. The syntax will be just like the calls you have written to fetch a local JSON file, only you'll be pulling in remote data. It will return the data in JSON by default.
- [x] Present the returned data in a nicely styled display. Use an image to accompany the forecast/conditions, such as a cloud with raindrops when the chance for precip is above a certain percentage.
- [x] The UI should use Bootstrap.

### Resources

[Weather Underground API](https://www.wunderground.com/weather/api)
- [Docs](https://www.wunderground.com/weather/api/d/docs)

~~[OpenWeatherMap API](http://openweathermap.org/api)~~

### Credit

[Climacons](http://adamwhitcroft.com/climacons/) by [Adam Whitcroft](https://twitter.com/AdamWhitcroft)