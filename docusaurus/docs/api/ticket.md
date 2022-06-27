---
sidebar_position: 3
---

# Ticket

The Ticket is accessible via `[wad].ticket`.

:::note

This page was made with help from [WiiBrew](https://wiibrew.org/wiki/Ticket).

:::

## `Ticket.signatureType`

-   Type: **number**

Signature type. `0x10001` for RSA-2048.

## `Ticket.signature`

-   Type: **Buffer**

Signature by a certificate's key.

## `Ticket.signatureIssuer`

-   Type: **Buffer**

Signature issuer.

## `Ticket.ecdhData`

-   Type: **Buffer**

ECDH data. Used to generate one-time key during install of console specific titles.

## `Ticket.titleKey`

-   Type: **Buffer**

Title Key. Encrypted by Common Key.

## `Ticket.ticketId`

-   Type: **bigint**

Ticket ID. Used as the Initialization Vector (IV) for title key decryption of console specific titles.

## `Ticket.consoleId`

-   Type: **number**

Console ID.

## `Ticket.titleId`

-   Type: **bigint**

Title ID or Initialization Vector (IV) used for AES-CBC encryption.

## `Ticket.titleVersion`

-   Type: **number**

Ticket title version.

## `Ticket.accessTitleId`

-   Type: **number**

Permitted titles mask.

## `Ticket.accessTitleMask`

-   Type: **number**

Permit mask. The current disc title is ANDed with the inverse of this mask to see if the result matches the permitted titles mask.

## `Ticket.exportAllowed`

-   Type: **boolean**

Title Export allowed using PRNG key.

## `Ticket.commonKey`

-   Type: **[CommonKeyType](types/commonkeytype)**

Common Key index.

## `Ticket.usageLimits`

-   Type: **[UsageLimit](types/usagelimit)[]**

Usage limits.
