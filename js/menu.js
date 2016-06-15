
jQuery.noConflict();
jQuery(function($) {
 $("#menu li").click(function() 
    { 
    	var index = $( "#menu li" ).index( this );
    			console.log(index);

  	 	switch(index) {
    		case 0:
    			console.log(index);
    			$('#project').hide()
    			$('#home').show()
    			break;
    		case 1: 
    			console.log(index);
    			// $("#project").addClass("enable");
    			// $("#home").addClass("disable");
    			// $('#project').css('opacity', '1');
    			// $("#home").css('opacity', '0');
    			$('#project').show()
    			$('#home').hide()

    			break;
    		case 2:
    			console.log(index);
    			break;
    		case 3:
    		    console.log(index);
    		    break;

    	}
    });
});