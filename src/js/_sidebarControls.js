function initSidebarControls() {
    let filter = $(".menu--filter");
    let filter_open = $("[data-filter='open']");
    let filter_close = $("[data-filter='close']");
    
    $(filter_open).click(() => {
        filter.addClass("menu--visible");
        g_body.classList.add("hideScroll");
    });
    
    $(filter_close).click(() => {
        filter.removeClass("menu--visible");
        g_body.classList.remove("hideScroll");
    });
    
    $("[data-search]").click(() => {
        $(".filter-mobile").slideToggle('normal');
    });
}

initSidebarControls();