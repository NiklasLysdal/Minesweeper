class Timer {
    private startTime: number | null

    constructor() {
        this.startTime = null;
    }
    public start() {
        this.startTime = Date.now();
    }
    public getElapsedTime(): number {
        if (this.startTime === null) {
            throw new Error("Timer has not been started.");
        }
        return Date.now() - this.startTime;
    }
}
