"use strict";
class TimeManager {
    // time in ms
    timeSinceStart = 0;
    currentTime = 0;
    formerTime = 0;
    timeScale = 1;
    isPaused = false;
    running = true;
    constructor() { }
    run() {
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
    getTime() {
        return this.timeSinceStart;
    }
    // returns the current time in seconds
    getTimeInSeconds() {
        return this.timeSinceStart / 1000;
    }
    // change the timer speed (1 = realtime)
    changeTimeScaling(newValue) {
        this.timeScale = newValue;
    }
    pauseTime() {
        if (this.isPaused) {
            return;
        }
        this.isPaused = true;
        console.log("Application Time is paused");
    }
    continueTime() {
        if (!this.isPaused) {
            return;
        }
        this.isPaused = false;
        console.log("Application time continues");
    }
    endThread() {
        if (!this.running) {
            return;
        }
        this.running = false;
        console.log("Application Time has been interrupted");
    }
}
//# sourceMappingURL=TimeManager.js.map