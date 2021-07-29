$(".slider-range").each((_, item) => {
    let innerHTML = createInnerHTML();
    item.appendChild(innerHTML[0]);
    item.appendChild(innerHTML[1]);

    let range = $(item).find(".slider-range__item");
    let values = $(item).find(".slider-range__value");
    let valuesBegin = [+$(item).attr("data-range-start"), +$(item).attr("data-range-end")];

    values.each((i, elem) => {
        $(elem).html(valuesBegin[i]);
    });

    range.slider({
        range: true,
        min: valuesBegin[0],
        max: valuesBegin[1],
        values: valuesBegin,
        slide: function (_, ui) {
            values.each((i, elem) => {
                $(elem).html(ui.values[i]);
            });
        }
    });

    function createInnerHTML() {
        let slider_range_item = document.createElement("div");
        slider_range_item.classList.add("slider-range__item");

        let slider_range_values = document.createElement("div");
        slider_range_values.classList.add("slider-range__values");

        for (let i = 0; i < 2; i++) {
            let slider_range_value = document.createElement("div");
            slider_range_value.classList.add("slider-range__value");

            slider_range_values.appendChild(slider_range_value);
        }

        return [slider_range_item, slider_range_values];
    }
});