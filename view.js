var readlineSync = require('readline-sync');
 
// Wait for user's response.


class View {
  constructor (obj){
    this.obj = obj;
  }
  draw () {
    let answer = readlineSync.question(`${this.obj.questArr[this.obj.step]}`);
    if(answer === this.obj.ansArr[this.obj.step]) {
      console.log (`correct!`)
    } else {
      console.log('Wrong!');
    }
    this.obj.step += 1;
  };
};
