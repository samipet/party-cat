import { NEXT_LEVEL, NEW_GAME } from '../actions/types';

export default (board = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ], action) => {
    switch (action.type) {
        case NEXT_LEVEL:
            return [...action.payload.board];
        case NEW_GAME:
            return [...action.payload.board];
        default:
            return board;
    }
}