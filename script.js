// grab count-el from document to be able to change its value
const countEl = document.getElementById("count-el")
const recordEl = document.getElementById("record-el")

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
    recordEl.textContent += " " + count + ", "
    // reset count and countEl to 0 to start anew for next counting
    count = 0
    countEl.textContent = 0
}