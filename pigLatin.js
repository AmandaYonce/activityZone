/*  
    STEP # 1: Encode words that begin with a vowel sound from english to pig latin
    For words that begin with vowel sounds, one just adds "yay" to the end.

    For example:
        "eat" becomes "eatyay"
        "omelet" becomes "omeletyay" 
*/
let punctuation=[".", ",", "!", "?", "'", ";", ":", "&"]
function encodeVowelWord(word) {
    word = word.toLowerCase()
    word = word.split("")
   
    for(i=0; i<word.length; i++){
        for(x=0; x<punctuation.length; x++){
        if (word[i]===punctuation[x]){
            word.splice(i, 1)
            word=word
        }
    }
}
        if (word[0]==="a" || word[0]==="e" || word[0]==="i" || word[0]==="o" || word[0]==="u" || word[0]==="y" ){
            word=word.join("")+"yay"
        }
    return word; 
  }
  
  

//function to find index of first vowel in a string

function firstVowelPos(word) {
   
    for (i = 0; i < word.length; i++) {
        c = word.charAt(i);
        if ("AEIOUYaeiouy".indexOf(c) != -1)
            return word.indexOf(c);
    }
    return -1;
}

  /*  
      STEP # 2: Encode words that begin with a consonant sound from english to pig latin.
      For words that begin with consonant sounds, all letters before the initial vowel 
      are placed at the end of the word sequence, preceded by a hyphen "-". Then, "ay" is added. 
      
      For example:
          "latin" becomes "atin-lay"
          "cheers" becomes "eers-chay"
  */
  function encodeConsonantWord(word) {
    let indexVowel=firstVowelPos(word)
   
    word = word.toLowerCase()
    word = word.split("")
    let sliceCombine=""
    let newWord=""

    for(i=0; i<word.length; i++){
        for(x=0; x<punctuation.length; x++){
        if (word[i]===punctuation[x]){
            word.splice(i, 1)
            word=word
        }
    }
}
   
    let slice=word.slice(0, indexVowel)
    for(i=0; i<indexVowel; i++){
        word.shift()
    }

    for (i=0; i<slice.length; i++){
    sliceCombine+=slice[i]
    newWord=word.join("") + "-" + sliceCombine + "ay"
    }
    return newWord
    
  }
  /*  
      STEP # 3: Decide whether a given word starts with a vowel sound or consonant sound,
      and call encodeVowelWord(word) or encodeConsonantWord(word) when relevant.
  
      For example:
          "eat" becomes "eatyay" because it starts with a vowel "e"
          "omelet" becomes "omeletyay" because it starts with a vowel "o"
          "latin" becomes "atin-lay" because it starts with a consonant "l""
          "cheers" becomes "eers-chay" because it starts with a consonant cluster "ch"
          "you" becomes "ou-yay" because it starts with a consonant "y"
  */
 function encodeWord(word) {
    let conVowel=firstVowelPos(word)
   
    if(conVowel===0){
        word=encodeVowelWord(word)
    }
    else {
        word=encodeConsonantWord(word)
    }

    return word; 
  }
    
  /*
      STEP # 4: Encode a full sentence or paragraph from english to pig latin.
  */
 function encodeText(text) {
     
     text=document.getElementById("textInput").value
     let encodeSentence=""
     text = text.split(" ")
    let newWord=""


    for(h=0; h<text.length; h++){
        if (text[h]!==" "){
     newWord=text[h]
     encodeSentence+= encodeWord(newWord)+ " "
    }
}
    

const span=document.createElement("span")
const spanContent=document.createTextNode(encodeSentence)
span.appendChild(spanContent)
document.getElementById("output").appendChild(span)
 }
  
 function clearOutput(){
     document.getElementById("output").innerHTML=""
 }
 function clearOutputIn(){
    location.reload()
}

  //piglatin translator determine vowel word or consonant word

  function vowCons(word){

        for (i = 0; i < word.length; i++) {
            c = word.charAt(i);
            if ("-".indexOf(c) != -1)
                return word.indexOf(c);
        }
        return -1;
    }
 
 
//translate pig latin to english

  function pigEnglish(word){
    let dashIndex=vowCons(word)
 
      if (dashIndex===-1){
        word = word.split("")
        word.pop()
        word.pop()
        word.pop()
        word=word.join("")
      }
      else {
        word = word.split("")
        length=word.length
        word.pop()
        word.pop()
        newLength=word.length
        beginning = word.slice(dashIndex+1, newLength)
        for(i=dashIndex; i<newLength; i++){
        word.pop()
      }
        beginning=beginning.join("")
        word.unshift(beginning)
        word=word.join("")
      }
      return word
  }

  

  //pig latin to english translate sentence
  function encodeTextLatin(text) {
     
    text=document.getElementById("LEtextInput").value
    let encodeSentence=""
    text = text.split(" ")
    let newWord=""


   for(h=0; h<text.length; h++){
       if (text[h]!==" "){
    newWord=text[h]
    encodeSentence+= pigEnglish(newWord)+ " "
   }
}
   

const span=document.createElement("span")
const spanContent=document.createTextNode(encodeSentence)
span.appendChild(spanContent)
document.getElementById("LEoutput").appendChild(span)
}
 
function clearOutput(){
    document.getElementById("LEoutput").innerHTML=""
}
function clearOutputIn(){
   location.reload()
}