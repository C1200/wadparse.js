import { WAD } from './classes/WAD';

export function parseWad(buf: Buffer) {
    return new WAD(buf);
}
