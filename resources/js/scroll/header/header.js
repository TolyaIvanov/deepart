let portfolionLink = $('.navbar .portfolio-link');
let tryLink = $('.navbar .try-link');

portfolionLink.on('click', function () {
    $('html, body').animate({
        scrollTop: ($('.portfolio').first().offset().top)
    },500);
});

tryLink.on('click', function () {
    $('html, body').animate({
        scrollTop: ($('.try').first().offset().top)
    },500);
});