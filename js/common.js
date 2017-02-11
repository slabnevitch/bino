$(function() {
		
	var staffArray = [ {name: 'Антония Георгиева', proff: 'manager'}, {name: 'Kazi Erfan', proff: 'UI/UX Designer'}, {name: 'Tobias Rothbauer', proff: 'Front End'}, {name: 'Ashlee Osborne', proff: 'SEO'}, {name: 'Angelo Quarta', proff: 'Graphic Designer'} ];
		
		
	 var paranja =  document.querySelectorAll('.stuff-paranja'),
				staffInfo = document.querySelector('.staffer__name--hidden'),
				staffName = staffInfo.querySelector('.name'),
				staffProf = staffInfo.querySelector('.profession'),
				staffLine = document.querySelector('body > .staffer__line'),
				staffSection = document.querySelector('.team'),
				paranjaArr = [];
			
		for(var i = 0; i<paranja.length; i++){
			paranjaArr.push(paranja[i]);
		}
		paranjaArr.forEach(function(item, i, arr){
			item.addEventListener('mouseleave', outHandler);

		});
		function outHandler(){
			staffInfo.style.display = "none";
			staffLine.style.display = "none";
		}
		
		staffSection.onclick = function(e){
			if(e.target.className == 'stuff-paranja'){
				var staffer = e.target,
				index = paranjaArr.indexOf(staffer),
				top = staffer.getBoundingClientRect().top + pageYOffset + 120,
				left = staffer.getBoundingClientRect().left;
						
				staffName.textContent = staffArray[paranjaArr.indexOf(staffer)].name;
				staffProf.textContent = staffArray[paranjaArr.indexOf(staffer)].proff;
				
				staffInfo.style.display = "block";
				var nameWidth = staffName.offsetWidth;
				
				staffInfo.style.top =  top + 'px';
				staffInfo.style.left = left - nameWidth/4 + 'px';
			
				if(paranjaArr.indexOf(staffer) < 1){
					staffInfo.style.left = left + nameWidth/4 + 'px';
					staffInfo.style.top =  top + 'px';
				}
				if(paranjaArr.indexOf(staffer) > 3){
					staffInfo.style.left = left - nameWidth/1.2 + 'px';
					staffInfo.style.top =  top + 'px';
				}
					
				staffLine.style.display = "block";
				staffLine.style.top = top - 51 + 'px';
				staffLine.style.left = left + 'px';
				
			}else{
				staffInfo.style.display = "none";
				staffLine.style.display = "none";
			}
		}
		/* paranjaArr.forEach(function(item, i, arr){
			 item.addEventListener('mouseenter', overFunc);
		 item.addEventListener('mouseleave', outFunc)
		}); */
		
		/* function overFunc(e){
			var top = this.getBoundingClientRect().top + pageYOffset + 120,
					left = this.getBoundingClientRect().left;
					
				
			staffName.textContent = staffArray[paranjaArr.indexOf(this)].name;
			staffProf.textContent = staffArray[paranjaArr.indexOf(this)].proff;
			
			
			
			staffInfo.style.display = "block";
			var nameWidth = staffName.offsetWidth;
					
					
			staffInfo.style.top =  top + 'px';
			staffInfo.style.left = left - nameWidth/4 + 'px';
			
			if(paranjaArr.indexOf(this) < 1){
					staffInfo.style.left = left + nameWidth/4 + 'px';
					staffInfo.style.top =  top + 'px';
			}
			if(paranjaArr.indexOf(this) > 3){
					staffInfo.style.left = left - nameWidth/1.2 + 'px';
					staffInfo.style.top =  top + 'px';
			}
					
			staffLine.style.display = "block";
			staffLine.style.top = top - 51 + 'px';
			staffLine.style.left = left + 'px';
			
		}
		function outFunc(e){
			staffInfo.style.display = "none";
			staffLine.style.display = "none";
		}*/
		
	//inputs animation
	var inputs = $('.callback__form input'),
			textArea = $('.callback__form textarea');
	
		inputs.focus(function(e){
			$(this).siblings('.inp-anim-line').animate({width: 0}, 1000);
		});
		inputs.blur(function(e){
			$(this).siblings('.inp-anim-line').animate({width: '100%'}, 1000);
		});
		
		textArea.focus(function(e){
			$(this).siblings('.inp-anim-line').animate({width: 0}, 1000);
		});
		textArea.blur(function(e){
			$(this).siblings('.inp-anim-line').animate({width: '100%'}, 1000);
		});
	
	
	//stellar
	/* $('.features').stellar(
		
	); */
	
	$.stellar({
		horizontalOffset: 50
		
	});
	//carousels
	
	$("#car1").owlCarousel({
				items: 1,
				loop: true,
				nav: false,
				page: true,
				responsiveClass:true,
				autoWidth: false,
				dots: false,
				autoplay: true,
				animateOut: 'fadeOut'
	});
	$('#car2').owlCarousel({
				items: 1,
				loop: true,
				nav: false,
			   responsiveClass:false,
				autoWidth: false,
				page: true,
				dots: true,

	});
	
	//triggers for slider
		var navButts = $('.sl-nav');
		navButts.click(function(e){
			
			if($(this).hasClass('sl-prev')){
				$('.owl-prev').trigger(e);
			}else{
				$('.owl-next').trigger(e);
			}
		});
	
	//hidden mobile menu
	var toggleButton = $('.icon-wrap'),
		mobileMenu = $('.current-menu'),
		closeButton = $('.close'),
		menuIcon = $('.menu-hidden-icon');
	
	$('.icon-wrap').click(function(e){
		mobileMenu.slideToggle(300);
		if(!closeButton.hasClass('visible')){
			menuIcon.stop(true, true).fadeOut();
			closeButton.stop(true, true).fadeIn().addClass('visible');
			
			
		}else{
			
			closeButton.stop(true, true).fadeOut();
				menuIcon.stop(true, true).fadeIn();
			
			closeButton.removeClass('visible');
		}
	});
	
	//scroll to top
	$('.button-up').click(function(){
		scrollTo(0);
	});
	
	//scroll to "works"
	$('#link-to-works').click(function(e){
		e.preventDefault();
		var works = $('.works'),
				worksTop = works.offset().top;
		scrollTo(worksTop);
				
	});
	
	//scroll to "about"
	$('.anchor').click(function(e){
		var aboutTop = $('.about').offset().top;
		scrollTo(aboutTop);
	});
	function scrollTo(value){
			$('html, body').animate({scrollTop: value}, 800);
	}
	
	//scroll to all sections
	var menuLinks = $('.top-menu-link');
			menuLinks .click(function(){
				var location = $(this).attr('href'),
						sectionCoord = $(location).offset().top + 50;
						scrollTo(sectionCoord);
			});
	
	//header resize
	// $(window).resize(function(){
	// 	headerResize();
	// });
	
	// function headerResize(){
	// 	var currentHeight = $(window).height();
		
	// 	if(currentHeight < 992){
	// 		$('.sl-item').css('height', currentHeight);
	// 		$('.header').css('height', currentHeight);
	// 	}else{
	// 		return;
	// 	}
			
	// }
	// headerResize();
	
	//Tabs
	var tabItems = $('a.tab-item'),
		tabContents = $('.tab-content');
		
		
	tabItems.click(function(e){
		e.preventDefault();
		var currentItem = $(this);
		tabItems.eq(currentItem.index('.tab-item')).addClass('tab-item--active').siblings().removeClass('tab-item--active');
		tabContents.eq(currentItem.index('.tab-item')).removeClass('hidden').fadeIn().siblings().fadeOut();
		
		
	});
	
	
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
			
			return false;
		});
		
	

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
