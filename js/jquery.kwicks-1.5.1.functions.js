jQuery(function () {
	//Hides the Slide Images and Panel Texts for Preloading
	jQuery('.slideimage').hide();
	
	jQuery('.slide-minicaption').hide();
	jQuery('.slide-minicaptiontitle').hide();
	jQuery('.slidecaption').hide();
	jQuery('.slidecaptiontitle').hide();
	
	var slidenos = jQuery('.slideimage').length;
	
});

var i;

jQuery(window).bind("load", function() {

	//Preload

	var slidenos = jQuery('.slideimage').length;

		jQuery('.slideimage:hidden').fadeIn(800);

	

		jQuery(".kwicks.horizontal li").css('background', '#000');
		
		jQuery('.slide-minicaption').show();
		jQuery('.slide-minicaptiontitle').show();
		jQuery('.slidecaption').show();
		jQuery('.slidecaptiontitle').show();

		jQuery('.kwicks_startseite').kwicks({
			max : 400,
			spacing : 0
		});
		
    jQuery(".slideimage").stop().fadeTo("slow", 0.7);	

});

jQuery(function(){

	//Hide all Captions and Mini Captions
	jQuery(".slidecaption").fadeTo(1, 0);
	jQuery(".slide-minicaption").fadeTo(1, 0.8);


	//On hover of a Kwick Panel
	//The Following Block is repeated for every Kwick Panel added
	//Basically It Hide the mini captions - Shows the hovered Panel with Full Caption and Fades the rest.
	//On Mouse Out it resets things back with mini captions
	//If you Add another Panel Simply Duplicate this block with additional kwickblock#
	jQuery('#kwick1_startseite').hover(function() {
		jQuery('#kwick1_startseite .slidecaption').stop().fadeTo("slow", 0.8);	// Show Fullcaption
		jQuery("#kwick1_startseite .slideimage").stop().fadeTo("slow", 0.7);	// Show Image in without transparency
		jQuery("#kwick2 .slideimage,#kwick3 .slideimage,#kwick4 .slideimage,#kwick5 .slideimage,#kwick6 .slideimage").stop().fadeTo("fast", 0);	// Fade the rest of the kwich panels
	},function(){
		jQuery('.slidecaption').stop().fadeTo("slow", 0);	// Hide fullcaption on mouse out
		jQuery(".slide-minicaption").stop().fadeTo("slow", 0.8);	// Show minicaption
		jQuery(".slideimage").stop().fadeTo("slow", 0.7);	// Show all kwicks wihout transparency again
	});
	
	jQuery('#kwick2').hover(function() {
		jQuery('#kwick2 .slidecaption').stop().fadeTo("slow", 0.8);
		jQuery("#kwick2 .slideimage").stop().fadeTo("slow", 0.7);
		jQuery("#kwick1_startseite .slideimage,#kwick3 .slideimage,#kwick4 .slideimage,#kwick5 .slideimage,#kwick6 .slideimage").stop().fadeTo("fast", 0);	// Fade the rest of the kwich panels
	},function(){
		jQuery('.slidecaption').stop().fadeTo("slow", 0);
		jQuery(".slide-minicaption").stop().fadeTo("slow", 0.8);
		jQuery(".slideimage").stop().fadeTo("slow", 0.7);	
	});
	
	jQuery('#kwick3').hover(function() {
		jQuery('#kwick3 .slidecaption').stop().fadeTo("slow", 0.8);
		jQuery("#kwick3 .slideimage").stop().fadeTo("slow", 0.7);
		jQuery("#kwick2 .slideimage,#kwick1_startseite .slideimage,#kwick4 .slideimage,#kwick5 .slideimage,#kwick6 .slideimage").stop().fadeTo("fast", 0);	// Fade the rest of the kwich panels
	},function(){
		jQuery('.slidecaption').stop().fadeTo("slow", 0);
		jQuery(".slide-minicaption").stop().fadeTo("slow", 0.8);
		jQuery(".slideimage").stop().fadeTo("slow", 0.7);	
	});
	
	jQuery('#kwick4').hover(function() {
		jQuery('#kwickk4 .slidecaption').stop().fadeTo("slow", 0.8);
		jQuery("#kwick4 .slideimage").stop().fadeTo("slow", 0.7);
		jQuery("#kwick2 .slideimage,#kwick3 .slideimage,#kwick1_startseite .slideimage,#kwick5 .slideimage,#kwick6 .slideimage").stop().fadeTo("fast", 0);	// Fade the rest of the kwich panels
	},function(){
		jQuery('.slidecaption').stop().fadeTo("slow", 0);
		jQuery(".slide-minicaption").stop().fadeTo("slow", 0.8);
		jQuery(".slideimage").stop().fadeTo("slow", 0.7);
	});

	jQuery('#kwick5').hover(function() {
		jQuery('#kwick5 .slidecaption').stop().fadeTo("slow", 0.8);
		jQuery("#kwick5 .slideimage").stop().fadeTo("slow", 0.7);
		jQuery("#kwick2 .slideimage,#kwick3 .slideimage,#kwick4 .slideimage,#kwick1_startseite .slideimage,#kwick6 .slideimage").stop().fadeTo("fast", 0);	// Fade the rest of the kwich panels
	},function(){
		jQuery('.slidecaption').stop().fadeTo("slow", 0);
		jQuery(".slide-minicaption").stop().fadeTo("slow", 0.8);
		jQuery(".slideimage").stop().fadeTo("slow", 0.7);	
	});
	
	jQuery('#kwick6').hover(function() {
		jQuery('#kwick6 .slidecaption').stop().fadeTo("slow", 0.8);
		jQuery("#kwick6 .slideimage").stop().fadeTo("slow", 0.7);
		jQuery("#kwick2 .slideimage,#kwick3 .slideimage,#kwick4 .slideimage,#kwick5 .slideimage,#kwick1_startseite .slideimage").stop().fadeTo("fast", 0);	// Fade the rest of the kwich panels
	},function(){
		jQuery('.slidecaption').stop().fadeTo("slow", 0);
		jQuery(".slide-minicaption").stop().fadeTo("slow", 0.8);
		jQuery(".slideimage").stop().fadeTo("slow", 0.7);	
	});	
	
});
