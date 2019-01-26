
import { CHANGE_BOARD_SIZE } from './types';
import { TILE_CLICK, NEXT_LEVEL, GAME_OVER, NO_CLICKS_LEFT, NEW_GAME, GAME_OVER_IN_PROGRESS } from './types';

export const getBoard = (boardSize) => {
    return {
        type: CHANGE_BOARD_SIZE,
        payload: boardSize
    }
}

const addStaticToBoard = (previousBoard, item) => {
    let board = [...previousBoard];
    let x, y = 0;
    do {
        x = Math.floor(Math.random() * 6);
        y = Math.floor(Math.random() * 6);
    } while (board[x][y] !== "empty");
    board[x][y] = item;
    return board;
}


const addAnimalToBoard = (previousBoard, animal, steps) => {
    let board = [...previousBoard];
    let x, y, coin = 0;
    //gets starting position x, y and direction
    coin = Math.floor(Math.random() * 2);
    let direction = '';
    do {
        if (coin) {
            let coin2 = Math.floor(Math.random() * 2);
            x = Math.floor(Math.random() * 6);
            if (coin2) {
                y = 0;
            } else {
                y = 5;
            }
            if (y === 0) {
                direction = 'r';
            } else {
                direction = 'l';
            }        
        } else {
            let coin2 = Math.floor(Math.random() * 2);
            y = Math.floor(Math.random() * 6);
            if (coin2) {
                x = 0;
            } else {
                x = 5;
            }
            if (x === 0) {
                direction = 'd';
            } else {
                direction = 'u';
            }        
        }
    } while (board[x][y] === "cat" || board[x][y] === "dog" || board[x][y] === "squ");

    let allowedDirection = ['l', 'r', 'u', 'd'];
    let reversedDirection = '';
    for (let i=0; i<steps; i++) {
        allowedDirection = ['l', 'r', 'u', 'd'];
        //remove direction where animal came
        switch (direction) {
            case 'l':
                allowedDirection = allowedDirection.filter(item => item !== 'r');
            break;
            case 'r':
                allowedDirection = allowedDirection.filter(item => item !== 'l');
            break;
            case 'u':
                allowedDirection = allowedDirection.filter(item => item !== 'd');
            break;
            case 'd':
                allowedDirection = allowedDirection.filter(item => item !== 'u');
            break;
            default:
        }
        //remove out of board directions
        if (x===0) {
            allowedDirection = allowedDirection.filter(item => item !== 'u');
        }
        if (x===5) {
            allowedDirection = allowedDirection.filter(item => item !== 'd');
        }
        if (y===0) {
            allowedDirection = allowedDirection.filter(item => item !== 'l');
        }
        if (y===5) {
            allowedDirection = allowedDirection.filter(item => item !== 'r');
        }
        //remove direction upon other animal
        for (let j=0; j<allowedDirection.length + 1; j++) {
            if (allowedDirection[j] === 'l' && (board[x][y-1] === "cat" || board[x][y-1] === "dog" || board[x][y-1] === "squ")) {
                allowedDirection = allowedDirection.filter(item => item !== 'l');
            }
            if (allowedDirection[j] === 'r' && (board[x][y+1] === "cat" || board[x][y+1] === "dog" || board[x][y+1] === "squ")) {
                allowedDirection = allowedDirection.filter(item => item !== 'r');
            }
            if (allowedDirection[j] === 'u' && (board[x-1][y] === "cat" || board[x-1][y] === "dog" || board[x-1][y] === "squ")) {
                allowedDirection = allowedDirection.filter(item => item !== 'u');
            }
            if (allowedDirection[j] === 'd' && (board[x+1][y] === "cat" || board[x+1][y] === "dog" || board[x+1][y] === "squ")) {
                allowedDirection = allowedDirection.filter(item => item !== 'd');
            }
        }
        //no allowed directions
        if (!allowedDirection.length) {
            board[x][y] = animal;
            break;
        }
        let newDirection = allowedDirection[Math.floor(Math.random() * allowedDirection.length)];
        //if not last step -> add new trail
        if (i !== steps - 1) {
            switch (direction) {
                case 'l':
                    reversedDirection = 'r';
                break;
                case 'r':
                    reversedDirection = 'l';
                break;
                case 'u':
                    reversedDirection = 'd';
                break;
                case 'd':
                    reversedDirection = 'u';
                break;
                default:                
            }
            if (board[x][y] === "empty") {
                board[x][y] = animal.charAt(0) + reversedDirection + newDirection;
            } else {
                board[x][y] += animal.charAt(0) + reversedDirection + newDirection;
            }
            switch (newDirection) {
                case 'l':
                    y = y - 1;
                break;
                case 'r':
                    y = y + 1;
                break;
                case 'u':
                    x = x - 1;
                break;
                case 'd':
                    x = x + 1;
                break;
                default:
            }
        direction = newDirection;
        } else {
            board[x][y] = animal;
        }
    }
    return board;
}

