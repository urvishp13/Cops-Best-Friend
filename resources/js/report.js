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
    const resident = document.getElementById("resident")
    const notResident = document.getElementById("not-resident")

    const ifResident = document.getElementById("if-resident")
    const ifNotResident = document.getElementById("if-not-resident")

    const lastName = document.getElementById("last-name")
    const firstName = document.getElementById("first-name")

    // if the person submitting the report is a resident of the town
    if (resident.checked) 
        // display the proceeding fields to fill out
        ifResident.style.display = 'block'
    else 
        // else, hide them
        ifResident.style.display = "none"

    // if the person submitting the report is NOT a resident of the town
    if (notResident.checked)  {
        // display a message to them
        ifNotResident.style.display = 'block'
        // disable the form controls below message
        lastName.disabled = true
        firstName.disabled = true
        document.getElementsByTagName("button").disable = true
    }
    else {
        // else, don't display message
        ifNotResident.style.display = "none"
        // enable the form controls below the radio heads
        lastName.disabled = false
        firstName.disabled = false
        document.getElementsByTagName("button").disable = false
    }
}