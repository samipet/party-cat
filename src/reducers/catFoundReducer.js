import { TILE_CLICK, NEXT_LEVEL, NEW_GAME } from '../actions/types';

export default (catFound=false, action) => {
    switch (action.type) {
        case TILE_CLICK:
            if (action.payload.boardZ[action.payload.x][action.payload.y] === 0) {
                if (action.payload.image.startsWith("cat") === true) {
                    return true;
                }
            }
            return catFound;
        case NEXT_LEVEL:
            return false;
        case NEW_GAME:
            return false;
        default:
            return catFound;
    }
}