
//grid box designations for letters and words
let squaresArray=[
    "r1c1", "r1c2", "r1c3", "r1c4", "r1c5", "r1c6", "r1c7", "r1c8", "r1c9", "r1c10",
    "r2c1", "r2c2", "r2c3", "r2c4", "r2c5", "r2c6", "r2c7", "r2c8", "r2c9", "r2c10",
    "r3c1", "r3c2", "r3c3", "r3c4", "r3c5", "r3c6", "r3c7", "r3c8", "r3c9", "r3c10",
    "r4c1", "r4c2", "r4c3", "r4c4", "r4c5", "r4c6", "r4c7", "r4c8", "r4c9", "r4c10",
    "r5c1", "r5c2", "r5c3", "r5c4", "r5c5", "r5c6", "r5c7", "r5c8", "r5c9", "r5c10",
    "r6c1", "r6c2", "r6c3", "r6c4", "r6c5", "r6c6", "r6c7", "r6c8", "r6c9", "r6c10",
    "r7c1", "r7c2", "r7c3", "r7c4", "r7c5", "r7c6", "r7c7", "r7c8", "r7c9", "r7c10",
    "r8c1", "r8c2", "r8c3", "r8c4", "r8c5", "r8c6", "r8c7", "r8c8", "r8c9", "r8c10",
    "r9c1", "r9c2", "r9c3", "r9c4", "r9c5", "r9c6", "r9c7", "r9c8", "r9c9", "r9c10",
    "r10c1", "r10c2", "r10c3", "r10c4", "r10c5", "r10c6", "r10c7", "r10c8", "r10c9", "r10c10"
]
//possible puzzle layouts
const puzzleFormation1=[ 
    [4, "r2c2", "r2c3", "r2c4", "r2c5"],
    [5, "r3c2", "r4c2", "r5c2", "r6c2", "r7c2"],
    [6, "r9c2", "r9c3", "r9c4", "r9c5", "r9c6", "r9c7"],
    [5, "r3c4", "r4c5", "r5c6", "r6c7", "r7c8"],
    [6, "r3c9", "r4c9", "r5c9", "r6c9", "r7c9", "r8c9"],
    [6, "r10c3", "r10c4", "r10c5", "r10c6", "r10c7", "r10c8"],
    [4, "r2c1", "r3c1", "r4c1", "r5c1"],
    [3, "r1c7", "r1c8", "r1c9"]

]

const puzzleFormation2=[ 
    [4, "r7c1", "r8c1", "r9c1", "r10c1"],
    [4, "r10c7", "r9c8", "r8c9", "r7c10"],
    [6, "r2c2", "r3c3", "r4c4", "r5c5", "r6c6", "r7c7"],  
    [6, "r6c8", "r5c8", "r4c8", "r3c8", "r2c8", "r1c8"],
    [4, "r1c10", "r2c10", "r3c10", "r4c10"],
    [5, "r4c2", "r5c2", "r6c2", "r7c2", "r8c2"],
    [3, "r2c5", "r2c6", "r2c7"],
    [5, "r8c3", "r8c4", "r8c5", "r8c6", "r8c7"]
]

const puzzleFormation3=[ 
    [4, "r3c7", "r3c8", "r3c9", "r3c10"],
    [5, "r5c9", "r6c9", "r7c9", "r8c9", "r9c9"],
    [6, "r4c3", "r5c4", "r6c5", "r7c6", "r8c7", "r9c8"],
    [5, "r8c1", "r8c2", "r8c3", "r8c4", "r8c5"],
    [6, "r2c2", "r2c3", "r2c4", "r2c5", "r2c6", "r2c7"],
    [4, "r3c5", "r4c6", "r5c7", "r6c8"],
    [3, "r4c1", "r5c1", "r6c1"],
    [6, "r10c2", "r10c3", "r10c4", "r10c5", "r10c6", "r10c7"],
]



//random number to choose random words in words array based on length of words and length of arrays in words dictionary
function randomWord3(){
    let r=Math.floor((Math.random() * 781) + 1)
    return r
}

function randomWord4(){
    let r=Math.floor((Math.random() * 2185) + 1)
    return r
}

function randomWord5(){
    let r=Math.floor((Math.random() * 3160) + 1)
    return r
}


function randomWord6(){
    let r=Math.floor((Math.random() * 3872) + 1)
    return r
}

//random number to choose random letter for fill empty spaces
function randomLetter(){
    let r=Math.floor((Math.random() * 25) + 1)
    return r
}


//random number to choose which puzzle formation to apply and function to create puzzle array variable
function randomPuzzle(){
    let r=Math.floor((Math.random() * 2) + 1)
    return r
}

const puzzleArray=[puzzleFormation1, puzzleFormation2, puzzleFormation3]

function puzzleChoice(){
    let pnumb=randomPuzzle()
    let form=puzzleArray[pnumb]
    console.log(form)
    return form
}
let puzzleFormation=puzzleChoice()

let winArray=[]

