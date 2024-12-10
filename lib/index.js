import { readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'

const cache = new Map()

export const writeOnlyChanges = ({ verbose, rebuild } = {}) => {
  let missing
  let failing
  let existed
  let created
  let changed
  let intact
  if (verbose) {
    if (verbose === true) {
      missing = failing = existed = created = changed = intact = true
    } else {
      ({ missing, failing, existed, created, changed, intact } = verbose)
    }
  }
  const cwd = process.cwd()

  return {
    name: 'write-only-changes',

    async generateBundle({ dir, file }, bundles, write) {
      if (!write) return
      const outDir = join(cwd, dir ? dir : dirname(file))
      for (const name in bundles) {
        const file = join(outDir, name)
        const bundle = bundles[name]
        const current = bundle.code || bundle.source
        let previous = cache.get(file)
        if (!previous && !rebuild) {
          try {
            previous = await readFile(file, 'utf8')
            // const map = /\r?\n\s*\/\/\s*#\s*sourceMappingURL=.+$/m.exec(previous)
            // if (map) {
            //   previous = previous.substring(0, map.index)
            // }
            // previous = previous.trim()
            cache.set(file, previous)
            existed && console.log(`existed: ${name}`)
          } catch (error) {
            if (error.code === 'ENOENT') {
              missing && console.log(`missing: ${name}`)
            } else {
              failing && console.log(`failing: ${name} (${error.message})`)
            }
          }
        }
        // current = current.trim()
        if (previous === current) {
          intact && console.log(`intact:  ${name}`)
          delete bundles[name]
          continue
        }
        if (previous) {
          changed && console.log(`changed: ${name}`)
        } else {
          created && console.log(`created: ${name}`)
        }
        cache.set(file, current)
      }
    }
  }
}
