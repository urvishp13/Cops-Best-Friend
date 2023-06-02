// grab count-el from document to be able to change its value
const countEl = document.getElementById("count-el")

console.log(countEl)

// create and initialize variable count so can use in functions
let count = 0

// add functionality to increment function
function increment() {
    // console.log("increment button clicked")
    count += 1
    countEl.textContent = count
}