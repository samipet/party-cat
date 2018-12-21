import { TILE_CLICK, NEXT_LEVEL, NEW_GAME } from '../actions/types';

const boardClickReducer = (boardZ = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
], action) => {
    switch (action.type) {       
        case TILE_CLICK:
            const newBoardZ = [...boardZ];
            newBoardZ[action.payload.x][action.payload.y] = 1;
            return newBoardZ;
        case NEXT_LEVEL:
            const emptyBoardZ = [
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0]
            ]
            return emptyBoardZ;
        case NEW_GAME:
            const emptyBoardZ2 = [
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0]
            ]
            return emptyBoardZ2;
        default:
            return boardZ;
    }
}

export default boardClickReducer;