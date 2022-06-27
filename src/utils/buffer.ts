export function copyBuffer(
    source: Buffer,
    offset: number,
    length: number
): Buffer {
    const target = Buffer.alloc(length);
    source.copy(target, 0, offset, offset + length);
    return target;
}

// With help from https://github.com/boo1ean/buffer-chunks/blob/master/index.js
export function splitBuffer(buf: Buffer, chunkSize: number): Buffer[] {
    let res = [];
    let len = buf.length;
    let i = 0;

    while (i < len) {
        res.push(buf.subarray(i, (i += chunkSize)));
    }

    return res;
}
