const sketchBox = document.querySelector("#sketchBox")

let currentColor = "black";

createGrid(16)

// FUNCTION TO CREATE GRID

function createGrid(pixelNum) {

    for(i = 0; i < pixelNum; i++) {
        const newColumn = document.createElement("div")
        newColumn.setAttribute("class", "column")           
        sketchBox.appendChild(newColumn)
    }
    
    const allColumns = document.querySelectorAll(".column")
    allColumns.forEach(function(column) {
        for(i = 0; i < pixelNum; i++) {
            const newRow = document.createElement("div")
            newRow.setAttribute("class", "row")           
            column.appendChild(newRow)
        }
    })

    if (currentColor === "random") {
        getRainbowColor()
    }
    else if (currentColor === "white") {
        currentColor = "black"
        gridColor(currentColor)
    }
    else gridColor(currentColor)
}

// FUNCTION TO CREATE GRID VIA MODAL & SLIDER

function resetGrid() {
    modal.showModal()

    newDimensions.textContent = `${range.value} x ${range.value}`
    range.addEventListener("input", () =>
        newDimensions.textContent = `${range.value} x ${range.value}`
    )

    const accept = document.querySelector("#acceptButton")
    accept.addEventListener("click", () => {
        sketchBox.textContent = ""
        createGrid(range.value)
        modal.close()
    })
    
    const cancel = document.querySelector("#cancelButton")
    cancel.addEventListener("click", () =>
        modal.close()
    )
}

// FUNCTION TO SET COLOR - CURRENTLY ONLY BLACK AND RED

function gridColor(color) {
    const squares = document.querySelectorAll(".row")

    squares.forEach(function(square) {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = color
        })
    })
}

// FUNCTION TO SET TO RAINBOW MODE

function getRainbowColor() {
    const squares = document.querySelectorAll(".row")

    squares.forEach(function(square) {
        square.addEventListener("mouseover", () => {
            const a = (Math.floor(Math.random()*256))
            const b = (Math.floor(Math.random()*256))
            const c = (Math.floor(Math.random()*256))
            square.style.backgroundColor = `rgb(${a}, ${b}, ${c})`
        })
    })

    currentColor = "random"

}

// 'ERASES' GRID TO WHITE

function clearGrid() {
    const squares = document.querySelectorAll(".row")

    squares.forEach(function(square) {
        square.style.backgroundColor = "white"
    })
}

// UNUSED FUNCTION SHADOW

// function shadowMode() {
//     const squares = document.querySelectorAll(".row")

//     squares.forEach(function(square) {
//         square.addEventListener("mouseover", () => {
//                 if (+square.style.opacity <= 0.9) {
//                     square.style.opacity = +square.style.opacity + 0.1
//                 }
//             })
//     })
// }


// DEFINE VARIABLES IN MODAL

const newGrid = document.querySelector("#changeGridButton")

const modal = document.querySelector("#changeGridBox")

const range = document.querySelector("#gridInput")

const newDimensions = document.querySelector("#gridDimensions")


newGrid.addEventListener("click", resetGrid)


// DEFINE BUTTONS

const blackButton = document.querySelector("#setGridBlack")

const redButton = document.querySelector("#setGridRed")

const rainbowButton = document.querySelector("#setGridRainbow")

const shadowButton = document.querySelector("#setGridShadow")

const eraserButton = document.querySelector("#setGridWhite")

const clearButton = document.querySelector("#clearGrid")



// EVENT LISTENERS

blackButton.addEventListener("click", () => {
    currentColor = "black"
    gridColor(currentColor)
})

redButton.addEventListener("click", () => {
    currentColor = "red"
    gridColor(currentColor)
})

rainbowButton.addEventListener("click", () => {
    getRainbowColor()
})

eraserButton.addEventListener("click", () => {
    currentColor = "white"
    gridColor(currentColor)
})

clearButton.addEventListener("click", () => {
    
    const columnCount = document.querySelectorAll(".column")
    sketchBox.textContent = ""        
    createGrid(columnCount.length)
})

// shadowButton.addEventListener("click", () => {
//     shadowMode()
// })