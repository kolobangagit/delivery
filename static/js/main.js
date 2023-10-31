// adaptive menu
$(".adaptive-menu__open-menu").click(() => {
    $(".adaptive-menu__full-menu").slideDown()
});
$(".adaptive-menu__close-menu").click(() => {
    $(".adaptive-menu__full-menu").slideUp()
});
$(".adaptive-menu__link").click(() => {
    $(".adaptive-menu__full-menu").slideUp()
});
// $(".header__open-phone").click(() => {
//     $(".header__adaptive-phone").slideToggle();
// });
// $(".header__mobile-socials").click(() => {
//     $(".header__socials").toggleClass("active");
// });

//fixed menu
$(window).bind("scroll", () => {
    $(window).scrollTop() > 0 ? $(".js-fixed").addClass("header--fixed") : $(".js-fixed").removeClass("header--fixed");
});

//anhore link
$(".adaptive-menu__menu-top, .footer__menu").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});

//popup
$(".js-popup").click((e) => {
    e.preventDefault(), $(".popup__overlay").fadeIn(400, function () {
        $(".popup").css("display", "block").animate({opacity: 1, top: "50%"}, 200)
    })
});
$(".popup__close, .popup__overlay").click(() => {
    $(".popup").animate({opacity: 0, top: "45%"}, 200, function () {
        $(this).css("display", "none"), $(".popup__overlay").fadeOut(400);
        $('.popup__form').css('display', 'block');
        $('.popup__notification').hide(100);
    })
});
$(".js-popup-madel").click((e) => {
    e.preventDefault(), $(".popup__overlay").fadeIn(400, function () {
        $(".popup-model").css("display", "block").animate({opacity: 1, top: "50%"}, 200)
    })
});
$(".popup-model__close, .popup__overlay").click(() => {
    $(".popup-model").animate({opacity: 0, top: "45%"}, 200, function () {
        $(this).css("display", "none"), $(".popup__overlay").fadeOut(400);
        $('.popup-model__form').css('display', 'block');
        $('.popup-model__notification').hide(100);
    })
});

//popup team
$('.team__item.item').hover(function () {
    $(this).toggleClass('active');
});
$(".js-popup-team").click((e) => {
    e.preventDefault();
    $(".team__item.item.active .team__overlay").fadeIn(200, function () {
        $(".team__item.item.active .team__hide").show(200).animate({opacity: 1, top: "0"}, 200);
    })
});
$(".team__close, .team__overlay").click(() => {
    $(".team__hide").animate({opacity: 0, top: "100%"}, 200, function () {
        $(this).hide(200), $(".team__overlay").fadeOut(200);
    })
});

