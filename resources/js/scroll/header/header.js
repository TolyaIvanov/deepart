$(function () {
    //TODO make throttle
    $(window).scroll(function () {
        let logoSet = $('.navbar .navbar-item-logo path')[0];
        let listItems = $('.navbar .navbar-item');

        if ($(window).scrollTop() > ($(window).height() - 32)) {
            listItems.map(function (key, item) {
                item.style.color = "#333";
            });

            logoSet.style.fill = "#333";
        } else {
            listItems.map(function (key, item) {
                item.style.color = "#ddd";
            });
            logoSet.style.fill = "#ddd";
        }
    })
});

