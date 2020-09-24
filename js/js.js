$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        initialSlide: 2,
        variableWidth: true,
        appendDots:$('.dots_down'),
    });
});