//slider
$(document).ready(function () {
    let owl = $('.popular__slider');
    owl.owlCarousel({
        margin: 0,
        nav: false,
        dots: true,
        autoplay: false,
        loop: true,
        responsive: {
            0: {
                items: 1,
                autoplay: false
            },
            1200: {
                items: 1,
                autoplay: false
            }
        }
    });

    owl.on('changed.owl.carousel', function(event) {
      	$(".js-popup-madel").click((e) => {
		    e.preventDefault(), $(".popup__overlay").fadeIn(400, function () {
		        $(".popup-model").css("display", "block").animate({opacity: 1, top: "50%"}, 200)
		    })
		});
	});

    $('.team__slider').owlCarousel({
        items: 4,
        lazyLoad: true,
        loop: false,
        autoplay: true,
        dots: true,
        margin: 20,
        slideBy: 1,
        responsive: {
            0: {
                items: 1,
                autoplay: false
            },
            600: {
                items: 2,
                autoplay: false
            },
            1200: {
                items: 3,
                autoplay: true
            }
        }
    });

    $('.fadeOut').owlCarousel({
        items: 1,
        animateOut: 'fadeOut',
        autoplay: true,
        dots: false
    });

    $('.advantages__slider').owlCarousel({
        items: 1,
        animateOut: 'fadeOut',
        autoplay: true,
        // autoplaySpeed: 2000,
        // autoplayHoverPause:true,
        nav: false,
        autoHeight: true,
        dots: true,
        responsive: {
            0: {
                autoplay: false
            },
            1200: {
                autoplay: true
            }
        }
    });

    $('.stage__slider').owlCarousel({
        items: 1,
        animateOut: 'fadeOut',
        autoplay: true,
        // autoplaySpeed: 2000,
        // autoplayHoverPause:true,
        nav: false,
        autoHeight: true,
        dots: true,
        responsive: {
            0: {
                autoplay: false
            },
            1200: {
                autoplay: true
            }
        }
    });

    var reviewsSlider = $('.reviews__slider');
    reviewsSlider.owlCarousel({
        items: 2,
        animateOut: 'fadeOut',
        autoplay: true,
        // autoplaySpeed: 2000,
        // autoplayHoverPause:true,
        nav: false,
        autoHeight: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
                autoplay: false
            },
            660: {
                items: 2,
                autoplay: false
            },
            1200: {
                autoplay: true
            }
        }
    });

    // reviews
    var reviewMore_txtClosed = $('.js-review-more').attr('data-text-detail'),
        reviewMore_txtOpened = $('.js-review-more').attr('data-text-closed');

    $(".js-review-more").on("click", function(event) {
        event.preventDefault();
        // console.log(reviewsSlider);
        $(this).parent().find('.review__text').toggleClass('review__text--closed');

        if( $(this).parent().find('.review__text').hasClass('review__text--closed') ) {
            $(this).text(reviewMore_txtClosed);
        } else {
            $(this).text(reviewMore_txtOpened);
        }

        reviewsSlider.resize();
    });

    var show = true;
    var countbox = ".services__counter";
    $(window).on("scroll load resize", function () {
        if (!show) return false;
        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;
        var w_height = $(window).height();
        var d_height = $(document).height();
        var e_height = $(countbox).outerHeight();
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.services__number').css('opacity', '1');
            $('.services__number').spincrement({
                thousandSeparator: "",
                duration: 4000
            });
            show = false;
        }
    })
});


//Dropdown Phones
$('.header__open-phone').click(function () {
    $(this).attr('tabindex', 3).focus();
    $(this).toggleClass('active');
    $(this).find('.header__dropdown-menu').slideToggle(300);
});
$('.header__open-phone').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.header__dropdown-menu').slideUp(300);
});
$('.header__open-phone .header__dropdown-menu li').click(function () {
    $(this).parents('.header__dropdown').find('span').text($(this).text());
    $(this).parents('.header__dropdown').find('input').attr('value', $(this).attr('id'));
});


//Dropdown socials
$('.header__mobile-socials').click(function () {
    $(this).attr('tabindex', 2).focus();
    $(this).toggleClass('active');
    $(this).find('.header__dropdown-menu').slideToggle(300);
});
$('.header__mobile-socials').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.header__dropdown-menu').slideUp(300);
});
$('.header__mobile-socials .header__dropdown-menu li').click(function () {
    $(this).parents('.header__dropdown').find('span').text($(this).text());
    $(this).parents('.header__dropdown').find('input').attr('value', $(this).attr('id'));
});


//Dropdown lang
$('.header__dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.header__dropdown-menu').slideToggle(300);
});
$('.header__dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.header__dropdown-menu').slideUp(300);
});
$('.header__dropdown .header__dropdown-menu li').click(function () {
    $(this).parents('.header__dropdown').find('span').text($(this).text());
    $(this).parents('.header__dropdown').find('input').attr('value', $(this).attr('id'));
});

//popular
if(document.documentElement.clientWidth > 321) {
    $('.popular__item').hover(function () {
        $(this).find('.popular__img').slideUp(300);
        $(this).find('.popular__hide').slideDown(300);
    });
    $('.popular__item').mouseleave(function () {
        $(this).find('.popular__hide').slideUp(300);
        $(this).find('.popular__img').slideDown(300);
    });
}

//caption
$(".popular__item").hover(function () {
    let text = $(this).data('modal');
    $('.popup-model__model').val(text);
});

