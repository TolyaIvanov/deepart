// open modal
var wrap = $('.wrap');
var photo = $('.photo');
var modalPhoto = $('.modal .modal-photo');
var modal = $('.cover, .modal .modal-window');

photo.on('click', function () {
    if ($(window).width() > 900) {
        modalPhoto.attr('src', '' + $(this).attr('src'));
        modal.fadeIn();
    }
});

// close modal
$('.modal').click(function () {
    wrap.on('click', function (event) {
        var select = $('.modal-window img');
        if ($(event.target).closest(select).length)
            return;
        modal.fadeOut();
        modalPhoto.attr('src', '');
        wrap.unbind('click');
    });
});