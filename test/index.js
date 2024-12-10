import tehanu from 'tehanu'
import { strictEqual } from 'node:assert'
import { writeOnlyChanges } from '../lib/index.js'

const test = tehanu(import.meta.url)

test('exports', () => {
  strictEqual(typeof writeOnlyChanges, 'function')
})
