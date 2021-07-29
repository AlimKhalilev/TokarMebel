function initBurgerMenu() {
    let menu = $(".menu--main");
    let menu_open = $("[data-menu='open']");
    let menu_close = $("[data-menu='close']");
    
    $(menu_open).click(() => {
        menu.addClass("menu--visible");
        g_body.classList.add("hideScroll");
    });

    $(menu_close).click(() => {
        menu.removeClass("menu--visible");
        g_body.classList.remove("hideScroll");
    });
}

initBurgerMenu();