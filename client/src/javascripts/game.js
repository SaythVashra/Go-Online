function getAllSquaresAround(clickedSquare) {

    const clickedSquarePosInX = clickedSquare.id.slice(0, 1);
    const clickedSquarePosInY = clickedSquare.id.slice(2, 3);
    let square;
    let x;
    let y;

    //Horizontal Check
    for (x = clickedSquarePosInX; x >= 1; x--) {
        square = document.getElementById(x + "-" + clickedSquarePosInY);
    }

    for (x = clickedSquarePosInX; x <= 9; x++) {
        square = document.getElementById(x + "-" + clickedSquarePosInY);
    }

    //Vertical Check
    for (y = clickedSquarePosInY; y >= 1; y--) {
        square = document.getElementById(clickedSquarePosInX + "-" + y);
    }

    for (y = clickedSquarePosInY; y <= 9; y++) {
        square = document.getElementById(clickedSquarePosInX + "-" + y);
    }

    //Diagonal up-left and down-left Check

    y = clickedSquarePosInY;

    for (x = clickedSquarePosInX; x >= 1; x--) {
        if(y >= 1){
            square = document.getElementById(x + "-" + y);
        }
        y--;
    }

    y = clickedSquarePosInY;

    for (x = clickedSquarePosInX; x >= 1; x--) {
        if(y <= 9){
            square = document.getElementById(x + "-" + y);
        }
        y++;
    }

    //Diagonal up-right and down-right Check

    y = clickedSquarePosInY;

    for (x = clickedSquarePosInX; x <= 9; x++) {
        if(y >= 1){
            square = document.getElementById(x + "-" + y);
        }
        y--;
    }

    y = clickedSquarePosInY;

    for (x = clickedSquarePosInX; x <= 9; x++) {
        if(y <= 9){
            square = document.getElementById(x + "-" + y);
        }
        y++;
    }
}

document.addEventListener("click", function (event) {

    const clickedSquare = event.target;
    const clickedSquareClass = clickedSquare.classList.value;

    if(clickedSquareClass.includes("square") === true && clickedSquareClass.includes("sel") === false){
        clickedSquare.classList.add("square-sel");
        let whiteToken = document.createElement("div");
        whiteToken.classList.add("white-token");
        clickedSquare.appendChild(whiteToken);

        getAllSquaresAround(clickedSquare);
    }
});