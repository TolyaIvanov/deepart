let tryMenu = $('.try .try-menu-item');
let tryStyles = $('.try .try-styles .try-part');

tryMenu.map(function (key, item) {
    item.addEventListener('click', function () {
        if (!(item.className.split(" ").includes("active"))) {
            $('.try .try-menu .active').removeClass('active');
            $('.try .try-styles .visible').removeClass('visible');
            tryMenu[key].classList.add('active');
            tryStyles[key].classList.add('visible');
        }
    }, false);
});