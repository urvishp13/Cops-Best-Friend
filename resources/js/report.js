// get the number of violator from localStorage
const violators = localStorage.getItem("violators") // a String
const totalViolatorsEl = document.getElementById("total-violators-el")

console.log(violators)
console.log(totalViolatorsEl)

// write to the document the TOTAL number of violators
function getTotalNumberOfViolators() {
    const arr = violators.split(", ")

    console.log("arr", arr)

    let totalViolators = 0

    // go up to length - 1 because the last element is an empty String (i.e. "")
    for (let i = 0; i < arr.length - 1; i++) totalViolators += parseInt(arr[i])

    totalViolatorsEl.textContent = totalViolators
}

getTotalNumberOfViolators()

// clear localStorage of all data
localStorage.clear()

function showFields() {
    
}