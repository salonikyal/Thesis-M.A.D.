package com.example.bin.weatherwatch;

import android.annotation.SuppressLint;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import java.util.ArrayList;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

public class WeatherAdapter extends
        RecyclerView.Adapter<WeatherAdapter.ViewHolder> {

    private ArrayList<WeatherData> weatherData;
    public WeatherAdapter(ArrayList<WeatherData> weatherData) {
        this.weatherData = weatherData;
    }

    public static class ViewHolder extends RecyclerView.ViewHolder {
        TextView date;
        TextView minMaxT;
        TextView avgT;
        TextView sunrise;
        TextView sunset;
        public ViewHolder(View itemLayoutView) {
            super(itemLayoutView);
            date =  itemLayoutView.findViewById(R.id.tv_date_list);
            minMaxT = itemLayoutView.findViewById(R.id.tv_max_min_temp_list);
            avgT = itemLayoutView.findViewById(R.id.tv_avg_temp_list);
            sunrise = itemLayoutView.findViewById(R.id.tv_sunrise_list);
            sunset = itemLayoutView.findViewById(R.id.tv_sunset_list);
        }
    }
    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        Context context = parent.getContext();
        LayoutInflater inflater = LayoutInflater.from(context);

        View weatherView = inflater.inflate(R.layout.date_list_item, parent, false);

        return new ViewHolder(weatherView);
    }

    @SuppressLint("SetTextI18n")
    @Override
    public void onBindViewHolder(@NonNull ViewHolder viewHolder, int position) {
        String DEGREE = "\u00b0";
        String CELSIUS ="C";
        String BACKSLASH = "/";
        String SUNRISE = "Sunrise: ";
        String SUNSET = "Sunset: ";
        String AVG = "Avg: ";

        viewHolder.date.setText(weatherData.get(position).getDate());
        viewHolder.minMaxT.setText(weatherData.get(position).getMin()+DEGREE+CELSIUS+BACKSLASH+
                weatherData.get(position).getMax()+DEGREE+CELSIUS);
        viewHolder.avgT.setText(AVG+weatherData.get(position).getAvg()+DEGREE+CELSIUS);
        viewHolder.sunrise.setText(SUNRISE+weatherData.get(position).getSunrise());
        viewHolder.sunset.setText(SUNSET+weatherData.get(position).getSunset());

    }

    @Override
    public int getItemCount() {
        return weatherData.size();
    }
}
