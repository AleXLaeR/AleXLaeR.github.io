const backToTopButton = $('#back-to-top-button');
const mouseWrapperAnchor = $('.mouse-wrapper');

backToTopButton.on('click', (event) => {
    event.preventDefault();
    setNavAnchorsActiveness(navAnchors);
    $('html, body').animate({ scrollTop: 0 }, '300');
});

mouseWrapperAnchor.on('click', () =>
    setNavAnchorsActiveness(navAnchors, 1)
);

$(window).scroll(() => {
    const scrollTop = $(this).scrollTop();
    const elementHeight = $(this).height() / 1.25;
    const opacity = ((elementHeight - scrollTop) / elementHeight);

    if (scrollTop > 600) {
        backToTopButton.addClass('show');
    } else {
        backToTopButton.removeClass('show');
    }

    $('.scroll-down').css({
        opacity: () => opacity,
        pointerEvents: () => (opacity < .10) ? 'none' : 'all'
    });
});
