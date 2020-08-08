Ext.define('WeatherSingleton', {
    singleton: true,
    alternateClassName: 'weatherutil',
    config: {
        latitude: 0,
        longitude: 0,
        cityName: 'Antalya',
        countryCode: 'TR'
    },

    constructor: function (config) {
        this.initConfig(config);
    }
});