jQuery(($) => {
    $(".js-phone").mask("+7 (999) 999-99-99");
});

if($('.header__burger')) {
    $(() => {
        $('.header__burger').click((event) => {
            event.preventDefault();

            $('.header__list').addClass('header__list_active');
            $('.header__cross').addClass('header__cross_active');
            $('.header__burger').addClass('header__burger_deactivation');
        })

        $('.header__cross').click((event) => {
            event.preventDefault();

            $('.header__list').removeClass('header__list_active');
            $('.header__cross').removeClass('header__cross_active');
            $('.header__burger').removeClass('header__burger_deactivation');
        })

        $('.header__link').click((event) => {
            event.preventDefault();

            $('.header__list').removeClass('header__list_active');
            $('.header__cross').removeClass('header__cross_active');
            $('.header__burger').removeClass('header__burger_deactivation');
        })
    })
}

$('.js-scroll').click(function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top + 'px'
    }, {
        duration: 1000,
        easing: 'swing'
    });
    return false
})

$('.js-button').click((event) => {
    event.preventDefault();

    $('.js-popup-thanks').addClass('popup_active');
    setTimeout(() => $('.js-popup-thanks').removeClass('popup_active'), 3000)
});   


