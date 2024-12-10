# rollup-plugin-write-only-changes

A [Rollup] plugin for writing files to the output directory only if their contents actually changed.

[Rollup] rewrites all files in the output directory on each build. If the output directory is watched by other tools, the rewriting will cause unnecessary change events triggered. This plugin prevents [Rollup] from rewriting an output file, if the file already exists in the output directory and if it contains the same contents.

## Requirements

This plugin requires [Node.js] [LTS] (currently 22, at least 14.8) and Rollup 1.20 or newer.

## Installation

Using npm:

    npm i -D rollup-plugin-write-only-changes

## Usage

Create a `rollup.config.js` [configuration file] and import the plugin:

```js
import { writeOnlyChanges } from 'rollup-plugin-write-only-changes';

export default {
  input: 'src/index.js',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [writeOnlyChanges()]
}
```

Then call `rollup` either via the [command-line] or the [programmatically].

## Options

The plugin can be customised by the following options, which can be passed as an object with the properties below.

### `verbose`

Type: `boolean` | `{ missing, failing, existed, created, changed, intact }`<br>
Default: `{ failing: true }`

Logging configuration. All cases can be enabled by `true` and disabled
by `false`. ingle cases are selectable by specifying an object with
the following boolean properties, which are `false` by default,
except for `failing`, which `true` by default:

  * `missing`: Log files, which were missing in the output directory.
  * `failing`: Log files, which failed when they tried to be read from the output directory.
  * `existed`: Log files, which already existed in the output directory and were read.
  * `created`: Log files, which had to be created in the output directory,
               because they did not exist there.
  * `changed`: Log files, which had to be rewritten in the output directory,
               because their content was different.
  * `intact`:  Log files, which did not have to be rewritten in the output directory,
               because their content remained the same.

### `rebuild`

Type: `boolean`<br>
Default: `false`

If the output files should be forcibly written at least once, when rollup
starts and the project is built at first, before the watcher starts.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Lint and test your code.

## License

Copyright (C) 2023-2024 Ferdinand Prantl

Licensed under the [MIT License].

[MIT License]: http://en.wikipedia.org/wiki/MIT_License
[Rollup]: https://rollupjs.org/
[Node.js]: https://nodejs.org/
[LTS]: https://github.com/nodejs/Release
[configuration file]: https://www.rollupjs.org/guide/en/#configuration-files
[command-line]: https://www.rollupjs.org/guide/en/#command-line-reference
[programmatically]: https://www.rollupjs.org/guide/en/#javascript-api
