function Letter(let){
  this.charac = let,
  this.appear = false,
  this.letterRender = function(){
    if (appear === false){
      return "_";
    }else{
      return charac;
    }
  }
};

letterRender();

module.exports = Letter;