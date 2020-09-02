// create weather class
class Weather {
  constructor(city) {
    this.apiKey = "e25a68c009aa630161457691d6f0a5a6";
    this.city = city;
  }

  // fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  // change weather location
  changeLocation(city) {
    this.city = city;
  }
}