const createLevel = (level) => {
    let board = [
        ["empty", "empty", "empty", "empty", "empty", "empty"],
        ["empty", "empty", "empty", "empty", "empty", "empty"],
        ["empty", "empty", "empty", "empty", "empty", "empty"],
        ["empty", "empty", "empty", "empty", "empty", "empty"],
        ["empty", "empty", "empty", "empty", "empty", "empty"],
        ["empty", "empty", "empty", "empty", "empty", "empty"]
    ]
    let cats, dogs, squirrels, catSteps, dogSteps, squirrelSteps, mice, beds = 0;
    if (level < 4) {
        cats = 1; catSteps = 4 + Math.floor(Math.random() * 2);
        dogs = 1; dogSteps = 4 + Math.floor(Math.random() * 2);
        squirrels = 1; squirrelSteps = 4 + Math.floor(Math.random() * 2);
        mice = 2;
        beds = 3;
    } else if (level < 8) {
        cats = 1; catSteps = 4 + Math.floor(Math.random() * 3);
        dogs = 1; dogSteps = 4 + Math.floor(Math.random() * 3);
        squirrels = 1; squirrelSteps = 4 + Math.floor(Math.random() * 3);
        mice = 1;
        beds = 2;        
    } else if (level < 12) {
        cats = 1; catSteps = 4 + Math.floor(Math.random() * 2);
        dogs = 2; dogSteps = 4 + Math.floor(Math.random() * 3);
        squirrels = 2; squirrelSteps = 4 + Math.floor(Math.random() * 3);
        mice = 1;
        beds = 2;        
    } else {
        cats = 1; catSteps = 4 + Math.floor(Math.random() * 2);
        dogs = 2; dogSteps = 4 + Math.floor(Math.random() * 3);
        squirrels = 2; squirrelSteps = 4 + Math.floor(Math.random() * 3);
        mice = 1;
        beds = 1;
    }

    for (let i = 0; i<cats; i++) {
        board = addAnimalToBoard(board, "cat", catSteps);
    }
    for (let i = 0; i<dogs; i++) {
        board = addAnimalToBoard(board, "dog", dogSteps);
    }
    for (let i = 0; i<squirrels; i++) {
        board = addAnimalToBoard(board, "squ", squirrelSteps);
    }    
    for (let i = 0; i<mice; i++) {
        board = addStaticToBoard(board, "mou");
    }
    for (let i = 0; i<beds; i++) {
        board = addStaticToBoard(board, "bed");
    }
    return board;
}

export const nextLevel = (props) => {
    const board = createLevel(props.level);
    return {
        type: NEXT_LEVEL,
        payload: {
            clicksRemaining: props.clicksLeft,
            currentLevel: props.level,
            board: board
        }
    }
}

export const newGame = () => {
    const board = createLevel(1);
    return {
        type: NEW_GAME,
        payload: {
            board: board
        }
    }
}

export const gameOver = (props) => {
    if (props.clicksLeft < 0) {
        return {
            type: GAME_OVER,
            payload: {
                reason: 'dog'
            }
        }
    }
    if (props.tiredness > 6) {
        return {
            type: GAME_OVER,
            payload: {
                reason: 'tired'
            }
        }
    }
    if (props.annoyance > 6) {
        return {
            type: GAME_OVER,
            payload: {
                reason: 'annoyed'
            }
        }
    }
    if (props.catsInvited > 11) {
        return {
            type: GAME_OVER,
            payload: {
                reason: 'allCatsInvited'
            }
        }
    }
}

export const setGameOver = () => {
    return {
        type: GAME_OVER_IN_PROGRESS
    }
}

export const tileClick = (props) => {
    if (props.gameOverInProgress === true) {
        return {
            type: GAME_OVER_IN_PROGRESS
        }
    }

    if (props.clicksLeft < 1) {
        return {
            type: NO_CLICKS_LEFT
        }
    }

    let squirrelCatch = false;
    let dogIntimidated = false;

    if (props.image === "squ") {
        let squirrelCatchResult = Math.random() * (6 - props.annoyance) / 6 * (20 - props.tiredness) / 20 * 2;
        console.log("squirrelCatchResult: " + squirrelCatchResult);
        squirrelCatchResult = Math.floor(squirrelCatchResult);
        if (squirrelCatchResult) {squirrelCatch = true};
    }

    if (props.image === "dog") {
        let dogIntimidationResult = Math.random() * (1 + props.annoyance);
        console.log("dogIntimidationResult: " + dogIntimidationResult);
        dogIntimidationResult = Math.floor(dogIntimidationResult);
        if (dogIntimidationResult) {dogIntimidated = true};
    }

    return {
        type: TILE_CLICK,
        payload: {
            x: props.x,
            y: props.y,
            image: props.image,
            boardZ: props.boardZ,
            squirrelCatch: squirrelCatch,
            dogIntimidated: dogIntimidated
        }
    }
}
