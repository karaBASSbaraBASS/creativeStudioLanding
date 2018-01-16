$(document).ready(function() {
	function tabToggler() {
		if ($('#room1').prop('checked')) {
			$('#RoomPan').addClass('visible');
			$('#Room2Pan').removeClass('visible');
			$('#Room3Pan').removeClass('visible');
			console.log("first selected");
		}
		else if ($('#room2').prop('checked')) {
			$('#Room2Pan').addClass('visible');
			$('#RoomPan').removeClass('visible');
			$('#Room3Pan').removeClass('visible');
			console.log("second selected");
		}
		else if ($('#room3').prop('checked')) {
			$('#Room3Pan').addClass('visible');
			$('#Room2Pan').removeClass('visible');
			$('#RoomPan').removeClass('visible');
			console.log("third selected");
		} else {
			// do nothing
		}
	}
	tabToggler();
	$('.tabset__wrap label').on('click', tabToggler);
	
	function faqAccordeon() {
		var $this = $(this),
			icon = $this.closest('.faqAccordeon__trigger'),
			item = $this.closest('.faqAccordeon__item'),
			list = $this.closest('.accordeon__list'),
			items = list.find('.faqAccordeon__item'),
			content = item.find('.faqAccordeon__inner'),
			otherContent = list.find('.faqAccordeon__inner'),
			upIcons = items.find('.arrUp'),
			duration = 300;
		if (!item.hasClass('active')) {
			items.removeClass('active');
			item.addClass('active');
			otherContent.stop(true, true).slideUp(duration);
			content.stop(true, true).slideDown(duration);
			upIcons.removeClass('arrUp');
			upIcons.addClass('arrDown');
			icon.removeClass('arrDown');
			icon.addClass('arrUp');
		} else {
			content.stop(true, true).slideUp(duration);
			items.removeClass('active');
			upIcons.removeClass('arrUp');
			upIcons.addClass('arrDown');
		}
		// console.log('accordeon running');
	};
	faqAccordeon();
	$('.js-accordeon__trigger').on('click', faqAccordeon);

	// comments counter
	function commentsCounter() {
		var list = $('.created__comments'),
			comments = list.find('.created__comment').length,
			commentsNumber = 'Комментарии ( ' + comments + ' )';
		console.log(commentsNumber);
		$('.created__commentsHeader').html(commentsNumber); 
	};
	commentsCounter();
	// comments counter end

	// answer form appear
	function commentsAnswer() {
		var $form =  $('#answerForm');
		$form.hide();
		var flag = true;
		$('.answerButton').click(function(a){  
		e.preventDefault();     
			$form.hide(); 
			$('.comment a').text('add'); 
			if(!$(this).hasClass('active')){         
				$(this).text('закрыть').addClass('active');
				var $comment =  $(this).parent();
				$form.find('#hidden').val($comment.attr('id'));
				$comment .append($('#form').show());        
			}
			else{
				$('.comment a').removeClass('active');  
			}
		});
	};
	commentsAnswer();
	// end answer form appear

	// appear modal with gallery
	$('.galleryItem').click(function(){   
		$('.modalShadow').toggleClass('active');
		$('.modalWrap').toggleClass('active');
	});

	$('.modalClose').click(function(){   
		$('.modalShadow').toggleClass('active');
		$('.modalWrap').toggleClass('active');
	});
	//appear modal with gallery end

	// $(document).ready(function() {
	//     $('.select').select2();
	// });

	// function modalAutoClose() {
	//     setTimeout(function() {
	//         $('#thanksModal').removeClass("active");
	//     }, 3000);
	// }
	// modalAutoClose();
	
	// birthdayCounter
	function birthdayCount() {
		var counterToday = $('.owlToday').children('.item').length,
			inThisDay = $('.owlThisMonts').children('.item').length,
			inMyOffice = $('.owlInOffice').children('.item').length;

			console.log(counterToday);
			console.log(inThisDay);
			console.log(inMyOffice);

		// $('.filterBirthday1::after').css({'content':"1"});
		// $('.filterBirthday2:after').css('content': inThisDay);
		// $('.filterBirthday3:after').css('content': inMyOffice);
	};

	birthdayCount();
	// birthdayCounter end
	// birthdayslider
	$('.birsdaySet .owl-carousel').owlCarousel({
		loop: true,
		nav:true,
		margin:10,
		items:1,
		responsiveClass: true,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			600: {
				items: 1,
				nav: true
			},
			1000: {
				items: 1,
				nav: true
			}
		},
		autoHeight: false,
	});
	$(".owl-prev").html('<span class="carousel-control-prev"></span>');
	$(".owl-next").html('<span class="carousel-control-next"></span>');
	// birthdayslider end 
	// birthdayslider
	$('.modalContent .owl-carousel').owlCarousel({
		loop: true,
		nav:true,
		margin:10,
		items:1,
		responsiveClass: true,
		autoplay:false,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			600: {
				items: 1,
				nav: true
			},
			1000: {
				items: 1,
				nav: true
			}
		},
		autoHeight: false,
	});
	$(".owl-prev").html('<span class="carousel-control-prev"></span>');
	$(".owl-next").html('<span class="carousel-control-next"></span>');


	// $('.owl-carousel').on('changed.owl.carousel', function(e) {
	//     if (!e.namespace || e.property.name != 'position') return;
	//     	var items_per_page = e.page.size;
	//     if (items_per_page > 1){
	//         var min_item_index  = e.item.index,
	//             max_item_index  = min_item_index + items_per_page,
	//             display_text    = (min_item_index+1) + '-' + max_item_index;
	//     } else {
	//         var display_text = (e.item.index+1);
	//     }   
	//     $('#info').text( display_text + '/' + e.item.count);
	// });
	// https://github.com/OwlCarousel2/OwlCarousel2/issues/158


	// birthdayslider end     
	// dropdown menu    
	$('.menu__item').click(function(e) {
		// e.preventDefault();
		$(this).children( ".dropDownWrap" ).toggleClass( "active" );
	});

	$('.navbar-toggler').click(function(e) {
			e.preventDefault();
			$(this).toggleClass('convert');
	});

	// dropdown menu end
	// calendar dropdown
		
	// calendar dropdown end 
	// $('.collapse').collapse("toggle");
	// custom select
	$('select').each(function(){
		var $this = $(this), numberOfOptions = $(this).children('option').length;
	  
		$this.addClass('select-hidden'); 
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');

		var $styledSelect = $this.next('div.select-styled');
		$styledSelect.text($this.children('option').eq(0).text());
	  
		var $list = $('<ul />', {
			'class': 'select-options'
		}).insertAfter($styledSelect);
	  
		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
		}
	  
		var $listItems = $list.children('li');
	  
		$styledSelect.click(function(e) {
			e.stopPropagation();
			$('div.select-styled.active').not(this).each(function(){
				$(this).removeClass('active').next('ul.select-options').hide();
			});
			$(this).toggleClass('active').next('ul.select-options').toggle();
		});
	  
		$listItems.click(function(e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
			//console.log($this.val());
		});
	  
		$(document).click(function() {
			$styledSelect.removeClass('active');
			$list.hide();
		});

	});
	// custom select end
	// open sub menu in side bar
	$('.selectListToggle').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('arrowRotate');
		$('.selectList').slideToggle( "slow", function() {
			console.log('animation complete');
		});
	});
	// open sub menu in side bar end
});