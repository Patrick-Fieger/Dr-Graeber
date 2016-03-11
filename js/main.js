$(document).ready(function($) {
	if($('.slider').length){
		$('.slider').unslider({
			autoplay : true
		});
	}
	if($(".fancybox").length){
		$(".fancybox").fancybox();
	}

	if($('.kwicks_startseite').length){
		setTimeout(function() {
			$('.kwicks_startseite').addClass('active');
		}, 1000);
	}

	var path_split = window.location.pathname.split('/');
	var path = path_split[path_split.length - 1];
	$('header a').each(function(index, el) {
		if($(this).attr('href') == path){
			$(this).closest('li').addClass('active');
		}
	});

	$(document).on('submit', 'form', function(event) {
		event.preventDefault();
		var serialized_data = $(this).serialize();
        $.ajax({
            url: '/send.php',
            type: 'POST',
            data: serialized_data,
            success: function(data) {
                $('form').hide();
                if (data == "OK") {
                    $('.successfeedback').addClass('active');
                } else {
                    $('.errorfeedback').addClass('active');
                }
            }
        });
	});

	$(document).on('click touchstart', '.menu-button', function(event) {
		event.preventDefault();
		$('#primary_nav_wrap').toggleClass('active');
	});


	$(document).on('click', "a[href='#bottom']", function(event) {
		event.preventDefault();
  		$("html, body").animate({ scrollTop: $(document).height() }, 750,pulseFooter);
  		return false;
	});


	function pulseFooter(){
		setTimeout(function() {
			$('footer .col-2').addClass('pulse animated');
		}, 200);

		setTimeout(function() {
			$('footer .col-2').removeClass('pulse animated');
		}, 2000);
	}

	$('.slider.unslider-horizontal').hammer().bind("swipeleft", function(){
		if($('.unslider-active').next('li').length){
			$('.unslider-active').next('li').trigger('click')
		}else{
			$('.unslider-nav li:first-child').trigger('click')
		}
	});

	$('.slider.unslider-horizontal').hammer().bind("swiperight", function(){
		if($('.unslider-active').prev('li').length){
			$('.unslider-active').prev('li').trigger('click')
		}else{
			$('.unslider-nav li:last-child').trigger('click')
		}
	});

	$('.map').addClass('scrolloff'); // set the pointer events to none on doc ready
	$('.map_wrapper').on('click', function () {
	    $('.map').removeClass('scrolloff'); // set the pointer events true on click
	});

	// you want to disable pointer events when the mouse leave the canvas area;

	$(".map").mouseleave(function () {
	    $('.map').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
	});
});