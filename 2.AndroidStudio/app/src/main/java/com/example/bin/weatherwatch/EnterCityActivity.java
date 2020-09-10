package com.example.bin.weatherwatch;

import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;

import android.Manifest;
import android.annotation.SuppressLint;

import android.content.Intent;
import android.content.pm.PackageManager;
import android.location.Address;
import android.location.Geocoder;
import android.location.Location;
import android.os.Bundle;
import android.os.Looper;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;
import com.google.android.gms.location.LocationCallback;
import com.google.android.gms.location.LocationRequest;
import com.google.android.gms.location.LocationResult;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.location.LocationSettingsRequest;
import com.google.android.gms.location.SettingsClient;

import com.android.volley.RequestQueue;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import static com.google.android.gms.location.LocationServices.getFusedLocationProviderClient;

public class EnterCityActivity extends AppCompatActivity {

    TextView currTime;
    TextView currDay;
    TextView currDate;
    TextView currLoc;
    TextView currTemp;
    TextView humid;
    TextView feelsLikeTemp;
    TextView weatherDesc;
    ImageView weatherIcon;
    EditText edtCity;
    Button btnSub;
    ProgressBar pb;

    Thread th;

    private static final int REQUEST_LOCATION = 1;
    protected LocationRequest mLocationRequest;
    protected long UPDATE_INTERVAL = 10 * 1000;  /* 10 secs */
    protected long FASTEST_INTERVAL = 2000; /* 2 sec */
    double latitude;
    double longitude;

    RequestQueue requestQueue;
    String url;
    private static final String KEY = "e25a68c009aa630161457691d6f0a5a6";
    private static final String DOUBLE_CURR_TEMP = "temp";
    private static final String DOUBLE_FEELS_LIKE = "feels_like";
    private static final String INT_HUMIDITY = "humidity";
    private static final String STRING_DESC = "description";
    private static final String INT_IMAGE_ID = "id";

    final String DEGREE = "\u00b0";
    final String CELSIUS = "C";
    final String PERCENTAGE = "%";
    final String FEELS_LIKE ="Feels Like ";
    final String HUMIDITY = "Humidity: ";

