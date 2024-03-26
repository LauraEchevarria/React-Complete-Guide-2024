import { useState } from "react";
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if(gameTurns.length>0 && gameTurns[0].player === 'X') currentPlayer = 'O';

  return currentPlayer;
}

function App() {
  //const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
  
  const handleActivePlayer = (rowIndex, colIndex) => {
    //setActivePlayer(prevSymbol => prevSymbol==='X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      let currentPlayer = deriveActivePlayer(gameTurns);

      const updatedTurns = [{square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns];

      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={deriveActivePlayer(gameTurns)==='X'} />
          <Player initialName="Player 2" symbol="0" isActive={deriveActivePlayer(gameTurns)==='O'} />
        </ol>
        <GameBoard onSelectCell={handleActivePlayer} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
