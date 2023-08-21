const gameContainer = document.querySelector('.game-container');
const snakeElement = document.getElementById('snake');
const foodElement = document.getElementById('food');
const scoreElement = document.getElementById('score');

const gridSize = 20;
const gridCols = gameContainer.clientWidth / gridSize;
const gridRows = gameContainer.clientHeight / gridSize;

let snake = [{ x: 10, y: 10 }];
let food = { x: 5, y: 5 };
let direction = 'right';
let score = 0;

function updateSnake() {
    const head = { ...snake[0] };
    switch (direction) {
        case 'up':
            head.y = (head.y - 1 + gridRows) % gridRows;
            break;
        case 'down':
            head.y = (head.y + 1) % gridRows;
            break;
        case 'left':
            head.x = (head.x - 1 + gridCols) % gridCols;
            break;
        case 'right':
            head.x = (head.x + 1) % gridCols;
            break;
    }

    snake.unshift(head);

    if (snake[0].x === food.x && snake[0].y === food.y) {
        score += 10;
        scoreElement.textContent = score;
        generateFood();
    } else {
        snake.pop();
    }
}

function generateFood() {
    food = {
        x: Math.floor(Math.random() * gridCols),
        y: Math.floor(Math.random() * gridRows)
    };
}

function renderSnake() {
    snakeElement.innerHTML = '';
    snake.forEach(segment => {
        const segmentElement = document.createElement('div');
        segmentElement.className = 'snake';
        segmentElement.style.left = `${segment.x * gridSize}px`;
        segmentElement.style.top = `${segment.y * gridSize}px`;
        snakeElement.appendChild(segmentElement);
    });

    foodElement.style.left = `${food.x * gridSize}px`;
    foodElement.style.top = `${food.y * gridSize}px`;
}

generateFood();
setInterval(updateGame, 150);

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            direction = 'up';
            break;
        case 'ArrowDown':
            direction = 'down';
            break;
        case 'ArrowLeft':
            direction = 'left';
            break;
        case 'ArrowRight':
            direction = 'right';
            break;
    }
});

function updateGame() {
    updateSnake();
    if (checkCollision()) {
        alert('Game Over');
        return;
    }
    renderSnake();
}

function checkCollision() {
    return snake.slice(1).some(segment => segment.x === snake[0].x && segment.y === snake[0].y);
}
