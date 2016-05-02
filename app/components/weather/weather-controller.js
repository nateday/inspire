app.controller('WeatherController', function (WeatherService) {
	var wc = this;
	WeatherService.getWeather().then(function (weather) {
		wc.weather = weather;
		wc.toCel();
	})
	// DO NOT EDIT ABOVE

	wc.toCel = function () {

		var weather = wc.weather.main.temp;
		celsius = Math.round(weather - 273.15);
		wc.temp = celsius;

	}

})