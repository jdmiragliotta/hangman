var prompt = require("prompt");
prompt.start();
var Word = require("./word.js");

var game = {
  wordBank : ["array", "boolean", "comments", "conditionals", "console", "functions", "loops", "math", "numbers", "objects", "strings" "variable"],
  guessesRemaining : 10,
  currentWrd : null,
  startGame : function(wrd){
    num = Math.floor(Math.random() * (12 - 1) + 1)
    var word = new Word(ths.wordBank[num]);
    this.currentWrd = word;
    this.currentWrd.getLets();
    this.keepPromptingUser();
  },
  function keepPromptingUser(){
    var self = this;
    prompt.get(["guessLetter"], function(err, result){
      console.log("THe Letter of space you guess is "+ result.guessLetter);
      var findHowManyofUserGuess = currentWrd.checkIfLetterFound(result.guessLetter);
      if (findHowManyOfUserGuess === 0){
        console.log("You guessed wrong!")
        self.guessesRemaining -1;
      }else{
        console.log("You guessed right!");
        if(self.currentWrd.didWeFindTheWord()=== true){
          console.log("You Won!");
          return 1;
        }else{
          console.log("Guesses Remaining: "+ self.guessesRemaining);
          console.log(self.currentWrd.wordRender());
        }
      }
      if (self.guessesRemaining > 0 && self.currentWrd.found === false){
        self/keepPromptingUser();
      }
      else if(self.guessesRemaining ===0){
        console.log("Game over Bro");
        console.log("The workd was " + self.currentWrd.word);
      }else{
        console.log(self.currentWrd.wordRender());
      }
    });
  }
};

game.startGame();