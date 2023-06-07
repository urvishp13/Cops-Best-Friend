// grab count-el from DOM to be able to change its value
const countEl = document.getElementById("count-el")
const recordEl = document.getElementById("record-el")
const submitBtn = document.getElementById("report-btn")

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
    recordEl.textContent += count + ", "
    // save data to localStorage to be able to persist through other webpages
    localStorage.setItem("violators", recordEl.textContent)
    // make REPORT button active since now a number of violators is logged
    submitBtn.style.cursor = "pointer"
    submitBtn.title = "Click to generate form to submit to the authorities"
    submitBtn.disabled = false
    // reset count and countEl to 0 to start anew for next counting
    count = 0
    countEl.textContent = 0
}

// add functionality to REPORT button
function redirect() {
    // when clicked, clear Violators Log
    recordEl.textContent = " "
    // re-disable the submit button upon clicking it so, when someone comes back to index.html via the browser's back button, they
    // can't submit the form with no speeders logged
    submitBtn.style.cursor = "not-allowed"
    submitBtn.title = "Violators Log must be populated in order to generate a report"
    submitBtn.disabled = true
    // redirect to the report.html page
    window.location.href="report.html"
}