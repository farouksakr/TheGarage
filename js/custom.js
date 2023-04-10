$(function() {

    // loading page

    $(window).on('load', function() {

        $('.loading').fadeOut(1000, function() {

            $('body').css('overflow', 'auto')

        });

    });

    // header height

    $('.header').height( $(window).height() );

    // resize window

    $(window).resize(function() {

        $('.header').height( $(window).height() );

    });

    // venobox

    $('.venobox').venobox(); 

    // navbar color

    $(window).scroll(function() {

        if( $(window).scrollTop() >= 200 ) {

            $('nav').css({
                'background-color' : '#040925',
                'padding' : '5px 0'
            })

        } else {

            $('nav').css({
                'background-color' : 'transparent',
                'padding' : '15px 0'
            })

        };

    });

    if( $(window).scrollTop() >= 250 ) {

        $('nav').css({
            'background-color' : '#040925',
            'padding' : '5px 0'
        })

    } else {

        $('nav').css({
            'background-color' : 'transparent',
            'padding' : '15px 0'
        })

    };

    // testimonials shuffle

    $('.testimonials .buttons .btn').on('click', function(e){

        e.preventDefault()

        $(this).addClass('active').siblings().removeClass('active')

        $('#' + $(this).data('click')).siblings().fadeOut(200, function(){

            $('#' + $(this).data('click')).siblings().removeClass('active')

        })

        $('#' + $(this).data('click')).delay(200).fadeIn(200, function(){

            $('#' + $(this).data('click')).addClass('active')

        })

    });

    // gallary carousel 

    $('.owl-carousel').owlCarousel({
        loop:true,
        dots:true,
        center:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    // FAQ 

    $('.faq .content .info i').on('click', function(){

        $(this).parent().parent().find('p').slideToggle(300)

        if( $(this).hasClass('fa-plus-circle') ) {

            $(this).attr('class', 'fas fa-minus-circle')
            $(this).css('color', '#F8234A')
            $(this).siblings().css('color', '#F8234A')

        } else {

            $(this).attr('class', 'fas fa-plus-circle')
            $(this).css('color', '#000')
            $(this).siblings().css('color', '#000')

        }

    });

    // smooth scroll

    $('nav li a').on('click', function() {

        $('html, body').animate({

            scrollTop : $( '#' + $(this).data('scroll') ).offset().top - 90

        }, 1000);

    });

    // button up 

    $(window).scroll(function() {

        if ( $(window).scrollTop() >= 1000 ) {

            $('.up').fadeIn(1000)
            
        } else (

            $('.up').fadeOut(600)

        )

    });

    $('.up').on('click', function() {

        $('html, body').animate({

            scrollTop : 0

        }, 1000)

    });

    // A O S
    
    $(function() {

        AOS.init();

        window.addEventListener('load', AOS.refresh)

    });

});