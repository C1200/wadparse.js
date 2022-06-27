---
title: wadparse.js
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# wadparse.js

wadparse.js is a **Wii** WAD File parser for JavaScript

## Getting Started

### Installation

<Tabs groupId="packageman">
    <TabItem value="npm" label="NPM" default>
        <CodeBlock language="bash">
            npm install wadparse.js
        </CodeBlock>
    </TabItem>
    <TabItem value="yarn" label="Yarn">
        <CodeBlock language="bash">
            yarn add wadparse.js
        </CodeBlock>
    </TabItem>
    <TabItem value="pnpm" label="pnpm">
        <CodeBlock language="bash">
            pnpm add wadparse.js
        </CodeBlock>
    </TabItem>
</Tabs>

### Example

```js
const { parseWad } = require('wadparse.js');
const { readFile } = require('fs');

readFile('/path/to/wad', (err, wadFile) => {
    if (err) throw err;

    const wad = parseWad(wadFile);
});
```

### Next Steps

[Read the Docs](/docs/installation)
