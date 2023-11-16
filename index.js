let countEl = document.getElementById("count")
let entriesEl = document.getElementById("entries")
let clearBtn = document.getElementById("clear-btn")

let count = 0 

function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    let countStr = count + " - "
    entriesEl.textContent += countStr
    count = 0
    countEl.textContent = 0
}

clearBtn.addEventListener("click", function(){
    count = 0
    countEl.textContent = 0
})

