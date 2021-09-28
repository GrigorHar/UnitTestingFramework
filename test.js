const operations = require('./operations.js')
const assert = require('assert')

it('calculate the sum of 1 and 3', () => {
    assert.equal(operations.add(1,3),4)
})

it('calculate the multiply of 4 and 20 ', () => {
    assert.equal(operations.multiply(4,20),80)
})

it('except a error when using string insted of a number', () =>{
    assert.equal(operations.validateNumbers('string', 4), false)
})

it('except a error when using two string insted of a number', () =>{
    assert.equal(operations.validateNumbers('string', "string"), false)
})

it('succesfully run then using two numbers', () =>{
    assert.equal(operations.validateNumbers(5, 4), true)
})