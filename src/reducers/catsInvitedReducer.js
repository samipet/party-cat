import { TILE_CLICK, NEW_GAME } from '../actions/types';

export default (catsInvited=0, action) => {
    switch (action.type) {
        case TILE_CLICK:
            if (action.payload.boardZ[action.payload.x][action.payload.y] === 0) {
                if (action.payload.image === "cat") {
                    return catsInvited + 1;
                }
            }
            return catsInvited;
        case NEW_GAME:
            return 0;
        default:
            return catsInvited;
    }
}