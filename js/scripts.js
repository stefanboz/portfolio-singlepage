$(document).ready(function() {

	// Add nav_item_active class to the nav elements

	$(".menu a").on("click", function(e) {
		$(".menu a").removeClass("active");
		$(this).addClass("active");
	});



	// Floating navigation
	var navOffset = $("header").offset().top;

    /*$(window).scroll(function(){

        var scrollPos = $(window).scrollTop();

	        if (scrollPos > navOffset) {
	            $("header").addClass("fixed");
	        } else {
	            $("header").removeClass("fixed");
        }

    });*/




	// jPanelMenu for mobile navigation
	var jPM = $.jPanelMenu({
		menu: ".menu",
	    trigger: ".menu_trigger",
	    duration: 300
	});
	jPM.on();

	$(".menu_trigger").on("click", function(e) {
		e.preventDefault();
		$(".jPanelMenu-panel").css("display", "none");
	})

	$("#jPanelMenu-menu").prepend("<li id='menu_close'><a href='#'>X</a></li>");

	$("#menu_close a, #jPanelMenu-menu a").on("click", function() {
		jPM.close();
		$(".jPanelMenu-panel").css("display", "block");
	});

	
	
	// Show and hide parts elements of 'PORTFOLIO' section

	$(".portfolio_sections > a").on("click", function(e) {
		e.preventDefault();
		$(".portfolio_sections > a").removeClass("portfolio_active");
		$(this).addClass("portfolio_active");
	});

	$(".button_all").on("click", function(e){
		e.preventDefault();
		$(".item").show();
	});

	$(".button_web").on("click", function(e) {
		e.preventDefault();
		$(".web").show();
		$(".app").hide();
		$(".icon").hide();
	});
	

	$(".button_apps").on("click", function(e) {
		e.preventDefault();
		$(".app").show();
		$(".web").hide();
		$(".icon").hide();
	});

	$(".button_icons").on("click", function(e) {
		e.preventDefault();
		$(".icon").show();
		$(".web").hide();
		$(".app").hide();
	});		


});

// Floating navigation
 $(window).scroll(function() {
    	if($(window).scrollTop() >= 420) {
    		$("header").addClass("fixed");
    	} else {
    		$("header").removeClass("fixed");
    	}
    });
