"use strict";
$(document).ready(function(){
    try{
        
        //loading the json data from tours.json using ajax call and populating it to the html page
        $.ajax({
        url: 'json/tours.json',
        type: 'GET',
        dataType: 'json',
        success: function(data){
            try{
                console.log(data);
                $.each(data, function() {
                    $.each(this, function(k, v) {
                        $(".info_container").append(
                            "<img src=" + v.image + " height=150px widith=150px>" + "<br>" +
							"<h3>"+v.city + "</h3>" + 
							"<h3>"+v.site_seeing + "</h3>" + 
							"<h3>"+v.activities + "</h3>" +
                            "<p>"+v.description + "</p>"
						);
                        console.log("iamges : "+v.image);
                    });
                });
            }catch(error){
                console.log(error.name +": " +error.message);
            }
            },
        error: function(error){
            console.log("error : "+error.name +": " +error.message);
            }
        });
    }catch(error){
        console.log(error.name +": " +error.message);
    }
    
    
    //tabs UI widget
    $("#tabs").tabs();
		
    
    
    //Calculation for trip and accessing object literals from the js file
    $("#calculate").click(function(event){
        try{
            mytrip.destination = $("#destiation").val();
            mytrip.adults = $("#adult").val();
            mytrip.children = $("#children").val();

            var adult_total = mytrip.adult_amount();
            var child_total = mytrip.child_amount();
            event.preventDefault();


            var grand_total = adult_total+child_total;
            $("#total").val(grand_total);
        }catch(error){
            console.log(error.name +": " +error.message);
        }
        
        

    })
    
    
    
});