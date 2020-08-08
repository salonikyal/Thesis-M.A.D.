Ext.define('SettingsWindow', {
    extend: 'Ext.window.Window',
    xtype: 'weatherwindow',

    reference: 'settingsWindow',

    title: 'Weather Panel Settings',
    width: 300,
    height: 230,
    minWidth: 300,
    minHeight: 230,
    layout: 'fit',
    resizable: true,
    modal: true,
    closeAction: 'hide',

    items: [{
        xtype: 'form',
        reference: 'windowForm',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        border: false,
        bodyPadding: 10,

        fieldDefaults: {
            msgTarget: 'side',
            //labelAlign: 'left',
            labelWidth: 100,
            labelStyle: 'font-weight:bold'
        },

        items: [
            {
                xtype: 'combobox',
                fieldLabel: 'Country',
                itemId: 'countryName',
                allowBlank: false,
                // listeners: {
                //     select: this.getIso3,
                //     change: this.getIso3,
                //     scope: this
                // }
            },
            {
                xtype: 'combobox',
                fieldLabel: 'City',
                itemId: 'cityName',
                afterLabelTextTpl: OWeb.Globals.required,
                allowBlank: false,
                // listeners: {
                //     select: this.getCity,
                //     change: this.getCity,
                //     scope: this
                // }
            },
            {
                xtype: 'combobox',
                fieldLabel: 'Units',
                itemId: 'weatherUnit',
                allowBlank: false
            }
        ],

        buttons: [{
            text: 'Cancel',
            handler: function () {
                console.log('onFormCancel');
            }
        }, {
            text: 'Send',
            handler: 'setWeatherSettigs'
        }]
    }],

    getIso3: function () {
        var me = this;

        var country = me.down('[name=iso3]').getValue();
    },

    getCity: function () {
        var me = this;

        var country = me.down('[name=city]').getValue();
    },

    getParams: function () {
        var me = this;

        var iso3 = me.down('[name=iso3]').getValue();
        var city = me.down('[name=city]').getValue();

        var location = {
            countryCode: iso3,
            cityCode: city
        };

        return location;
    }
});