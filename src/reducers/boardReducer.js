import { NEXT_LEVEL, NEW_GAME, TILE_CLICK, clicksLostFromDog } from '../actions/types';

const setEndImages = (item) => {
    switch (item) {
        case "sque":
            return "squee"
        case "squc":
            return "empty"
        case "doge":
            return "empty"
        case "dogi":
            return "empty"
        default:
            return item
    }
}

export default (board = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ], action) => {
    switch (action.type) {
        case TILE_CLICK:
            let newBoard = [...board];
            //Set previously run animations to end images to prevent looping again
            if (action.payload.image === "squ" || action.payload.image === "dog") {
                newBoard = newBoard.map(row => row.map(setEndImages));
            }
            if (action.payload.image === "dog") {
                if (!action.payload.dogIntimidated) {
                    if (action.payload.clicksLeft < clicksLostFromDog) {
                        newBoard[action.payload.x][action.payload.y] = "dogc";
                    } else {
                        newBoard[action.payload.x][action.payload.y] = "doge";
                    }
                } else {
                    newBoard[action.payload.x][action.payload.y] = "dogi";
                }
            }
            if (action.payload.image === "squ") {
                if (!action.payload.squirrelCatch) {
                    newBoard[action.payload.x][action.payload.y] = "sque";
                } else {
                    newBoard[action.payload.x][action.payload.y] = "squc";
                }
            }
            return newBoard;
        case NEXT_LEVEL:
            return [...action.payload.board];
        case NEW_GAME:
            return [...action.payload.board];
        default:
            return board;
    }
}