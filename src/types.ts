//                           2      | 1        | 0
export type CommonKeyType = 'WiiU' | 'Korean' | 'Common';

//                            0 & 3 | 1      | 4
export type UsageLimitType = false | 'time' | 'launch count';

//                    3     | 0    | 1    | 2    | 4
export type Region = false | 'jp' | 'us' | 'eu' | 'ko';

export interface WADOffsets {
    certChain: number;
    ticket: number;
    tmd: number;
    data: number;
    openingBnr: number;
}

export interface UsageLimit {
    type: UsageLimitType;
    // if type == time then maxUsage is time allowed in minutes
    maxUsage: number;
}

export interface TMDHeader {
    signatureType: number;
    signature: Buffer;
    signatureIssuer: Buffer;
    version: number;
    ca_crl_version: number;
    signer_crl_version: number;
    isvWii: boolean;
    systemVersion: bigint;
    titleId: bigint;
    //         0x1       | 0x4   | 0x8    | 0x10   | 0x20        | 0x40
    titleType: 'default' | '0x4' | 'data' | '0x10' | 'maybe wfs' | 'unknown ct';
    groupId: number;
    region: Region;
    ratings: Buffer;
    ipcMask: Buffer;
    accessRights: number;
    titleVersion: number;
    numberOfContents: number;
    bootIdx: number;
}

export interface TMDContent {
    id: number;
    idx: number;
    //    0x1      | 0x4001 | 0x8001
    type: 'normal' | 'dlc' | 'shared';
    size: bigint;
    hash: string;
}
