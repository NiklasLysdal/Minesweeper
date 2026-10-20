import type { BoardData } from "./board/Board";


export interface BoardActionResult {
    board : BoardData,
    result : 'none' | 'won' | 'lost'
}