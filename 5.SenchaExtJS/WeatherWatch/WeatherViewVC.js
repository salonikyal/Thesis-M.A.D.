Ext.define('WeatherViewVC', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.weatherView',

    requires: [],

    weatherWindow: function () {
        // debugger;

        var win = this.lookupReference('settingsWindow');

        if (!win) {
            win = new Fiddle.SettingsWindow();
            this.getView().add(win);
        }

        win.show();
    },

    refreshGeoLocation: function (button) {
        var store =  Ext.getStore('weatherDataStore');

        store.load({
            url : `http://api.openweathermap.org/data/2.5/weather?q=Antalya,TR&appid=e25a68c009aa630161457691d6f0a5a6&units=metric`,
        });

        console.log('refreshing weather-panel');
    }

});
