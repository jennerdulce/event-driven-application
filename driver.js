'use strict';
const events = require('./events.js');

events.on('pickup', pickUpItem)
events.on('in-transit', inTransit)

function pickUpItem(payload) {
  setTimeout(() => {
    console.log(`***PICKED UP: ORDER ID ${payload.orderId}`)
    events.emit('in-transit', payload)
  }, 1000)
}

function inTransit(payload) {
  setTimeout(() => {
    console.log(`***TRANSIT: ORDER NUMBER: ${payload.orderId}\n`)
    events.emit('delievered', payload)
  }, 3000)
}

// setTimeout(() => {
//   // will take 3 seconds to complete
// }, 3000)

// setInterval(() => {
//   // will execute every 5 seconds
// }, 5000);

