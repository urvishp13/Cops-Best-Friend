// grab timer-el from document to be able to display countdown in it
const timerEl = document.getElementById("timer-el")

// add functionality to the timer
const timerInterval = setInterval(timer, 1000)

function timer() {
    // get the current second relative to real-time
    const currentSecond = new Date().getSeconds()

    // console.log(currentSecond)

    // write current second to document
    timerEl.textContent = 60 - currentSecond
    // when the timer hits 0, reset countEl and count (the timer gets reset to 1min automatically)
    if (currentSecond === 0) {
        reset() // refresh/revert to index.html page
    }
}

function reset() {
    let meta = document.createElement("meta")
    meta.httpEquiv = "refresh"
    meta.content = "1; URL=index.html"
    document.getElementsByTagName("head")[0].appendChild(meta)
    clearInterval(timerInterval) // stop timer after hit zero seconds
}