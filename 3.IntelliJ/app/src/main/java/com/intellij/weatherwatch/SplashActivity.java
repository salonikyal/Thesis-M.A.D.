package com.intellij.weatherwatch;

import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;

public class SplashActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        ActionBar ab = getSupportActionBar();
        assert ab != null;
        ab.hide();

        final Intent intent = new Intent(this,EnterCityActivity.class);
        Thread splashtimer = new Thread() {
            public void run() {
                int splashtime = 0;
                try {
                    while (splashtime < 3000) {   //5000
                        sleep(100);
                        splashtime += 100;   //100

                    }
                    startActivity(intent);
                }
                catch (InterruptedException e) {
                    e.printStackTrace();
                } finally {
                    finish();
                }

            }
        };
        splashtimer.start();
    }
}