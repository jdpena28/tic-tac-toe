const cells = Array.from(document.getElementsByClassName('cell'))
let textWinner = document.querySelector('#text-winner')
let textTurn = document.querySelector('p.players-turn')
let player = 'X' 
let counter = 1
let thereIsAWinner = false

const cellClicked = () => {
    textWinner.textContent = "Let's game it on"
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
            console.log(counter++)
            checkBoard(player)
            player = 'O'
            textTurn.textContent = `${player} Turn!`
        }
        else if (player==='O') {
            index.target.textContent = player;
            console.log(counter++)
            checkBoard(player)
            player = 'X'
            textTurn.textContent = `${player} Turn!`
            
        }
    }
    else if (cells[indices].textContent!== '' && counter !== 10 && thereIsAWinner===false) {
        alert("Box already Contain")
    }
    else if (thereIsAWinner===true) {
        cells.forEach(element => {
            element.textContent=null
            textTurn.textContent = `X Turn!`
            textWinner.textContent = "Let's game it on"
            thereIsAWinner = false
            counter = 1
        })
    }
    else {
        textWinner.textContent = 'DRAW'
        cells.forEach(cell => {
            cell.textContent = null
            counter=1
            cell.addEventListener('click',cellClicked)
        });
    }
}
function checkBoard (whosPlayer) {
    //check vertical and horizontal starting point at top-right div
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
    if(cells[1].textContent===whosPlayer) {
        if(cells[0].textContent===whosPlayer && cells[2].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
        else if(cells[4].textContent===whosPlayer && cells[7].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
    }
    if(cells[2].textContent===whosPlayer) {
        if(cells[0].textContent===whosPlayer && cells[1].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
        else if(cells[5].textContent===whosPlayer && cells[8].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
        else if(cells[4].textContent===whosPlayer && cells[6].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
    }
    if(cells[3].textContent===whosPlayer) {
        if(cells[0].textContent===whosPlayer && cells[6].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
        else if(cells[4].textContent===whosPlayer && cells[5].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
    }
    if(cells[4].textContent===whosPlayer) {
        if(cells[1].textContent===whosPlayer && cells[7].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
        else if(cells[3].textContent===whosPlayer && cells[5].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
        else if(cells[0].textContent===whosPlayer && cells[8].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
        else if(cells[2].textContent===whosPlayer && cells[6].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
    }
    if(cells[5].textContent===whosPlayer) {
        if(cells[3].textContent===whosPlayer && cells[4].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
        else if(cells[2].textContent===whosPlayer && cells[8].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
    }
    if(cells[6].textContent===whosPlayer) {
        if(cells[0].textContent===whosPlayer && cells[3].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
        else if(cells[7].textContent===whosPlayer && cells[8].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
        else if(cells[4].textContent===whosPlayer && cells[2].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
    }
    if(cells[7].textContent===whosPlayer) {
        if(cells[4].textContent===whosPlayer && cells[1].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
        else if(cells[6].textContent===whosPlayer && cells[8].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
    }
    if(cells[8].textContent===whosPlayer) {
        if(cells[5].textContent===whosPlayer && cells[2].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
        else if(cells[7].textContent===whosPlayer && cells[6].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
        else if(cells[4].textContent===whosPlayer && cells[0].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
            thereIsAWinner = true
        }
    }
    
}
cellClicked()