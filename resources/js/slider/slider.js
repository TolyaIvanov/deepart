let slideNow = 1;
let slideCount = $('#slidewrapper').children().length;
let slideInterval = 5500;
let translateWidth = 0;

$(function () {
    if ($(window).width() > 900) {
        setInterval(nextSlide, slideInterval);
    }
});

function nextSlide() {
    if (slideNow === slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            '-o-transform': 'translate(' + translateWidth + 'px, 0)',
            '-moz-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}