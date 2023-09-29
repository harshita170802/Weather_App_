$(document).ready(function(){
    $("#submitCity").click(function(){
        return getWeather();
    });
});

function getWeather(){
    var city = $("#city").val();
    
    if(city != ''){
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=c10bb3bd22f90d636baa008b1529ee25",
            type: "GET",
            dataType: "jsonp",
            success: function(data){
                var widgets = showResults(data);
                
                $(".weather-info").each(function(index) {
                    $(this).html(widgets[index]);
                });
                
                $("#city").val('');
            }
        });
    } else {
        $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");
    }
}

function showResults(data){
    var widgets = [];
    
    widgets.push('<h2 style="font-weight:bold; font-size:40px; padding-top:20px;" class="text-center"><img src="./Images/location.png" class="location"/>' + data.name + ', ' + data.sys.country + '</h2>');
    widgets.push("<h3 style='font-size:40px; padding-top:40px; height:40%; margin:2% 0 5% 0;' '><strong >Description</strong>:<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'> " + data.weather[0].description + "</h3>");
    widgets.push("<h3 style='font-size:40px; padding-top:40px; height:40%; margin:2% 0 5% 0;'class='''><strong>Temperature</strong>: " + data.main.temp + " &deg;C</h3>");
    widgets.push("<h3 style='font-size:40px; padding-top:40px; height:40%; margin:2% 0 5% 0;'class='''><strong>Pressure</strong>: " + data.main.pressure + " hpa</h3>");
    widgets.push("<h3 style='font-size:40px; padding-top:40px; height:40%; margin:2% 0 5% 0;'class='''><strong>Humidity</strong>: " + data.main.humidity + "%</h3");
    
    return widgets;
}











