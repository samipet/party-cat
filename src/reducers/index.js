import { combineReducers } from 'redux';
import boardSizeReducer from './boardSizeReducer';
import boardReducer from './boardReducer';
import boardClickReducer from './boardClickReducer';
import clicksLeftReducer from './clicksLeftReducer';
import annoyanceReducer from './annoyanceReducer';
import tirednessReducer from './tirednessReducer';
import levelReducer from './levelReducer';
import catFoundReducer from './catFoundReducer';
import gameOverReducer from './gameOverReducer';
import catsInvitedReducer from './catsInvitedReducer';
import gameOverInProgressReducer from './gameOverInProgressReducer';

export default combineReducers({
    catFound: catFoundReducer,
    catsInvited: catsInvitedReducer,
    level: levelReducer,
    boardSize: boardSizeReducer,
    board: boardReducer,
    clicksLeft: clicksLeftReducer,
    annoyance: annoyanceReducer,
    tiredness: tirednessReducer,
    boardZ: boardClickReducer,
    gameOverReason: gameOverReducer,
    gameOverInProgress: gameOverInProgressReducer
});