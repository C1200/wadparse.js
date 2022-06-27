// Port of https://github.com/dolphin-emu/dolphin/blob/master/Source/Core/Common/Align.h

export function alignUp(value: number, size: number): number {
    return value + ((size - (value % size)) % size);
}

export function alignDown(value: number, size: number): number {
    return value - (value % size);
}
