let chessboard = document.getElementById("chessboard");

for (let i = 0; i < 8; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < 8; j++) {
        let td = document.createElement("td");
        td.classList.add("class", "td");
        if ((i + j) % 2 == 0) {
            td.classList.add("class", "black");
        }
        td.setAttribute("data-index", `${i}-${j}`);
        tr.appendChild(td);
    }
    chessboard.appendChild(tr);
}

chessboard.addEventListener("mouseover", (e) => {
    let selectedCell = e.target.dataset.index.split("-").map((val) => parseInt(val));
    let row = selectedCell[0];
    let col = selectedCell[1];

    let cells = document.querySelectorAll(".td");

    let str = `${row}-${col}`;
    let hash = {};
    hash[str] = true;

    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
            // selecting the top left cells diagoanally
            if((i-j)== (row-col)){
                hash[`${i}-${j}`] = true;
            }
            if((i+j)==row+col){
                hash[`${i}-${j}`] = true;
            }
        }
    }

    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove("blue");
    }
    for (let i = 0; i < cells.length; i++) {
        let str = `${cells[i].closest("tr").rowIndex}-${cells[i].cellIndex}`;
        if (hash[str]) {
            cells[i].classList.add("blue");
        }
    }
})


chessboard.addEventListener("mouseleave", (e) => {

    let cells = document.querySelectorAll(".td");
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove("blue");
    }

})