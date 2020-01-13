
//prevents page from srolling when arrow keys are pushed
document.onkeydown = function(evt) {
    evt = evt || window.event;
    var keyCode = evt.keyCode;
    if (keyCode >= 37 && keyCode <= 40) {
        return false;
    }
};


//this array includes the allowable moving spaces
let moveArray=['r2c1', 'r2c2', 'r2c3', 'r2c4', 'r2c5', 'r2c6', 'r2c7', 'r2c8', 'r2c9',
'r3c2', 'r3c5', 'r3c7', 'r3c9', 'r4c2', 'r4c3', 'r4c4', 'r4c5', 'r4c7', 'r4c8', 'r4c9',
'r5c2', 'r5c5', 'r5c6', 'r5c8', 'r6c2', 'r6c3', 'r6c4', 'r6c6', 'r6c7', 'r6c9', 'r7c2', 'r7c5',
'r7c8', 'r7c9', 'r7c10', 'r8c2', 'r8c3', 'r8c4', 'r8c6', 'r8c7', 'r8c8', 'r9c2', 'r9c4',
'r9c5', 'r9c6', 'r9c8', 'r9c9']


//this places the fish in the starting position
let row = 2
let column=1

//this calls the move function when an assigned key is pressed
document.addEventListener('keydown', moveFish);


function moveFish(e) {
    let local = "r" + row + "c" + column
    let key=e.code

    console.log(key)
   

    if(key==="ArrowDown"){
        row=row+1
        if (moveArray.includes("r" + row + "c" + column)===false){
            row=row-1
        }
    } 
    else if (key==="ArrowUp"){
        row=row-1 
        if (moveArray.includes("r" + row + "c" + column)===false){
            row=row+1
        }
    } 
    else if (key==="ArrowRight"){
        column=column+1
        if (moveArray.includes("r" + row + "c" + column)===false){
            column=column-1
        }
    } 
    else if (key==="ArrowLeft"){
        column=column-1
        if (moveArray.includes("r" + row + "c" + column)===false){
            column=column+1
        }
    }

    document.getElementById("r" + row + "c" + column).appendChild(document.getElementById('fish'))
    finish()
    
    }

function finish(){
    if(("r" + row + "c" + column)==='r7c10')
    document.getElementById('winnerSign').className="winnerSign"
}

   
    
    