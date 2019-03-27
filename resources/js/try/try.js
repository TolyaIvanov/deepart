let tryMenu = $('.try .try-menu-item');
let tryStyles = $('.try .try-styles .try-part');
let tryTypes = $('.try .try-styles .try-styles-menu-item');

tryMenu.map(function (key, item) {
    item.addEventListener('click', function () {
        if (!(item.className.split(" ").includes("active"))) {
            $('.try .try-menu .active').removeClass('active');
            $('.try .try-styles .visible').removeClass('visible');
            tryMenu[key].classList.add('active');
            tryStyles[key].classList.add('visible');

            if (item.className.split(" ").includes("menu-generate")) {
                $('.try .try-styles-menu .open-input').addClass('hidden');
                $('.try .try-styles-menu .open-style').addClass('hidden');
                $('.try .try-styles-menu .open-output').removeClass('hidden').addClass('active');
            }

            if (item.className.split(" ").includes("menu-style-transfer")) {
                $('.try .try-styles-menu .open-input').removeClass('hidden').addClass('active');
                $('.try .try-styles-menu .open-style').removeClass('hidden active');
                $('.try .try-styles-menu .open-output').removeClass('hidden active');
            }

            if (item.className.split(" ").includes("menu-deep-dream")) {
                $('.try .try-styles-menu .open-input').removeClass('hidden').addClass('active');
                $('.try .try-styles-menu .open-style').addClass('hidden');
                $('.try .try-styles-menu .open-output').removeClass('hidden active');
            }
        }
    }, false);
});

tryTypes.map(function (key, item) {
    item.addEventListener('click', function () {
        if (!(item.className.split(" ").includes("active"))) {  //todo alert na pick
            $('.try .try-styles-menu .active').removeClass('active');
            tryTypes[key].classList.add('active');

            console.log($('.try .try-part.visible').children());

            $('.try .try-part.visible').children().map(function (key, item) {

            });
        }
    }, false);
});