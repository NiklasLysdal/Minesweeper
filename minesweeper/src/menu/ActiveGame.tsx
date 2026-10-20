
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BoardView } from '../gameview/board/BoardView';
import { create_new_game, handle_tile_click, type GameData } from '../game/Game';


export default function ActiveGame() {
    const navigate = useNavigate();
    // Use a callback inside useState so generation only happens exactly once
    const [gameData, setGameData] = useState<GameData>(() => create_new_game(30, 30, 100));

    // Requirement 1: Print board to console on creation
    useEffect(() => {
        console.log("Initial Board Generated:", gameData.board);
    }, [gameData.board]);
    let onTileClickCallback =  (x:number,y:number) => {
        console.log('click registered');
        let new_game_data= handle_tile_click(gameData,x,y);
        setGameData(new_game_data);
    }
    return (
        <section id="center">
            <div>
                <h1>Minesweeper Testing Arena</h1>
                {/* Pass the generated board to the visual component */}
                <BoardView  board = { gameData.board} onTileClick={onTileClickCallback} />
                <button onClick={() => navigate('/')}>Back</button>
            </div>
        </section>
    );
}


