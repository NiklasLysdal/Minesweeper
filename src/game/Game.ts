class Game {
    board : Board | null;
    
    timer : Timer;

    constructor(width: number, height: number, bombs: number) {
        this.board = GenerateBoard(width, height, bombs);
        this.timer = new Timer();
    }
}