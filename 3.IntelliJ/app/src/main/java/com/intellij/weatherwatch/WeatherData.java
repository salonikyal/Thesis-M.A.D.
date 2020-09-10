package com.intellij.weatherwatch;

public class WeatherData {
    private String date;
    private int max;
    private int min;
    private int avg;
    private String sunrise;
    private String sunset;

    public WeatherData() {
    }

    public  String getDate() {
        return date;
    }

    public int getMax() {
        return max;
    }

    public int getMin() {
        return min;
    }

    public int getAvg() {
        return avg;
    }

    public String getSunrise() {
        return sunrise;
    }

    public String getSunset() {
        return sunset;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setMax(int max) {
        this.max = max;
    }

    public void setMin(int min) {
        this.min = min;
    }

    public void setAvg(int avg) {
        this.avg = avg;
    }

    public void setSunrise(String sunrise) {
        this.sunrise = sunrise;
    }

    public void setSunset(String sunset) {
        this.sunset = sunset;
    }
}
