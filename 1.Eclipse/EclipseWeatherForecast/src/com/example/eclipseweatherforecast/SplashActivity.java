package com.example.eclipseweatherforecast;


import android.app.ActionBar;
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;

public class SplashActivity extends Activity {
	
	int progressStatus=0;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_splash);
		
		//ActionBar actionBar = getActionBar();
		//actionBar.hide();
		
		final Intent intent = new Intent(this,EnterCityActivity.class);
		Thread splashtimer = new Thread() {
			public void run() {
				int splashtime = 0;
				try {
					while (splashtime < 3000) {   //5000
						progressStatus +=1;
						sleep(100);
						splashtime += 100;   //100

					}
					startActivity(intent);
				}
				catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} finally {
					finish();
				}

			}
		};
		splashtimer.start();
	}
}
