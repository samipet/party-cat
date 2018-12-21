import { CHANGE_BOARD_SIZE } from '../actions/types';

export default (boardSize=[6, 6], action) => {
    switch (action.type) {
        case CHANGE_BOARD_SIZE:
            return {boardSize: [...action.payload]};
        default:
            return boardSize;
    }
}