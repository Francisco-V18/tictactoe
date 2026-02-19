const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
let currentPlayer = "X";
let gameActive = true;
let board = ["", "", "", "", "", "", "", "", ""];
const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});
function handleClick(e) {
    const index = e.target.dataset.index;
    if (board[index] !== "" || !gameActive) return;
    board[index] = currentPlayer;
    e.target.textContent = currentPlayer;
    checkWinner();
}
function checkWinner() {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;

        if (board[a] &&
            board[a] === board[b] &&
            board[a] === board[c]) {

            message.textContent = `Jugador ${currentPlayer} ganó`;
            gameActive = false;
            return;
        }
    }
    if (!board.includes("")) {
        message.textContent = "Empate";
        gameActive = false;
        return;
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}
function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    message.textContent = "";
    cells.forEach(cell => {
        cell.textContent = "";
    });
}