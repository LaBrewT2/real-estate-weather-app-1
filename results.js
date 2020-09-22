function showAir(city) {

    $.ajax({

        url: 'https://api.waqi.info/search/?token=36563d959f5e812c20a25cd0bebbd3a1a73ebf4c&keyword=' + city,
        type: "GET",
    })
        .then(function (data) {
            console.log(data)
            // debugger
            var widget = show(data)
            $("#show").append(widget);

        })
    
    function show(data) {
        var airQuality = data.data[0].aqi
        console.log(airQuality)

        if ("0" <= airQuality <= "50") {
            var green = airQuality.fontcolor("00fd00")
            return "<h3><strong>Air Quality Index</strong>: " + green
        }

        else if ("51" <= airQuality <= "100") {
            var yellow = airQuality.fontcolor("fdfd00")
            return "<h3><strong>Air Quality Index</strong>: " + yellow
        }


        // return "<h3><strong>Air Quality Index</strong>: " + airQuality 
    }

}
