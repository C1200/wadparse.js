import { UsageLimit, CommonKeyType, UsageLimitType } from '../types';
import { copyBuffer } from '../utils/buffer';

export class Ticket {
    private buf: Buffer;
    public signatureType!: number;
    public signature!: Buffer;
    public signatureIssuer!: Buffer;
    public ecdhData!: Buffer;
    public titleKey!: Buffer;
    public ticketId!: bigint;
    public consoleId!: number;
    public titleId!: bigint;
    public titleVersion!: number;
    public accessTitleId!: number;
    public accessTitleMask!: number;
    public exportAllowed!: boolean;
    public commonKey!: CommonKeyType;
    public usageLimits: UsageLimit[] = [];

    constructor(buf: Buffer) {
        if (!(buf instanceof Buffer)) {
            throw new TypeError('`buf` must be an instance of `Buffer`');
        }

        this.buf = buf;
        this._parse();
    }

    _parse() {
        const buf = this.buf;
        this.signatureType = buf.readUInt32BE(0x0000);
        this.signature = copyBuffer(buf, 0x0004, 0x100);
        this.signatureIssuer = copyBuffer(buf, 0x0140, 0x40);
        this.ecdhData = copyBuffer(buf, 0x0180, 0x3c);
        this.titleKey = copyBuffer(buf, 0x01bf, 0x10);
        this.ticketId = buf.readBigUInt64BE(0x01d0);
        this.consoleId = buf.readUint32BE(0x01d8);
        this.titleId = buf.readBigUInt64BE(0x01dc);
        this.titleVersion = buf.readUInt16BE(0x01e6);
        this.accessTitleId = buf.readUInt32BE(0x01e8);
        this.accessTitleMask = buf.readUInt32BE(0x01ec);
        this.exportAllowed = !!buf.readUInt8(0x01f0);
        this.commonKey = this._commonKeyNumber(buf.readUInt8(0x01f1));
        for (let i of [
            0x0264, 0x026c, 0x0274, 0x027c, 0x0284, 0x028c, 0x0294, 0x029c,
        ]) {
            this.usageLimits.push({
                type: this._usageLimitType(buf.readUInt32BE(i)),
                maxUsage: buf.readUInt32BE(i + 0x4),
            });
        }
    }

    _commonKeyNumber(ckn: number): CommonKeyType {
        switch (ckn) {
            case 2:
                return 'WiiU';
            case 1:
                return 'Korean';
            default:
                return 'Common';
        }
    }

    _usageLimitType(ultn: number): UsageLimitType {
        switch (ultn) {
            case 1:
                return 'time';
            case 4:
                return 'launch count';
            default: // 0 and 3 are disable
                return false;
        }
    }
}
