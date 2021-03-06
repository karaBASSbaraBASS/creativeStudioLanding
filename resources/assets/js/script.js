$(document).ready(function() {
// scroll on arrow
	$('.arrowBtnDown').on('click', function(event) {
		event.preventDefault();
		var nextSection = $('.sectionOurStory').offset().top ;
		$('body, html').animate({scrollTop: nextSection}, 500);
	});
// scroll on arrow end
// pages with hash script
	$('.button').on('click', function(event) {
		event.preventDefault();
		var	section = $(this).attr('href');
		showSection(section, true);
	});
	showSection(window.location.hash, false);
});

$(window).scroll(function() {
	checkSection();
});

// show section
function showSection(section, isAnimate) {
	var
		direction = section.replace(/#/, ''),
		reqSection = $('section').filter('[data-section="' + direction + '"]'),
		reqSectionPos = reqSection.offset().top;

	if (isAnimate) {
		$('body, html').animate({scrollTop: reqSectionPos}, 500);
	} else {
		$('body, html').scrollTop(reqSectionPos);
	}
}

// section showed
function checkSection() { 
	$('section').each(function(){
		var
			$this = $(this),
			topEdge = $this.offset().top - 400, // top edge
			bottomEdge = topEdge + $this.height(), // bottom edge
			wScroll = $(window).scrollTop();

		if (topEdge < wScroll && bottomEdge > wScroll) {
			var 
				currentId = $this.data('section');
				//console.log(currentId);
				reqLink = $('.nav__item-link').filter('[href="#' + currentId + '"]');
					
			reqLink.closest('.nav__item').addClass('active').siblings().removeClass('active');

			window.location.hash = currentId;	
		}

	});
}
// pages with hash script end
// owl carusel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:3000,
    nav:false,
    responsive:{
        0:{
            items:3,
            nav:false,
            loop:true
        },
        768:{
            items:4,
            nav:false,
            loop:true
        },
        992:{
            items:6,
            nav:true,
            loop:true
        },
        1100:{
            items:6,
            nav:false,
            loop:true
        }
    }
});
// owl carusel end
