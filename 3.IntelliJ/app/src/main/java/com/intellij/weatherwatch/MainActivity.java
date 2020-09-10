package com.intellij.weatherwatch;

import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ProgressBar;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    RecyclerView rv;
    ProgressBar pbar;

    RequestQueue requestQueue;
    ArrayList<WeatherData> newWForecast;
    protected static String url;
    protected static final String KEY = "7255c3a0dab745748d9163037202806";

    private static final String STRING_DATE = "date";
    private static final String INT_MAX_TEMP = "maxtempC";
    private static final String INT_MIN_TEMP = "mintempC";
    private static final String INT_AVG_TEMP = "avgtempC";
    private static final String STRING_SUNRISE = "sunrise";
    private static final String STRING_SUNSET = "sunset";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        rv = findViewById(R.id.date_recycler_view);
        pbar = findViewById(R.id.progressBar2);

        pbar.setVisibility(View.VISIBLE);

        //Set city NAME
        Intent intent = getIntent();
        final Bundle val = intent.getExtras();
        assert val != null;
        String cityName = val.getString("citi");
        ActionBar ab = getSupportActionBar();
        assert ab != null;
        ab.setDisplayShowTitleEnabled(true);
        ab.setTitle(cityName);

        //Get weather prediction data for next 10 days
        getWeatherPrediction(cityName);
    }

    @SuppressLint("DefaultLocale")
    public void getWeatherPrediction(String cityN){
        url = "https://api.worldweatheronline.com/premium/v1/weather.ashx?"
                + "key="+ KEY +"&"
                + "q="+ cityN +"&"
                + "num_of_days=10&"
                + "format=json";
        Log.d("url",url);

        newWForecast = new ArrayList<>();
        requestQueue = Volley.newRequestQueue(this);
        JsonObjectRequest obreq = new JsonObjectRequest( Request.Method.GET,url,null,
                new Response.Listener<JSONObject>() {
                    @SuppressLint("SetTextI18n")
                    @Override
                    public void onResponse(JSONObject response) {
                        try {
                            JSONObject dataa = response.getJSONObject("data");

                            if (dataa.has("error")) {
                                final Intent i = new Intent(MainActivity.this,
                                        EnterCityActivity.class);
                                startActivity(i);
                                Toast.makeText(MainActivity.this, "Please enter a valid City Name",
                                        Toast.LENGTH_LONG).show();
                            } else {
                                JSONArray weathr = dataa.getJSONArray("weather");
                                for (int i = 0; i < weathr.length(); i++) {

                                    JSONObject w = weathr.getJSONObject(i);
                                    String dt = w.getString(STRING_DATE);
                                    int mat = w.getInt(INT_MAX_TEMP);
                                    int mit = w.getInt(INT_MIN_TEMP);
                                    int avt = w.getInt(INT_AVG_TEMP);

                                    JSONArray astr = w.getJSONArray("astronomy");
                                    JSONObject ast = astr.getJSONObject(0);
                                    String sr = ast.getString(STRING_SUNRISE);
                                    String ss = ast.getString(STRING_SUNSET);

                                    WeatherData wthr = new WeatherData();
                                    wthr.setDate(dt);
                                    wthr.setMax(mat);
                                    wthr.setMin(mit);
                                    wthr.setAvg(avt);
                                    wthr.setSunrise(sr);
                                    wthr.setSunset(ss);
                                    newWForecast.add(wthr);
                                }

                                WeatherAdapter adapter = new WeatherAdapter(newWForecast);
                                rv.setAdapter(adapter);
                                rv.setLayoutManager(new LinearLayoutManager(MainActivity.this));
                            }
                        } catch (JSONException e) {
                            e.printStackTrace();
                            Toast.makeText(MainActivity.this, "Please try again later.",
                                    Toast.LENGTH_LONG).show();
                        }
                        pbar.setVisibility(View.GONE);
                    }
                },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        Log.e("Volley:", error.toString());
                    }
                }
        );
        requestQueue.add(obreq);
    }

}
