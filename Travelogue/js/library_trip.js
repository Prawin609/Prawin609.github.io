"use strict";
var mytrip = {
    destination: "Ottawa",
    adults: 0,
    children: 0,
    total: 0,
    adult_amount: function(){
        var cities = ["Ottawa","Toronto","Montreal","Waterloo","Ooty","Berlin","Tokyo","New York","Paris","London","Dubai","Melbourne"];
        var prices = [1000,1200,1150,1110,2000,1500,1200,1800,1350,900,1180,2100];
        if(this.adults>0){
            if(cities.includes(this.destination.trim())){
                for(var i=0;i<cities.length;i++){
                    var index = cities.indexOf(this.destination.trim());
                    var ticket_price = prices[index];
                    this.total = ticket_price*this.adults;
                    return this.total
                }
            }else{
                console.log("please enter the listed city");
                alert("Please enter the listed city");
            }
           
        }else{
            return 0;
        }
    },
    child_amount: function(){
        var cities = ["Ottawa","Toronto","Montreal","Waterloo","Ooty","Berlin","Tokyo","New York","Paris","London","Dubai","Melbourne"];
        var prices = [1000,1200,1150,1110,2000,1500,1200,1800,1350,900,1180,2100];
        if(this.children>0){
            for(var i=0;i<cities.length;i++){
                var index = cities.indexOf(this.destination.trim());
                var ticket_price = prices[index]-200;
                this.total = ticket_price*this.children;
                return this.total
        }
        }else{
            return 0;
        }
       
    }
}