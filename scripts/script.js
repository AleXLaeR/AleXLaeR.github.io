const typed = new Typed(
    ".typing", {
        strings: ["Freelancer", ".NET Web Developer"],
        typeSpeed: 100,
        BackSpeed: 80,
        loop: true
    }
);

(
    function() {
        emailjs.init('WG93yjJd6nk5tbxLr');
    }
)();

const navAnchors = document.querySelectorAll('.aside .nav a');
const mobileDrawerNavAnchors = document.querySelectorAll('#menuItem a');

for (let i = 0; i < navAnchors.length; ++i) {
    [navAnchors[i], mobileDrawerNavAnchors[i]].forEach((elem) =>
        elem.addEventListener('click', () =>
            setNavAnchorsActiveness(navAnchors, i)
    ));
}

function setNavAnchorsActiveness(anchors, activeIdx = 0) {
    for (const anchor of anchors) {
        anchor.classList.remove('active');
    }
    anchors[activeIdx].classList.add('active');
}
