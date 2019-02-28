import { TILE_CLICK, NEW_GAME, NEXT_LEVEL, tirednessReducedFromBed, tirednessReducedFromSquirrel, chanceOfNapAttach, maxTiredness } from '../actions/types';

export default (tiredness=0, action) => {
    switch (action.type) {
        case TILE_CLICK:
            if (action.payload.boardZ[action.payload.x][action.payload.y] === 0) {
                if (action.payload.image.startsWith("bed") === true) {
                    let newTiredness = tiredness - tirednessReducedFromBed;
                    if (newTiredness < 0) {newTiredness = 0};
                    return newTiredness;
                }
                if (action.payload.image === "squ" || action.payload.image === "tri") {
                    let newTiredness = tiredness - tirednessReducedFromSquirrel;
                    if (newTiredness < 0) {newTiredness = 0};
                    return newTiredness;
                }
                let napAttach = Math.floor(Math.random() + chanceOfNapAttach);
                if (napAttach) {
                    return tiredness + 1;
                }
            }
            return tiredness;
        case NEW_GAME:
            return 0;
        case NEXT_LEVEL:
            if (tiredness < maxTiredness) {
                return tiredness + 1;
            }
            return tiredness;
        default:
            return tiredness;
    }
}