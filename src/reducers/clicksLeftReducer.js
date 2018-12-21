import { TILE_CLICK, NEXT_LEVEL, NEW_GAME } from '../actions/types';

export default (clicksLeft=8, action) => {
    switch (action.type) {
        case TILE_CLICK:
            if (action.payload.boardZ[action.payload.x][action.payload.y] === 0) {
                if (action.payload.image === "dog") {
                    if (action.payload.dogIntimidated) {
                        return clicksLeft - 1;
                    }
                    return clicksLeft - 5;
                }
                if (action.payload.image === "squ") {
                    if (action.payload.squirrelCatch) {
                        return clicksLeft + 4;
                    }                    
                }
                if (action.payload.image === "mou") {
                    return clicksLeft + 4;                   
                }
                return clicksLeft - 1;
            }
            return clicksLeft;
        case NEXT_LEVEL:
            return action.payload.clicksRemaining + 8;
        case NEW_GAME:
            return 8;
        default:
            return clicksLeft;
    }
}