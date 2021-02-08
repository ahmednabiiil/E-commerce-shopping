$(document).ready(function() {
    // start slider


    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'

    });

    // 

    // start slider-2


    $('.slider-2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // 

    // start slider-3

    $('.slider-3').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'

    });


    // 

    // start slider-4

    $('.slider-4').slick({
        autoplay: true,
        autoplaySpeed: 3000,
    });


    // 



    // start progress circle par 

    $(function() {
        $('.chart').easyPieChart({
            scaleColor: false,
            barColor: '#1bbeb4',
            trackColor: '#eee',
            lineWidth: 10,
            lineCap: 'circle',
            size: "170",
            animate: ({
                duration: 4000,
                enabled: true
            })


        });
    });


    // 


    // start scroll-to-top

    $(".copy i").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    })





    // 
})