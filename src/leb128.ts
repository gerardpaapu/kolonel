// https://en.wikipedia.org/wiki/LEB128
const MAX_7BITS = (1 << 7) - 1;
const SET_HIGH_BIT = 1 << 7;

export function encodeU32(n: number): number[] {
  let digits = [] as number[];

  while (n > MAX_7BITS) {
    let lsb = (n & MAX_7BITS) | SET_HIGH_BIT;
    digits.push(lsb);
    n >>>= 7;
  }

  digits.push(n);
  return digits;
}

// for this project I think I don't care about decoding them...
// but maybe I should implement it
