//Create a custom event emitter that listens for a userRegistered event and sends a welcome message.
import {EventEmitter} from 'node:events'
const event = new EventEmitter()
event.on('register',(name)=>{
    console.log('welecome back',name)
})
event.emit('register','Jobin')