import 'package:flutter/material.dart';
import 'package:flutter_weather/main.dart';
import 'package:flutter_weather/src/model/weather.dart';
import 'package:flutter_weather/src/widgets/forecast_horizontal_widget.dart';
import 'package:flutter_weather/src/widgets/value_tile.dart';
import 'package:flutter_weather/src/widgets/weather_swipe_pager.dart';
import 'package:intl/intl.dart';

class WeatherWidget extends StatelessWidget {
  final Weather weather;

  WeatherWidget({this.weather}) : assert(weather != null);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Text(
            this.weather.cityName.toUpperCase(),
            style: TextStyle(
                fontWeight: FontWeight.w900,
                letterSpacing: 5,
                color: AppStateContainer.of(context).theme.accentColor,
                fontSize: 25),
          ),
          SizedBox(
            height: 25,
          ),
          Text(
            this.weather.description.toUpperCase(),
            style: TextStyle(
                fontWeight: FontWeight.w200,
                letterSpacing: 5,
                fontSize: 15,
                color: AppStateContainer.of(context).theme.accentColor),
          ),
          WeatherSwipePager(weather: weather),
          Padding(
            child: Divider(
              color:
                  AppStateContainer.of(context).theme.accentColor,
            ),
            padding: EdgeInsets.all(10),
          ),
          ForecastHorizontal(weathers: weather.forecast),
          Padding(
            child: Divider(
              color:
                  AppStateContainer.of(context).theme.accentColor,
            ),
            padding: EdgeInsets.all(10),
          ),
          Row(mainAxisAlignment: MainAxisAlignment.center, children: <Widget>[
            ValueTile("Wind Speed", '${this.weather.windSpeed} m/s'),
            Padding(
              padding: const EdgeInsets.only(left: 15, right: 15),
              child: Center(
                  child: Container(
                width: 1,
                height: 40,
                color: AppStateContainer.of(context)
                    .theme
                    .accentColor
                    .withAlpha(80),
              )),
            ),
            ValueTile(
                "Sunrise",
                DateFormat('h:m a').format(DateTime.fromMillisecondsSinceEpoch(
                    this.weather.sunrise * 1000))),
            Padding(
              padding: const EdgeInsets.only(left: 15, right: 15),
              child: Center(
                  child: Container(
                width: 1,
                height: 40,
                color: AppStateContainer.of(context)
                    .theme
                    .accentColor
                    .withAlpha(80),
              )),
            ),
            ValueTile(
                "Sunset",
                DateFormat('h:m a').format(DateTime.fromMillisecondsSinceEpoch(
                    this.weather.sunset * 1000))),
            Padding(
              padding: const EdgeInsets.only(left: 15, right: 15),
              child: Center(
                  child: Container(
                width: 1,
                height: 40,
                color: AppStateContainer.of(context)
                    .theme
                    .accentColor
                    .withAlpha(80),
              )),
            ),
            ValueTile("Humidity", '${this.weather.humidity}%'),
          ]),
        ],
      ),
    );
  }
}
