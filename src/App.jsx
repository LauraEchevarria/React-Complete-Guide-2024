import { useState } from "react";
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  //const [gameTurns, setGameTurns] = useState([]);

  const handleActivePlayer = () => setActivePlayer(prevSymbol => prevSymbol==='X' ? 'O' : 'X');

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer==='X'} />
          <Player initialName="Player 2" symbol="0" isActive={activePlayer==='O'} />
        </ol>
        <GameBoard activeSymbol={activePlayer} onSelectCell={handleActivePlayer} />
      </div>
      <Log />
    </main>
  )
}

export default App
