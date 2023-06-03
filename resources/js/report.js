// get the number of violator from localStorage
const violators = localStorage.getItem("violators") // a String
const violatorsNumEl = document.getElementById("violators-num-el")

console.log(violators)
console.log(violatorsNumEl)

// write to the document the TOTAL number of violators
function getTotalNumberOfViolators() {
    const arr = violators.split(", ")

    console.log("arr", arr)

    let violatorsNum = 0
    for (let i = 0; i < arr.length - 1; i++) violatorsNum += arr[i]
}

getTotalNumberOfViolators()

// clear localStorage of all data