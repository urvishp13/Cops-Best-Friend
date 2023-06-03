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
    const town = document.getElementById("town")
    const resident = document.getElementById("resident")
    const notResident = document.getElementById("not-resident")
    const residentFields = document.getElementById("resident-fields")
    const notResidentFields = document.getElementById("not-resident-fields")
    const lastName = document.getElementById("last-name")
    const firstName = document.getElementById("first-name")
    const submitBtn = document.getElementById("submit-btn")

    console.log(town)

    // if the person submitting the report is a resident of the town
    if (resident.checked) 
        // display the proceeding fields to fill out
        residentFields.style.display = 'block'
    else 
        // else, hide them
        residentFields.style.display = "none"

    // if the person submitting the report is NOT a resident of the town
    if (notResident.checked)  {
        // display a message to them
        notResidentFields.style.display = 'block'
        // disable the form controls
        town.disabled = true
        lastName.disabled = true
        firstName.disabled = true
        submitBtn.disabled = true

        town.style.background = "lightgrey"
        lastName.style.background = "lightgrey"
        firstName.style.background = "lightgrey"

        town.style.cursor = "not-allowed"
        lastName.style.cursor = "not-allowed"
        firstName.style.cursor = "not-allowed"
        submitBtn.style.cursor = "not-allowed"
    }
    else {
        // else, don't display message
        notResidentFields.style.display = "none"
        // enable the form controls
        town.disabled = false
        lastName.disabled = false
        firstName.disabled = false
        submitBtn.disabled = false

        town.style.background = "rgba(247, 247, 247, 0.761)"
        lastName.style.background = "rgba(247, 247, 247, 0.761)"
        firstName.style.background = "rgba(247, 247, 247, 0.761)"
        
        town.style.cursor = "text"
        lastName.style.cursor = "text"
        firstName.style.cursor = "text"
        submitBtn.style.cursor = "pointer"
    }
}