document.addEventListener('keydown', movePacman);

let pacman = document.getElementById('pacman');
let ghosts = document.querySelectorAll('.ghost');
let gameContainer = document.getElementById('game-container');

let pacmanX = 0;
let pacmanY = 0;

let pacmanSpeed = 5;

function movePacman(event) {
    switch(event.key) {
        case 'ArrowUp':
            pacmanY -= pacmanSpeed;
            break;
        case 'ArrowDown':
            pacmanY += pacmanSpeed;
            break;
        case 'ArrowLeft':
            pacmanX -= pacmanSpeed;
            break;
        case 'ArrowRight':
            pacmanX += pacmanSpeed;
            break;
    }

    // Limitar o movimento do Pac-Man para dentro do campo de jogo
    if (pacmanX < 0) pacmanX = 0;
    if (pacmanY < 0) pacmanY = 0;
    if (pacmanX > gameContainer.offsetWidth - pacman.offsetWidth) pacmanX = gameContainer.offsetWidth - pacman.offsetWidth;
    if (pacmanY > gameContainer.offsetHeight - pacman.offsetHeight) pacmanY = gameContainer.offsetHeight - pacman.offsetHeight;

    // Atualizar a posição do Pac-Man
    pacman.style.left = pacmanX + 'px';
    pacman.style.top = pacmanY + 'px';
}

// Movimentação simples dos fantasmas (movimento aleatório)
function moveGhosts() {
    ghosts.forEach(ghost => {
        let ghostX = parseInt(ghost.style.left) + (Math.random() > 0.5 ? 1 : -1) * 2;
        let ghostY = parseInt(ghost.style.top) + (Math.random() > 0.5 ? 1 : -1) * 2;
        
        // Limitar a movimentação dos fantasmas
        if (ghostX < 0) ghostX = 0;
        if (ghostY < 0) ghostY = 0;
        if (ghostX > gameContainer.offsetWidth - ghost.offsetWidth) ghostX = gameContainer.offsetWidth - ghost.offsetWidth;
        if (ghostY > gameContainer.offsetHeight - ghost.offsetHeight) ghostY = gameContainer.offsetHeight - ghost.offsetHeight;

        ghost.style.left = ghostX + 'px';
        ghost.style.top = ghostY + 'px';
    });
}

// Chamar o movimento dos fantasmas a cada 500ms
setInterval(moveGhosts, 500);