//phone mask
$(".phone-mask").mask("+7(999)999-99-99");

//ajax
function gratitudeOpen() {
    var win = window.open('https://www.DeliverCars.com.ua/callback', '_self');
    win.focus();
}

function formSend() {
    $('.subscription__form .clear').val('');
    $('.subscription__notification').show(500);
}

$(".subscription__form").on('submit', function (e) {
    e.preventDefault();
    $.ajax({
        type: 'post',
        url: '/callback',
        data: $(this).serialize(),
        dataType: "json",
        success: function (data) {
            formSend();
            dataLayer.push({
              'event' : 'GAEvent',
              'eventCategory' : 'Form Submit',
              'eventAction' : 'Order',
              'eventLabel' : 'marka'
             });
            gratitudeOpen();
        },
        error: function (error) {
            alert('РћС€РёР±РєР° СЃРѕРµРґРёРЅРµРЅРёСЏ СЃ СЃРµСЂРІРµСЂРѕРј, РїРѕРїСЂРѕР±СѓР№С‚Рµ РѕС‚РїСЂР°РІРёС‚СЊ Р·Р°СЏРІРєСѓ РїРѕР·Р¶Рµ.');
        }
    });
});

function formSend2() {
    $('.popup__form .clear').val('');
    $('.popup__form').css('display', 'none');
    $('.popup__notification').show(100);
}

$(".popup__form").on('submit', function (e) {
    e.preventDefault();
    $.ajax({
        type: 'post',
        url: '/callback',
        data: $(this).serialize(),
        dataType: "json",
        success: function () {
            formSend2();
            dataLayer.push({
              'event' : 'GAEvent',
              'eventCategory' : 'Form Submit',
              'eventAction' : 'Order',
              'eventLabel' : 'marka'
             });
            gratitudeOpen();
        },
        error: function (error) {
            alert('РћС€РёР±РєР° СЃРѕРµРґРёРЅРµРЅРёСЏ СЃ СЃРµСЂРІРµСЂРѕРј, РїРѕРїСЂРѕР±СѓР№С‚Рµ РѕС‚РїСЂР°РІРёС‚СЊ Р·Р°СЏРІРєСѓ РїРѕР·Р¶Рµ.');
        }
    });
});

function formModelSend() {
    $('.popup-model__form .clear').val('');
    $('.popup-model__form').css('display', 'none');
    $('.popup-model__notification').show(100);
}

$(".popup-model__form").on('submit', function (e) {
    e.preventDefault();
    $.ajax({
        type: 'post',
        url: '/callback',
        data: $(this).serialize(),
        dataType: "json",
        success: function (data) {
            formModelSend();
            dataLayer.push({
              'event' : 'GAEvent',
              'eventCategory' : 'Form Submit',
              'eventAction' : 'Order',
              'eventLabel' : 'marka'
            });
            gratitudeOpen();
        },
        error: function (error) {
            alert('РћС€РёР±РєР° СЃРѕРµРґРёРЅРµРЅРёСЏ СЃ СЃРµСЂРІРµСЂРѕРј, РїРѕРїСЂРѕР±СѓР№С‚Рµ РѕС‚РїСЂР°РІРёС‚СЊ Р·Р°СЏРІРєСѓ РїРѕР·Р¶Рµ.');
        }
    });
});

