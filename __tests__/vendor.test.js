'use strict';

const vendor = require('../vendor.js');

describe('VENDOR TESTING', () => {
  let consoleSpy;
  let payload = {};

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore()
  })

  it('function "hasBeenDelievered" properly logs some output', () => {
    vendor.hasBeenDelievered(payload)
    expect(consoleSpy).toHaveBeenCalled();
  })
  
  it('function "startFunction" properly logs some output', () => {
    // in order to use timers, useFakeTimers() first
    jest.useFakeTimers()
    vendor.startFunction()
    jest.advanceTimersByTime(5000)
    expect(consoleSpy).toHaveBeenCalled();
  })
})