//function to send words to puzzle based on puzzle formation and random word selector
function wordsToPuzzle(){
    let wordSelector = 0
    let word1=""
   
    
    for (i=0; i<puzzleFormation.length; i++){

        //if formation requires 3 letter words
        if(puzzleFormation[i][0] === 3){
            wordSelector = randomWord3()
            
            word1 = threeLetterWords[wordSelector]

            const wordList=document.createElement("span")       //adds word in words list on left of screen
            const wordListContent=document.createTextNode(word1)
            wordList.appendChild(wordListContent)
            document.getElementById("wordsToFind").appendChild(wordList)
           
       
            for(j=1; j<puzzleFormation[i].length; j++){         //sends letters to puzzle squares
                const spanLetter=document.getElementById(puzzleFormation[i][j])
                const spanContent = document.createTextNode(word1[j-1])
                spanLetter.appendChild(spanContent)
            }
              
        }
        //if formation requires 4 letter words
        if(puzzleFormation[i][0] === 4){
            wordSelector = randomWord4()
            word1 = fourLetterWords[wordSelector]

            const wordList=document.createElement("span")           //adds word in words list on left of screen
            const wordListContent=document.createTextNode(word1)
            wordList.appendChild(wordListContent)
            document.getElementById("wordsToFind").appendChild(wordList)
           
            for(j=1; j<puzzleFormation[i].length; j++){             //sends letters to puzzle squares
                const spanLetter=document.getElementById(puzzleFormation[i][j])
                const spanContent = document.createTextNode(word1[j-1])
                spanLetter.appendChild(spanContent)
            }     
        }
        //if formation requires 5 letter words
        if(puzzleFormation[i][0] === 5){
            wordSelector = randomWord5()
            word1 = fiveLetterWords[wordSelector]

            const wordList=document.createElement("span")       //adds word in words list on left of screen
            const wordListContent=document.createTextNode(word1)
            wordList.appendChild(wordListContent)
            document.getElementById("wordsToFind").appendChild(wordList)
           
            for(j=1; j<puzzleFormation[i].length; j++){         //sends letters to puzzle squares
                const spanLetter=document.getElementById(puzzleFormation[i][j])
                const spanContent = document.createTextNode(word1[j-1])
                spanLetter.appendChild(spanContent)
               
            }
            
        }
        //if formation requires 6 letter words
        if(puzzleFormation[i][0] === 6){
            wordSelector = randomWord6()
            word1 = sixLetterWords[wordSelector]
            

            const wordList=document.createElement("span")               //adds word in words list on left of screen
            const wordListContent=document.createTextNode(word1)
            wordList.appendChild(wordListContent)
            document.getElementById("wordsToFind").appendChild(wordList)

            for(j=1; j<puzzleFormation[i].length; j++){                 //sends letters to puzzle squares
                const spanLetter=document.getElementById(puzzleFormation[i][j])
                const spanContent = document.createTextNode(word1[j-1])
                spanLetter.appendChild(spanContent)
              
        }
             
    }
}
    for(p=0; p<puzzleFormation.length; p++){
        for(k=1; k<puzzleFormation[p].length; k++){
        winArray.push(puzzleFormation[p][k]) 
    }
    }
 
}

//function to fill empty squares
function fillEmpty(){
    let letRan=0
    for (e=0; e<100; e++){
        let square = document.getElementById(squaresArray[e])
       
        if(square.innerHTML===""){
          
            letRan=randomLetter()
    
        const letterContent=document.createTextNode(letterFill[letRan])
        square.appendChild(letterContent)
        }
    } 
}

//load new game
function loadGame(){
    wordsToPuzzle()
    fillEmpty()
}

//click handler event and check for all words found
const element = squaresArray
let playerSelections =[]
let score = 0
for(w=0; w<squaresArray.length; w++){

let elementID=document.getElementById(element[w])
elementID.onclick=function(){


    if(elementID.style.backgroundColor==="orange"){    //changes colors of letters on clicks
        elementID.style.backgroundColor="white"
    } else {
        elementID.style.backgroundColor="orange"
    }

   
    playerSelections.push(elementID["id"])    //stores clicked letters in div
    

    let wordFound=[0,0,0,0,0,0,0,0,0]
        for(q=0; q<puzzleFormation.length; q++){            //will strikethrough words on left when all letters located
            for(w=1; w<puzzleFormation[q].length; w++){
                if(playerSelections.includes(puzzleFormation[q][w])){
                    wordFound[q+1]++
                    if(wordFound[q+1]===puzzleFormation[q][0]){
                            let parent=document.getElementById("wordsToFind")
                            let child=parent.querySelectorAll("span")
                            child[q].style.textDecorationLine="line-through"
                        
                    }
                }
            }
        }


    if((winArray.includes(elementID["id"]))===true){     //increases score for every correct letter clicked
        score++
        
    }
    if (score===winArray.length){
        alert("You Have Found All Of The Words")
    
    }
    }
}









    
   

