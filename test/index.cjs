const { ok, strictEqual } = require('node:assert')
const test = require('tehanu')(__filename)
const exported = require('..')

test('exports', () => {
  strictEqual(typeof exported, 'object')
  ok(exported, 'null was not exported')
  strictEqual(typeof exported.writeOnlyChanges, 'function')
})
