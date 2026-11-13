import { describe, it, expect } from "vitest";
import { encodeF32 } from "./f32.ts";

describe("encoding f32 as bytes", () => {
  it("encodes simple positive numbers", () => {
    expect(encodeF32(1.2)).toStrictEqual([154, 153, 153, 63]);
  });

  //   it("encodes small numbers as two bytes", () => {
  //     expect(encodeU32(0x105)).toStrictEqual([0x85, 0x02]);
  //   });
});
