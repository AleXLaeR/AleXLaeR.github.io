const febHolidays = [
    "Hungry Learner",
    "Relations oriented",
    "Team Player",
    "Energetic",
    "Organized Worker",
    "Communicative",
    "Responsible",
    "Hardworking",
    "Systematic",
    "Creative",
    "Empathic",
    "Optimistic",
    "Passionate about coding",
    "Motivated by result",
    "Self-Balanced",
    "Punctual",
    "Helpful to others in need",
    "Stress Tolerant",
    "Ready to changes",
    "Ability to resolve conflicts",
    "Persistent in reaching goals",
    "Attentive to details",
    "Eagerness to self-growth",
    "Independent in Development",
    "Adaptive to new environment",
    "Self-Planning ability",
    "Adequate self-esteem",
];

const ulEl = document.querySelector(".skill ul");
const d = new Date();
let dayNumber = d.getMonth() === 1 ? d.getDate() - 1 : 0;
let activeIndex = dayNumber;
const rotate = -360 / febHolidays.length;
init();

function init() {
    febHolidays.forEach((holiday, idx) => {
        const liEl = document.createElement("li");
        liEl.style.setProperty("--day_idx", idx);
        liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
            idx + 1
        }</time><span>${holiday}</span>`;
        ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
}

function adjustDay(nr) {
    dayNumber += nr;
    ulEl.style.setProperty("--currentDay", dayNumber);

    const activeEl = document.querySelector(".skill ul > li.active");
    if (activeEl) activeEl.classList.remove("active");

    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(`.skill ul > li:nth-child(${activeIndex + 1})`);
    document.body.style.backgroundColor = window.getComputedStyle(
        newActiveEl
    ).backgroundColor;

    newActiveEl.classList.add("active");
}
