//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.js
//= ../../bower_components/magnific-popup/dist/jquery.magnific-popup.js


"use strict";

function owlCarouselSlider(owl) {

    owl.owlCarousel({
        loop: false,
        margin: 20,
        nav: true,
        dots: false,
        slideBy: 1,
        items: 4,
        center: false,
        responsiveClass: true,
        navContainer: ".slider__nav",
        responsive: {

            320: {
                items: 1,
                dots: true
            },

            480: {
                items: 1,
                dots: true
            },

            768: {
                items: 3,
                dots: true

            },

            1023: {
                items: 4,
                dots: false
            }
        }
    });

}

function owlFunction(carousel) {

    $(carousel).owlCarousel({
        items: 1,
        loop: false,
        nav: true,
        dots: true,
        dotsContainer: ".c-dots .c-dots__row",
        responsive: {
            320: {
                items: 1,
            },

            480: {
                items: 1
            },

            768: {
                items: 1
            },

            1023: {
                items: 1
            }
        }
    });
}


function zoomPopUp(item) {
    $(item).magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }

    });
}


$('.partners__slider').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        dots: false,
        slideBy: 1,
        items: 5,
        center: false,
        responsiveClass: true,
        navContainer: ".slider__nav",
        responsive: {

            320: {
                items: 1,
                dots: true
            },

            480: {
                items: 1,
                dots: true
            },

            768: {
                items: 3,
                dots: true

            },

            1023: {
                items: 5,
                dots: false
            }
        }
});


$(function() {

    owlCarouselSlider($('.s-gallery'));
    zoomPopUp('.s-gallery');
    owlFunction('.card__carousel');

});
