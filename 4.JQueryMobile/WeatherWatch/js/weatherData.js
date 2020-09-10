$( document ).ready(function() {
	var cityName = localStorage["city"];
	$( "p" ).first().html( "City : "+cityName );
	var newforecast = [];
	var li,i;
	var deC="&#8451;";
	var forecastURL ="https://cors-anywhere.herokuapp.com/"+			
					"http://api.worldweatheronline.com/premium/v1/weather.ashx?"+
						"key=7255c3a0dab745748d9163037202806&"+
						"q="+cityName+"&"+
						"num_of_days=10&format=json"
	$.ajax({
		url:forecastURL,
		jsonCallback: 'jsonCallback',
		contentType: "application/json",
		dataType: 'json',
		success: function(json){
			//console.log(json);
			if("error" in json.data){
				alert("Please enter a valid city name.");
				$.mobile.changePage( "page1.html", { transition: "slideright", changeHash: true });
				$('#city-name').val('');
			}
			else{
				for (i = 0; i < json.data.weather.length; i++) {
					var wthr = json.data.weather[i];
					var dt = wthr.date;
					var avg = wthr.avgtempC;
					var min = wthr.mintempC;
					var max = wthr.maxtempC;
					var astro = wthr.astronomy[0];
					var rise = astro.sunrise;
					var set = astro.sunset;          
					li = '<li  style="background-color:#000000; opacity: .5; border-color: #066B95; color: #ffffff;" >';
					li+= '<h2>'+dt+'</h2>';
					li+= '<p><strong>'+min+deC+' / '+max+deC+'</strong></p>';
					li+= '<p class = "ui-li-aside">Avg: '+avg+deC+'<br>Sunrise: '+rise+'<br>Sunset: '+set+'</p>';
					li+= '</li>';
					newforecast.push(li);
				}
				console.log(newforecast);
				$("#weatherForecast").html(newforecast);
				$("#weatherForecast").trigger('create');    
				$("#weatherForecast").listview('refresh');
				 
			}
		},
		error: function(e){
			console.log(e.message);
			alert("Please try again later.");
			$.mobile.changePage( "page1.html", { transition: "slideright", changeHash: true });
			$('#city-name').val('');
		}
	});	
	console.log(window.performance.timing);
	console.log("Page load time: "+(window.performance.timing.loadEventEnd -window.performance.timing.navigationStart));
	console.log("Request response time: "+(window.performance.timing.responseEnd  -window.performance.timing.requestStart));
	console.log("Page render time: "+(window.performance.timing.domComplete  -window.performance.timing.domLoading));
});


