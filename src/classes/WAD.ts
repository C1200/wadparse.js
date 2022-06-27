import { WADOffsets } from '../types';
import { copyBuffer } from '../utils/buffer';
import { Ticket } from './Ticket';
import { Header } from './Header';
import { TMD } from './TMD';

export class WAD {
    private buf: Buffer;
    private offsets!: WADOffsets;
    public head!: Header;
    public certChain!: Buffer;
    public ticket!: Ticket;
    public tmd!: TMD;
    public data!: Buffer;
    public openingBnr!: Buffer;

    constructor(buf: Buffer) {
        if (!(buf instanceof Buffer)) {
            throw new TypeError('`buf` must be an instance of `Buffer`');
        }

        this.buf = buf;
        this._parseHeader();
        this._parseCertChain();
        this._parseTicket();
        this._parseTMD();
        this._parseData();
        this._parseOpeningBnr();
    }

    _parseHeader() {
        this.head = new Header(this.buf);
        this.offsets = this.head.calculateOffsets();
    }

    _parseCertChain() {
        this.certChain = copyBuffer(
            this.buf,
            this.offsets.certChain,
            this.head.certChainSize
        );
    }

    _parseTicket() {
        const buf = copyBuffer(
            this.buf,
            this.offsets.ticket,
            this.head.ticketSize
        );
        this.ticket = new Ticket(buf);
    }

    _parseTMD() {
        const buf = copyBuffer(this.buf, this.offsets.tmd, this.head.tmdSize);
        this.tmd = new TMD(buf);
    }

    _parseData() {
        this.data = copyBuffer(this.buf, this.offsets.data, this.head.dataSize);
    }

    _parseOpeningBnr() {
        const buf = copyBuffer(
            this.buf,
            this.offsets.openingBnr,
            this.head.openingBnrSize
        );
        this.openingBnr = buf;
    }
}
