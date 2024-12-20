$(document).ready(function() {
    if (!$('.sub-footer').hasClass("always-show")) {
        $('.sub-footer').hide();
    }

    $(window).scroll(function() {
        $(".logo").css("opacity", 1 - $(window).scrollTop() / 150);

        if (!$('.sub-footer').hasClass("always-show")) {
            if ($(window).scrollTop() > $('footer').offset().top) {
                $('.sub-footer').show();
                $('.cut-through-text').hide();
                $('.background').hide();
            } else {
                $('.sub-footer').hide();
                $('.cut-through-text').show();
                $('.background').show();
            }
        }

        /*
	    if ($('.sticky').length){

		    var distancevid = $('.video').offset().top,
		    distanceplay = $('.play-video').offset().top,
		    distanceend = $('.video').offset().top + $('.video').height(),
		    distancehide = $('.cut-out').offset().top,
    		$window = $(window);

	    	if ( $window.scrollTop() >= distancevid ) {
		        $(".sticky").css("display", "block");
		    } else {
		    	$(".sticky").css("display", "none");
		    }

		    if ( $window.scrollTop() >= distanceplay ) {
		        $(".sticky").css("opacity", ($(window).scrollTop() - $('.play-video').offset().top) / 500);
		    } else {
		    	$(".sticky").css("opacity", 0);
		    }

		    if ( $window.scrollTop() >= distanceend ) {
		    	var tally = 1 - ($(window).scrollTop() - distanceend) / 400;
		    	if (tally >= 0) {
		        	$(".sticky").css("transform", "translateY(-50%) translateX(-50%) scale("+tally+")");
		        }
		    }

		    if ( $window.scrollTop() >= distancehide ) {
		        $(".sticky").css("display", "none");
		    } else {
		    	$(".sticky").css("display", "block");
		    }
	    }
	    */

        if ($(window).scrollTop() > $(window).height() * 2) {
            $(".cut-through").show();
        } else {
            $(".cut-through").hide();
        }
    });

    if ($(window).scrollTop() > 200) {
        $(".logo").css("opacity", 0);
    }

    if ($('.shape').length) {
        $('.false-background').css("height", ($(".body").height() - $(".shape").height()) + $(".body").offset().top - $(".shape").offset().top);
    } else {
        $('.false-background').css("height", $(".body").height());
    }

    if ($('.cut-out .paragraph').length) {
        $('.cut-out .paragraph').css("top", $(".text-marker").height() + 100);
    }

    if ($('.cover-bg.bottom').length) {
        var covertop = $(".shape").offset().top + $(".shape").height();
        var coverheight = $(".video-bg-false").offset().top - covertop;
        $('.cover-bg.bottom').css({
            "top": covertop,
            "height": coverheight
        });
    }

    if ($('.cover-bg.left').length) {
        $('.cover-bg.left').css({
            "height": $(".shape").offset().top + $(".shape").height() + "px"
        });
    }

    $(window).resize(function() {
        if ($('.shape').length) {
            $('.false-background').css("height", ($(".body").height() - $(".shape").height()) + $(".body").offset().top - $(".shape").offset().top);
        } else {
            $('.false-background').css("height", $(".body").height());
        }

        if ($('.cut-out .paragraph').length) {
            $('.cut-out .paragraph').css("top", $(".text-marker").height() + 100);
        }

        if ($('.cover-bg.bottom').length) {
            var covertop = $(".shape").offset().top + $(".shape").height();
            var coverheight = $(".video-bg-false").offset().top - covertop;
            $('.cover-bg.bottom').css({
                "top": covertop,
                "height": coverheight
            });
        }

        if ($('.cover-bg.left').length) {
            $('.cover-bg.left').css({
                "height": $(".shape").offset().top + $(".shape").height() + "px"
            });
        }
    });

    $(".icon").click(function() {
        if ($(".icon").hasClass('open')) {
            $("nav main .links a:last-child").removeClass("fade");
            setTimeout(function() {
                $("nav main .links a:first-child").removeClass("fade");
            }, 250);
            setTimeout(function() {
                $(".icon").removeClass('open');
                $("nav main .icon").removeClass("fade");
            }, 250);
            setTimeout(function() {
                $("nav").removeClass("fade");
            }, 500);
            setTimeout(function() {
                $("nav").removeClass("show").addClass("front");
            }, 1000);
        } else {
            $(".icon").addClass('open');
            $("nav").addClass("show").addClass("front");
            setTimeout(function() {
                $("nav").addClass("fade");
            }, 100);
            setTimeout(function() {
                $("nav main .icon").addClass("fade");
            }, 250);
            setTimeout(function() {
                $("nav main .links a:first-child").addClass("fade");
            }, 500);
            setTimeout(function() {
                $("nav main .links a:last-child").addClass("fade");
            }, 750);
        }
    });

    $(".sector-question").click(function() {
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $(this).siblings(".sector-answer").slideUp();
        } else {
            $(".sector-question").removeClass("open");
            $(".sector-answer").slideUp();
            $(this).toggleClass("open");
            $(this).siblings(".sector-answer").slideToggle();
        }
    });

    /*
    var $form = $('.contact-form form');

    if ( $form.length > 0 ) {
        $('.contact-form form input[type="submit"]').bind('click', function ( event ) {
            if ( event ) event.preventDefault();
            // validate_input() is a validation function I wrote, you'll have to substitute this with your own.
            if ( validate_input($form) ) { register($form); }
        });
    }

    function register($form) {
	    $.ajax({
	        type: $form.attr('method'),
	        url: $form.attr('action'),
	        data: $form.serialize(),
	        cache       : false,
	        dataType    : 'jsonp',
	        jsonp: 'c',
	        contentType: "application/json; charset=utf-8",
	        error       : function(err) { alert("Could not connect to the registration server. Please try again later."); },
	        success     : function(data) {
	            if (data.result != "success") {
	                console.log("Error");
	            } else {
	                console.log("Success");
	            }
	        }
	    });
	}
    */

    //-json?u=3de4ea0390ec6afcd5d8f0da7&amp;id=0bde12b793

    $('form.sign-up').submit(function(e) {
        var $this = $(this);
        $.ajax({
            type: "GET",
            url: "https://b4e.us2.list-manage.com/subscribe/post-json?c=?",
            data: $this.serialize(),
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            error: function(err) {
                alert("Could not connect to the registration server.");
            },
            success: function(data) {
                if (data.result != "success") {
                    $this.siblings(".success").hide();
                    $this.siblings(".error").show();
                } else {
                    $this.siblings(".success").show();
                    $this.siblings(".error").hide();
                }
            }
        });
        return false;
    });
});