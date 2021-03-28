'use strict';
const events = require('./events.js');
const faker = require('faker');

events.on('start', startFunction)
events.on('delievered', hasBeenDelievered)

function startFunction() {
  setInterval(() => {
    let fakeOrder = {
      storeName: faker.company.companyName(),
      orderId: faker.address.zipCode(),
      customerName: faker.name.findName(),
      address: faker.address.streetAddress()
    }

    console.log(`***NEW PICKUP: ITEM NEEDS TO BE PICKED UP \n
    ${fakeOrder.storeName}\n 
    ${fakeOrder.orderId}\n
    ${fakeOrder.customerName}\n
    ${fakeOrder.address}\n`)
    events.emit('pickup', fakeOrder)
  }, 5000)
}

function hasBeenDelievered(payload) {
  console.log(`***DELIEVERED PACKAGE ${payload.orderId} ON ${new Date()}`)
}

