let countH = document.getElementById("count-h")
let countG = document.getElementById("count-g")
let count1 = 0
let count2 = 0

// home score starts from here

function incrementh1() {
    count1 += 1
    countH.textContent = count1
}

function incrementh2() {
    count1 += 2
    countH.textContent = count1
}

function incrementh3() {
    count1 += 3
    countH.textContent = count1
}

// guest score starts from here

function incrementg1() {
    count2 += 1
    countG.textContent = count2
}

function incrementg2() {
    count2 += 2
    countG.textContent = count2
}

function incrementg3() {
    count2 += 3
    countG.textContent = count2
}

function reset() {
    count1 = 0
    count2 = 0
    countH.textContent = count1
    countG.textContent = count2
}