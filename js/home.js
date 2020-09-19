"use strict";
$(document).ready(function() {
    
            //cycle UI widget
	        $('#slideshow').cycle({
	        	fx: 'scrollHorz',
	        	speed: 1000,
	        	timeout: 1200,
	        	pause: 0.5
	        });
    
        try{
            //defining the contents and its attributes for home page
            var heading = "FEATURED RESORTS & SITES";
            var head_element = $('<h2><h/2>');
            head_element.text(heading);
            head_element.css('text-align','center');
            head_element.css('color','white');
            head_element.css('font-size','35px');
            head_element.css('font-weight','bold');
            $("#content").append(head_element);
    
            
            //defining the contents and its attributes for home page
            var sub_heading = "Pick up where you left off";
            var sub_element = $('<h3></h3>');
            sub_element.text(sub_heading);
            sub_element.css('text-align','center');
            sub_element.css('color','white');
            sub_element.css('font-size','25px');
            $("#content").append(sub_element);
    
            //lightbox implementation for flicker API
             lightbox.option({
                 'maxWidth': 1000,
                'resizeDuration': 200,
                'wrapAround': false,
                'fitImagesInViewport': true,
                 'wrapAround': true,
                 'maxHeight': 500
            });
    
            
            //Flicker url
            var flicker_url = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
            var images = $('#images');
            images.css('display','flex');
            images.css('flex-direction','row');
            
            
            //loading the flicker url and population the images in home page
            $.getJSON(flicker_url,{
               tags: "world,tours,adventure",
               tagMode: "any",
               format: "json"
            }).done(function(content){
                console.log(content);
                $.each(content.items, function(i, source){
                    var anchor = $('<a></a>');
                    anchor.attr('href',source.media.m);
                    anchor.attr('data-lightbox','pic');
                    var image = $('<img>');
                    image.attr('src',source.media.m);
                    image.css('height','200px');
                    image.css('width','300px');
                    anchor.append(image);
                    images.append(anchor);
                    
                    if(i == 8){
                        return false;
                    }
                })
            }).fail(function(){
                console.log("Ajax call failed...");
            });
        }catch(err){
            console.log(err.name +": " +err.message);
        }
            
	    });