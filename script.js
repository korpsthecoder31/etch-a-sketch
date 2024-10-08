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
}

const squares = document.querySelectorAll(".row")

squares.forEach(function(square) {
    square.addEventListener("mouseover", () => 
        square.setAttribute("id", "black")
    )
})

const newGrid = document.querySelector("#changeGridButton")
newGrid.addEventListener("click", setGrid)

const modal = document.querySelector("#changeGridBox")

function setGrid() {
    modal.showModal()

    const input = document.querySelector("#gridInput")

    const accept = document.querySelector("#acceptButton")
    accept.addEventListener("click", () =>
        console.log(input.value)
    )
    
    const cancel = document.querySelector("#cancelButton")
    cancel.addEventListener("click", () =>
        modal.close()
    )
}