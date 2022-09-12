
function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if (running) 
        throw new Error('Stop watch is already running.');

        running = true;

        startTime = new Date();
    };


    this.stop = function() {
        if (!running)
        throw new Error('Stop watch not running. ');

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function() {
        startTime == null;
        endTime == null;
        running == false;
        duration == 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    });

}

// Everthing method

function every(array, test) {
    for (let element of array) {
        if (!test(element)) return false;
    }
    return true;
}

function every2(array, test) {
    return !array.some(element => !test(element));
}

console.log(every([1, 2, 3], n => n < 10));

