let currentPlayer = "X"
let nextPlayer = "O"
let playerXSelections = []
let playerOSelections = []

const winningCombinations =[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

let matchKeeper=[0, 0]
let xString=""
let oString=""


const handleClick = function(event){
    const cell = event.target
    cell.innerHTML = currentPlayer

    if(currentPlayer === "X"){
        playerSelections = playerXSelections
        nextPlayer = "O"
    } else {
        playerSelections = playerOSelections
        nextPlayer = "X"
    }
    playerSelections.push(Number(cell.id))
    console.log(playerSelections)

    
    if(checkWinner()==="X"){
            alert("Player X Wins!")
            matchKeeper[0]++
            xString="X"
            let xMatchElement=document.createElement("span")
            let xMatchContent=document.createTextNode(xString)
            xMatchElement.appendChild(xMatchContent)
            document.getElementById("xScore").appendChild(xMatchElement)
            
            resetGame()

    } else if (checkWinner()==="O"){
            alert("Player O Wins!")
            matchKeeper[1]++
            oString="O"
            let oMatchElement=document.createElement("span")
            let oMatchContent=document.createTextNode(oString)
            oMatchElement.appendChild(oMatchContent)
            document.getElementById("oScore").appendChild(oMatchElement)

            resetGame()
    }
    else if(checkDraw()===true){
            alert ("Draw!")
            resetGame()
        } 
    
    
    currentPlayer = nextPlayer
}

const cells = document.querySelectorAll('td')
for (let i=0; i<cells.length; i++){
    cells[i].addEventListener('click', handleClick)
}


function checkWinner(){
    let Omatches = 0
    let Xmatches = 0
  

    for (i=0; i<winningCombinations.length; i++){
  
        if (playerOSelections.includes(winningCombinations[i][0]) && 
        playerOSelections.includes(winningCombinations[i][1]) &&
        playerOSelections.includes(winningCombinations[i][2])){
        Omatches+=3
       
        }   
    }
    
    for (i=0; i<winningCombinations.length; i++){
        if (playerXSelections.includes(winningCombinations[i][0]) && 
        playerXSelections.includes(winningCombinations[i][1]) &&
        playerXSelections.includes(winningCombinations[i][2])){
        Xmatches+=3
        } 
    }

    if (Omatches >= 3)
    { 
        return "O" }
    else if (Xmatches >=3) {
        return "X"
    }
}


function checkDraw(){
 
    if( (playerOSelections.length + playerXSelections.length) >= cells.length)
        { return true
            }
        else {
            return false
        }
}


function resetGame(){
    playerXSelections = new Array()
    playerOSelections = new Array()
    for (let x=0; x<cells.length; x++) {
        cells[x].innerHTML = ""
    }
}




