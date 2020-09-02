class UI {
  constructor() {
    this.location = document.getElementById("location");
    this.description = document.getElementById("desc");
    this.temp = document.getElementById("temp");
	 this.feels = document.getElementById("feels");
    this.icon = document.getElementById("icon");
    this.humidity = document.getElementById("humidity");
    this.wind = document.getElementById("wind-speed");
    this.cloud = document.getElementById("cloud");
	this.pressure = document.getElementById("pressure");
  }

  display(weather) {
    this.location.textContent = weather.name;
    this.description.textContent = weather.weather[0].description;
    this.temp.textContent = `${weather.main.temp}°C`;
	this.feels.textContent = `Feels Like ${weather.main.feels_like}°C`;
    this.icon.setAttribute(
      "src",
      `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    );
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/sec`;
    this.cloud.textContent = `Cloudiness: ${weather.clouds.all}%`;
	this.pressure.textContent = `Pressure: ${weather.main.pressure}hpa`;
  }
}
