import { describe, it, expect } from "vitest";
import { encodeU32 } from "./leb128.ts";

describe("encoding u32 as LEB128", () => {
  it("encodes very-small numbers as single bytes", () => {
    expect(encodeU32(0x2)).toStrictEqual([0x2]);
  });

  it("encodes small numbers as two bytes", () => {
    expect(encodeU32(0x105)).toStrictEqual([0x85, 0x02]);
  });
});
