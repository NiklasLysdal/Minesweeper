import { useState } from 'react';
import { generate_board } from '../game/board/BoardGenerator';

import  {type BoardData,mark_tile,reveal_tile_click } from '../game/board/Board';
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
            return  {...gameData, board: new_board,status:'won'};
        }
        case 'lost': {
            return  {...gameData, board: new_board,status:'lost'};
        }
        default: {
            return  {...gameData, board: new_board,status:'playing'};
        }
    }
    
}

export function handle_tile_rightClick(gameData:GameData,x:number,y:number) : GameData {
    let response : BoardData  = mark_tile(gameData.board,x,y)
    return {...gameData,board: response};
    
}