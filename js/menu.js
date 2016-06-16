
jQuery.noConflict();
jQuery(function($) {
 $("#menu li").click(function() 
    { 
    	var currentIndex = $( "#menu li" ).index( this );
         $( "#mainContent .row" ).each(function( index ) {
            if (index == currentIndex) {
                $(this).show()
            } else {
                $(this).hide()
            }
        });
    });
});