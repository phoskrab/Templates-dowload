/*this for smooth load when scroll*/
jQuery(document).ready(function() {
	jQuery('.no').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
	    offset: 200 
	   });   
});  