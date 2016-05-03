app.controller('WeatherController', function (WeatherService, $interval) {
	var wc = this;
	
	wc.units = '°F';
	
	getWeather();
	
	$interval ( getWeather, 5 * 60 * 1000);
	
	// DO NOT EDIT ABOVE

	wc.toggleUnits = function() {
		wc.units = wc.units === '°F' ? '°C' : '°F';
		wc.updateTemp();
	}
	
	wc.updateTemp = function() {
		
		if(wc.units === '°F') {
			wc.toFah();
		}
		else {
			wc.toCel();
		}
		
	}
	
	wc.toCel = function () {

		var weather = wc.weather.main.temp;
		celsius = Math.round(weather - 273.15);
		wc.temp = celsius + wc.units;

	}
	
	wc.toFah = function() {
		
		var weather = wc.weather.main.temp;
		fahrenheit = Math.round(weather * 1.8 - 459.67);
		wc.temp = fahrenheit + wc.units;
	}

	function getWeather() {
		
		WeatherService.getWeather().then(function (weather) {
			wc.weather = weather;
			wc.updateTemp();
			

		});
	}
});