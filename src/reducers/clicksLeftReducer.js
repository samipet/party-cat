import { TILE_CLICK, NEXT_LEVEL, NEW_GAME, initialClicks, clicksLostFromDog, clicksGainedFromSquirrel, clicksGainedFromMouse, clicksGainedFromNextLevel } from '../actions/types';

export default (clicksLeft=initialClicks, action) => {
    switch (action.type) {
        case TILE_CLICK:
            if (action.payload.boardZ[action.payload.x][action.payload.y] === 0) {
                if (action.payload.image === "dog") {
                    if (action.payload.dogIntimidated) {
                        return clicksLeft - 1;
                    }
                    return clicksLeft - clicksLostFromDog;
                }
                if (action.payload.image === "squ") {
                    if (action.payload.squirrelCatch) {
                        return clicksLeft + clicksGainedFromSquirrel;
                    }                    
                }
                if (action.payload.image === "mou") {
                    return clicksLeft + clicksGainedFromMouse;                   
                }
                return clicksLeft - 1;
            }
            return clicksLeft;
        case NEXT_LEVEL:
            return action.payload.clicksRemaining + clicksGainedFromNextLevel;
        case NEW_GAME:
            return initialClicks;
        default:
            return clicksLeft;
    }
}