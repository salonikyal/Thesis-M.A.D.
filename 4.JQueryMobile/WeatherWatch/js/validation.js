function checkCity(){
	var cityName = $('#city-name').val();
	localStorage["city"] = cityName;
	if(cityName==""){
		alert("Please enter a valid city name.");
		location.reload(true);
	}
}