let tryMenu = $('.try .try-menu-item');
let tryStyles = $('.try .try-styles .try-part');
let tryTypes = $('.try .try-styles .try-styles-menu-item');

tryMenu.map(function (key, item) {
    item.addEventListener('click', function () {
        let visible = $('.try .try-styles .visible');
        let openInput = $('.try .try-styles-menu .open-input');
        let openStyle = $('.try .try-styles-menu .open-style');
        let openOutput = $('.try .try-styles-menu .open-output');

        if (!(item.className.split(' ').includes('active'))) {
            $('.try .try-menu .active').removeClass('active');

            visible.children()[0].classList.remove('hidden');
            visible.children()[1] && visible.children()[1].classList.add('hidden');
            visible.children()[2] && visible.children()[2].classList.add('hidden');

            visible.removeClass('visible');
            tryMenu[key].classList.add('active');
            tryStyles[key].classList.add('visible');

            if (item.className.split(' ').includes('menu-generate')) {
                openInput.addClass('hidden');
                openStyle.addClass('hidden');
                openOutput.removeClass('hidden').addClass('active');
            }

            if (item.className.split(' ').includes('menu-style-transfer')) {
                openInput.removeClass('hidden').addClass('active');
                openStyle.removeClass('hidden active');
                openOutput.removeClass('hidden active');
            }

            if (item.className.split(' ').includes('menu-deep-dream')) {
                openInput.removeClass('hidden').addClass('active');
                openStyle.addClass('hidden');
                openOutput.removeClass('hidden active');
            }
        }
    }, false);
});

tryTypes.map(function (key, item) {
    item.addEventListener('click', function () {
        if (!(item.className.split(' ').includes('active'))) {  //todo alert na pick
            $('.try .try-styles-menu .active').removeClass('active');
            tryTypes[key].classList.add('active');

            $('.try .try-part.visible').children().map(function (i, item) {

                if (!(item.className.split(' ').includes('hidden'))) {
                    item.classList.add('hidden');

                    if (key === 2 && $('.menu-deep-dream').hasClass('active') && $('.try-styles-menu-item.open-output').hasClass('active'))
                        $('.try .try-part.visible').children()[key - 1].classList.remove('hidden');
                    else
                        $('.try .try-part.visible').children()[key].classList.remove('hidden');
                }
            });

        }
    }, false);
});
