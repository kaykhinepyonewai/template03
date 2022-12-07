$(document).ready(function () {

    $('.nav-item li:first-child a').addClass('active1');
    $('.nav-item li a').click(function () {
        //console.log('Hooo');
        $('.nav-item li a').removeClass('active1');
        $(this).addClass('active1');
    });

    $('.btn-gnavi').on('click', function () {
        var rightVal = 0;
        if ($(this).hasClass('hb-open')) {
            rightVal = -1100;
            $(this).removeClass('hb-open');
        } else {
            $(this).addClass('hb-open');
        }

        $('.nav-item').stop().animate({
            right: rightVal
        }, 200);
    });


    $('.slider').slick({
        dots: true,
        arrow: true,
        variableWidth: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrow: true,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrow: true,
                }
            },
        ]
    });

    $('.happing-sec #tabs-nav li:first-child').addClass('active');
    $('.happing-sec .tab-content').hide();
    $('.happing-sec .tab-content:first').show();

    $('.happing-sec #tabs-nav li').click(function () {
        $('.happing-sec #tabs-nav li').removeClass('active');
        $(this).addClass('active');
        $('.happing-sec .tab-content').hide();
        var activeTab = $(this).find('a').attr('href');
        console.log(activeTab);
        $(activeTab).show();
    });

    $('.news-fourth-cols #tabs-nav li:first-child').addClass('active2');
    $('.news-fourth-cols .tab-content').hide();
    $('.news-fourth-cols .tab-content:first').show();

    $('.news-fourth-cols #tabs-nav li').click(function () {
        $('.news-fourth-cols #tabs-nav li').removeClass('active2');
        $(this).addClass('active2');
        $('.news-fourth-cols .tab-content').hide();
        var activeTab = $(this).find('a').attr('href');
        console.log(activeTab);
        $(activeTab).show();
    });
})