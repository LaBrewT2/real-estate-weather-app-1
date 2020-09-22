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
        var airQualityInt = parseInt(airQuality)
        console.log(airQualityInt)
        console.log(typeof(airQualityInt))

        if (0 <= airQualityInt && airQualityInt <= 50) {
            var green = airQuality.fontcolor("00fd00")
            return "<h3><strong>Air Quality Index</strong>: " + green
        }

        else if (51 <= airQualityInt && airQualityInt <= 100) {
            var yellow = airQuality.fontcolor("fdfd00")
            return "<h3><strong>Air Quality Index</strong>: " + yellow
        }

        else if (101 <= airQualityInt && airQualityInt <= 150) {
            var orange = airQuality.fontcolor("ff9500")
            return "<h3><strong>Air Quality Index</strong>: " + orange
        }

        else if (151 <= airQualityInt && airQualityInt <= 200) {
            var red = airQuality.fontcolor("ff0000")
            return "<h3><strong>Air Quality Index</strong>: " + red
        }

        else if (201 <= airQualityInt && airQualityInt <= 251) {
            var purple = airQuality.fontcolor("bb00fd")
            return "<h3><strong>Air Quality Index</strong>: " + purple
        }

        else if (301 <= airQualityInt) {
            var maroon = airQuality.fontcolor("740000")
            return "<h3><strong>Air Quality Index</strong>: " + maroon
        }

    }

}
