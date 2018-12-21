import { NEXT_LEVEL, NEW_GAME } from '../actions/types';

export default (board = [
        ["sud", "empty", "dog", "empty", "empty", "mou"],
        ["sud", "empty", "dru", "drl", "drl", "ddl"],
        ["sur", "slr", "squ", "empty", "empty", "dru"],
        ["empty", "cdr", "clr", "cld", "empty", "empty"],
        ["empty", "cdu", "empty", "cat", "empty", "empty"],
        ["empty", "cdu", "empty", "empty", "bed", "empty"]
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