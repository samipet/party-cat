import { TILE_CLICK, NEW_GAME, maxCatsInvited } from '../actions/types';

const initializeCatArray = (maxCats) => {
    let catGuestArray = [];
    for (let i=0; i<maxCats; i++) {
        catGuestArray.push(0);
    }
    console.log(catGuestArray);
    return catGuestArray;
}

export default (catGuests=initializeCatArray(maxCatsInvited), action) => {
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
            return initializeCatArray(maxCatsInvited);
        default:
            return catGuests;
    }
}