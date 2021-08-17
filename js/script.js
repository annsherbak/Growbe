$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        slidesToShow: 2,
        centerMode:true,
        slidesToScroll:1,
        adaptiveHeight: true,
        responsive: [
        {
        breakpoint: 1600,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:false,
      }
        },
        {
        breakpoint: 800,
        settings: {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            adaptiveHeight: true
        }
        }  
    ]
    });
    $('.header__burger').click(function(event) {
    $('.header__burger, .header__nav').toggleClass('active');
    });
});