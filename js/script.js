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
    responsive: [
    {
        breakpoint: 575.98,
        settings: {
            slidesToShow: 1,
    }
    },
    {
    breakpoint: 767.98,
    settings: {
        slidesToShow: 1,
    }
    }
]
});

console.log('hello');

alert('hello this is class 21 hw');

confirm('hello this is confirm');

prompt('hello this is prompt');
