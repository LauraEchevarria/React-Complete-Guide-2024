import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
const initialSymbol = 'X';


export default function GameBoard ({activeSymbol, onSelectCell}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const handleSelectCell = (rowIndex, colIndex) => {
        setGameBoard(prevGameBoard => {
            const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; // so, it doesn't changes the original array values
            updatedGameBoard[rowIndex][colIndex] = activeSymbol;
            return updatedGameBoard;
        });
        onSelectCell();
    };

    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) =>
            <li key={rowIndex}>
                <ol>{row.map((cell, colIndex) => <li key={colIndex}><button onClick={()=>handleSelectCell(rowIndex, colIndex)}>{cell}</button></li>)}</ol>
            </li>
        )}
    </ol>;
};