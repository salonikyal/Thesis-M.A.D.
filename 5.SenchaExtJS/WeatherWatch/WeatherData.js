Ext.define('WeatherData', {
    extend: 'Ext.DataView',
    xtype: 'widget.weatherdata',

    requires: [
        'Ext.data.reader.Json',
        'WeatherSingleton'
    ],

    baseCls: 'weather-panel',
    border: false,

    store: {
        storeId: 'weatherDataStore',
        fields: [
            {
                name: 'summary',
                mapping: 'weather[0].main'
            },
            {
                name: 'description',
                mapping: 'weather[0].description'
            }
        ],
        proxy: {
            type: 'jsonp',
            url : `http://api.openweathermap.org/data/2.5/weather?q=Antalya,TR&appid=e25a68c009aa630161457691d6f0a5a6&units=metric`,
            reader: {
                type: 'json'
            }
        },
        autoLoad: true
    },

    itemTpl: '<div class="weather-image-container"><img src="https://cdn2.iconfinder.com/data/icons/weather-collection-1/512/thunderstorm-ranny_day-01-48.png" alt="{summary}"/></div>' +
                '<div class="weather-details-container">' +
                    '<div><b>{name}</b></div>' +
                    '<div>{main.temp}&#176;</div>' +
                    '<div>{summary}</div>' +
              '</div>'
});