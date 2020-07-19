import 'package:flutter/material.dart';
import 'package:flutter_weather/main.dart';
import 'package:flutter_weather/src/model/weather.dart';
import 'package:flutter_weather/src/widgets/value_tile.dart';

/// Renders Weather Icon, current temperatures
class CurrentConditions extends StatelessWidget {
  final Weather weather;
  const CurrentConditions({Key key, this.weather}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Icon(
          weather.getIconData(),
          color: AppStateContainer.of(context).theme.accentColor,
          size: 70,
        ),
        SizedBox(
          height: 20,
        ),
        Text(
          '${this.weather.temperature.as(AppStateContainer.of(context).temperatureUnit).round()}°',
          style: TextStyle(
              fontSize: 100,
              fontWeight: FontWeight.w100,
              color: AppStateContainer.of(context).theme.accentColor),
        ),
      ],
    );
  }
}
