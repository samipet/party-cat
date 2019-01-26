import { GAME_OVER_IN_PROGRESS, NEW_GAME } from '../actions/types';

export default (gameOverInProgress=false, action) => {
    switch (action.type) {
        case GAME_OVER_IN_PROGRESS:
            return true;
        case NEW_GAME:
            return false;
        default:
            return gameOverInProgress;
    }
}