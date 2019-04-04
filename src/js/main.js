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


$(function() {
    owlCarouselSlider($('.s-gallery'));
    zoomPopUp('.s-gallery');
});