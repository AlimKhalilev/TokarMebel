function adaptImg() {
    let basePixel = 16;

    document.querySelectorAll("[adaptImg]").forEach(item => {
        item.style.width = `${(item.clientWidth / basePixel)}rem`;
        item.style.height = `${(item.clientHeight / basePixel)}rem`;
    });
}

adaptImg();