const hourEL = document.getElementById('hour');
const minuteEl = document.getElementById('minutes');
const secondEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');


function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    // let ampm = "AM"
    let amPm = h >= 12 ? 'PM' : 'AM';

    h = h % 12 || 12;

    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

    hourEL.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = amPm

    setTimeout(() => {
        updateClock()
    }, 1000);
}
updateClock()


