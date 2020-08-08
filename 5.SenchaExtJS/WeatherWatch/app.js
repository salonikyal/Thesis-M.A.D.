Ext.application({
    name: 'Fiddle',

    launch: function () {

        Ext.create('Ext.panel.Panel', {
            xtype: 'weatherview',

            requires: [
                'Fiddle.WeatherData',
                'Fiddle.SettingsWindow',
                'Fiddle.WeatherSingleton'
            ],

            controller: 'weatherView',

            title: 'Weather',
            itemId: 'weatherView',

            tools: [{
                type: 'refresh',
                handler: 'refreshGeoLocation'
            }, {
                type: 'gear',
                handler: 'weatherWindow'
                // listeners: {
                //     click: {
                //         scope: 'weatherdata',
                //         fn: function () {
                //             // debugger;
                //             var win = this.lookupReference('settingsWindow');

                //             if (!win) {
                //                 win = new Fiddle.SettingsWindow();
                //                 this.getView().add(win);
                //             }

                //             win.show();
                //         }
                //     }
                // }
            }],
            // html: 'Welcome to our weather app. Click on refresh to get the latest weather information',

            items: [{
                xtype: 'weatherdata'
            }],

            renderTo: Ext.getBody()
        });
    }
});
