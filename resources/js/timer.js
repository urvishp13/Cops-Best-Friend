// grab timer-el from DOM to be able to display countdown in it
const timerEl = document.getElementById("timer-el")

// add functionality to the timer
const timerInterval = setInterval(timer, 1000)

function timer() {
    // get the current second relative to real-time
    const currentSecond = new Date().getSeconds()
    
    // write current second to document
    timerEl.textContent = 60 - currentSecond

    // when the timer starts fresh, reset countEl and count to zero, and clear the Violators Log and local storage of any history 
    // (the timer gets reset to 1min automatically). Variable gotten from the global scope generated from being paired with index.js 
    // in index.html
    if (currentSecond === 0) {
        countEl.textContent = 0
        count = 0
        recordEl.textContent = " "
        localStorage.clear()
    }
}