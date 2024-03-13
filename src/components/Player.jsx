import { useState } from "react";

export default function Player ({initialName, symbol, isActive}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);
    
    const handleEdit = () => setIsEditing((prevEditing)=>setIsEditing(!prevEditing));

    const handleChange = (event) => setPlayerName(event.target.value);

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {!isEditing && <span className="player-name">{playerName}</span>}
                {isEditing && <input type="text" required value={playerName} onChange={handleChange} />}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
};