const slider = tns({
    container: ".carousel-connect",
    nav: false,
    items: 1,
    controls: false,
    mouseDrag: true,
    autoplayButton: false,
    loop: true,
    autoplay: true,
    autoplayButtonOutput: false,
    responsive: {
        426: {
            items: 2
        },
        769: {
            items: 3
        }
    }
})