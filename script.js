const sketchBox = document.querySelector("#sketchBox")

let currentColor = "black";

createGrid(16)

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

    gridColor(currentColor)
}


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

function gridColor(color) {
    const squares = document.querySelectorAll(".row")

    squares.forEach(function(square) {
        square.addEventListener("mouseover", () => 
            square.setAttribute("id", color)
        )
    })
}


const newGrid = document.querySelector("#changeGridButton")

const modal = document.querySelector("#changeGridBox")

const range = document.querySelector("#gridInput")

const newDimensions = document.querySelector("#gridDimensions")

const blackButton = document.querySelector("#setGridBlack")

const redButton = document.querySelector("#setGridRed")




newGrid.addEventListener("click", resetGrid)

blackButton.addEventListener("click", () => {
    currentColor = "black"
    gridColor("black")
})

redButton.addEventListener("click", () => {
    currentColor = "red"
    gridColor("red")
})