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

let btnColorful = document.createElement('button');
btnColorful.textContent = "Random Colors";
btnColorful.className = "btn";
interact.appendChild(btnColorful);

let btnBlack = document.createElement('button');
btnBlack.textContent = "Black";
btnBlack.className = "btn";
interact.appendChild(btnBlack);

const grid = document.querySelectorAll(".div");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setUpGrid(number){
    for (let i = 0; i < number*number; i++){
        let div = document.createElement('div');
        div.className = "div";
        div.style.width = ((600/number) - 0.31) + "px";
        div.style.height = ((600/number) - 0.31) + "px";
        container.appendChild(div);
    };
    const grid = document.querySelectorAll(".div");
    
    let bgColor = 0;
    
    btnColorful.addEventListener('click', function(e){
        bgColor = 1;
    });
    
    btnBlack.addEventListener('click', function(e){
        bgColor = 0;
    });
    
    grid.forEach(function(e){
        e.addEventListener("mouseover", function(event){
            if (bgColor == 1){
                event.target.style.background = getRandomColor();
            }else if (bgColor == 0){
                event.target.style.background = 'black';
            };
        });
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
    });
};

btnNewGrid.addEventListener('click', function(){
    let newNumber = prompt("Enter a number: ")
    clearGrid();
    setUpGrid(newNumber);
});







