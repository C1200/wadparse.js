# wadparse.js

![](https://img.shields.io/npm/v/wadparse.js?style=flat-square)
![](https://img.shields.io/npm/l/wadparse.js?style=flat-square)

wadparse.js is a **Wii** WAD File parser for JavaScript.

## Installation

```bash
# With npm:
npm install wadparse.js
# With yarn:
yarn add wadparse.js
# With pnpm:
pnpm add wadparse.js
```

## Usage

```js
const { parseWad } = require('wadparse.js');
const { readFile } = require('fs');

readFile('/path/to/wad', (err, wadFile) => {
    if (err) throw err;

    const wad = parseWad(wadFile);
});
```

## Next Steps

[Read the Docs](https://wadparse.c1200.cf/docs/installation)