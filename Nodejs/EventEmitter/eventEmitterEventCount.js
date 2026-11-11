//Create an event emitter that tracks how many times a particular event has been triggered
import { EventEmitter } from "node:events";
const event = new EventEmitter()
let count = 0
event.on('triger', () => {
    count++
    console.log(`Event triggered ${count} times`)
})
event.emit('triger')
event.emit('triger')
event.emit('triger')
event.emit('triger')