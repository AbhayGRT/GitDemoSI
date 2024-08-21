import { EventEmitter } from 'node:events'
// import { emit } from 'node:process';
const emitter = new EventEmitter()
emitter.on('message',(message) => {
    console.log(`Message received : ${message}`)
})
emitter.emit('message','Hello World');

/* You can also register multiple events listeners and emitted 

/*
// setInterval(() => {
    emitter.emit('message',`Interval (${Date.now()})`);
    },1000)
//
*/

emitter.on('message',(message) => {
    console.log(`Additional listener received : ${message}`)
})


emitter.emit('message','Hello World!')