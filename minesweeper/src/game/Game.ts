import { useState } from 'react';
import { generate_board } from '../game/board/BoardGenerator';

import  {type BoardData,reveal_tile_click } from '../game/board/Board';
import type { BoardActionResult } from './BoardActionResult';

export interface GameData {
    board: BoardData;
    status: 'playing' | 'won' | 'lost';
    
}






export function create_new_game(width: number, height: number, bombs: number): GameData {
    const board = generate_board(width, height, bombs);
    console.log(`Created new game with board size ${width}x${height} and ${bombs} bombs`);
    return {
        board,
        status: 'playing',
    };
}

export function handle_tile_click(gameData: GameData, x:number, y:number) : GameData {
    let response : BoardActionResult  = reveal_tile_click(gameData.board,x,y)
    let new_board = response.board;
    let result = response.result;
    console.log('result is ',result)
    switch (result) {
        case 'won': {
            gameData.status = 'won';
            gameData.board = new_board;
            return gameData;
        }
        case 'lost': {
            gameData.status = 'lost';
            gameData.board = new_board;
            return gameData;
        }
        default: {
            gameData.status='playing';
            gameData.board=new_board;
            return gameData;
        }
    }
    
}