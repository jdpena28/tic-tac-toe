const cells = Array.from(document.getElementsByClassName('cell'))
let textWinner = document.querySelector('#text-winner')
let textTurn = document.querySelector('p.players-turn')
let player = 'X' 
let countTheTurns = 1
let thereIsAWinner = false

const cellClicked = () => {
    cells.forEach(cell => {
        cell.addEventListener('click',onGame)
    });
}

function onGame (index) {
    // indices throws the index/ID as number
    indices = parseInt(index.target.id)
    if (thereIsAWinner===false && cells[indices].textContent==='') {
        if (player === 'X') {
            index.target.textContent = player;
            checkBoard(player)
            player = 'O'
            textTurn.textContent = `${player} Turn!`
        }
        else if (player==='O') {
            index.target.textContent = player;
            checkBoard(player)
            player = 'X'
            textTurn.textContent = `${player} Turn!`
        }
    }
    else if (thereIsAWinner===true) {
        cells.forEach(element => {
            element.textContent=null
            textTurn.textContent = `X Turn!`
            textWinner.textContent = "Let's game it on"
            thereIsAWinner = false
        });
    } 
}
function checkBoard (whosPlayer) {
    if(cells[2].textContent===whosPlayer && cells[4].textContent===whosPlayer && cells[6].textContent===whosPlayer) {
        textWinner.textContent = `${whosPlayer} is the Winner`
        thereIsAWinner = true
    }
    //check diagonal,vertical and horizontal starting point at top-right div
    if(cells[0].textContent===whosPlayer) {
        if(cells[1].textContent===whosPlayer && cells[2].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
        else if(cells[3].textContent===whosPlayer && cells[6].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
        else if(cells[4].textContent===whosPlayer && cells[8].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
    }
    //check diagonal,vertical and horizontal starting point at bottom-right div
    else if (cells[8].textContent===whosPlayer) {
        if(cells[6].textContent===whosPlayer && cells[7].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
        else if(cells[2].textContent===whosPlayer && cells[5].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
    }
    //check the cross-section of board
    else if (cells[4].textContent===whosPlayer) {
        if(cells[3].textContent===whosPlayer && cells[5].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
        else if(cells[1].textContent===whosPlayer && cells[7].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
    }
}


cellClicked()

