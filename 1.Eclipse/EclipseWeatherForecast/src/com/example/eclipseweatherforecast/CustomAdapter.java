package com.example.eclipseweatherforecast;

import java.util.ArrayList;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

public class CustomAdapter extends BaseAdapter{
	
	Context context;
	ArrayList<WeatherData> weatherData;
	 
	public CustomAdapter(Context dateListActivity, ArrayList<WeatherData> weatherData) {
		this.context = dateListActivity;
		this.weatherData = weatherData;
	}
	 
	// Create new views (invoked by the layout manager)
	public CustomAdapter.ViewHolder onCreateViewHolder(ViewGroup parent,
	int viewType) {		
		// create a new view
		View itemLayoutView = LayoutInflater.from(parent.getContext())
		.inflate(R.layout.date_list_item, null);
		 
		// create ViewHolder	 
		ViewHolder viewHolder = new ViewHolder(itemLayoutView);
		return viewHolder;
	}
	 
	// Replace the contents of a view (invoked by the layout manager)
	public void onBindViewHolder(ViewHolder viewHolder, int position) {	 
		// - get data from your itemsData at this position
		// - replace the contents of the view with that itemsData	
		String DEGREE = "\u00b0";
		String CELSIUS ="C";
		String BACKSLASH = "\\";
		
		viewHolder.date.setText(weatherData.get(position).getDate());
		viewHolder.minMaxT.setText(weatherData.get(position).getMin()+DEGREE+CELSIUS+"/"+
				weatherData.get(position).getMax()+DEGREE+CELSIUS);
		viewHolder.avgT.setText(weatherData.get(position).getAvg()+DEGREE+CELSIUS);
		viewHolder.sunrise.setText(weatherData.get(position).getSunrise());
		viewHolder.sunset.setText(weatherData.get(position).getSunset());
	}
	 
	// inner class to hold a reference to each item of RecyclerView
	public static class ViewHolder  {
	 
		TextView date;
		TextView minMaxT;
		TextView avgT;
		TextView sunrise;
		TextView sunset;
		public ViewHolder(View itemLayoutView) {
			//super(itemLayoutView);
			//currentTemp = (TextView) itemLayoutView.findViewById(R.id.tv_current_temp_list);
			date = (TextView) itemLayoutView.findViewById(R.id.tv_date_list);
			minMaxT = (TextView) itemLayoutView.findViewById(R.id.tv_max_min_temp_list);
			avgT = (TextView) itemLayoutView.findViewById(R.id.tv_avg_temp_list);
			sunrise = (TextView) itemLayoutView.findViewById(R.id.tv_sunrise_list);
			sunset = (TextView) itemLayoutView.findViewById(R.id.tv_sunset_list);
			
		}
	}

	@Override
	public int getCount() {
		return weatherData.size();
	}

	@Override
	public Object getItem(int arg0) {
		return weatherData.get(arg0);
	}

	@Override
	public long getItemId(int arg0) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public View getView(int arg0, View arg1, ViewGroup arg2) {
		// TODO Auto-generated method stub
		return null;
	}


}
