function showAir (city) {

$.ajax({
   
                    url: 'https://api.waqi.info/search/?token=36563d959f5e812c20a25cd0bebbd3a1a73ebf4c&keyword=' + city,
                    type: "GET",
                    })
                    .then(function (data){
                        console.log(data)
                        // debugger
                        var airQuality = data.data[0].aqi
                        $("#show").append(airQuality);
                        
                    })
                      
                 
                }
                