var Revealator = typeof Revealator !== 'undefined' ? Revealator : {};
$(function () {
    Revealator = $.extend({}, {
        timer: null,
        busy: false,
        scroll_padding: -350,
        effects_padding: -350,
        refresh: function () {
        }
    }, typeof Revealator !== 'undefined' ? Revealator : {});

    Revealator.refresh = function () {
        var $window = $(window);
        var $document = $(document);
        var $body = $(document.body);
        var i = 0;
        var window_top = Revealator.effects_padding;
        var window_bottom = $window.height() - Revealator.effects_padding;
        var document_top = Revealator.scroll_padding;
        var document_bottom = $document.height() - Revealator.scroll_padding;

        if ($window.scrollTop() === 0) {
            if (!$body.hasClass('at-top')) {
                $body.addClass('at-top').removeClass('at-bottom').removeClass('near-top').removeClass('near-bottom');
            }
        } else if ($window.scrollTop() + $window.height() === $document.height()) {
            if (!$body.hasClass('at-bottom')) {
                $body.addClass('at-bottom').removeClass('at-top').removeClass('near-top').removeClass('near-bottom');
            }
        } else if ($window.scrollTop() <= document_top) {
            if (!$body.hasClass('near-top')) {
                $body.addClass('near-top').removeClass('near-bottom').removeClass('at-top').removeClass('at-bottom');
            }
        } else if ($window.scrollTop() + $window.height() >= document_bottom) {
            if (!$body.hasClass('near-bottom')) {
                $body.addClass('near-bottom').removeClass('near-top').removeClass('at-top').removeClass('at-bottom');
            }
        } else {
            if ($body.hasClass('at-top') || $body.hasClass('at-bottom') || $body.hasClass('near-top') || $body.hasClass('near-bottom')) {
                $body.removeClass('at-top').removeClass('at-bottom').removeClass('near-top').removeClass('near-bottom');
            }
        }

        $('*[class*="revealator"]').each(function () {
            i++;
            var element = this;
            var $element = $(element);
            var element_bounding = element.getBoundingClientRect();

            var position_class = undefined;
            if (element_bounding.top > window_bottom && element_bounding.bottom > window_bottom) {
                position_class = 'revealator-below';
            } else if (element_bounding.top < window_bottom && element_bounding.bottom > window_bottom) {
                position_class = 'revealator-partially-below'
            } else if (element_bounding.top < window_top && element_bounding.bottom > window_top) {
                position_class = 'revealator-partially-above'
            } else if (element_bounding.top < window_top && element_bounding.bottom < window_top) {
                position_class = 'revealator-above';
            } else {
                position_class = 'revealator-within';
            }

            if ($element.hasClass('revealator-load') && !$element.hasClass('revealator-within')) {
                $element.removeClass('revealator-below revealator-partially-below revealator-within revealator-partially-above revealator-above');
                $element.addClass('revealator-within');
            }

            if (!$element.hasClass(position_class) && !$element.hasClass('revealator-load')) {
                if ($element.hasClass('revealator-once')) {
                    if (!$element.hasClass('revealator-within')) {
                        $element.removeClass('revealator-below revealator-partially-below revealator-within revealator-partially-above revealator-above');
                        $element.addClass(position_class);
                    }
                    if ($element.hasClass('revealator-partially-above') || $element.hasClass('revealator-above')) {
                        $element.addClass('revealator-within');
                    }
                } else {
                    $element.removeClass('revealator-below revealator-partially-below revealator-within revealator-partially-above revealator-above');
                    $element.addClass(position_class);
                }
            }
        });
    };

    $(window).bind('scroll resize load ready', function () {
        if (!Revealator.busy) {
            Revealator.busy = true;
            setTimeout(function () {
                Revealator.busy = false;
                Revealator.refresh();
            }, 100);
        }
    });
});

// $(".main-form-request").on('submit', function (e) {
//     e.preventDefault();
//     $.ajax({
//         type: 'post',
//         url: '/callback',
//         data: $(this).serialize(),
//         dataType: "json",
//         success: function (data) {
//             dataLayer.push({
//               'event' : 'GAEvent',
//               'eventCategory' : 'Form Submit',
//               'eventAction' : 'Order',
//               'eventLabel' : 'marka'
//             });
//             gratitudeOpen();
//         },
//         error: function (error) {
//             alert(jQuery.parseJSON(error.responseText).message);
//             alert('РћС€РёР±РєР° СЃРѕРµРґРёРЅРµРЅРёСЏ СЃ СЃРµСЂРІРµСЂРѕРј, РїРѕРїСЂРѕР±СѓР№С‚Рµ РѕС‚РїСЂР°РІРёС‚СЊ Р·Р°СЏРІРєСѓ РїРѕР·Р¶Рµ.');
//         }
//     });
// });

