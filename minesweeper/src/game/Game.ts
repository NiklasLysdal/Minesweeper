import { useState } from 'react';

import type { BoardData } from '../game/board/Board';
export function Game() {

  const [board, setBoard] = useState<BoardData>(/* initial setup */);
  

  const [status, setStatus] = useState<'playing' | 'won' | 'lost'>('playing');


  const handleTileClick = (x: number, y: number) => {
    if (status !== 'playing') return;
    throw new Error('Not implemented yet: handleTileClick');
  };


}