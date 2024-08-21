import * as events from "events";
let emitter = new events.EventEmitter();

function doATask(status) {
    if (status === 'success') {
        emitter.emit("taskSuccess")
    }
    else if (status === 'failure') {
        emitter.emit('taskFailure');
    }
}

emitter.addListener('taskSuccess', () => console.log("Task Success ! Hurray......"))

emitter.on('taskFailure', () => console.log("Oops ! ... Task Failed"))

setTimeout(doATask, 500, 'success')
setTimeout(doATask, 2500, 'failure')