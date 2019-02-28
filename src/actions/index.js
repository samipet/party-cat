
import { CHANGE_BOARD_SIZE, maxCatsInvited, maxTiredness, maxAnnoyance } from './types';
import { TILE_CLICK, NEXT_LEVEL, GAME_OVER, NO_CLICKS_LEFT, NEW_GAME, GAME_OVER_IN_PROGRESS, uniqueBeds } from './types';

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
    if (item === "bed") {
        let newBed = "bed" + (Math.floor(Math.random() * uniqueBeds) + 1);
        board[x][y] = newBed;
    } else {
        board[x][y] = item;
    }    
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
    } while (board[x][y].startsWith("cat") === true || board[x][y] === "dog" || board[x][y] === "squ" || board[x][y] === "tri");

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
            if (allowedDirection[j] === 'l' && (board[x][y-1].startsWith("cat") === true || board[x][y-1] === "dog" || board[x][y-1] === "squ" || board[x][y-1] === "tri")) {
                allowedDirection = allowedDirection.filter(item => item !== 'l');
            }
            if (allowedDirection[j] === 'r' && (board[x][y+1].startsWith("cat") === true || board[x][y+1] === "dog" || board[x][y+1] === "squ" || board[x][y+1] === "tri")) {
                allowedDirection = allowedDirection.filter(item => item !== 'r');
            }
            if (allowedDirection[j] === 'u' && (board[x-1][y].startsWith("cat") === true || board[x-1][y] === "dog" || board[x-1][y] === "squ" || board[x-1][y] === "tri")) {
                allowedDirection = allowedDirection.filter(item => item !== 'u');
            }
            if (allowedDirection[j] === 'd' && (board[x+1][y].startsWith("cat") === true || board[x+1][y] === "dog" || board[x+1][y] === "squ" || board[x+1][y] === "tri")) {
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
                if (animal === "tri") {
                    board[x][y] = "c" + reversedDirection + newDirection;
                } else {
                    board[x][y] = animal.charAt(0) + reversedDirection + newDirection;
                }                
            } else {
                if (animal === "tri") {
                    board[x][y] += "c" + reversedDirection + newDirection;
                } else {
                    board[x][y] += animal.charAt(0) + reversedDirection + newDirection;
                }                
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

const createLevel = (level, catInLevel) => {
    let board = [
        ["empty", "empty", "empty", "empty", "empty", "empty"],
        ["empty", "empty", "empty", "empty", "empty", "empty"],
        ["empty", "empty", "empty", "empty", "empty", "empty"],
        ["empty", "empty", "empty", "empty", "empty", "empty"],
        ["empty", "empty", "empty", "empty", "empty", "empty"],
        ["empty", "empty", "empty", "empty", "empty", "empty"]
    ]
    let cats, dogs, squirrels, tricksters, catSteps, dogSteps, squirrelSteps, tricksterSteps, mice, beds = 0;
    if (level < 4) {
        cats = 1; catSteps = 4 + Math.floor(Math.random() * 2);
        dogs = 1; dogSteps = 4 + Math.floor(Math.random() * 2);
        squirrels = 1; squirrelSteps = 4 + Math.floor(Math.random() * 2);
        tricksters = 0; tricksterSteps = 4 + Math.floor(Math.random() * 2);
        mice = 2;
        beds = 3;
    } else if (level < 8) {
        cats = 1; catSteps = 4 + Math.floor(Math.random() * 3);
        dogs = 1; dogSteps = 4 + Math.floor(Math.random() * 3);
        squirrels = 1; squirrelSteps = 4 + Math.floor(Math.random() * 3);
        tricksters = 0; tricksterSteps = 4 + Math.floor(Math.random() * 3);
        mice = 1;
        beds = 2;        
    } else if (level < 12) {
        cats = 1; catSteps = 4 + Math.floor(Math.random() * 2);
        dogs = 2; dogSteps = 4 + Math.floor(Math.random() * 3);
        squirrels = 2; squirrelSteps = 4 + Math.floor(Math.random() * 3);
        tricksters = 0; tricksterSteps = 4 + Math.floor(Math.random() * 2);
        mice = 1;
        beds = 2;        
    } else {
        cats = 1; catSteps = 4 + Math.floor(Math.random() * 2);
        dogs = 2; dogSteps = 4 + Math.floor(Math.random() * 3);
        squirrels = 1; squirrelSteps = 4 + Math.floor(Math.random() * 3);
        tricksters = 1; tricksterSteps = 4 + Math.floor(Math.random() * 2);
        mice = 1;
        beds = 1;
    }

    for (let i = 0; i<cats; i++) {
        board = addAnimalToBoard(board, catInLevel, catSteps);
    }
    for (let i = 0; i<dogs; i++) {
        board = addAnimalToBoard(board, "dog", dogSteps);
    }
    for (let i = 0; i<squirrels; i++) {
        board = addAnimalToBoard(board, "squ", squirrelSteps);
    }
    for (let i = 0; i<tricksters; i++) {
        board = addAnimalToBoard(board, "tri", tricksterSteps);
    }
    for (let i = 0; i<mice; i++) {
        board = addStaticToBoard(board, "mou");
    }
    for (let i = 0; i<beds; i++) {
        board = addStaticToBoard(board, "bed");
    }
    return board;
}

const getCatInLevel = (props) => {
    let catsNotInvited = [];
    for (let i = 0; i<props.catGuests.length; i++) {
        if (props.catGuests[i] === 0) {
            catsNotInvited.push(i+1);
        }
    }
    let catInLevel = "";
    if (catsNotInvited.length) {
        catInLevel = "cat" + catsNotInvited[Math.floor((Math.random()*catsNotInvited.length))];
    }    
    return catInLevel;
}

export const nextLevel = (props) => {
    let catInLevel = getCatInLevel(props);
    const board = createLevel(props.level, catInLevel);
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
    let catInLevel = "cat" + (Math.floor(Math.random() * maxCatsInvited) + 1);
    const board = createLevel(1, catInLevel);
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
    if (props.tiredness > maxTiredness) {
        return {
            type: GAME_OVER,
            payload: {
                reason: 'tired'
            }
        }
    }
    if (props.annoyance > maxAnnoyance) {
        return {
            type: GAME_OVER,
            payload: {
                reason: 'annoyed'
            }
        }
    }
    if (props.catsInvited > maxCatsInvited - 1) {
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

    if (props.image === "squ"  || props.image === "tri") {
        let squirrelCatchResult = Math.floor(Math.random() + (maxAnnoyance - props.annoyance) / maxAnnoyance * 0.25 + (maxTiredness - props.tiredness) / maxTiredness * 0.25);
        if (squirrelCatchResult) {squirrelCatch = true};
    }

    if (props.image === "dog") {
        let dogIntimidationResult = Math.floor(Math.random() * (1 + 6 * (props.annoyance / maxAnnoyance)));
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
            dogIntimidated: dogIntimidated,
            clicksLeft: props.clicksLeft
        }
    }
}
