var x = document.querySelector(".city-name");
var date = new Date();
var hour = date.getHours();



$("#winfo").hide();

document.getElementById("btn-choice").addEventListener("click", function () {
    getWheater($("#city-input").val());
});

// Event handling for press Enter 
document.getElementById("city-input").addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        getWheater($("#city-input").val());
        console.log("asd");
        $("#city-input").val("");
    }
}, false);




function getWheater(city) {
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&appid=e25a68c009aa630161457691d6f0a5a6",
        function (response) {
            console.log(response);
            var city2 = city;
            var country = response.sys.country;
            var wheater = response.weather[0].main;
            var temp = response.main.temp;
            var pressure = response.main.pressure;
            var windSpeed = response.wind.speed;
			var windDir = response.wind.deg;
			var cloud = response.clouds.all;
			var feellike = response.main.feels_like;
			var hum = response.main.humidity;
            console.log(city2 + " " + country + " " + wheater + " " + temp + " " + pressure + " " + windSpeed);
            wheaterSet(city2, country, wheater, temp, pressure, windSpeed, windDir, cloud, feellike, hum);
        });
}

function wheaterSet(city, country, wheater, temp, pressure, windSpeed, windDir, cloud, feellike, hum) {
    console.log(wheater);
    if (wheater == "Clear") {
		document.getElementById("iconw").src = "img/clear_day.png";
    }
   
    if (wheater == "Rain") {
       document.getElementById("iconw").src = "img/rain.png";
    }
    if (wheater == "Clouds") {
       document.getElementById("iconw").src = "img/clouds.png";
    }
    if (wheater == "Clear" && (hour >= 20 && hour <= 6)) {
        document.getElementById("iconw").src = "img/01n.png";
    }
    if (wheater == "Snow") {
       document.getElementById("iconw").src = "img/snowr.png";
    }
    if (wheater == "Mist") {
        document.getElementById("iconw").src = "img/fog.png";
    }
    if (wheater == "Thunderstorm") {
        document.getElementById("iconw").src = "img/thunder.png";
    }
    //    $(".container-fluid").css("background", "rgba(0, 0, 0, 0.4)");    
    $("#city-info").html(city + " " + country);
    $("#wheat-info").html(wheater);
    $("#temp-info").html(temp + " &deg;C");
    $("#pr").html(pressure + " hPa");
    $("#ws").html(windSpeed + " m/s");
	$("#wd").html(windDir + "&deg;");
	$("#cl").html(cloud + "%");
	$("#fl").html(feellike + " &deg;C");
	$("#hd").html(hum + "%");
    $("#winfo").show();
    
}
