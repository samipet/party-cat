import { TILE_CLICK, NEW_GAME } from '../actions/types';

export default (annoyance=0, action) => {
    switch (action.type) {
        case TILE_CLICK:
            if (action.payload.boardZ[action.payload.x][action.payload.y] === 0) {
                if (action.payload.image === "squ" || action.payload.image === "tri") {
                    if (action.payload.squirrelCatch) {
                        return annoyance;
                    }
                    return annoyance + 1;
                }
            }
            return annoyance;
        case NEW_GAME:
            return 0;
        default:
            return annoyance;
    }
}