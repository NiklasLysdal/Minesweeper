//enum for tile states

export type TileState = 'default' | 'flagged' | 'question' | 'revealed';

export function tile_alt_click_next(state:TileState) :TileState{
    //might use list instead
    switch (state) {
        case 'default': 
            return 'flagged';
        case 'flagged':
            return 'question';
        case 'question':
            return 'default';
        default:
            return state;
    }
}