import { GAME_OVER, NEW_GAME } from '../actions/types';

export default (gameOverReason='', action) => {
    switch (action.type) {
        case GAME_OVER:
            return action.payload.reason;
        case NEW_GAME:
            return '';
        default:
            return gameOverReason;
    }
}