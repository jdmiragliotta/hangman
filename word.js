var Letter = require('./letter.js');

var Word = function(wrd){
  this.word = wrd;
  this.lets = [];
  this.found = false;
  this.getLets = function(){
    for(var i = 0; i < this.word.length; i++){
      this.lets.push(new Letter(this.word[i]));
    }
  }; //Ends getLets Function
  this.checkIfLetterFound = function(guessLetter){
    var whatToReturn = 0;
    for(var i = 0; i < this.lets.length; i++){
      if(this.lets[i].charac === guessLetter){
        this.lets[i].appear = true;
        whatToReturn += 1;
      }
    } 
    return whatToReturn;
  }; //Ends checkIfLetterFound Function
  this.didWeFindTheWord = function(){
    if (this.lets.every(function(curLet){
      return curLet.appear === true
      }) === true){
      return true;
    }
  }
  this.wordRender = function(){
    var str = "";
    for(var i = 0; i < this.lets.length; i++){
      str += this.lets[i].letterRender(this.lets[i])
    }
    return str;
  };//Ends wordRender Fucntion
}; //Ends Word Constructor Function

module.exports = Word;