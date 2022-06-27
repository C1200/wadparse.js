import { alignUp } from '../utils/align';
import { WADOffsets } from '../types';

export class Header {
    private buf: Buffer;
    public headerSize!: number;
    public type!: string;
    public certChainSize!: number;
    public ticketSize!: number;
    public tmdSize!: number;
    public dataSize!: number;
    public openingBnrSize!: number;

    constructor(buf: Buffer) {
        if (!(buf instanceof Buffer)) {
            throw new TypeError('`buf` must be an instance of `Buffer`');
        }

        this.buf = buf;
        this._parse();
    }

    _parse() {
        const buf = this.buf;

        this.headerSize = buf.readUInt32BE(0x00);
        this.type = buf.toString('ascii', 0x04, 0x06);
        this.certChainSize = buf.readUInt32BE(0x08);
        this.ticketSize = buf.readUInt32BE(0x10);
        this.tmdSize = buf.readUInt32BE(0x14);
        this.dataSize = buf.readUInt32BE(0x18);
        this.openingBnrSize = buf.readUInt32BE(0x1c);
    }

    calculateOffsets(): WADOffsets {
        const certChain = alignUp(this.headerSize, 0x40);
        const ticket = certChain + alignUp(this.certChainSize, 0x40);
        const tmd = ticket + alignUp(this.ticketSize, 0x40);
        const data = tmd + alignUp(this.tmdSize, 0x40);
        const openingBnr = data + alignUp(this.dataSize, 0x40);

        return {
            certChain,
            ticket,
            tmd,
            data,
            openingBnr,
        };
    }
}
