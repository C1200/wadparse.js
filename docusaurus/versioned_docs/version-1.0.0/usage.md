---
sidebar_position: 2
---

# Usage

```js
const { parseWad } = require('wadparse.js');
const { readFile } = require('fs');

readFile('/path/to/wad', (err, wadFile) => {
    if (err) throw err;

    const wad = parseWad(wadFile);
});
```
