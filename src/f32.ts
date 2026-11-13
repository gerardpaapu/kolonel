const FIRST_BIT_MASK = 128;
const LSB_7 = 127;

export function encodeF32(n: number): [number, number, number, number] {
  let sign = n < 0 ? 1 : 0;
  // this is the minimum to get the number of digits we have as an integer
  // but I guess we actually want as many as we can have ...
  let exponent = Math.floor(Math.log2(Math.abs(n)));
  let fraction = n / 2 ** (exponent - 127);

  let a = (sign << 7) | ((exponent >>> 1) & LSB_7);
  let b = ((exponent << 7) & FIRST_BIT_MASK) | ((fraction >>> 1) & LSB_7);
  let c = (fraction << 7) & 0xff;
  let d = (fraction << 15) & 0xff;

  return [d, c, b, a];
}

// x = 2^n
