// Main hub app

'use strict';

require('./driver');
require('./vendor');
const events = require('./events.js');

events.emit('start')
