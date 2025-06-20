// --------------AOS Animatiom........
AOS.init();



// --------------Counter Plugin........

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

// --------------slick slider Plugin........

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 4,
    asNavFor: '.slider-for',
    centerMode: true,
    focusOnSelect: true,
});

// ----------------Testimonial slider

$('.testimonials-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fa-solid myarr prr fa-arrow-left"></i>',
    nextArrow: '<i class="fa-solid myarr nrr fa-arrow-right"></i>',
});
