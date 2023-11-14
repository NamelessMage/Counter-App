//document.getElementById("count-el").innerText = 5

let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

let clearEl = document.getElementById("clear-el")

//function clear() {
  //  clearEl = saveEl.textContent
    //clearEl = " "
//}

//function clearValue() {
   // document.getElementById("saveEl").value = "";
  //}
  