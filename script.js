const sketchBox = document.querySelector("#sketchBox")

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

    const squares = document.querySelectorAll(".row")

    squares.forEach(function(square) {
        square.addEventListener("mouseover", () => 
            square.setAttribute("id", "black")
        )
    })

}

function createNewGrid() {
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



const newGrid = document.querySelector("#changeGridButton")
newGrid.addEventListener("click", createNewGrid)

const modal = document.querySelector("#changeGridBox")

const range = document.querySelector("#gridInput")

const newDimensions = document.querySelector("#gridDimensions")


