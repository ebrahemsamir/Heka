let OurSkillsSpans = document.querySelectorAll(".skills .skill span[data-set]");
let OurSkillsSpansprogrees = document.querySelectorAll(".skills .the-progress span");
let skillsSection = document.querySelector(".skills");
let stats = document.querySelector(".stats");
let statsHeading = document.querySelectorAll(".stats .box-content h3");
let started = false;
let startedStats = false;
let eventSection = document.querySelector(".event");
let days = document.querySelectorAll(".event .container h4")[0];
let hours = document.querySelectorAll(".event .container h4")[1];
let minutes = document.querySelectorAll(".event .container h4")[2];
let seconds = document.querySelectorAll(".event .container h4")[3];
let startedEvent = false;
let up = document.querySelector(".up");
let articleSection = document.querySelector(".articles");
countDown();
window.onscroll = () => {
    if (scrollY >= skillsSection.offsetTop) {
        if (!started) {
            OurSkillsSpans.forEach((e) => startcount(e));
            OurSkillsSpansprogrees.forEach((span) => {
                span.style.width = span.dataset.width;
            })
        }
        started = true;
    }
    if (scrollY >= stats.offsetTop - 200) {
        if (!startedStats)
            statsHeading.forEach((e) => startcount(e));
        startedStats = true;
    }
    if (scrollY >= articleSection.offsetTop) {
        up.style.display = "block";
    }
    else {
        up.style.display = "none";
    }
}
function countDown() {
    let x = setInterval(() => {
        seconds.innerHTML--;
        if (seconds.innerHTML == 0) {
            minutes.innerHTML--;
            seconds.innerHTML = 59;
        }
        if (minutes.innerHTML == 0 && seconds.innerHTML == 0) {
            hours.innerHTML--;
            minutes.innerHTML = 59;
            seconds.innerHTML = 59;
        }
        if (hours.innerHTML == 0 && minutes.innerHTML == 0 && seconds.innerHTML == 0) {
            days.innerHTML--;
            hours.innerHTML = 23;
            minutes.innerHTML = 59;
            seconds.innerHTML = 59;
        }
        if (days.innerHTML == 0 && hours.innerHTML == 0 && minutes.innerHTML == 0 && seconds.innerHTML == 0)
            clearInterval(x);
    }, 1000)
}

function startcount(e) {
    let goal = e.getAttribute("data-set")
    let target = e.getAttribute("data-get")
    let x = setInterval(() => {
        e.innerHTML++;
        if (e.innerHTML == goal) {
            e.innerHTML += "%";
            clearInterval(x);
        }
        if (e.innerHTML == target)
            clearInterval(x);
    }, 2000 / goal)
}