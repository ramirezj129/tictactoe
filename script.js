let cells = document.querySelectorAll('.cell')
let reset = document.getElementById('reset')
let current = document.getElementById('currentP')


let player = {
    p1: 'x',
    p2: 'o',
    xturn: true

}

let options = [ 
    
    '','','','','','','','',''
]


const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

gameLogic()

function gameLogic(){

    current.innerHTML = `${player.p1}'s Turn`

    cells.forEach((cell) => {

        cell.addEventListener('click', () =>{


            if(player.xturn === true){

                current.innerHTML = `${player.p2}'s Turn`
                cell.textContent = 'X'
                player.xturn = false
                
            }
            else{

                if(player.xturn === false){

                    cell.textContent = 'O'
                    current.innerHTML = `${player.p1}'s Turn`
                    player.xturn = true


                }


            }

            console.log(cell)

        })


    })

}

function resetGame(){




}
