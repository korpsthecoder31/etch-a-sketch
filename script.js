const sketchBox = document.querySelector("#sketchBox")

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


createGrid(16)