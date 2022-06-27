---
sidebar_position: 1
---

# Header

The Header is accessible via `[wad].head`.

## `Header.headerSize`

-   Type: **number**

Header size. Always `0x20`.

## `Header.type`

-   Type: **string**

WAD Type.

-   `"ib"` - for boot2 WADs
-   `"Is"` - for everything else

## `Header.certChainSize`

-   Type: **number**

[Certificate Chain](cert-chain) size.

## `Header.ticketSize`

-   Type: **number**

[Ticket](ticket) size.

## `Header.tmdSize`

-   Type: **number**

[TMD](tmd) size.

## `Header.dataSize`

-   Type: **number**

[Encrypted content data](data) size.

## `Header.openingBnrSize`

-   Type: **number**

[opening.bnr](opening-bnr) size.
