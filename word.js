var Letter = require("./letter.js");

function Word(wrd){
  this.word = wrd;
  this.lets = [];
  this.found = false;
  this.getLets = function(){
    for(var i = 0; i < word.length; i++){
      word.split(' ');
      this.lets = Letter(this.word[i]);
      console.log("lets = " + this.lets); 
    }; 
  }// end getLets
  this.checkIfLetterFound = function(guessLetter){
    var whatToReturn = 0;
    for(var i = 0; i < this.lets.length; i++){
      if(this.lets[i].charac === guessLetter){
        this.lets[i].appear = true;
        whatToReturn++;       
      }
    }
    return whatToReturn;
  }//end checkIfLetterFound
  this.didWeFindTheWord = function(){
    if(this.lets.every(function(curLet){
      return curLet.appear === true
      }) === true){
    }else{

    }
  }//end didWeFindTheWord
  this.wordRender = function(){
    var str = "";
    for(var i = 0; i < this.lets.length; i++){
      str += this.let[i].letterRender(this.lets[i])
    }
    return str;
  }
}

module.exports = Word;