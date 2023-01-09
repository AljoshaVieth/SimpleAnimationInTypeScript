class TimeManager {
    // time in ms
    public timeSinceStart = 0;
    public currentTime = 0;
    public formerTime = 0;
    private timeScale = 1;
    private isPaused = false;
    private running = true;
  
    public constructor() {}
  
    public run(): void {
      this.formerTime = Date.now();
      while (this.running) {
        this.currentTime = Date.now();
        if (!this.isPaused) {
          this.timeSinceStart += (this.currentTime - this.formerTime) * this.timeScale;
        }
        this.formerTime = this.currentTime;
      }
    }
  
    // returns the current timer in milliseconds
    public getTime(): number {
      return this.timeSinceStart;
    }
  
    // returns the current time in seconds
    public getTimeInSeconds(): number {
      return this.timeSinceStart / 1000;
    }
  
    // change the timer speed (1 = realtime)
    public changeTimeScaling(newValue: number): void {
      this.timeScale = newValue;
    }
  
    public pauseTime(): void {
      if (this.isPaused) {
        return;
      }
      this.isPaused = true;
      console.log("Application Time is paused");
    }
  
    public continueTime(): void {
      if (!this.isPaused) {
        return;
      }
      this.isPaused = false;
      console.log("Application time continues");
    }
  
    public endThread(): void {
      if (!this.running) {
        return;
      }
      this.running = false;
      console.log("Application Time has been interrupted");
    }
  }
  