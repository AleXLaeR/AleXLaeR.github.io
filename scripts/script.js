const typed = new Typed(
    ".typing", {
        strings: ["Freelancer", ".NET Web Developer"],
        typeSpeed: 100,
        BackSpeed: 80,
        loop: true
    });

const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'),
    totalNavListLength = navList.length;

for (let i = 0; i < totalNavListLength; i++) {
    const anchorElement = navList[i].querySelector('a');
    anchorElement.addEventListener('click', () => {
        for (let j = 0; j < totalNavListLength; j++) {
            navList[j].querySelector('a')
                .classList.remove('active');
        }
        anchorElement.classList.add('active');
    })
}

function sendMail() {
    const link = "mailto:ferrosful@gmail.com"
        + "?cc=valentinnestovich@gmail.com"
        + "&subject=" + encodeURIComponent(
            document.getElementById('subject-input').value
            + " - From " + document.getElementById('name-input').value
            + " !" + document.getElementById('reason-input').value.toUpperCase()
        )
        + "&body=" + encodeURIComponent(document.getElementById('message-text-input').value)
    ;
    window.location.href = link;
}

$(window).scroll(() => {
    const scrollTop = $(this).scrollTop();

    $('.scroll-down').css({
        opacity: function () {
            const elementHeight = $(this).height() * 10;
            return ((elementHeight - scrollTop) / elementHeight);
        }
    });
});
