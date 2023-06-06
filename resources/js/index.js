// grab count-el from DOM to be able to change its value
const countEl = document.getElementById("count-el")
const recordEl = document.getElementById("record-el")

// console.log(recordEl)

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

// added functionality to REPORT button
function report() {
    // if no violators logged (thus generating a falsy value), don't add functionality to the button
    if (!localStorage.getItem("violators")) return

    // console.log("local storage is not empty")

    // else, redirect to the report.html page
    window.location.href='report.html'
    
    // console.log("getting past the redirection line")
}