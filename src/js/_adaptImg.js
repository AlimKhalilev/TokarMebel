function adaptImg() {
    let basePixel = 16;

    document.querySelectorAll("[adaptImg]").forEach(item => {
        let width = item.naturalWidth / basePixel;
        let height = item.naturalHeight / basePixel;

        item.style.width = `${width}rem`;
        //item.style.height = `${height}rem`;
    });
}

adaptImg();