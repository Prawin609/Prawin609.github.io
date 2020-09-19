"use strict";
$(document).ready( function() {
    var span;
    try{
        var city, city_temp, description;
    
        var city_array = ["london,uk", "waterloo,ca", "berlin,de", "tokyo,jp", "paris,fr", "nilgiri,in", "Toronto,ca", "melbourne,au", "new york,us", "Ottawa,ca", "dubai,ae", "Montreal,ca" ];
        for(var i=0; i<=(city_array.length-1);i++){
            
        
              //fetching the data from openweathermap API and populating it to the html page
              fetch("https://api.openweathermap.org/data/2.5/weather?q="+city_array[i]+"&appid=c89aa7b727400e5089c009735b6493b9")
                .then(response => response.json())
                .then(data => {
                  try{
                    var name = data['name'];
                    var temperature = data['main']['temp'];
                    temperature = parseInt(temperature-273.15) +" °C";
                    var details = data['weather'][0]['description'];
                    var weather_icon="";
                    city = name;
                    city_temp = temperature;
                    description = details;
                    console.log(city, city_temp, description);

                    var div_array = $(".container");
                    var child_div = $("<div></div>");
                    child_div.addClass('child');
                    var city_name = $("<p></P>");
                    var city_teperature = $("<p></p>");
                    span = $("<span>&#8451;</span>");
                    var weather_description = $("<p></p>");

                      
                      //defining weather icons based on the weather conditions
                    weather_icon = $("<i style='font-size:54px' class='fas fa-cloud-sun'></i>");
                    if(details == "clear sky")
                        weather_icon = $("<i style='font-size:54px' class='fas fa-cloud-sun'></i>");
                    else if(details == "overcast clouds")
                        weather_icon = $("<i style='font-size:54px' class='fas fa-cloud'></i>");
                    else if(details == "scattered clouds")
                       weather_icon = $("<i style='font-size:54px' class='fas fa-cloud-meatball'></i>");
                    else if(details == "broken clouds")
                       weather_icon = $("<i style='font-size:54px' class='fas fa-smog'></i>");
                    else if(details == "few clouds")
                       weather_icon = $("<i style='font-size:54px' class='fas fa-cloud-moon'></i>");
                    else if(details == "light rain")
                       weather_icon = $("<i style='font-size:54px' class='fas fa-cloud-showers-heavy'></i>");
                    else if(details == "mist")
                        weather_icon = $("<i style='font-size:54px' class='fas fa-metour'></i>");


                    city_name.text(city);
                    city_teperature.text(city_temp);
                    weather_description.text(description);

                    child_div.append(city_name);

                    child_div.append(city_teperature);

                    child_div.append(weather_icon);

    //                child_div.nth.append(span);
                    child_div.append(weather_description);

                    div_array.append(child_div);
                  
              
              }catch(err){
                  console.log(err.name +": " +err.message);
              }
              
        })
        
    }
//        $('.child p:nth-child(2)').append(span);
    }
    catch(err) {
        console.log(err.name +": " +err.message);
}
    
});

