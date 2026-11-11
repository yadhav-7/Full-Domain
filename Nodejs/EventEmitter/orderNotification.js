//Create a notification system where multiple listeners respond to an orderPlaced event.
import EventEmitter from 'node:events'

const orderEmitter = new EventEmitter()

// Listener 1: Send confirmation email
orderEmitter.on('orderPlaced', (order) => {
    console.log(`Email sent to ${order.email}`)
})

// Listener 2: Send SMS notification
orderEmitter.on('orderPlaced', (order) => {
    console.log(`SMS sent to ${order.phone}`)
})

// Listener 3: Notify admin
orderEmitter.on('orderPlaced', (order) => {
    console.log(`Admin notified: New order ${order.id}`)
})

// Listener 4: Update analytics
orderEmitter.on('orderPlaced', (order) => {
    console.log(`Analytics updated for order ${order.id}`)
})

// Place an order (emit event)
const order = {
    id: 101,
    email: 'user@gmail.com',
    phone: '9876543210'
}

orderEmitter.emit('orderPlaced', order)
