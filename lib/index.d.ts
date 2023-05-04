import { Plugin } from 'rollup'

export interface WriteOnlyChangesLogOptions {
  /**
   * Log files, which were missing in the output directory.
   * @default false
   */
  missing?: boolean

  /**
   * Log files, which failed when they tried to be read from the output directory.
   * @default true
   */
  failing?: boolean

  /**
   * Log files, which already existed in the output directory and were read.
   * @default false
   */
  existed?: boolean

  /**
   * Log files, which had to be created in the output directory,
   * because they did not exist there.
   * @default false
   */
  created?: boolean

  /**
   * Log files, which had to be rewritten in the output directory,
   * because their content was different.
   * @default false
   */
  changed?: boolean

  /**
   * Log files, which did not have to be rewritten in the output directory,
   * because their content remained the same.
   * @default false
   */
  intact?: boolean
}

export interface PluginWriteOnlyChangesOptions {
  /**
   * Logging configuration. All cases can be enabled by `true` and disabled
   * by `false`. ingle cases are selectable by specifying an object
   * with `PluginWriteOnlyChangesLogOptions`.
   * @default { failing: true }
   */
  verbose?: boolean | WriteOnlyChangesLogOptions

  /**
   * If the output files should be forcibly written at least once, when rollup
   * starts and the project is built at first, before the watcher starts.
   * @default false
   */
  rebuild?: boolean
}

/**
 * Converts .json (JSON/CJSON/JSON5) files to ES6 modules.
 */
export function writeOnlyChanges(options?: PluginWriteOnlyChangesOptions): Plugin
