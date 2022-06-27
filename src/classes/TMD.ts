import { Region, TMDContent, TMDHeader } from '../types';
import { copyBuffer, splitBuffer } from '../utils/buffer';

export class TMD {
    private buf: Buffer;
    public head!: TMDHeader;
    public content: TMDContent[] = [];

    constructor(buf: Buffer) {
        if (!(buf instanceof Buffer)) {
            throw new TypeError('`buf` must be an instance of `Buffer`');
        }

        this.buf = buf;
        this._parseHeader();
        this._parseContent();
    }

    _parseHeader() {
        const buf = this.buf;

        this.head = {
            signatureType: buf.readUInt32BE(0x000),
            signature: copyBuffer(buf, 0x004, 256),
            signatureIssuer: copyBuffer(buf, 0x140, 64),
            version: buf.readUInt8(0x180),
            ca_crl_version: buf.readUInt8(0x181),
            signer_crl_version: buf.readUInt8(0x182),
            isvWii: !!buf.readUInt8(0x183),
            systemVersion: buf.readBigUInt64BE(0x184),
            titleId: buf.readBigUInt64BE(0x18c),
            titleType: this._titleType(buf.readUInt32BE(0x194)),
            groupId: buf.readUInt16BE(0x198),
            region: this._region(buf.readUInt16BE(0x19c)),
            ratings: copyBuffer(buf, 0x19e, 16),
            ipcMask: copyBuffer(buf, 0x1ba, 12),
            accessRights: buf.readUInt32BE(0x1d8),
            titleVersion: buf.readUInt16BE(0x1dc),
            numberOfContents: buf.readUInt16BE(0x1de),
            bootIdx: buf.readUInt16BE(0x1e0),
        };
    }

    _titleType(ttn: number) {
        switch (ttn) {
            default:
                return 'default';
            case 0x4:
                return '0x4';
            case 0x8:
                return 'data';
            case 0x10:
                return '0x10';
            case 0x20:
                return 'maybe wfs';
            case 0x40:
                return 'unknown ct';
        }
    }

    _region(rn: number): Region {
        switch (rn) {
            default:
                return 'jp';
            case 1:
                return 'us';
            case 2:
                return 'eu';
            case 3:
                return false;
            case 4:
                return 'ko';
        }
    }

    _parseContent() {
        const allContent = copyBuffer(
            this.buf,
            0x1e4,
            36 * this.head.numberOfContents
        );
        const contents = splitBuffer(allContent, 36);

        for (let content of contents) {
            this.content.push({
                id: content.readUInt32BE(0x00),
                idx: content.readUInt16BE(0x04),
                type: this._contentType(content.readUInt16BE(0x06)),
                size: content.readBigUInt64BE(0x08),
                hash: content.toString('hex', 0x10, 0x10 + 20),
            });
        }
    }

    _contentType(ctn: number) {
        switch (ctn) {
            default:
                return 'normal';
            case 0x4001:
                return 'dlc';
            case 0x8001:
                return 'shared';
        }
    }
}
