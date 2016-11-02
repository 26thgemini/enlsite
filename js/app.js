//  LOAD FUNCTIONS FOR BUILD AND DESTROY, BADGES, GLYPH HACKS AND TRAINING
$( document ).ready(function() {
    // lazy load initialization
    $("img.lazy").show().lazyload({
        threshold : 100,
        effect : "fadeIn"
    });
    
    // build and destory js
    $(".bd-links").click( function(){
        var $var = $(this);
        var $href = $var.attr('href');
        $("#bd_content").hide().load($href).fadeIn('normal');
        return false;
    });

// load content to modal badge
    $("a.modal-badge").click( function(){
        var $var = $(this);
        var $href = $var.attr('href');
        $(".modal-content").load($href);
        // setTimeout(function(){
        //     $('#badge').modal('show');
        // }, 2000);
    });

// Scroll back to top when link is click
    $(".bd-links").click(function(){
        $("html, body").delay(0).stop().animate({
            scrollTop: $('#build-destroy').offset().top
        }, 1500);
    });


    $('#badges').on('hide.bs.modal', function () {
        $('#badges').removeData('bs.modal');
        $('#badges .modal-content').html('');
    });

    //training function
    // build and destory js
    $(".train-links").click( function(){
        var $var = $(this);
        var $href = $var.attr('href');
        $(".welcome-msg").hide().load($href).fadeIn('normal');
        return false;
    });


});




// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 2000, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});

