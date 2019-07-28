const container = document.querySelector("#container");

const interact = document.querySelector("#interaction");

let btnClear = document.createElement('button');
btnClear.textContent = "Clear grid";
btnClear.className = "btn";
interact.appendChild(btnClear);

let btnNewGrid = document.createElement('button');
btnNewGrid.textContent = "New grid";
btnNewGrid.className = "btn";
interact.appendChild(btnNewGrid);

const grid = document.querySelectorAll(".div");


function setUpGrid(number){
    for (let i = 0; i < number*number; i++){
        let div = document.createElement('div');
        div.className = "div";
        div.style.width = ((600/number) - 0.31) + "px";
        div.style.height = ((600/number) - 0.31) + "px";
        container.appendChild(div);
    };
    const grid = document.querySelectorAll(".div");
    grid.forEach(function(e){
        e.addEventListener("mouseover", function(event){
            event.target.style.background = "black";
        })
    });
    btnClear.addEventListener("click", function(event){
        grid.forEach(function(e){
            e.style.background = "white";
        });
    });
};
setUpGrid(32);

function clearGrid(){
    document.querySelectorAll(".div").forEach((grid) => {
        grid.parentNode.removeChild(grid);
    })
};

btnNewGrid.addEventListener('click', function(){
    let newNumber = prompt("Enter a number: ")
    clearGrid();
    setUpGrid(newNumber);
});







