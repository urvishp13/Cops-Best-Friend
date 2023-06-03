// grab count-el from document to be able to change its value
const countEl = document.getElementById("count-el")
const recordEl = document.getElementById("record-el")
const timerEl = document.getElementById("timer-el")

console.log(recordEl)

// create and initialize variable count so can use in functions
let count = 0

// add functionality to INCREMENT button
function increment() {
    // console.log("increment button clicked")
    count += 1
    countEl.textContent = count
}

// add functionality to RECORD button
    // make it so that it saves the counted (incremented) value to recordEl
function record() {
    // console.log("record button clicked")
    recordEl.textContent += count + ", "
    // save data to localStorage to be able to persist through other webpages
    localStorage.setItem("violators", recordEl.textContent)
    // reset count and countEl to 0 to start anew for next counting
    count = 0
    countEl.textContent = 0
}

// add functionality to the timer
setInterval(timer, 1000)

function timer() {
    // get the current second relative to real-time
    const currentSecond = new Date().getSeconds()

    console.log(currentSecond)

    // write current second to document
    timerEl.textContent = 60 - currentSecond
    // when the timer hits 0, reset countEl and count (the timer gets reset to 1min automatically)
    if (currentSecond === 0) {
        recordEl.textContent = " "
    }
}

// added functionality to REPORT button