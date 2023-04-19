const softSkills = [
    "Hungry Learner",
    "Hardworking",
    "Attentive to details",
    "Eagerness to self-growth",
    "Organized Worker",
    "Creative",
    "Passionate about coding",
    "Adaptive",
    "Ready to make changes",
    "Motivated by result",
    "Persistent in reaching goals",

    "Team Player",
    "Communicative",
    "Empathic",
    "Relations oriented",
    "Helpful to others in need",
    "Ability to resolve conflicts",
    "Able for independent work",
    "Able for self-planning",

    "Energetic",
    "Responsible",
    "Systematic",
    "Punctual",
    "Optimistic",
    "Stress tolerant",

    "Self-balanced",
    "Adequate self-esteem",
];

const ulEl = document.querySelector(".skill ul");
const date = new Date();
let dayNumber = (date.getMonth() === 1) ? date.getDate() - 1 : 0;
let activeIndex = dayNumber;
const rotateDegree = -360 / softSkills.length;

init();

function init() {
    softSkills.forEach((skill, idx) => {
        const liEl = document.createElement("li");
        liEl.style.setProperty("--day_idx", idx);
        liEl.innerHTML = `<span>${idx + 1}</span><span>${skill}</span>`;
        ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotateDegree);
    adjustDay(0);
}

function adjustDay(forNumber) {
    dayNumber += forNumber;
    ulEl.style.setProperty("--currentDay", dayNumber);

    const activeEl = document.querySelector(".skill ul > li.active");
    if (activeEl) {
        activeEl.classList.remove("active");
    }

    activeIndex = (activeIndex + forNumber + softSkills.length) % softSkills.length;
    const newActiveEl = document.querySelector(
        `.skill ul > li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
        newActiveEl
    ).backgroundColor;

    newActiveEl.classList.add("active");
}
