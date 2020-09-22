$(document).ready(function(){

$('#submitWeather').click(function(){

    var city = $("#city").val()

  if(city != ''){

    $.ajax({

        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=7d8a8f5d6e704abb8f8f300d6bf19e2b",
        method: "GET",
        dataType: "jsonp",
    })
            .then(function(data){
            var widget = show(data);

            $("#show").html(widget);

            $("#city").val('');

            showAir(city)
            })


  }else{
      $("#error").html('Field cannot be empty')
       
    }
    
    });

}); 

  
function show(data){
    console.log("I'm at line 49",data.sys.country)
    return "<h3 style='font-size:35px; font-weight: bold;' class='text-center'>Current Weather and Air Quality for " + data.name + ", " + data.sys.country +"</h3>" +
    "<h3><strong>Weather</strong>: "+ data.weather[0].main +"</h3>" +
    "<h3><strong>Description</strong>: "+ data.weather[0].description +"</h3>" +
    "<h3><strong>Temprature</strong>: "+ data.main.temp + "&deg;F</h3>" +
    "<h3><strong>Pressure</strong>: "+ data.main.pressure + "hPa</h3>" +
    "<h3><strong>Humidity</strong>: "+ data.main.humidity +" %</h3>" +
    "<h3><strong>Min. Temprature</strong>: "+ data.main.temp_min + "&deg;F</h3>" +
    "<h3><strong>Max. Temprature</strong>: "+ data.main.temp_max + "&deg;F</h3>" +
    "<h3><strong>Wind Speed</strong>: "+ data.wind.speed + "m/s</h3>" +
    "<h3><strong>Wind Direction</strong>: "+ data.wind.deg + "&deg;</h3>";


}

