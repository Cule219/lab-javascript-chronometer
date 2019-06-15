class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.stopped = false;
  }
    



  startClick() {
    this.stopped = false;
    this.intervalId = setInterval(()=>{
      if(!this.stopped)
        {this.currentTime++;
          printTime();
        }
    }, 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime/60);
  }
  getSeconds() {
    return this.currentTime%60;
  }
  twoDigitsNumber(val) {
    val = 0 + '' + val;
    return val.slice(-2);
  }
  stopClick() {
    clearInterval(this.intervalId);
    this.stopped = true;
  }
  resetClick() {
    this.stopClick();
    this.currentTime = 0;
    printTime();
    clearSplits();  
  }
  splitClick() {
    return this.twoDigitsNumber(this.getMinutes())+':'+this.twoDigitsNumber(this.getSeconds());
  }
}