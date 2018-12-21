import { NEXT_LEVEL, NEW_GAME } from '../actions/types';

export default (level=0, action) => {
    switch (action.type) {
        case NEXT_LEVEL:
            return action.payload.currentLevel + 1;
        case NEW_GAME:
            return 1;
        default:
            return level;
    }
}