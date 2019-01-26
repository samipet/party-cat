import { TILE_CLICK, NEW_GAME } from '../actions/types';

export default (catGuests=[0,0,0,0,0,0,0,0,0,0,0,0], action) => {
    switch (action.type) {
        case TILE_CLICK:
            if (action.payload.boardZ[action.payload.x][action.payload.y] === 0) {
                if (action.payload.image.startsWith("cat")) {
                    let updatedGuests = [...catGuests];
                    updatedGuests[parseInt(action.payload.image.substr(3, action.payload.image.length)) - 1] = 1;
                    return updatedGuests;
                }
            }
            return catGuests;
        case NEW_GAME:
            return [0,0,0,0,0,0,0,0,0,0,0,0];
        default:
            return catGuests;
    }
}