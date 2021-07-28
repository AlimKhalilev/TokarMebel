function initSliderGallery() {
    let screen_xs = 576; // mobile
    let isVertical = false;

    if (g_body.offsetWidth > screen_xs) {
        isVertical = true;
    }

    $("[data-sliderWrapper]").each(function(_, elem) {
        let wrapper = $(elem).parent().parent();

        let gallerySlider = $('.slider-gallery__slider').lightSlider({
            gallery: true,
            item: 1,
            vertical: isVertical,
            verticalHeight: "100%",
            vThumbWidth: "none",
            thumbItem: 4,
            thumbMargin: 4,
            slideMargin: 0,
            onBeforeSlide: function (el) {
                wrapper.find(".lSAction__info .current").text(el.getCurrentSlideCount());
            },
        });
    
        
        let lsAction_info = `<div class='lSAction__info'> <span class='current'>${gallerySlider.getCurrentSlideCount()}</span> / <span class='total'>${gallerySlider.getTotalSlideCount()}</span> </div>`;
        wrapper.find(".lSAction").append(lsAction_info);
    });

}

initSliderGallery();