    @SuppressLint("SetTextI18n")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_enter_city);

        currTime = findViewById(R.id.tv_city_time);
        currDate = findViewById(R.id.tv_city_date);
        currDay = findViewById(R.id.tv_city_day);
        currLoc = findViewById(R.id.tv_location_name);
        currTemp = findViewById(R.id.tv_current_temp);
        humid = findViewById(R.id.tv_humidity);
        feelsLikeTemp = findViewById(R.id.tv_feels_like);
        weatherDesc = findViewById(R.id.tv_description);
        weatherIcon = findViewById(R.id.iv_climate_icon);
        edtCity = findViewById(R.id.et_city_name);
        btnSub = findViewById(R.id.btn_submit);
        pb = findViewById(R.id.progressBar1);

        ActionBar ab = getSupportActionBar();
        assert ab != null;
        ab.hide();

        pb.setVisibility(View.VISIBLE);

        btnSub.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                final Intent i = new Intent(EnterCityActivity.this,
                        MainActivity.class);
                Bundle value = new Bundle();
                value.putString("citi", edtCity.getText().toString());
                i.putExtras(value); // intent is merged with bundle
                startActivity(i);
            }
        });

        //Get current Time, Date and Day
        th = new Thread() {
            @Override
            public void run() {
                try {
                    while (!th.isInterrupted()) {
                        Thread.sleep(1000);
                        runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                String currentTime = new SimpleDateFormat("hh : mm a",
                                        Locale.getDefault()).format(Calendar.getInstance().getTime());
                                String currentDate = new SimpleDateFormat("yyyy-MM-dd",
                                        Locale.getDefault()).format(new Date());
                                String currentDay = new SimpleDateFormat("EEEE",
                                        Locale.ENGLISH).format(Calendar.getInstance().getTime());

                                currTime.setText(currentTime);
                                currDate.setText(currentDate);
                                currDay.setText(currentDay);
                            }
                        });
                    }
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        };
        th.start();

        //Get Current Location
        startLocationUpdates();
    }

    protected void startLocationUpdates() {

        // Create the location request to start receiving updates
        mLocationRequest = new LocationRequest();
        mLocationRequest.setPriority(LocationRequest.PRIORITY_HIGH_ACCURACY);
        mLocationRequest.setInterval(UPDATE_INTERVAL);
        mLocationRequest.setFastestInterval(FASTEST_INTERVAL);

        // Create LocationSettingsRequest object using location request
        LocationSettingsRequest.Builder builder = new LocationSettingsRequest.Builder();
        builder.addLocationRequest(mLocationRequest);
        LocationSettingsRequest locationSettingsRequest = builder.build();

        // Check whether location settings are satisfied
        SettingsClient settingsClient = LocationServices.getSettingsClient(this);
        settingsClient.checkLocationSettings(locationSettingsRequest);

        // new Google API SDK v11 uses getFusedLocationProviderClient(this)
        if (ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) !=
                PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(this,
                Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {

            requestPermissions();
        }
        else{
            getFusedLocationProviderClient(this).requestLocationUpdates(mLocationRequest, new LocationCallback() {
                        @Override
                        public void onLocationResult(LocationResult locationResult) {
                            //Get location coordinates here
                            onLocationChanged(locationResult.getLastLocation());
                        }
                    },
                    Looper.myLooper());
        }
    }

    public void onLocationChanged(Location location) {
        // New location has now been determined
        latitude = location.getLatitude();
        longitude = location.getLongitude();
        getAddress(latitude,longitude);
        //Get current weather condition
        getCurrWeatherData(latitude,longitude);
    }

    public void getAddress(double lat, double lng) {
        Geocoder geocoder = new Geocoder(EnterCityActivity.this, Locale.getDefault());
        try {
            List<Address> addresses = geocoder.getFromLocation(lat, lng, 1);
            Address obj = addresses.get(0);
            String add = obj.getLocality();
            add = add + "," + obj.getAdminArea();
            currLoc.setText(add);

        } catch ( IOException e) {
            e.printStackTrace();
            Toast.makeText(this, e.getMessage(), Toast.LENGTH_SHORT).show();
        }
    }

    private void requestPermissions(){
        ActivityCompat.requestPermissions(this,
                new String[]{Manifest.permission.ACCESS_FINE_LOCATION},
                REQUEST_LOCATION);
    }

    @SuppressLint("DefaultLocale")
    public void getCurrWeatherData(double lat, double lng){
        url = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+
                "&appid="+KEY;
        Log.d("url",url);
        requestQueue = Volley.newRequestQueue(this);
        JsonObjectRequest obreq = new JsonObjectRequest( Request.Method.GET,url,null,
                new Response.Listener<JSONObject>() {
                    @SuppressLint("SetTextI18n")
                    @Override
                    public void onResponse(JSONObject response) {
                        try {
                            JSONObject obj = response.getJSONObject("main");
                            String ctemp =  String.format("%.1f", KtoC(obj.getDouble(DOUBLE_CURR_TEMP)));
                            String feels = String.format("%.1f", KtoC(obj.getDouble(DOUBLE_FEELS_LIKE)));
                            String humidi = Integer.toString(obj.getInt(INT_HUMIDITY));
                            JSONArray arr = response.getJSONArray("weather");
                            JSONObject wobj = arr.getJSONObject(0);
                            String des = wobj.getString(STRING_DESC);
                            int imgid = wobj.getInt(INT_IMAGE_ID);

                            currTemp.setText(ctemp+DEGREE+CELSIUS);
                            feelsLikeTemp.setText(FEELS_LIKE+feels+DEGREE+CELSIUS);
                            humid.setText(HUMIDITY+humidi+PERCENTAGE);
                            weatherDesc.setText(des);
                            setIcon(imgid);
                            pb.setVisibility(View.GONE);
                        }
                        catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        Log.e("Volley:", error.toString());
                    }
                }
        );
        // Adds the JSON object request "obreq" to the request queue
        requestQueue.add(obreq);
    }

    static double KtoC(double K)
    {
        return K - 273.15;
    }

    public void setIcon(int id){
        if(id>=200&&id<=233)
            weatherIcon.setImageResource(R.drawable.thunder);
        else if(id>=300&&id<=322)
            weatherIcon.setImageResource(R.drawable.drizzle);
        else if(id>=500&&id<=532)
            weatherIcon.setImageResource(R.drawable.rain);
        else if(id>=600&&id<=622)
            weatherIcon.setImageResource(R.drawable.snowr);
        else if(id>=700&&id<=782)
            weatherIcon.setImageResource(R.drawable.fog);
        else if(id>=801&&id<=804)
            weatherIcon.setImageResource(R.drawable.clouds);
        else if(id==800)
            weatherIcon.setImageResource(R.drawable.clear_day);
        else
            weatherIcon.setImageResource(R.drawable.fewclouds);
    }

}