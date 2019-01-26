import { TILE_CLICK, NEW_GAME, NEXT_LEVEL } from '../actions/types';

export default (tiredness=0, action) => {
    switch (action.type) {
        case TILE_CLICK:
            if (action.payload.boardZ[action.payload.x][action.payload.y] === 0) {
                if (action.payload.image === "bed") {
                    let newTiredness = tiredness - 2;
                    if (newTiredness < 0) {newTiredness = 0};
                    return newTiredness;
                }
                if (action.payload.image === "squ") {
                    let newTiredness = tiredness - 1;
                    if (newTiredness < 0) {newTiredness = 0};
                    return newTiredness;
                }
                let napAttach = Math.floor(Math.random() * (1 + 1 / 9));
                if (napAttach) {
                    return tiredness + 1;
                }
            }
            return tiredness;
        case NEW_GAME:
            return 0;
        case NEXT_LEVEL:
            if (tiredness < 6) {
                return tiredness + 1;
            }
            return tiredness;
        default:
            return tiredness;
    }
}