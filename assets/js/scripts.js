/*
    Slider
*/
$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails"
    });
});


/*
    Google maps
*/
jQuery(document).ready(function() {
    var position = new google.maps.LatLng(6.723593, 80.025983);
    $('.map').gmap({'center': position,'zoom': 16, 'disableDefaultUI':true, 'callback': function() {
            var self = this;
            self.addMarker({'position': this.get('map').getCenter() });	
        }
    }); 
});


/*
    Contact form
*/
jQuery(document).ready(function() {
    $('.contact-form form').submit(function() {

        $('.contact-form form .nameLabel').html('Name');
        $('.contact-form form .emailLabel').html('Email');
		$('.contact-form form .phoneLabel').html('Phone Number');
		$('.contact-form form .companyLabel').html('Company Name');
        $('.contact-form form .messageLabel').html('Message');

        var postdata = $('.contact-form form').serialize();
		//alert(postdata);
        $.ajax({
            type: 'POST',
            url: 'contactus',
            data: postdata,
            dataType: 'json',
            success: function(json) {
				if(json.errorMessage != ''){
					$('.contact-form form .nameLabel').append(' - <span class="violet" style="font-size: 13px; font-style: italic"> ' + json.errorMessage + '</span>');
				}else{
					if(json.nameMessage != '') {
						$('.contact-form form .nameLabel').append(' - <span class="violet" style="font-size: 13px; font-style: italic"> ' + json.nameMessage + '</span>');
					}
					if(json.emailMessage != '') {
						$('.contact-form form .emailLabel').append(' - <span class="violet" style="font-size: 13px; font-style: italic"> ' + json.emailMessage + '</span>');
					}
					if(json.phoneMessage != '') {
						$('.contact-form form .phoneLabel').append(' - <span class="violet" style="font-size: 13px; font-style: italic"> ' + json.phoneMessage + '</span>');
					}				
					if(json.messageMessage != '') {
						$('.contact-form form .messageLabel').append(' - <span class="violet" style="font-size: 13px; font-style: italic"> ' + json.messageMessage + '</span>');
					}
					if(json.nameMessage == '' && json.emailMessage == '' && json.phoneMessage == '' && json.messageMessage == '') {
						$('.contact-form form').fadeOut('fast', function() {
							$('.contact-form').append('<p><span class="violet">Thanks for contacting us!</span> We will get back to you very soon.</p>');
						});
					}
				}
            }
        });
        return false;
    });
});

/*
    Enquiry form
*/
jQuery(document).ready(function() {
    $('.enquiry-form form').submit(function() {

        $('.enquiry-form form .nameLabel').html('Name');
        $('.enquiry-form form .emailLabel').html('Email');
		$('.enquiry-form form .phoneLabel').html('Phone Number');
		$('.enquiry-form form .companyLabel').html('Company Name');
        $('.enquiry-form form .messageLabel').html('Message');
		
        var postdata = $('.enquiry-form form').serialize();
		//alert(postdata);
        $.ajax({
            type: 'POST',
            url: 'contactus',
            data: postdata,
            dataType: 'json',
            success: function(json) {
			
                if(json.nameMessage != '') {
                    $('.enquiry-form form .nameLabel').append(' - <span class="violet" style="font-size: 13px; font-style: italic"> ' + json.nameMessage + '</span>');
                }
                if(json.emailMessage != '') {
                    $('.enquiry-form form .emailLabel').append(' - <span class="violet" style="font-size: 13px; font-style: italic"> ' + json.emailMessage + '</span>');
                }
                if(json.phoneMessage != '') {
                    $('.enquiry-form form .phoneLabel').append(' - <span class="violet" style="font-size: 13px; font-style: italic"> ' + json.phoneMessage + '</span>');
                }				
                if(json.messageMessage != '') {
                    $('.enquiry-form form .messageLabel').append(' - <span class="violet" style="font-size: 13px; font-style: italic"> ' + json.messageMessage + '</span>');
                }
                if(json.nameMessage == '' && json.emailMessage == '' && json.phoneMessage == '' && json.messageMessage == '') {
                    		$(".enquiry-form form").fadeOut("fast", function(){
								$(this).before('<p><span class="violet">Thanks for contacting us!</span> We will get back to you very soon.</p>');
								setTimeout("$.fancybox.close()", 3000);
							});
                }
            }
        });
        return false;
    });
});