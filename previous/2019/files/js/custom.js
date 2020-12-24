// custom scripts
//---------------

$(function() {

    onload()

    // roll scroll on click 
    $('.nav-link').click( function(){

        $('html,body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top
            }, 'slow'
        );

    });

    // wormhole doorway
    $(".logo").hover( 

        function() {

            $(this).fadeTo( "fast" , 0.0);
            $('.background').addClass("animate-half");

        }, 

        function() {

            $(this).fadeTo( "fast" , 1.0);
            $('.background').removeClass("animate-half");

        }

    );

    // wormhole doorway
    $(".logo").click( 

        function() {

            $('.background').addClass("animate-full");
            $('.site-wrapper-inner.site-wrapper-logo').fadeOut("slow", function() {

                window.location.href = 'info.html';

            });

        }

    );

});

function onload() {

    $(".logo").fadeTo( "fast", 0.0, function() { 
        $(this).fadeTo( "slow" , 1.0) 
    });

    $('.background').addClass("background-stable");

}