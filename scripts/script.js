const typed = new Typed(
    ".typing", {
        strings: ["Freelancer", ".NET Web Developer"],
        typeSpeed: 100,
        BackSpeed: 80,
        loop: true
    }
);

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

$(window).scroll(() => {
    const scrollTop = $(this).scrollTop();

    $('.scroll-down').css({
        opacity: function () {
            const elementHeight = $(this).height() * 10;
            return ((elementHeight - scrollTop) / elementHeight);
        }
    });
});

const sendEmailBtnEl = document.getElementById('send-email-btn');

sendEmailBtnEl.addEventListener('click', (event) => {
    event.preventDefault();

    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const subject = document.getElementById('subject-input').value;
    const message = document.getElementById('message-text-input').value;

    if (name && email && subject && message) {
        sendEmail(name, email, subject, message);
        onSuccessfulInput();
    } else {
        onEmptyInputField();
    }
});

function onEmptyInputField() {
    swal({
        title: 'Error!',
        text: 'Input field cannot be empty!',
        icon: 'error',
        button: 'Try Again',
    })
}

function onSuccessfulInput() {
    swal({
        title: 'Email sent!',
        text: 'I will reply as soon as possible!',
        icon: 'success',
    })
}

function sendEmail(name, email, subject, message) {
    emailjs.send('service_jcfclw8', 'template_31tkh2l', {
        from_name: email,
        to_name: name,
        subject: subject,
        message: message,
    });
}
