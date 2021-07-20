import React from "react";

function Board() {

    const maxCoor = 9;
    let squares = [];

    for (let y = 1; y <= maxCoor; y++) {

        for (let x = 1; x <= maxCoor; x++) {
            if (x === 1 && y === 1) {
                squares.push(<div className={"square top-left-corner"} key={x + "-" + y} id={x + "-" + y}/>);
            } else if (x === 9 && y === 1) {
                squares.push(<div className={"square top-right-corner"} key={x + "-" + y} id={x + "-" + y}/>);
            } else if (x === 1 && y === 9) {
                squares.push(<div className={"square bottom-left-corner"} key={x + "-" + y} id={x + "-" + y}/>);
            } else if (x === 9 && y === 9) {
                squares.push(<div className={"square bottom-right-corner"} key={x + "-" + y} id={x + "-" + y}/>);
            } else {
                squares.push(<div className={"square"} key={x + "-" + y} id={x + "-" + y}/>);
            }
        }
    }

    console.log(squares);

    return (
        <div>
            {squares}
        </div>
    )
}

export default Board;