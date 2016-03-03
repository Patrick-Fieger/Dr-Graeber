$(document).ready(function($) {
	if($('.slider').length){
		$('.slider').unslider({
			autoplay : true
		});
	}
	if($(".fancybox").length){
		$(".fancybox").fancybox();
	}

	var path = window.location.pathname.split('/')[1];
	$('header a').each(function(index, el) {
		if($(this).attr('href') == path) $(this).closest('li').addClass('active');
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



});