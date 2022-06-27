---
sidebar_position: 1
---

# TMD Header

:::note

This page was made with help from [WiiBrew](https://wiibrew.org/wiki/Title_metadata).

:::

## `TMDHeader.signatureType`

-   Type: **number**

Signature type.

## `TMDHeader.signature`

-   Type: **Buffer**

Signature.

## `TMDHeader.signatureIssuer`

-   Type: **Buffer**

Issuer.

## `TMDHeader.version`

-   Type: **number**

Version.

## `TMDHeader.ca_crl_version`

-   Type: **number**

ca_crl_version.

## `TMDHeader.signer_crl_version`

-   Type: **number**

signer_crl_version.

## `TMDHeader.isvWii`

-   Type: **boolean**

Is vWii. `true` for vWii titles, `false` for normal titles.

## `TMDHeader.systemVersion`

-   Type: **bigint**

System version.

## `TMDHeader.titleId`

-   Type: **bigint**

Title ID.

## `TMDHeader.titleType`

-   Type: **string**

Title type.

One of:

-   `"default"`
-   `"0x4"`
-   `"data"`
-   `"0x10"`
-   `"maybe wfs"`
-   `"unknown ct"`

## `TMDHeader.groupId`

-   Type: **number**

Group ID/Publisher.

## `TMDHeader.region`

-   Type: **[Region](region)**

Region. [See more](region).

## `TMDHeader.ratings`

-   Type: **Buffer**

Ratings.

## `TMDHeader.ipcMask`

-   Type: **Buffer**

IPC Mask.

## `TMDHeader.accessRights`

-   Type: **number**

Access rights. Flags for [DVD video access](https://wiibrew.org/wiki/DVDX) and [full PPC hardware access](http://hackmii.com/2009/08/of-tmds-and-hardware/).

## `TMDHeader.titleVersion`

-   Type: **number**

Title version.

## `TMDHeader.numberOfContents`

-   Type: **number**

Number of contents (size of `[wad].tmd.content` array).

## `TMDHeader.bootIdx`

-   Type: **number**

Boot index. Content index for boot file. For [Broadway](https://wiibrew.org/wiki/Broadway) titles, this is typically the [NAND Boot Program](https://wiibrew.org/wiki/NAND_Boot_Program). For [Starlet](https://wiibrew.org/wiki/Starlet) titles, this is the main binary with the kernel/ES/FS, or the single binary for monolithic IOSes.
