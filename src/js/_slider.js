// link: http://sachinchoolur.github.io/lightslider/

function initSlider() {
    // data-slider="4,2,1" (СТРОКА, ГДЕ ЧИСЛА ЧЕРЕЗ ЗАПЯТУЮ БЕЗ ПРОБЕЛОВ: число элементов на компе, на планшете, на мобилках)

    let screen_xs = 576; // mobile
    let screen_sm = 768; // mobile-reverse
    
    function getCurrentElemCount(items) {
        if (g_body.offsetWidth > screen_sm) {
            return items[0];
        }
        else if (g_body.offsetWidth < screen_xs) {
            return items[2];
        }
        else {
            return items[1];
        }
    }

    $("[data-slider]").each(function(_, elem) {

        let wrapper = $(elem).parent().parent();
        let items = elem.dataset.slider.split(",");

        if (items.length != 3) { // если в dataset слайдера нет 3 количеств элементов для 3 разрешений 
            items = [1, 1, 1]; // на всех разрешениях будет по 1 элементу
        }
        else {
            items = items.map(e => +e); // преобразуем строки в числа
        }

        let currentElemCount = getCurrentElemCount(items);

        let mySlider = $(elem).lightSlider({
            item: items[0],
            slideMove: 1,
            slideMargin: "",
            controls: true,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed: 600,
            onBeforeSlide: function (el) {
                wrapper.find(".lSAction__info .current").text(el.getCurrentSlideCount());
            },
            responsive: [
                {
                    breakpoint: screen_sm,
                    settings: {
                        item: items[1],
                    }
                },
                {
                    breakpoint: screen_xs,
                    settings: {
                        item: items[2],
                    }
                }
            ]
        });

        let lsAction_info = `<div class='lSAction__info'> <span class='current'>${mySlider.getCurrentSlideCount()}</span> / <span class='total'>${mySlider.getTotalSlideCount() - currentElemCount + 1}</span> </div>`;
        wrapper.find(".lSAction").append(lsAction_info);


    });

}

initSlider();