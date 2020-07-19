import 'package:flutter/material.dart';

class Themes {
  static const DARK_THEME_CODE = 0;
  static const LIGHT_THEME_CODE = 1;

  static final _dark = ThemeData(
    primarySwatch: MaterialColor(
      Colors.black.value,
      const <int, Color>{
        50: Colors.black12,
        100: Colors.black26,
        200: Colors.black38,
        300: Colors.black45,
        400: Colors.black54,
        500: Colors.black87,
        600: Colors.black87,
        700: Colors.black87,
        800: Colors.black87,
        900: Colors.black87,
      },
    ),
    accentColor: Colors.white,
    disabledColor: Colors.green
  );

  static final _light = ThemeData(
    primarySwatch: MaterialColor(
      Colors.lightBlueAccent.value,
      const <int, Color>{
        50: Color(0xFFE1F5FE),
        100: Color(0xFFB3E5FC),
        200: Color(0xFF81D4FA),
        300: Color(0xFF4FC3F7),
        400: Color(0xFF29B6F6),
        500: Color(0xFF03A9F4),
        600: Color(0xFF039BE5),
        700: Color(0xFF0288D1),
        800: Color(0xFF0277BD),
        900: Color(0xFF01579B),
      },
    ),
    accentColor: Colors.white,
      disabledColor: Colors.green

  );

  static ThemeData getTheme(int code) {
    if(code == LIGHT_THEME_CODE){
      return _light;
    }
    return _dark;
  }

}
