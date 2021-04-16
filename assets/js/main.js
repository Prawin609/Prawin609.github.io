$(window).on('load', function() {

    $('.level-bar-inner').each(function() {
    
        var itemWidth = $(this).data('level');
        
        $(this).animate({
            width: itemWidth
        }, 800);
        
    });

});


jQuery(document).ready(function($) {


    
    $('.level-bar-inner').css('width', '0');
    
    
    
    $('.level-label').tooltip();
    
    
    
    $("#rss-feeds").rss(
    
        "https://feeds.feedburner.com/TechCrunch/startups",
        
        {
  
        limit: 3,
        
  
        effect: 'slideFastSynced',
        
       
	    ssl: true,
        
      
        layoutTemplate: "<div class='items'>{entries}</div>",
        
      
        entryTemplate: '<div class="item"><h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fas fa-external-link-alt"></i>Read more</a></div></div>'
        
        }
    );
    
    new GitHubCalendar("#github-graph", "Prawin609", { responsive: true });
    
    
    GitHubActivity.feed({ username: "Prawin609", selector: "#ghfeed" });


});