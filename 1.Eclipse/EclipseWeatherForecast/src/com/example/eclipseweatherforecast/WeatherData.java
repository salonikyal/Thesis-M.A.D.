package com.example.eclipseweatherforecast;

public class WeatherData {

	private String date;
	private String current;	
	private String feelsLike;
	private int max;
	private int min;
	private int avg;
	private String sunrise;
	private String sunset;
	private String des;
	private int code;
		
	public WeatherData()
	{
		
	}
	
	public WeatherData(String date, String current, String feelsLike, int max, 
			int min, String des, int code,int avg, String rise, String set) {
		
		this.date = date;
		this.current = current;
		this.feelsLike = feelsLike;
		this.max = max;
		this.min = min;
		this.des = des;
		this.code=code;
		this.avg = avg;
		this.sunrise = rise;
		this.sunset = set;
		
	}


	public int getAvg() {
		return avg;
	}

	public void setAvg(int avg) {
		this.avg = avg;
	}

	public String getSunrise() {
		return sunrise;
	}

	public void setSunrise(String sunrise) {
		this.sunrise = sunrise;
	}

	public String getSunset() {
		return sunset;
	}

	public void setSunset(String sunset) {
		this.sunset = sunset;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getCurrent() {
		return current;
	}

	public void setCurrent(String current) {
		this.current = current;
	}

	public String getFeelsLike() {
		return feelsLike;
	}

	public void setFeelsLike(String feelsLike) {
		this.feelsLike = feelsLike;
	}

	public int getMax() {
		return max;
	}

	public void setMax(int max) {
		this.max = max;
	}

	public int getMin() {
		return min;
	}

	public void setMin(int min) {
		this.min = min;
	}

	public String getDes() {
		return des;
	}

	public void setDes(String des) {
		this.des = des;
	}
	
}
	
	