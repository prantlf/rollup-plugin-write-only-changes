import { writeOnlyChanges } from '../lib/index.js'

declare type testCallback = () => void
declare function test (label: string, callback: testCallback): void

test('Type declarations for TypeScript', () => {
  writeOnlyChanges()
  writeOnlyChanges({})
  writeOnlyChanges({ rebuild: true })
  writeOnlyChanges({ verbose: true })
  writeOnlyChanges({ verbose: { missing: true } })
  writeOnlyChanges({ verbose: { failing: true } })
  writeOnlyChanges({ verbose: { existed: true } })
  writeOnlyChanges({ verbose: { created: true } })
  writeOnlyChanges({ verbose: { changed: true } })
  writeOnlyChanges({ verbose: { intact: true } })
})