// $(".main-block__form-request").on('submit', function (e) {
//     e.preventDefault();
//     $.ajax({
//         type: 'post',
//         url: '/callback',
//         data: $(this).serialize(),
//         dataType: "json",
//         success: function (data) {
//             dataLayer.push({
//               'event' : 'GAEvent',
//               'eventCategory' : 'Form Submit',
//               'eventAction' : 'Order',
//               'eventLabel' : 'marka'
//             });
//             gratitudeOpen();
//         },
//         error: function (error) {
//             alert(jQuery.parseJSON(error.responseText).message);
//             alert('РћС€РёР±РєР° СЃРѕРµРґРёРЅРµРЅРёСЏ СЃ СЃРµСЂРІРµСЂРѕРј, РїРѕРїСЂРѕР±СѓР№С‚Рµ РѕС‚РїСЂР°РІРёС‚СЊ Р·Р°СЏРІРєСѓ РїРѕР·Р¶Рµ.');
//         }
//     });
// });

$(".calculator__form").on('submit', function (e) {
    e.preventDefault();
    $.ajax({
        type: 'post',
        url: '/admins/calculator',
        data: $(this).serialize(),
        dataType: "json",
        success: function (data) {
            $(".pdf_link").prop("href", data.file);
            $(".pdf_link").prop("style", "display:block");
        },
        error: function (error) {
            alert(jQuery.parseJSON(error.responseText).message);
        }
    });
});

function formCarSelectSend() {
    $('.form-top-quizz .clear').val('');
    var $selectbox = $('.field-select');
    $selectbox.prop('selectedIndex', 0);
    $('.car-select__notification').show(100);
}

$(".form-top-quizz").on('submit', function (e) {
    e.preventDefault();
    $.ajax({
        type: 'post',
        url: '/callback',
        data: $(this).serialize(),
        dataType: "json",
        success: function (data) {
            formCarSelectSend();
            dataLayer.push({
              'event' : 'GAEvent',
              'eventCategory' : 'Form Submit',
              'eventAction' : 'Order',
              'eventLabel' : 'marka'
            });
            gratitudeOpen();
        },
        error: function (error) {
            alert(jQuery.parseJSON(error.responseText).message);
            alert('РћС€РёР±РєР° СЃРѕРµРґРёРЅРµРЅРёСЏ СЃ СЃРµСЂРІРµСЂРѕРј, РїРѕРїСЂРѕР±СѓР№С‚Рµ РѕС‚РїСЂР°РІРёС‚СЊ Р·Р°СЏРІРєСѓ РїРѕР·Р¶Рµ.');
        }
    });
});

$('#turnkey_budget').change(function() {
    $('.car-select__text').css("display", "block");
    $('#car_select_discount').text($(this).find(':selected').data('discount'));
});

$('.stage__desc').readmore({
    speed: 500,
    lessLink: '<p class="more"><a href="#" class="stage__but">Свернуть</a></p>',
    moreLink: '<p class="more"><a href="#" class="stage__but">Читать далее</a></p>',
    collapsedHeight: 100,
});

//spoiler
$(function(){
    $('.stage__desc').readmore({
        speed: 500,
        lessLink: '<p class="more"><a href="#" class="stage__but">Свернуть</a></p>',
        moreLink: '<p class="more"><a href="#" class="stage__but">Читать далее</a></p>',
        collapsedHeight: 100,
    });
});

//scroll to top
$('.header__logo').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});

function setDependency(selectorOne, selectorTwo) {
    var $select1 = $( selectorOne ),
        $select2 = $( selectorTwo ),
        $options = $select2.find( 'option' );

    $select1.on( 'change', function() {
        $select2.html( $options.filter( '[data-type="' + this.value + '"]' ) );
    } ).trigger( 'change' );
}

setDependency('#calculator__auction', '#calculator__platform');

$('.header__logo-link').on('click', function(e) {
    var win = window.open('https://www.DeliverCars.com.ua', '_self');
    win.focus();
});