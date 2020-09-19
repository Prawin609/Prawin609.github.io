"use strict";
$(document).ready(function() {
    try{
        
        //regex patterns for validation
        var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        var phonePattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
        $("#arrival_date").focus();
        
        //trigger event after the submission is done
        $("#reservation_form").submit(
            function(event){
                var isValid = true;
                var arrival_date = $("#arrival_date").val().trim();
                if (arrival_date == "") {
                    $("#arrival_date").next().text("This field is required.");
                    isValid = false;
                }else {
                    $("#arrival_date").next().text("");
                }            
                var nights = $("#nights").val().trim();
                if(nights==""){
                    $("#nights").next().text("This field is required.");
                    isValid = false;
                }
                else if(isNaN(nights)){
                    $("#nights").next().text("This field must be a number.");
                    isValid = false;
                }else {
                    $("#nights").next().text("");
                }            
                var name = $("#name").val().trim();
                if(name == "") {
                    $("#name").next().text("This field is required.");
                    isValid = false;
                }
                else if(!isNaN(name)){
                    $("#name").next().text("Enter valid name.");
                    isValid = false;
                }
                else {
                    $("#name").next().text("");
                }            
                var email = $("#email").val().toString().trim();

                if(email == "") {
                    $("#email").next().text("This field is required.");
                    isValid = false;
                } 
                else if (!emailPattern.test(email)) {
                    $("#email").next().text("Enter a valid email address.");
                    isValid = false;
                }
                else {
                    $("#email").next().text("");
                }
                var phone = $("#phone").val().trim();
                if(phone == "") {
                    $("#phone").next().text("This field is required.");
                    isValid = false;
                }
                else if(!phonePattern.test(phone)) {
                    $("#phone").next().text("Contact should be in proper format");
                    isValid = false;
                }
                else {
                    $("#phone").next().text("");
                }
                if (isValid == false) {
                    $("#arrival_date").focus();
                    event.preventDefault();
                }
        });
        }catch(err){
            console.log(err.name +": " +err.message);
        }

        //go back to the main page from response page
        $('#back').click(function(){
            history.back();
        })


    });