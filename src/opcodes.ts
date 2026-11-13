export const None = "None" as const;
export const I32 = "I32" as const;
export const I64 = "I64" as const;
export const F32 = "F32" as const;
export const F64 = "F64" as const;
export const Any = "Any" as const;
export const V128 = "V128" as const;

export type ValueType =
  | typeof None
  | typeof I32
  | typeof I64
  | typeof F32
  | typeof F64
  | typeof Any
  | typeof V128;

type Params = [] | [ValueType] | [ValueType, ValueType] | [ValueType, ValueType, ValueType];

export type Operation_shape = {
  /**
   * result type
   */
  tr: ValueType;

  /**
   * result type 2, for operations that return more than
   * one value
   */
  tr2: ValueType;

  /**
   * types of the parameters
   */
  params: Params;

  /**
   * memory size of the operation, if any
   */
  m: number;

  /**
   *  the 1-byte opcode prefix, if any
   */
  prefix: number;
  code: number;
  name: string;
  decomp?: string;
};

export const Unreachable = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "unreachable",
  code: 0x00,
} as const;

export const Nop = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "nop",
  code: 0x01,
} as const;

export const Block = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "block",
  code: 0x02,
} as const;

export const Loop = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "loop",
  code: 0x03,
} as const;

export const If = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "if",
  code: 0x04,
} as const;

export const Else = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "else",
  code: 0x05,
} as const;

export const Try = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "try",
  code: 0x06,
} as const;

export const Catch = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "catch",
  code: 0x07,
} as const;

export const Throw = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "throw",
  code: 0x08,
} as const;

export const Rethrow = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "rethrow",
  code: 0x09,
} as const;

export const ThrowRef = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "throw_ref",
  code: 0x0a,
} as const;

export const End = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "end",
  code: 0x0b,
} as const;

export const Br = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "br",
  code: 0x0c,
} as const;

export const BrIf = {
  tr: None,
  tr2: None,
  params: [I32],
  m: 0,
  prefix: 0,
  name: "br_if",
  code: 0x0d,
} as const;

export const BrTable = {
  tr: None,
  tr2: None,
  params: [I32],
  m: 0,
  prefix: 0,
  name: "br_table",
  code: 0x0e,
} as const;

export const Return = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "return",
  code: 0x0f,
} as const;

export const Call = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "call",
  code: 0x10,
} as const;

export const CallIndirect = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "call_indirect",
  code: 0x11,
} as const;

export const ReturnCall = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "return_call",
  code: 0x12,
} as const;

export const ReturnCallIndirect = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "return_call_indirect",
  code: 0x13,
} as const;

export const CallRef = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "call_ref",
  code: 0x14,
} as const;

export const ReturnCallRef = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "return_call_ref",
  code: 0x15,
} as const;

export const Delegate = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "delegate",
  code: 0x18,
} as const;

export const CatchAll = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "catch_all",
  code: 0x19,
} as const;

export const Drop = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "drop",
  code: 0x1a,
} as const;

export const Select = {
  tr: None,
  tr2: None,
  params: [I32],
  m: 0,
  prefix: 0,
  name: "select",
  code: 0x1b,
} as const;

export const SelectT = {
  tr: None,
  tr2: None,
  params: [I32],
  m: 0,
  prefix: 0,
  name: "select",
  code: 0x1c,
} as const;

export const TryTable = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "try_table",
  code: 0x1f,
} as const;

export const LocalGet = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "local.get",
  code: 0x20,
} as const;

export const LocalSet = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "local.set",
  code: 0x21,
} as const;

export const LocalTee = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "local.tee",
  code: 0x22,
} as const;

export const GlobalGet = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "global.get",
  code: 0x23,
} as const;

export const GlobalSet = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "global.set",
  code: 0x24,
} as const;

export const I32Load = {
  tr: I32,
  tr2: None,
  params: [I32],
  m: 4,
  prefix: 0,
  name: "i32.load",
  code: 0x28,
} as const;

export const I64Load = {
  tr: I64,
  tr2: None,
  params: [I32],
  m: 8,
  prefix: 0,
  name: "i64.load",
  code: 0x29,
} as const;

export const F32Load = {
  tr: F32,
  tr2: None,
  params: [I32],
  m: 4,
  prefix: 0,
  name: "f32.load",
  code: 0x2a,
} as const;

export const F64Load = {
  tr: F64,
  tr2: None,
  params: [I32],
  m: 8,
  prefix: 0,
  name: "f64.load",
  code: 0x2b,
} as const;

export const I32Load8S = {
  tr: I32,
  tr2: None,
  params: [I32],
  m: 1,
  prefix: 0,
  name: "i32.load8_s",
  code: 0x2c,
} as const;

export const I32Load8U = {
  tr: I32,
  tr2: None,
  params: [I32],
  m: 1,
  prefix: 0,
  name: "i32.load8_u",
  code: 0x2d,
} as const;

export const I32Load16S = {
  tr: I32,
  tr2: None,
  params: [I32],
  m: 2,
  prefix: 0,
  name: "i32.load16_s",
  code: 0x2e,
} as const;

export const I32Load16U = {
  tr: I32,
  tr2: None,
  params: [I32],
  m: 2,
  prefix: 0,
  name: "i32.load16_u",
  code: 0x2f,
} as const;

export const I64Load8S = {
  tr: I64,
  tr2: None,
  params: [I32],
  m: 1,
  prefix: 0,
  name: "i64.load8_s",
  code: 0x30,
} as const;

export const I64Load8U = {
  tr: I64,
  tr2: None,
  params: [I32],
  m: 1,
  prefix: 0,
  name: "i64.load8_u",
  code: 0x31,
} as const;

export const I64Load16S = {
  tr: I64,
  tr2: None,
  params: [I32],
  m: 2,
  prefix: 0,
  name: "i64.load16_s",
  code: 0x32,
} as const;

export const I64Load16U = {
  tr: I64,
  tr2: None,
  params: [I32],
  m: 2,
  prefix: 0,
  name: "i64.load16_u",
  code: 0x33,
} as const;

export const I64Load32S = {
  tr: I64,
  tr2: None,
  params: [I32],
  m: 4,
  prefix: 0,
  name: "i64.load32_s",
  code: 0x34,
} as const;

export const I64Load32U = {
  tr: I64,
  tr2: None,
  params: [I32],
  m: 4,
  prefix: 0,
  name: "i64.load32_u",
  code: 0x35,
} as const;

export const I32Store = {
  tr: None,
  tr2: None,
  params: [I32, I32],
  m: 4,
  prefix: 0,
  name: "i32.store",
  code: 0x36,
} as const;

export const I64Store = {
  tr: None,
  tr2: None,
  params: [I32, I64],
  m: 8,
  prefix: 0,
  name: "i64.store",
  code: 0x37,
} as const;

export const F32Store = {
  tr: None,
  tr2: None,
  params: [I32, F32],
  m: 4,
  prefix: 0,
  name: "f32.store",
  code: 0x38,
} as const;

export const F64Store = {
  tr: None,
  tr2: None,
  params: [I32, F64],
  m: 8,
  prefix: 0,
  name: "f64.store",
  code: 0x39,
} as const;

export const I32Store8 = {
  tr: None,
  tr2: None,
  params: [I32, I32],
  m: 1,
  prefix: 0,
  name: "i32.store8",
  code: 0x3a,
} as const;

export const I32Store16 = {
  tr: None,
  tr2: None,
  params: [I32, I32],
  m: 2,
  prefix: 0,
  name: "i32.store16",
  code: 0x3b,
} as const;

export const I64Store8 = {
  tr: None,
  tr2: None,
  params: [I32, I64],
  m: 1,
  prefix: 0,
  name: "i64.store8",
  code: 0x3c,
} as const;

export const I64Store16 = {
  tr: None,
  tr2: None,
  params: [I32, I64],
  m: 2,
  prefix: 0,
  name: "i64.store16",
  code: 0x3d,
} as const;

export const I64Store32 = {
  tr: None,
  tr2: None,
  params: [I32, I64],
  m: 4,
  prefix: 0,
  name: "i64.store32",
  code: 0x3e,
} as const;

export const MemorySize = {
  tr: I32,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "memory.size",
  code: 0x3f,
} as const;

export const MemoryGrow = {
  tr: I32,
  tr2: None,
  params: [I32],
  m: 0,
  prefix: 0,
  name: "memory.grow",
  code: 0x40,
} as const;

export const I32Const = {
  tr: I32,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "i32.const",
  code: 0x41,
} as const;

export const I64Const = {
  tr: I64,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "i64.const",
  code: 0x42,
} as const;

export const F32Const = {
  tr: F32,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "f32.const",
  code: 0x43,
} as const;

export const F64Const = {
  tr: F64,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "f64.const",
  code: 0x44,
} as const;

export const I32Eqz = {
  tr: I32,
  tr2: None,
  params: [I32],
  m: 0,
  prefix: 0,
  name: "i32.eqz",
  code: 0x45,
} as const;

export const I32Eq = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 0,
  prefix: 0,
  name: "i32.eq",
  code: 0x46,
} as const;

export const I32Ne = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 0,
  prefix: 0,
  name: "i32.ne",
  code: 0x47,
} as const;

export const I32LtS = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 0,
  prefix: 0,
  name: "i32.lt_s",
  code: 0x48,
} as const;

export const I32LtU = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 0,
  prefix: 0,
  name: "i32.lt_u",
  code: 0x49,
} as const;

export const I32GtS = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 0,
  prefix: 0,
  name: "i32.gt_s",
  code: 0x4a,
} as const;

export const I32GtU = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 0,
  prefix: 0,
  name: "i32.gt_u",
  code: 0x4b,
} as const;

export const I32LeS = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 0,
  prefix: 0,
  name: "i32.le_s",
  code: 0x4c,
} as const;

export const I32LeU = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 0,
  prefix: 0,
  name: "i32.le_u",
  code: 0x4d,
} as const;

export const I32GeS = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 0,
  prefix: 0,
  name: "i32.ge_s",
  code: 0x4e,
} as const;

export const I32GeU = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 0,
  prefix: 0,
  name: "i32.ge_u",
  code: 0x4f,
} as const;

export const I64Eqz = {
  tr: I32,
  tr2: None,
  params: [I64],
  m: 0,
  prefix: 0,
  name: "i64.eqz",
  code: 0x50,
} as const;

export const I64Eq = {
  tr: I32,
  tr2: None,
  params: [I64, I64],
  m: 0,
  prefix: 0,
  name: "i64.eq",
  code: 0x51,
} as const;

export const I64Ne = {
  tr: I32,
  tr2: None,
  params: [I64, I64],
  m: 0,
  prefix: 0,
  name: "i64.ne",
  code: 0x52,
} as const;

export const I64LtS = {
  tr: I32,
  tr2: None,
  params: [I64, I64],
  m: 0,
  prefix: 0,
  name: "i64.lt_s",
  code: 0x53,
} as const;

export const I64LtU = {
  tr: I32,
  tr2: None,
  params: [I64, I64],
  m: 0,
  prefix: 0,
  name: "i64.lt_u",
  code: 0x54,
} as const;

export const I64GtS = {
  tr: I32,
  tr2: None,
  params: [I64, I64],
  m: 0,
  prefix: 0,
  name: "i64.gt_s",
  code: 0x55,
} as const;

export const I64GtU = {
  tr: I32,
  tr2: None,
  params: [I64, I64],
  m: 0,
  prefix: 0,
  name: "i64.gt_u",
  code: 0x56,
} as const;

export const I64LeS = {
  tr: I32,
  tr2: None,
  params: [I64, I64],
  m: 0,
  prefix: 0,
  name: "i64.le_s",
  code: 0x57,
} as const;

export const I64LeU = {
  tr: I32,
  tr2: None,
  params: [I64, I64],
  m: 0,
  prefix: 0,
  name: "i64.le_u",
  code: 0x58,
} as const;

export const I64GeS = {
  tr: I32,
  tr2: None,
  params: [I64, I64],
  m: 0,
  prefix: 0,
  name: "i64.ge_s",
  code: 0x59,
} as const;

export const I64GeU = {
  tr: I32,
  tr2: None,
  params: [I64, I64],
  m: 0,
  prefix: 0,
  name: "i64.ge_u",
  code: 0x5a,
} as const;

export const F32Eq = {
  tr: I32,
  tr2: None,
  params: [F32, F32],
  m: 0,
  prefix: 0,
  name: "f32.eq",
  code: 0x5b,
} as const;

export const F32Ne = {
  tr: I32,
  tr2: None,
  params: [F32, F32],
  m: 0,
  prefix: 0,
  name: "f32.ne",
  code: 0x5c,
} as const;

export const F32Lt = {
  tr: I32,
  tr2: None,
  params: [F32, F32],
  m: 0,
  prefix: 0,
  name: "f32.lt",
  code: 0x5d,
} as const;

export const F32Gt = {
  tr: I32,
  tr2: None,
  params: [F32, F32],
  m: 0,
  prefix: 0,
  name: "f32.gt",
  code: 0x5e,
} as const;

export const F32Le = {
  tr: I32,
  tr2: None,
  params: [F32, F32],
  m: 0,
  prefix: 0,
  name: "f32.le",
  code: 0x5f,
} as const;

export const F32Ge = {
  tr: I32,
  tr2: None,
  params: [F32, F32],
  m: 0,
  prefix: 0,
  name: "f32.ge",
  code: 0x60,
} as const;

export const F64Eq = {
  tr: I32,
  tr2: None,
  params: [F64, F64],
  m: 0,
  prefix: 0,
  name: "f64.eq",
  code: 0x61,
} as const;

export const F64Ne = {
  tr: I32,
  tr2: None,
  params: [F64, F64],
  m: 0,
  prefix: 0,
  name: "f64.ne",
  code: 0x62,
} as const;

export const F64Lt = {
  tr: I32,
  tr2: None,
  params: [F64, F64],
  m: 0,
  prefix: 0,
  name: "f64.lt",
  code: 0x63,
} as const;

export const F64Gt = {
  tr: I32,
  tr2: None,
  params: [F64, F64],
  m: 0,
  prefix: 0,
  name: "f64.gt",
  code: 0x64,
} as const;

export const F64Le = {
  tr: I32,
  tr2: None,
  params: [F64, F64],
  m: 0,
  prefix: 0,
  name: "f64.le",
  code: 0x65,
} as const;

export const F64Ge = {
  tr: I32,
  tr2: None,
  params: [F64, F64],
  m: 0,
  prefix: 0,
  name: "f64.ge",
  code: 0x66,
} as const;

export const I32Clz = {
  tr: I32,
  tr2: None,
  params: [I32],
  m: 0,
  prefix: 0,
  name: "i32.clz",
  code: 0x67,
} as const;

export const I32Ctz = {
  tr: I32,
  tr2: None,
  params: [I32],
  m: 0,
  prefix: 0,
  name: "i32.ctz",
  code: 0x68,
} as const;

export const I32Popcnt = {
  tr: I32,
  tr2: None,
  params: [I32],
  m: 0,
  prefix: 0,
  name: "i32.popcnt",
  code: 0x69,
} as const;

export const I32Add = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 0,
  prefix: 0,
  name: "i32.add",
  code: 0x6a,
} as const;

export const I32Sub = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 0,
  prefix: 0,
  name: "i32.sub",
  code: 0x6b,
} as const;

export const I32Mul = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 0,
  prefix: 0,
  name: "i32.mul",
  code: 0x6c,
} as const;

export const I32DivS = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 0,
  prefix: 0,
  name: "i32.div_s",
  code: 0x6d,
} as const;

export const I32DivU = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 0,
  prefix: 0,
  name: "i32.div_u",
  code: 0x6e,
} as const;

export const I32RemS = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 0,
  prefix: 0,
  name: "i32.rem_s",
  code: 0x6f,
} as const;

export const I32RemU = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 0,
  prefix: 0,
  name: "i32.rem_u",
  code: 0x70,
} as const;

export const I32And = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 0,
  prefix: 0,
  name: "i32.and",
  code: 0x71,
} as const;

export const I32Or = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 0,
  prefix: 0,
  name: "i32.or",
  code: 0x72,
} as const;

export const I32Xor = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 0,
  prefix: 0,
  name: "i32.xor",
  code: 0x73,
} as const;

export const I32Shl = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 0,
  prefix: 0,
  name: "i32.shl",
  code: 0x74,
} as const;

export const I32ShrS = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 0,
  prefix: 0,
  name: "i32.shr_s",
  code: 0x75,
} as const;

export const I32ShrU = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 0,
  prefix: 0,
  name: "i32.shr_u",
  code: 0x76,
} as const;

export const I32Rotl = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 0,
  prefix: 0,
  name: "i32.rotl",
  code: 0x77,
} as const;

export const I32Rotr = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 0,
  prefix: 0,
  name: "i32.rotr",
  code: 0x78,
} as const;

export const I64Clz = {
  tr: I64,
  tr2: None,
  params: [I64],
  m: 0,
  prefix: 0,
  name: "i64.clz",
  code: 0x79,
} as const;

export const I64Ctz = {
  tr: I64,
  tr2: None,
  params: [I64],
  m: 0,
  prefix: 0,
  name: "i64.ctz",
  code: 0x7a,
} as const;

export const I64Popcnt = {
  tr: I64,
  tr2: None,
  params: [I64],
  m: 0,
  prefix: 0,
  name: "i64.popcnt",
  code: 0x7b,
} as const;

export const I64Add = {
  tr: I64,
  tr2: None,
  params: [I64, I64],
  m: 0,
  prefix: 0,
  name: "i64.add",
  code: 0x7c,
} as const;

export const I64Sub = {
  tr: I64,
  tr2: None,
  params: [I64, I64],
  m: 0,
  prefix: 0,
  name: "i64.sub",
  code: 0x7d,
} as const;

export const I64Mul = {
  tr: I64,
  tr2: None,
  params: [I64, I64],
  m: 0,
  prefix: 0,
  name: "i64.mul",
  code: 0x7e,
} as const;

export const I64DivS = {
  tr: I64,
  tr2: None,
  params: [I64, I64],
  m: 0,
  prefix: 0,
  name: "i64.div_s",
  code: 0x7f,
} as const;

export const I64DivU = {
  tr: I64,
  tr2: None,
  params: [I64, I64],
  m: 0,
  prefix: 0,
  name: "i64.div_u",
  code: 0x80,
} as const;

export const I64RemS = {
  tr: I64,
  tr2: None,
  params: [I64, I64],
  m: 0,
  prefix: 0,
  name: "i64.rem_s",
  code: 0x81,
} as const;

export const I64RemU = {
  tr: I64,
  tr2: None,
  params: [I64, I64],
  m: 0,
  prefix: 0,
  name: "i64.rem_u",
  code: 0x82,
} as const;

export const I64And = {
  tr: I64,
  tr2: None,
  params: [I64, I64],
  m: 0,
  prefix: 0,
  name: "i64.and",
  code: 0x83,
} as const;

export const I64Or = {
  tr: I64,
  tr2: None,
  params: [I64, I64],
  m: 0,
  prefix: 0,
  name: "i64.or",
  code: 0x84,
} as const;

export const I64Xor = {
  tr: I64,
  tr2: None,
  params: [I64, I64],
  m: 0,
  prefix: 0,
  name: "i64.xor",
  code: 0x85,
} as const;

export const I64Shl = {
  tr: I64,
  tr2: None,
  params: [I64, I64],
  m: 0,
  prefix: 0,
  name: "i64.shl",
  code: 0x86,
} as const;

export const I64ShrS = {
  tr: I64,
  tr2: None,
  params: [I64, I64],
  m: 0,
  prefix: 0,
  name: "i64.shr_s",
  code: 0x87,
} as const;

export const I64ShrU = {
  tr: I64,
  tr2: None,
  params: [I64, I64],
  m: 0,
  prefix: 0,
  name: "i64.shr_u",
  code: 0x88,
} as const;

export const I64Rotl = {
  tr: I64,
  tr2: None,
  params: [I64, I64],
  m: 0,
  prefix: 0,
  name: "i64.rotl",
  code: 0x89,
} as const;

export const I64Rotr = {
  tr: I64,
  tr2: None,
  params: [I64, I64],
  m: 0,
  prefix: 0,
  name: "i64.rotr",
  code: 0x8a,
} as const;

export const F32Abs = {
  tr: F32,
  tr2: None,
  params: [F32],
  m: 0,
  prefix: 0,
  name: "f32.abs",
  code: 0x8b,
} as const;

export const F32Neg = {
  tr: F32,
  tr2: None,
  params: [F32],
  m: 0,
  prefix: 0,
  name: "f32.neg",
  code: 0x8c,
} as const;

export const F32Ceil = {
  tr: F32,
  tr2: None,
  params: [F32],
  m: 0,
  prefix: 0,
  name: "f32.ceil",
  code: 0x8d,
} as const;

export const F32Floor = {
  tr: F32,
  tr2: None,
  params: [F32],
  m: 0,
  prefix: 0,
  name: "f32.floor",
  code: 0x8e,
} as const;

export const F32Trunc = {
  tr: F32,
  tr2: None,
  params: [F32],
  m: 0,
  prefix: 0,
  name: "f32.trunc",
  code: 0x8f,
} as const;

export const F32Nearest = {
  tr: F32,
  tr2: None,
  params: [F32],
  m: 0,
  prefix: 0,
  name: "f32.nearest",
  code: 0x90,
} as const;

export const F32Sqrt = {
  tr: F32,
  tr2: None,
  params: [F32],
  m: 0,
  prefix: 0,
  name: "f32.sqrt",
  code: 0x91,
} as const;

export const F32Add = {
  tr: F32,
  tr2: None,
  params: [F32, F32],
  m: 0,
  prefix: 0,
  name: "f32.add",
  code: 0x92,
} as const;

export const F32Sub = {
  tr: F32,
  tr2: None,
  params: [F32, F32],
  m: 0,
  prefix: 0,
  name: "f32.sub",
  code: 0x93,
} as const;

export const F32Mul = {
  tr: F32,
  tr2: None,
  params: [F32, F32],
  m: 0,
  prefix: 0,
  name: "f32.mul",
  code: 0x94,
} as const;

export const F32Div = {
  tr: F32,
  tr2: None,
  params: [F32, F32],
  m: 0,
  prefix: 0,
  name: "f32.div",
  code: 0x95,
} as const;

export const F32Min = {
  tr: F32,
  tr2: None,
  params: [F32, F32],
  m: 0,
  prefix: 0,
  name: "f32.min",
  code: 0x96,
} as const;

export const F32Max = {
  tr: F32,
  tr2: None,
  params: [F32, F32],
  m: 0,
  prefix: 0,
  name: "f32.max",
  code: 0x97,
} as const;

export const F32Copysign = {
  tr: F32,
  tr2: None,
  params: [F32, F32],
  m: 0,
  prefix: 0,
  name: "f32.copysign",
  code: 0x98,
} as const;

export const F64Abs = {
  tr: F64,
  tr2: None,
  params: [F64],
  m: 0,
  prefix: 0,
  name: "f64.abs",
  code: 0x99,
} as const;

export const F64Neg = {
  tr: F64,
  tr2: None,
  params: [F64],
  m: 0,
  prefix: 0,
  name: "f64.neg",
  code: 0x9a,
} as const;

export const F64Ceil = {
  tr: F64,
  tr2: None,
  params: [F64],
  m: 0,
  prefix: 0,
  name: "f64.ceil",
  code: 0x9b,
} as const;

export const F64Floor = {
  tr: F64,
  tr2: None,
  params: [F64],
  m: 0,
  prefix: 0,
  name: "f64.floor",
  code: 0x9c,
} as const;

export const F64Trunc = {
  tr: F64,
  tr2: None,
  params: [F64],
  m: 0,
  prefix: 0,
  name: "f64.trunc",
  code: 0x9d,
} as const;

export const F64Nearest = {
  tr: F64,
  tr2: None,
  params: [F64],
  m: 0,
  prefix: 0,
  name: "f64.nearest",
  code: 0x9e,
} as const;

export const F64Sqrt = {
  tr: F64,
  tr2: None,
  params: [F64],
  m: 0,
  prefix: 0,
  name: "f64.sqrt",
  code: 0x9f,
} as const;

export const F64Add = {
  tr: F64,
  tr2: None,
  params: [F64, F64],
  m: 0,
  prefix: 0,
  name: "f64.add",
  code: 0xa0,
} as const;

export const F64Sub = {
  tr: F64,
  tr2: None,
  params: [F64, F64],
  m: 0,
  prefix: 0,
  name: "f64.sub",
  code: 0xa1,
} as const;

export const F64Mul = {
  tr: F64,
  tr2: None,
  params: [F64, F64],
  m: 0,
  prefix: 0,
  name: "f64.mul",
  code: 0xa2,
} as const;

export const F64Div = {
  tr: F64,
  tr2: None,
  params: [F64, F64],
  m: 0,
  prefix: 0,
  name: "f64.div",
  code: 0xa3,
} as const;

export const F64Min = {
  tr: F64,
  tr2: None,
  params: [F64, F64],
  m: 0,
  prefix: 0,
  name: "f64.min",
  code: 0xa4,
} as const;

export const F64Max = {
  tr: F64,
  tr2: None,
  params: [F64, F64],
  m: 0,
  prefix: 0,
  name: "f64.max",
  code: 0xa5,
} as const;

export const F64Copysign = {
  tr: F64,
  tr2: None,
  params: [F64, F64],
  m: 0,
  prefix: 0,
  name: "f64.copysign",
  code: 0xa6,
} as const;

export const I32WrapI64 = {
  tr: I32,
  tr2: None,
  params: [I64],
  m: 0,
  prefix: 0,
  name: "i32.wrap_i64",
  code: 0xa7,
} as const;

export const I32TruncF32S = {
  tr: I32,
  tr2: None,
  params: [F32],
  m: 0,
  prefix: 0,
  name: "i32.trunc_f32_s",
  code: 0xa8,
} as const;

export const I32TruncF32U = {
  tr: I32,
  tr2: None,
  params: [F32],
  m: 0,
  prefix: 0,
  name: "i32.trunc_f32_u",
  code: 0xa9,
} as const;

export const I32TruncF64S = {
  tr: I32,
  tr2: None,
  params: [F64],
  m: 0,
  prefix: 0,
  name: "i32.trunc_f64_s",
  code: 0xaa,
} as const;

export const I32TruncF64U = {
  tr: I32,
  tr2: None,
  params: [F64],
  m: 0,
  prefix: 0,
  name: "i32.trunc_f64_u",
  code: 0xab,
} as const;

export const I64ExtendI32S = {
  tr: I64,
  tr2: None,
  params: [I32],
  m: 0,
  prefix: 0,
  name: "i64.extend_i32_s",
  code: 0xac,
} as const;

export const I64ExtendI32U = {
  tr: I64,
  tr2: None,
  params: [I32],
  m: 0,
  prefix: 0,
  name: "i64.extend_i32_u",
  code: 0xad,
} as const;

export const I64TruncF32S = {
  tr: I64,
  tr2: None,
  params: [F32],
  m: 0,
  prefix: 0,
  name: "i64.trunc_f32_s",
  code: 0xae,
} as const;

export const I64TruncF32U = {
  tr: I64,
  tr2: None,
  params: [F32],
  m: 0,
  prefix: 0,
  name: "i64.trunc_f32_u",
  code: 0xaf,
} as const;

export const I64TruncF64S = {
  tr: I64,
  tr2: None,
  params: [F64],
  m: 0,
  prefix: 0,
  name: "i64.trunc_f64_s",
  code: 0xb0,
} as const;

export const I64TruncF64U = {
  tr: I64,
  tr2: None,
  params: [F64],
  m: 0,
  prefix: 0,
  name: "i64.trunc_f64_u",
  code: 0xb1,
} as const;

export const F32ConvertI32S = {
  tr: F32,
  tr2: None,
  params: [I32],
  m: 0,
  prefix: 0,
  name: "f32.convert_i32_s",
  code: 0xb2,
} as const;

export const F32ConvertI32U = {
  tr: F32,
  tr2: None,
  params: [I32],
  m: 0,
  prefix: 0,
  name: "f32.convert_i32_u",
  code: 0xb3,
} as const;

export const F32ConvertI64S = {
  tr: F32,
  tr2: None,
  params: [I64],
  m: 0,
  prefix: 0,
  name: "f32.convert_i64_s",
  code: 0xb4,
} as const;

export const F32ConvertI64U = {
  tr: F32,
  tr2: None,
  params: [I64],
  m: 0,
  prefix: 0,
  name: "f32.convert_i64_u",
  code: 0xb5,
} as const;

export const F32DemoteF64 = {
  tr: F32,
  tr2: None,
  params: [F64],
  m: 0,
  prefix: 0,
  name: "f32.demote_f64",
  code: 0xb6,
} as const;

export const F64ConvertI32S = {
  tr: F64,
  tr2: None,
  params: [I32],
  m: 0,
  prefix: 0,
  name: "f64.convert_i32_s",
  code: 0xb7,
} as const;

export const F64ConvertI32U = {
  tr: F64,
  tr2: None,
  params: [I32],
  m: 0,
  prefix: 0,
  name: "f64.convert_i32_u",
  code: 0xb8,
} as const;

export const F64ConvertI64S = {
  tr: F64,
  tr2: None,
  params: [I64],
  m: 0,
  prefix: 0,
  name: "f64.convert_i64_s",
  code: 0xb9,
} as const;

export const F64ConvertI64U = {
  tr: F64,
  tr2: None,
  params: [I64],
  m: 0,
  prefix: 0,
  name: "f64.convert_i64_u",
  code: 0xba,
} as const;

export const F64PromoteF32 = {
  tr: F64,
  tr2: None,
  params: [F32],
  m: 0,
  prefix: 0,
  name: "f64.promote_f32",
  code: 0xbb,
} as const;

export const I32ReinterpretF32 = {
  tr: I32,
  tr2: None,
  params: [F32],
  m: 0,
  prefix: 0,
  name: "i32.reinterpret_f32",
  code: 0xbc,
} as const;

export const I64ReinterpretF64 = {
  tr: I64,
  tr2: None,
  params: [F64],
  m: 0,
  prefix: 0,
  name: "i64.reinterpret_f64",
  code: 0xbd,
} as const;

export const F32ReinterpretI32 = {
  tr: F32,
  tr2: None,
  params: [I32],
  m: 0,
  prefix: 0,
  name: "f32.reinterpret_i32",
  code: 0xbe,
} as const;

export const F64ReinterpretI64 = {
  tr: F64,
  tr2: None,
  params: [I64],
  m: 0,
  prefix: 0,
  name: "f64.reinterpret_i64",
  code: 0xbf,
} as const;

export const I32Extend8S = {
  tr: I32,
  tr2: None,
  params: [I32],
  m: 0,
  prefix: 0,
  name: "i32.extend8_s",
  code: 0xc0,
} as const;

export const I32Extend16S = {
  tr: I32,
  tr2: None,
  params: [I32],
  m: 0,
  prefix: 0,
  name: "i32.extend16_s",
  code: 0xc1,
} as const;

export const I64Extend8S = {
  tr: I64,
  tr2: None,
  params: [I64],
  m: 0,
  prefix: 0,
  name: "i64.extend8_s",
  code: 0xc2,
} as const;

export const I64Extend16S = {
  tr: I64,
  tr2: None,
  params: [I64],
  m: 0,
  prefix: 0,
  name: "i64.extend16_s",
  code: 0xc3,
} as const;

export const I64Extend32S = {
  tr: I64,
  tr2: None,
  params: [I64],
  m: 0,
  prefix: 0,
  name: "i64.extend32_s",
  code: 0xc4,
} as const;

export const InterpAlloca = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "alloca",
  code: 0xe0,
} as const;

export const InterpBrUnless = {
  tr: None,
  tr2: None,
  params: [I32],
  m: 0,
  prefix: 0,
  name: "br_unless",
  code: 0xe1,
} as const;

export const InterpCallImport = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "call_import",
  code: 0xe2,
} as const;

export const InterpData = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "data",
  code: 0xe3,
} as const;

export const InterpDropKeep = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "drop_keep",
  code: 0xe4,
} as const;

export const InterpCatchDrop = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "catch_drop",
  code: 0xe5,
} as const;

export const InterpAdjustFrameForReturnCall = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "adjust_frame_for_return_call",
  code: 0xe6,
} as const;

export const InterpGlobalGetRef = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "global.get.ref",
  code: 0xe7,
} as const;

export const InterpLocalGetRef = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "local.get.ref",
  code: 0xe9,
} as const;

export const InterpMarkRef = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "mark_ref",
  code: 0xea,
} as const;

export const I32TruncSatF32S = {
  tr: I32,
  tr2: None,
  params: [F32],
  m: 0,
  prefix: 0xfc,
  name: "i32.trunc_sat_f32_s",
  code: 0x00,
} as const;

export const I32TruncSatF32U = {
  tr: I32,
  tr2: None,
  params: [F32],
  m: 0,
  prefix: 0xfc,
  name: "i32.trunc_sat_f32_u",
  code: 0x01,
} as const;

export const I32TruncSatF64S = {
  tr: I32,
  tr2: None,
  params: [F64],
  m: 0,
  prefix: 0xfc,
  name: "i32.trunc_sat_f64_s",
  code: 0x02,
} as const;

export const I32TruncSatF64U = {
  tr: I32,
  tr2: None,
  params: [F64],
  m: 0,
  prefix: 0xfc,
  name: "i32.trunc_sat_f64_u",
  code: 0x03,
} as const;

export const I64TruncSatF32S = {
  tr: I64,
  tr2: None,
  params: [F32],
  m: 0,
  prefix: 0xfc,
  name: "i64.trunc_sat_f32_s",
  code: 0x04,
} as const;

export const I64TruncSatF32U = {
  tr: I64,
  tr2: None,
  params: [F32],
  m: 0,
  prefix: 0xfc,
  name: "i64.trunc_sat_f32_u",
  code: 0x05,
} as const;

export const I64TruncSatF64S = {
  tr: I64,
  tr2: None,
  params: [F64],
  m: 0,
  prefix: 0xfc,
  name: "i64.trunc_sat_f64_s",
  code: 0x06,
} as const;

export const I64TruncSatF64U = {
  tr: I64,
  tr2: None,
  params: [F64],
  m: 0,
  prefix: 0xfc,
  name: "i64.trunc_sat_f64_u",
  code: 0x07,
} as const;

export const I64Add128 = {
  tr: I64,
  tr2: I64,
  params: [I64, I64, I64],
  m: 0,
  prefix: 0xfc,
  name: "i64.add128",
  code: 0x13,
} as const;

export const I64Sub128 = {
  tr: I64,
  tr2: I64,
  params: [I64, I64, I64],
  m: 0,
  prefix: 0xfc,
  name: "i64.sub128",
  code: 0x14,
} as const;

export const I64MulWideS = {
  tr: I64,
  tr2: I64,
  params: [I64, I64],
  m: 0,
  prefix: 0xfc,
  name: "i64.mul_wide_s",
  code: 0x15,
} as const;

export const I64MulWideU = {
  tr: I64,
  tr2: I64,
  params: [I64, I64],
  m: 0,
  prefix: 0xfc,
  name: "i64.mul_wide_u",
  code: 0x16,
} as const;

export const MemoryInit = {
  tr: None,
  tr2: None,
  params: [I32, I32, I32],
  m: 0,
  prefix: 0xfc,
  name: "memory.init",
  code: 0x08,
} as const;

export const DataDrop = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0xfc,
  name: "data.drop",
  code: 0x09,
} as const;

export const MemoryCopy = {
  tr: None,
  tr2: None,
  params: [I32, I32, I32],
  m: 0,
  prefix: 0xfc,
  name: "memory.copy",
  code: 0x0a,
} as const;

export const MemoryFill = {
  tr: None,
  tr2: None,
  params: [I32, I32, I32],
  m: 0,
  prefix: 0xfc,
  name: "memory.fill",
  code: 0x0b,
} as const;

export const TableInit = {
  tr: None,
  tr2: None,
  params: [I32, I32, I32],
  m: 0,
  prefix: 0xfc,
  name: "table.init",
  code: 0x0c,
} as const;

export const ElemDrop = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0xfc,
  name: "elem.drop",
  code: 0x0d,
} as const;

export const TableCopy = {
  tr: None,
  tr2: None,
  params: [I32, I32, I32],
  m: 0,
  prefix: 0xfc,
  name: "table.copy",
  code: 0x0e,
} as const;

export const TableGet = {
  tr: None,
  tr2: None,
  params: [I32],
  m: 0,
  prefix: 0,
  name: "table.get",
  code: 0x25,
} as const;

export const TableSet = {
  tr: None,
  tr2: None,
  params: [I32, Any],
  m: 0,
  prefix: 0,
  name: "table.set",
  code: 0x26,
} as const;

export const TableGrow = {
  tr: None,
  tr2: None,
  params: [I32],
  m: 0,
  prefix: 0xfc,
  name: "table.grow",
  code: 0x0f,
} as const;

export const TableSize = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0xfc,
  name: "table.size",
  code: 0x10,
} as const;

export const TableFill = {
  tr: None,
  tr2: None,
  params: [I32, I32],
  m: 0,
  prefix: 0xfc,
  name: "table.fill",
  code: 0x11,
} as const;

export const RefNull = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "ref.null",
  code: 0xd0,
} as const;

export const RefIsNull = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "ref.is_null",
  code: 0xd1,
} as const;

export const RefFunc = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "ref.func",
  code: 0xd2,
} as const;

export const RefAsNonNull = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "ref.as_non_null",
  code: 0xd4,
} as const;

export const BrOnNull = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "br_on_null",
  code: 0xd5,
} as const;

export const BrOnNonNull = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0,
  name: "br_on_non_null",
  code: 0xd6,
} as const;

export const V128Load = {
  tr: V128,
  tr2: None,
  params: [I32],
  m: 16,
  prefix: 0xfd,
  name: "v128.load",
  code: 0x00,
} as const;

export const V128Load8X8S = {
  tr: V128,
  tr2: None,
  params: [I32],
  m: 8,
  prefix: 0xfd,
  name: "v128.load8x8_s",
  code: 0x01,
} as const;

export const V128Load8X8U = {
  tr: V128,
  tr2: None,
  params: [I32],
  m: 8,
  prefix: 0xfd,
  name: "v128.load8x8_u",
  code: 0x02,
} as const;

export const V128Load16X4S = {
  tr: V128,
  tr2: None,
  params: [I32],
  m: 8,
  prefix: 0xfd,
  name: "v128.load16x4_s",
  code: 0x03,
} as const;

export const V128Load16X4U = {
  tr: V128,
  tr2: None,
  params: [I32],
  m: 8,
  prefix: 0xfd,
  name: "v128.load16x4_u",
  code: 0x04,
} as const;

export const V128Load32X2S = {
  tr: V128,
  tr2: None,
  params: [I32],
  m: 8,
  prefix: 0xfd,
  name: "v128.load32x2_s",
  code: 0x05,
} as const;

export const V128Load32X2U = {
  tr: V128,
  tr2: None,
  params: [I32],
  m: 8,
  prefix: 0xfd,
  name: "v128.load32x2_u",
  code: 0x06,
} as const;

export const V128Load8Splat = {
  tr: V128,
  tr2: None,
  params: [I32],
  m: 1,
  prefix: 0xfd,
  name: "v128.load8_splat",
  code: 0x07,
} as const;

export const V128Load16Splat = {
  tr: V128,
  tr2: None,
  params: [I32],
  m: 2,
  prefix: 0xfd,
  name: "v128.load16_splat",
  code: 0x08,
} as const;

export const V128Load32Splat = {
  tr: V128,
  tr2: None,
  params: [I32],
  m: 4,
  prefix: 0xfd,
  name: "v128.load32_splat",
  code: 0x09,
} as const;

export const V128Load64Splat = {
  tr: V128,
  tr2: None,
  params: [I32],
  m: 8,
  prefix: 0xfd,
  name: "v128.load64_splat",
  code: 0x0a,
} as const;

export const V128Store = {
  tr: None,
  tr2: None,
  params: [I32, V128],
  m: 16,
  prefix: 0xfd,
  name: "v128.store",
  code: 0x0b,
} as const;

export const V128Const = {
  tr: V128,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0xfd,
  name: "v128.const",
  code: 0x0c,
} as const;

export const I8X16Shuffle = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.shuffle",
  code: 0x0d,
} as const;

export const I8X16Swizzle = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.swizzle",
  code: 0x0e,
} as const;

export const I8X16Splat = {
  tr: V128,
  tr2: None,
  params: [I32],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.splat",
  code: 0x0f,
} as const;

export const I16X8Splat = {
  tr: V128,
  tr2: None,
  params: [I32],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.splat",
  code: 0x10,
} as const;

export const I32X4Splat = {
  tr: V128,
  tr2: None,
  params: [I32],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.splat",
  code: 0x11,
} as const;

export const I64X2Splat = {
  tr: V128,
  tr2: None,
  params: [I64],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.splat",
  code: 0x12,
} as const;

export const F32X4Splat = {
  tr: V128,
  tr2: None,
  params: [F32],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.splat",
  code: 0x13,
} as const;

export const F64X2Splat = {
  tr: V128,
  tr2: None,
  params: [F64],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.splat",
  code: 0x14,
} as const;

export const I8X16ExtractLaneS = {
  tr: I32,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.extract_lane_s",
  code: 0x15,
} as const;

export const I8X16ExtractLaneU = {
  tr: I32,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.extract_lane_u",
  code: 0x16,
} as const;

export const I8X16ReplaceLane = {
  tr: V128,
  tr2: None,
  params: [V128, I32],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.replace_lane",
  code: 0x17,
} as const;

export const I16X8ExtractLaneS = {
  tr: I32,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.extract_lane_s",
  code: 0x18,
} as const;

export const I16X8ExtractLaneU = {
  tr: I32,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.extract_lane_u",
  code: 0x19,
} as const;

export const I16X8ReplaceLane = {
  tr: V128,
  tr2: None,
  params: [V128, I32],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.replace_lane",
  code: 0x1a,
} as const;

export const I32X4ExtractLane = {
  tr: I32,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.extract_lane",
  code: 0x1b,
} as const;

export const I32X4ReplaceLane = {
  tr: V128,
  tr2: None,
  params: [V128, I32],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.replace_lane",
  code: 0x1c,
} as const;

export const I64X2ExtractLane = {
  tr: I64,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.extract_lane",
  code: 0x1d,
} as const;

export const I64X2ReplaceLane = {
  tr: V128,
  tr2: None,
  params: [V128, I64],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.replace_lane",
  code: 0x1e,
} as const;

export const F32X4ExtractLane = {
  tr: F32,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.extract_lane",
  code: 0x1f,
} as const;

export const F32X4ReplaceLane = {
  tr: V128,
  tr2: None,
  params: [V128, F32],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.replace_lane",
  code: 0x20,
} as const;

export const F64X2ExtractLane = {
  tr: F64,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.extract_lane",
  code: 0x21,
} as const;

export const F64X2ReplaceLane = {
  tr: V128,
  tr2: None,
  params: [V128, F64],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.replace_lane",
  code: 0x22,
} as const;

export const I8X16Eq = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.eq",
  code: 0x23,
} as const;

export const I8X16Ne = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.ne",
  code: 0x24,
} as const;

export const I8X16LtS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.lt_s",
  code: 0x25,
} as const;

export const I8X16LtU = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.lt_u",
  code: 0x26,
} as const;

export const I8X16GtS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.gt_s",
  code: 0x27,
} as const;

export const I8X16GtU = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.gt_u",
  code: 0x28,
} as const;

export const I8X16LeS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.le_s",
  code: 0x29,
} as const;

export const I8X16LeU = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.le_u",
  code: 0x2a,
} as const;

export const I8X16GeS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.ge_s",
  code: 0x2b,
} as const;

export const I8X16GeU = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.ge_u",
  code: 0x2c,
} as const;

export const I16X8Eq = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.eq",
  code: 0x2d,
} as const;

export const I16X8Ne = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.ne",
  code: 0x2e,
} as const;

export const I16X8LtS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.lt_s",
  code: 0x2f,
} as const;

export const I16X8LtU = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.lt_u",
  code: 0x30,
} as const;

export const I16X8GtS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.gt_s",
  code: 0x31,
} as const;

export const I16X8GtU = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.gt_u",
  code: 0x32,
} as const;

export const I16X8LeS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.le_s",
  code: 0x33,
} as const;

export const I16X8LeU = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.le_u",
  code: 0x34,
} as const;

export const I16X8GeS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.ge_s",
  code: 0x35,
} as const;

export const I16X8GeU = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.ge_u",
  code: 0x36,
} as const;

export const I32X4Eq = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.eq",
  code: 0x37,
} as const;

export const I32X4Ne = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.ne",
  code: 0x38,
} as const;

export const I32X4LtS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.lt_s",
  code: 0x39,
} as const;

export const I32X4LtU = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.lt_u",
  code: 0x3a,
} as const;

export const I32X4GtS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.gt_s",
  code: 0x3b,
} as const;

export const I32X4GtU = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.gt_u",
  code: 0x3c,
} as const;

export const I32X4LeS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.le_s",
  code: 0x3d,
} as const;

export const I32X4LeU = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.le_u",
  code: 0x3e,
} as const;

export const I32X4GeS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.ge_s",
  code: 0x3f,
} as const;

export const I32X4GeU = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.ge_u",
  code: 0x40,
} as const;

export const F32X4Eq = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.eq",
  code: 0x41,
} as const;

export const F32X4Ne = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.ne",
  code: 0x42,
} as const;

export const F32X4Lt = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.lt",
  code: 0x43,
} as const;

export const F32X4Gt = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.gt",
  code: 0x44,
} as const;

export const F32X4Le = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.le",
  code: 0x45,
} as const;

export const F32X4Ge = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.ge",
  code: 0x46,
} as const;

export const F64X2Eq = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.eq",
  code: 0x47,
} as const;

export const F64X2Ne = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.ne",
  code: 0x48,
} as const;

export const F64X2Lt = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.lt",
  code: 0x49,
} as const;

export const F64X2Gt = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.gt",
  code: 0x4a,
} as const;

export const F64X2Le = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.le",
  code: 0x4b,
} as const;

export const F64X2Ge = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.ge",
  code: 0x4c,
} as const;

export const V128Not = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "v128.not",
  code: 0x4d,
} as const;

export const V128And = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "v128.and",
  code: 0x4e,
} as const;

export const V128Andnot = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "v128.andnot",
  code: 0x4f,
} as const;

export const V128Or = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "v128.or",
  code: 0x50,
} as const;

export const V128Xor = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "v128.xor",
  code: 0x51,
} as const;

export const V128BitSelect = {
  tr: V128,
  tr2: None,
  params: [V128, V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "v128.bitselect",
  code: 0x52,
} as const;

export const V128AnyTrue = {
  tr: I32,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "v128.any_true",
  code: 0x53,
} as const;

export const V128Load8Lane = {
  tr: V128,
  tr2: None,
  params: [I32, V128],
  m: 1,
  prefix: 0xfd,
  name: "v128.load8_lane",
  code: 0x54,
} as const;

export const V128Load16Lane = {
  tr: V128,
  tr2: None,
  params: [I32, V128],
  m: 2,
  prefix: 0xfd,
  name: "v128.load16_lane",
  code: 0x55,
} as const;

export const V128Load32Lane = {
  tr: V128,
  tr2: None,
  params: [I32, V128],
  m: 4,
  prefix: 0xfd,
  name: "v128.load32_lane",
  code: 0x56,
} as const;

export const V128Load64Lane = {
  tr: V128,
  tr2: None,
  params: [I32, V128],
  m: 8,
  prefix: 0xfd,
  name: "v128.load64_lane",
  code: 0x57,
} as const;

export const V128Store8Lane = {
  tr: None,
  tr2: None,
  params: [I32, V128],
  m: 1,
  prefix: 0xfd,
  name: "v128.store8_lane",
  code: 0x58,
} as const;

export const V128Store16Lane = {
  tr: None,
  tr2: None,
  params: [I32, V128],
  m: 2,
  prefix: 0xfd,
  name: "v128.store16_lane",
  code: 0x59,
} as const;

export const V128Store32Lane = {
  tr: None,
  tr2: None,
  params: [I32, V128],
  m: 4,
  prefix: 0xfd,
  name: "v128.store32_lane",
  code: 0x5a,
} as const;

export const V128Store64Lane = {
  tr: None,
  tr2: None,
  params: [I32, V128],
  m: 8,
  prefix: 0xfd,
  name: "v128.store64_lane",
  code: 0x5b,
} as const;

export const V128Load32Zero = {
  tr: V128,
  tr2: None,
  params: [I32],
  m: 4,
  prefix: 0xfd,
  name: "v128.load32_zero",
  code: 0x5c,
} as const;

export const V128Load64Zero = {
  tr: V128,
  tr2: None,
  params: [I32],
  m: 8,
  prefix: 0xfd,
  name: "v128.load64_zero",
  code: 0x5d,
} as const;

export const F32X4DemoteF64X2Zero = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.demote_f64x2_zero",
  code: 0x5e,
} as const;

export const F64X2PromoteLowF32X4 = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.promote_low_f32x4",
  code: 0x5f,
} as const;

export const I8X16Abs = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.abs",
  code: 0x60,
} as const;

export const I8X16Neg = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.neg",
  code: 0x61,
} as const;

export const I8X16Popcnt = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.popcnt",
  code: 0x62,
} as const;

export const I8X16AllTrue = {
  tr: I32,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.all_true",
  code: 0x63,
} as const;

export const I8X16Bitmask = {
  tr: I32,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.bitmask",
  code: 0x64,
} as const;

export const I8X16NarrowI16X8S = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.narrow_i16x8_s",
  code: 0x65,
} as const;

export const I8X16NarrowI16X8U = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.narrow_i16x8_u",
  code: 0x66,
} as const;

export const I8X16Shl = {
  tr: V128,
  tr2: None,
  params: [V128, I32],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.shl",
  code: 0x6b,
} as const;

export const I8X16ShrS = {
  tr: V128,
  tr2: None,
  params: [V128, I32],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.shr_s",
  code: 0x6c,
} as const;

export const I8X16ShrU = {
  tr: V128,
  tr2: None,
  params: [V128, I32],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.shr_u",
  code: 0x6d,
} as const;

export const I8X16Add = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.add",
  code: 0x6e,
} as const;

export const I8X16AddSatS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.add_sat_s",
  code: 0x6f,
} as const;

export const I8X16AddSatU = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.add_sat_u",
  code: 0x70,
} as const;

export const I8X16Sub = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.sub",
  code: 0x71,
} as const;

export const I8X16SubSatS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.sub_sat_s",
  code: 0x72,
} as const;

export const I8X16SubSatU = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.sub_sat_u",
  code: 0x73,
} as const;

export const I8X16MinS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.min_s",
  code: 0x76,
} as const;

export const I8X16MinU = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.min_u",
  code: 0x77,
} as const;

export const I8X16MaxS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.max_s",
  code: 0x78,
} as const;

export const I8X16MaxU = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.max_u",
  code: 0x79,
} as const;

export const I8X16AvgrU = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.avgr_u",
  code: 0x7b,
} as const;

export const I16X8ExtaddPairwiseI8X16S = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.extadd_pairwise_i8x16_s",
  code: 0x7c,
} as const;

export const I16X8ExtaddPairwiseI8X16U = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.extadd_pairwise_i8x16_u",
  code: 0x7d,
} as const;

export const I32X4ExtaddPairwiseI16X8S = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.extadd_pairwise_i16x8_s",
  code: 0x7e,
} as const;

export const I32X4ExtaddPairwiseI16X8U = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.extadd_pairwise_i16x8_u",
  code: 0x7f,
} as const;

export const I16X8Abs = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.abs",
  code: 0x80,
} as const;

export const I16X8Neg = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.neg",
  code: 0x81,
} as const;

export const I16X8Q15mulrSatS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.q15mulr_sat_s",
  code: 0x82,
} as const;

export const I16X8AllTrue = {
  tr: I32,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.all_true",
  code: 0x83,
} as const;

export const I16X8Bitmask = {
  tr: I32,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.bitmask",
  code: 0x84,
} as const;

export const I16X8NarrowI32X4S = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.narrow_i32x4_s",
  code: 0x85,
} as const;

export const I16X8NarrowI32X4U = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.narrow_i32x4_u",
  code: 0x86,
} as const;

export const I16X8ExtendLowI8X16S = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.extend_low_i8x16_s",
  code: 0x87,
} as const;

export const I16X8ExtendHighI8X16S = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.extend_high_i8x16_s",
  code: 0x88,
} as const;

export const I16X8ExtendLowI8X16U = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.extend_low_i8x16_u",
  code: 0x89,
} as const;

export const I16X8ExtendHighI8X16U = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.extend_high_i8x16_u",
  code: 0x8a,
} as const;

export const I16X8Shl = {
  tr: V128,
  tr2: None,
  params: [V128, I32],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.shl",
  code: 0x8b,
} as const;

export const I16X8ShrS = {
  tr: V128,
  tr2: None,
  params: [V128, I32],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.shr_s",
  code: 0x8c,
} as const;

export const I16X8ShrU = {
  tr: V128,
  tr2: None,
  params: [V128, I32],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.shr_u",
  code: 0x8d,
} as const;

export const I16X8Add = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.add",
  code: 0x8e,
} as const;

export const I16X8AddSatS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.add_sat_s",
  code: 0x8f,
} as const;

export const I16X8AddSatU = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.add_sat_u",
  code: 0x90,
} as const;

export const I16X8Sub = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.sub",
  code: 0x91,
} as const;

export const I16X8SubSatS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.sub_sat_s",
  code: 0x92,
} as const;

export const I16X8SubSatU = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.sub_sat_u",
  code: 0x93,
} as const;

export const I16X8Mul = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.mul",
  code: 0x95,
} as const;

export const I16X8MinS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.min_s",
  code: 0x96,
} as const;

export const I16X8MinU = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.min_u",
  code: 0x97,
} as const;

export const I16X8MaxS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.max_s",
  code: 0x98,
} as const;

export const I16X8MaxU = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.max_u",
  code: 0x99,
} as const;

export const I16X8AvgrU = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.avgr_u",
  code: 0x9b,
} as const;

export const I16X8ExtmulLowI8X16S = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.extmul_low_i8x16_s",
  code: 0x9c,
} as const;

export const I16X8ExtmulHighI8X16S = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.extmul_high_i8x16_s",
  code: 0x9d,
} as const;

export const I16X8ExtmulLowI8X16U = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.extmul_low_i8x16_u",
  code: 0x9e,
} as const;

export const I16X8ExtmulHighI8X16U = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.extmul_high_i8x16_u",
  code: 0x9f,
} as const;

export const I32X4Abs = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.abs",
  code: 0xa0,
} as const;

export const I32X4Neg = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.neg",
  code: 0xa1,
} as const;

export const I32X4AllTrue = {
  tr: I32,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.all_true",
  code: 0xa3,
} as const;

export const I32X4Bitmask = {
  tr: I32,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.bitmask",
  code: 0xa4,
} as const;

export const I32X4ExtendLowI16X8S = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.extend_low_i16x8_s",
  code: 0xa7,
} as const;

export const I32X4ExtendHighI16X8S = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.extend_high_i16x8_s",
  code: 0xa8,
} as const;

export const I32X4ExtendLowI16X8U = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.extend_low_i16x8_u",
  code: 0xa9,
} as const;

export const I32X4ExtendHighI16X8U = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.extend_high_i16x8_u",
  code: 0xaa,
} as const;

export const I32X4Shl = {
  tr: V128,
  tr2: None,
  params: [V128, I32],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.shl",
  code: 0xab,
} as const;

export const I32X4ShrS = {
  tr: V128,
  tr2: None,
  params: [V128, I32],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.shr_s",
  code: 0xac,
} as const;

export const I32X4ShrU = {
  tr: V128,
  tr2: None,
  params: [V128, I32],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.shr_u",
  code: 0xad,
} as const;

export const I32X4Add = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.add",
  code: 0xae,
} as const;

export const I32X4Sub = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.sub",
  code: 0xb1,
} as const;

export const I32X4Mul = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.mul",
  code: 0xb5,
} as const;

export const I32X4MinS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.min_s",
  code: 0xb6,
} as const;

export const I32X4MinU = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.min_u",
  code: 0xb7,
} as const;

export const I32X4MaxS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.max_s",
  code: 0xb8,
} as const;

export const I32X4MaxU = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.max_u",
  code: 0xb9,
} as const;

export const I32X4DotI16X8S = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.dot_i16x8_s",
  code: 0xba,
} as const;

export const I32X4ExtmulLowI16X8S = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.extmul_low_i16x8_s",
  code: 0xbc,
} as const;

export const I32X4ExtmulHighI16X8S = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.extmul_high_i16x8_s",
  code: 0xbd,
} as const;

export const I32X4ExtmulLowI16X8U = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.extmul_low_i16x8_u",
  code: 0xbe,
} as const;

export const I32X4ExtmulHighI16X8U = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.extmul_high_i16x8_u",
  code: 0xbf,
} as const;

export const I64X2Abs = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.abs",
  code: 0xc0,
} as const;

export const I64X2Neg = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.neg",
  code: 0xc1,
} as const;

export const I64X2AllTrue = {
  tr: I32,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.all_true",
  code: 0xc3,
} as const;

export const I64X2Bitmask = {
  tr: I32,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.bitmask",
  code: 0xc4,
} as const;

export const I64X2ExtendLowI32X4S = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.extend_low_i32x4_s",
  code: 0xc7,
} as const;

export const I64X2ExtendHighI32X4S = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.extend_high_i32x4_s",
  code: 0xc8,
} as const;

export const I64X2ExtendLowI32X4U = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.extend_low_i32x4_u",
  code: 0xc9,
} as const;

export const I64X2ExtendHighI32X4U = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.extend_high_i32x4_u",
  code: 0xca,
} as const;

export const I64X2Shl = {
  tr: V128,
  tr2: None,
  params: [V128, I32],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.shl",
  code: 0xcb,
} as const;

export const I64X2ShrS = {
  tr: V128,
  tr2: None,
  params: [V128, I32],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.shr_s",
  code: 0xcc,
} as const;

export const I64X2ShrU = {
  tr: V128,
  tr2: None,
  params: [V128, I32],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.shr_u",
  code: 0xcd,
} as const;

export const I64X2Add = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.add",
  code: 0xce,
} as const;

export const I64X2Sub = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.sub",
  code: 0xd1,
} as const;

export const I64X2Mul = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.mul",
  code: 0xd5,
} as const;

export const I64X2Eq = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.eq",
  code: 0xd6,
} as const;

export const I64X2Ne = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.ne",
  code: 0xd7,
} as const;

export const I64X2LtS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.lt_s",
  code: 0xd8,
} as const;

export const I64X2GtS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.gt_s",
  code: 0xd9,
} as const;

export const I64X2LeS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.le_s",
  code: 0xda,
} as const;

export const I64X2GeS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.ge_s",
  code: 0xdb,
} as const;

export const I64X2ExtmulLowI32X4S = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.extmul_low_i32x4_s",
  code: 0xdc,
} as const;

export const I64X2ExtmulHighI32X4S = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.extmul_high_i32x4_s",
  code: 0xdd,
} as const;

export const I64X2ExtmulLowI32X4U = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.extmul_low_i32x4_u",
  code: 0xde,
} as const;

export const I64X2ExtmulHighI32X4U = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.extmul_high_i32x4_u",
  code: 0xdf,
} as const;

export const F32X4Ceil = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.ceil",
  code: 0x67,
} as const;

export const F32X4Floor = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.floor",
  code: 0x68,
} as const;

export const F32X4Trunc = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.trunc",
  code: 0x69,
} as const;

export const F32X4Nearest = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.nearest",
  code: 0x6a,
} as const;

export const F64X2Ceil = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.ceil",
  code: 0x74,
} as const;

export const F64X2Floor = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.floor",
  code: 0x75,
} as const;

export const F64X2Trunc = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.trunc",
  code: 0x7a,
} as const;

export const F64X2Nearest = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.nearest",
  code: 0x94,
} as const;

export const F32X4Abs = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.abs",
  code: 0xe0,
} as const;

export const F32X4Neg = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.neg",
  code: 0xe1,
} as const;

export const F32X4Sqrt = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.sqrt",
  code: 0xe3,
} as const;

export const F32X4Add = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.add",
  code: 0xe4,
} as const;

export const F32X4Sub = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.sub",
  code: 0xe5,
} as const;

export const F32X4Mul = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.mul",
  code: 0xe6,
} as const;

export const F32X4Div = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.div",
  code: 0xe7,
} as const;

export const F32X4Min = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.min",
  code: 0xe8,
} as const;

export const F32X4Max = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.max",
  code: 0xe9,
} as const;

export const F32X4PMin = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.pmin",
  code: 0xea,
} as const;

export const F32X4PMax = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.pmax",
  code: 0xeb,
} as const;

export const F64X2Abs = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.abs",
  code: 0xec,
} as const;

export const F64X2Neg = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.neg",
  code: 0xed,
} as const;

export const F64X2Sqrt = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.sqrt",
  code: 0xef,
} as const;

export const F64X2Add = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.add",
  code: 0xf0,
} as const;

export const F64X2Sub = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.sub",
  code: 0xf1,
} as const;

export const F64X2Mul = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.mul",
  code: 0xf2,
} as const;

export const F64X2Div = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.div",
  code: 0xf3,
} as const;

export const F64X2Min = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.min",
  code: 0xf4,
} as const;

export const F64X2Max = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.max",
  code: 0xf5,
} as const;

export const F64X2PMin = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.pmin",
  code: 0xf6,
} as const;

export const F64X2PMax = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.pmax",
  code: 0xf7,
} as const;

export const I32X4TruncSatF32X4S = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.trunc_sat_f32x4_s",
  code: 0xf8,
} as const;

export const I32X4TruncSatF32X4U = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.trunc_sat_f32x4_u",
  code: 0xf9,
} as const;

export const F32X4ConvertI32X4S = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.convert_i32x4_s",
  code: 0xfa,
} as const;

export const F32X4ConvertI32X4U = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.convert_i32x4_u",
  code: 0xfb,
} as const;

export const I32X4TruncSatF64X2SZero = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.trunc_sat_f64x2_s_zero",
  code: 0xfc,
} as const;

export const I32X4TruncSatF64X2UZero = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.trunc_sat_f64x2_u_zero",
  code: 0xfd,
} as const;

export const F64X2ConvertLowI32X4S = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.convert_low_i32x4_s",
  code: 0xfe,
} as const;

export const F64X2ConvertLowI32X4U = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.convert_low_i32x4_u",
  code: 0xff,
} as const;

export const I8X16RelaxedSwizzle = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.relaxed_swizzle",
  code: 0x100,
} as const;

export const I32X4RelaxedTruncF32X4S = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.relaxed_trunc_f32x4_s",
  code: 0x101,
} as const;

export const I32X4RelaxedTruncF32X4U = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.relaxed_trunc_f32x4_u",
  code: 0x102,
} as const;

export const I32X4RelaxedTruncF64X2SZero = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.relaxed_trunc_f64x2_s_zero",
  code: 0x103,
} as const;

export const I32X4RelaxedTruncF64X2UZero = {
  tr: V128,
  tr2: None,
  params: [V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.relaxed_trunc_f64x2_u_zero",
  code: 0x104,
} as const;

export const F32X4RelaxedMadd = {
  tr: V128,
  tr2: None,
  params: [V128, V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.relaxed_madd",
  code: 0x105,
} as const;

export const F32X4RelaxedNmadd = {
  tr: V128,
  tr2: None,
  params: [V128, V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.relaxed_nmadd",
  code: 0x106,
} as const;

export const F64X2RelaxedMadd = {
  tr: V128,
  tr2: None,
  params: [V128, V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.relaxed_madd",
  code: 0x107,
} as const;

export const F64X2RelaxedNmadd = {
  tr: V128,
  tr2: None,
  params: [V128, V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.relaxed_nmadd",
  code: 0x108,
} as const;

export const I8X16RelaxedLaneSelect = {
  tr: V128,
  tr2: None,
  params: [V128, V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i8x16.relaxed_laneselect",
  code: 0x109,
} as const;

export const I16X8RelaxedLaneSelect = {
  tr: V128,
  tr2: None,
  params: [V128, V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.relaxed_laneselect",
  code: 0x10a,
} as const;

export const I32X4RelaxedLaneSelect = {
  tr: V128,
  tr2: None,
  params: [V128, V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.relaxed_laneselect",
  code: 0x10b,
} as const;

export const I64X2RelaxedLaneSelect = {
  tr: V128,
  tr2: None,
  params: [V128, V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i64x2.relaxed_laneselect",
  code: 0x10c,
} as const;

export const F32X4RelaxedMin = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.relaxed_min",
  code: 0x10d,
} as const;

export const F32X4RelaxedMax = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f32x4.relaxed_max",
  code: 0x10e,
} as const;

export const F64X2RelaxedMin = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.relaxed_min",
  code: 0x10f,
} as const;

export const F64X2RelaxedMax = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "f64x2.relaxed_max",
  code: 0x110,
} as const;

export const I16X8RelaxedQ15mulrS = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.relaxed_q15mulr_s",
  code: 0x111,
} as const;

export const I16X8DotI8X16I7X16S = {
  tr: V128,
  tr2: None,
  params: [V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i16x8.relaxed_dot_i8x16_i7x16_s",
  code: 0x112,
} as const;

export const I32X4DotI8X16I7X16AddS = {
  tr: V128,
  tr2: None,
  params: [V128, V128, V128],
  m: 0,
  prefix: 0xfd,
  name: "i32x4.relaxed_dot_i8x16_i7x16_add_s",
  code: 0x113,
} as const;

export const MemoryAtomicNotify = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 4,
  prefix: 0xfe,
  name: "memory.atomic.notify",
  code: 0x00,
} as const;

export const MemoryAtomicWait32 = {
  tr: I32,
  tr2: None,
  params: [I32, I32, I64],
  m: 4,
  prefix: 0xfe,
  name: "memory.atomic.wait32",
  code: 0x01,
} as const;

export const MemoryAtomicWait64 = {
  tr: I32,
  tr2: None,
  params: [I32, I64, I64],
  m: 8,
  prefix: 0xfe,
  name: "memory.atomic.wait64",
  code: 0x02,
} as const;

export const AtomicFence = {
  tr: None,
  tr2: None,
  params: [],
  m: 0,
  prefix: 0xfe,
  name: "atomic.fence",
  code: 0x03,
} as const;

export const I32AtomicLoad = {
  tr: I32,
  tr2: None,
  params: [I32],
  m: 4,
  prefix: 0xfe,
  name: "i32.atomic.load",
  code: 0x10,
} as const;

export const I64AtomicLoad = {
  tr: I64,
  tr2: None,
  params: [I32],
  m: 8,
  prefix: 0xfe,
  name: "i64.atomic.load",
  code: 0x11,
} as const;

export const I32AtomicLoad8U = {
  tr: I32,
  tr2: None,
  params: [I32],
  m: 1,
  prefix: 0xfe,
  name: "i32.atomic.load8_u",
  code: 0x12,
} as const;

export const I32AtomicLoad16U = {
  tr: I32,
  tr2: None,
  params: [I32],
  m: 2,
  prefix: 0xfe,
  name: "i32.atomic.load16_u",
  code: 0x13,
} as const;

export const I64AtomicLoad8U = {
  tr: I64,
  tr2: None,
  params: [I32],
  m: 1,
  prefix: 0xfe,
  name: "i64.atomic.load8_u",
  code: 0x14,
} as const;

export const I64AtomicLoad16U = {
  tr: I64,
  tr2: None,
  params: [I32],
  m: 2,
  prefix: 0xfe,
  name: "i64.atomic.load16_u",
  code: 0x15,
} as const;

export const I64AtomicLoad32U = {
  tr: I64,
  tr2: None,
  params: [I32],
  m: 4,
  prefix: 0xfe,
  name: "i64.atomic.load32_u",
  code: 0x16,
} as const;

export const I32AtomicStore = {
  tr: None,
  tr2: None,
  params: [I32, I32],
  m: 4,
  prefix: 0xfe,
  name: "i32.atomic.store",
  code: 0x17,
} as const;

export const I64AtomicStore = {
  tr: None,
  tr2: None,
  params: [I32, I64],
  m: 8,
  prefix: 0xfe,
  name: "i64.atomic.store",
  code: 0x18,
} as const;

export const I32AtomicStore8 = {
  tr: None,
  tr2: None,
  params: [I32, I32],
  m: 1,
  prefix: 0xfe,
  name: "i32.atomic.store8",
  code: 0x19,
} as const;

export const I32AtomicStore16 = {
  tr: None,
  tr2: None,
  params: [I32, I32],
  m: 2,
  prefix: 0xfe,
  name: "i32.atomic.store16",
  code: 0x1a,
} as const;

export const I64AtomicStore8 = {
  tr: None,
  tr2: None,
  params: [I32, I64],
  m: 1,
  prefix: 0xfe,
  name: "i64.atomic.store8",
  code: 0x1b,
} as const;

export const I64AtomicStore16 = {
  tr: None,
  tr2: None,
  params: [I32, I64],
  m: 2,
  prefix: 0xfe,
  name: "i64.atomic.store16",
  code: 0x1c,
} as const;

export const I64AtomicStore32 = {
  tr: None,
  tr2: None,
  params: [I32, I64],
  m: 4,
  prefix: 0xfe,
  name: "i64.atomic.store32",
  code: 0x1d,
} as const;

export const I32AtomicRmwAdd = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 4,
  prefix: 0xfe,
  name: "i32.atomic.rmw.add",
  code: 0x1e,
} as const;

export const I64AtomicRmwAdd = {
  tr: I64,
  tr2: None,
  params: [I32, I64],
  m: 8,
  prefix: 0xfe,
  name: "i64.atomic.rmw.add",
  code: 0x1f,
} as const;

export const I32AtomicRmw8AddU = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 1,
  prefix: 0xfe,
  name: "i32.atomic.rmw8.add_u",
  code: 0x20,
} as const;

export const I32AtomicRmw16AddU = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 2,
  prefix: 0xfe,
  name: "i32.atomic.rmw16.add_u",
  code: 0x21,
} as const;

export const I64AtomicRmw8AddU = {
  tr: I64,
  tr2: None,
  params: [I32, I64],
  m: 1,
  prefix: 0xfe,
  name: "i64.atomic.rmw8.add_u",
  code: 0x22,
} as const;

export const I64AtomicRmw16AddU = {
  tr: I64,
  tr2: None,
  params: [I32, I64],
  m: 2,
  prefix: 0xfe,
  name: "i64.atomic.rmw16.add_u",
  code: 0x23,
} as const;

export const I64AtomicRmw32AddU = {
  tr: I64,
  tr2: None,
  params: [I32, I64],
  m: 4,
  prefix: 0xfe,
  name: "i64.atomic.rmw32.add_u",
  code: 0x24,
} as const;

export const I32AtomicRmwSub = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 4,
  prefix: 0xfe,
  name: "i32.atomic.rmw.sub",
  code: 0x25,
} as const;

export const I64AtomicRmwSub = {
  tr: I64,
  tr2: None,
  params: [I32, I64],
  m: 8,
  prefix: 0xfe,
  name: "i64.atomic.rmw.sub",
  code: 0x26,
} as const;

export const I32AtomicRmw8SubU = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 1,
  prefix: 0xfe,
  name: "i32.atomic.rmw8.sub_u",
  code: 0x27,
} as const;

export const I32AtomicRmw16SubU = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 2,
  prefix: 0xfe,
  name: "i32.atomic.rmw16.sub_u",
  code: 0x28,
} as const;

export const I64AtomicRmw8SubU = {
  tr: I64,
  tr2: None,
  params: [I32, I64],
  m: 1,
  prefix: 0xfe,
  name: "i64.atomic.rmw8.sub_u",
  code: 0x29,
} as const;

export const I64AtomicRmw16SubU = {
  tr: I64,
  tr2: None,
  params: [I32, I64],
  m: 2,
  prefix: 0xfe,
  name: "i64.atomic.rmw16.sub_u",
  code: 0x2a,
} as const;

export const I64AtomicRmw32SubU = {
  tr: I64,
  tr2: None,
  params: [I32, I64],
  m: 4,
  prefix: 0xfe,
  name: "i64.atomic.rmw32.sub_u",
  code: 0x2b,
} as const;

export const I32AtomicRmwAnd = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 4,
  prefix: 0xfe,
  name: "i32.atomic.rmw.and",
  code: 0x2c,
} as const;

export const I64AtomicRmwAnd = {
  tr: I64,
  tr2: None,
  params: [I32, I64],
  m: 8,
  prefix: 0xfe,
  name: "i64.atomic.rmw.and",
  code: 0x2d,
} as const;

export const I32AtomicRmw8AndU = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 1,
  prefix: 0xfe,
  name: "i32.atomic.rmw8.and_u",
  code: 0x2e,
} as const;

export const I32AtomicRmw16AndU = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 2,
  prefix: 0xfe,
  name: "i32.atomic.rmw16.and_u",
  code: 0x2f,
} as const;

export const I64AtomicRmw8AndU = {
  tr: I64,
  tr2: None,
  params: [I32, I64],
  m: 1,
  prefix: 0xfe,
  name: "i64.atomic.rmw8.and_u",
  code: 0x30,
} as const;

export const I64AtomicRmw16AndU = {
  tr: I64,
  tr2: None,
  params: [I32, I64],
  m: 2,
  prefix: 0xfe,
  name: "i64.atomic.rmw16.and_u",
  code: 0x31,
} as const;

export const I64AtomicRmw32AndU = {
  tr: I64,
  tr2: None,
  params: [I32, I64],
  m: 4,
  prefix: 0xfe,
  name: "i64.atomic.rmw32.and_u",
  code: 0x32,
} as const;

export const I32AtomicRmwOr = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 4,
  prefix: 0xfe,
  name: "i32.atomic.rmw.or",
  code: 0x33,
} as const;

export const I64AtomicRmwOr = {
  tr: I64,
  tr2: None,
  params: [I32, I64],
  m: 8,
  prefix: 0xfe,
  name: "i64.atomic.rmw.or",
  code: 0x34,
} as const;

export const I32AtomicRmw8OrU = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 1,
  prefix: 0xfe,
  name: "i32.atomic.rmw8.or_u",
  code: 0x35,
} as const;

export const I32AtomicRmw16OrU = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 2,
  prefix: 0xfe,
  name: "i32.atomic.rmw16.or_u",
  code: 0x36,
} as const;

export const I64AtomicRmw8OrU = {
  tr: I64,
  tr2: None,
  params: [I32, I64],
  m: 1,
  prefix: 0xfe,
  name: "i64.atomic.rmw8.or_u",
  code: 0x37,
} as const;

export const I64AtomicRmw16OrU = {
  tr: I64,
  tr2: None,
  params: [I32, I64],
  m: 2,
  prefix: 0xfe,
  name: "i64.atomic.rmw16.or_u",
  code: 0x38,
} as const;

export const I64AtomicRmw32OrU = {
  tr: I64,
  tr2: None,
  params: [I32, I64],
  m: 4,
  prefix: 0xfe,
  name: "i64.atomic.rmw32.or_u",
  code: 0x39,
} as const;

export const I32AtomicRmwXor = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 4,
  prefix: 0xfe,
  name: "i32.atomic.rmw.xor",
  code: 0x3a,
} as const;

export const I64AtomicRmwXor = {
  tr: I64,
  tr2: None,
  params: [I32, I64],
  m: 8,
  prefix: 0xfe,
  name: "i64.atomic.rmw.xor",
  code: 0x3b,
} as const;

export const I32AtomicRmw8XorU = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 1,
  prefix: 0xfe,
  name: "i32.atomic.rmw8.xor_u",
  code: 0x3c,
} as const;

export const I32AtomicRmw16XorU = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 2,
  prefix: 0xfe,
  name: "i32.atomic.rmw16.xor_u",
  code: 0x3d,
} as const;

export const I64AtomicRmw8XorU = {
  tr: I64,
  tr2: None,
  params: [I32, I64],
  m: 1,
  prefix: 0xfe,
  name: "i64.atomic.rmw8.xor_u",
  code: 0x3e,
} as const;

export const I64AtomicRmw16XorU = {
  tr: I64,
  tr2: None,
  params: [I32, I64],
  m: 2,
  prefix: 0xfe,
  name: "i64.atomic.rmw16.xor_u",
  code: 0x3f,
} as const;

export const I64AtomicRmw32XorU = {
  tr: I64,
  tr2: None,
  params: [I32, I64],
  m: 4,
  prefix: 0xfe,
  name: "i64.atomic.rmw32.xor_u",
  code: 0x40,
} as const;

export const I32AtomicRmwXchg = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 4,
  prefix: 0xfe,
  name: "i32.atomic.rmw.xchg",
  code: 0x41,
} as const;

export const I64AtomicRmwXchg = {
  tr: I64,
  tr2: None,
  params: [I32, I64],
  m: 8,
  prefix: 0xfe,
  name: "i64.atomic.rmw.xchg",
  code: 0x42,
} as const;

export const I32AtomicRmw8XchgU = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 1,
  prefix: 0xfe,
  name: "i32.atomic.rmw8.xchg_u",
  code: 0x43,
} as const;

export const I32AtomicRmw16XchgU = {
  tr: I32,
  tr2: None,
  params: [I32, I32],
  m: 2,
  prefix: 0xfe,
  name: "i32.atomic.rmw16.xchg_u",
  code: 0x44,
} as const;

export const I64AtomicRmw8XchgU = {
  tr: I64,
  tr2: None,
  params: [I32, I64],
  m: 1,
  prefix: 0xfe,
  name: "i64.atomic.rmw8.xchg_u",
  code: 0x45,
} as const;

export const I64AtomicRmw16XchgU = {
  tr: I64,
  tr2: None,
  params: [I32, I64],
  m: 2,
  prefix: 0xfe,
  name: "i64.atomic.rmw16.xchg_u",
  code: 0x46,
} as const;

export const I64AtomicRmw32XchgU = {
  tr: I64,
  tr2: None,
  params: [I32, I64],
  m: 4,
  prefix: 0xfe,
  name: "i64.atomic.rmw32.xchg_u",
  code: 0x47,
} as const;

export const I32AtomicRmwCmpxchg = {
  tr: I32,
  tr2: None,
  params: [I32, I32, I32],
  m: 4,
  prefix: 0xfe,
  name: "i32.atomic.rmw.cmpxchg",
  code: 0x48,
} as const;

export const I64AtomicRmwCmpxchg = {
  tr: I64,
  tr2: None,
  params: [I32, I64, I64],
  m: 8,
  prefix: 0xfe,
  name: "i64.atomic.rmw.cmpxchg",
  code: 0x49,
} as const;

export const I32AtomicRmw8CmpxchgU = {
  tr: I32,
  tr2: None,
  params: [I32, I32, I32],
  m: 1,
  prefix: 0xfe,
  name: "i32.atomic.rmw8.cmpxchg_u",
  code: 0x4a,
} as const;

export const I32AtomicRmw16CmpxchgU = {
  tr: I32,
  tr2: None,
  params: [I32, I32, I32],
  m: 2,
  prefix: 0xfe,
  name: "i32.atomic.rmw16.cmpxchg_u",
  code: 0x4b,
} as const;

export const I64AtomicRmw8CmpxchgU = {
  tr: I64,
  tr2: None,
  params: [I32, I64, I64],
  m: 1,
  prefix: 0xfe,
  name: "i64.atomic.rmw8.cmpxchg_u",
  code: 0x4c,
} as const;

export const I64AtomicRmw16CmpxchgU = {
  tr: I64,
  tr2: None,
  params: [I32, I64, I64],
  m: 2,
  prefix: 0xfe,
  name: "i64.atomic.rmw16.cmpxchg_u",
  code: 0x4d,
} as const;

export const I64AtomicRmw32CmpxchgU = {
  tr: I64,
  tr2: None,
  params: [I32, I64, I64],
  m: 4,
  prefix: 0xfe,
  name: "i64.atomic.rmw32.cmpxchg_u",
  code: 0x4e,
} as const;

export type Operation =
  | typeof Unreachable
  | typeof Nop
  | typeof Block
  | typeof Loop
  | typeof If
  | typeof Else
  | typeof Try
  | typeof Catch
  | typeof Throw
  | typeof Rethrow
  | typeof ThrowRef
  | typeof End
  | typeof Br
  | typeof BrIf
  | typeof BrTable
  | typeof Return
  | typeof Call
  | typeof CallIndirect
  | typeof ReturnCall
  | typeof ReturnCallIndirect
  | typeof CallRef
  | typeof ReturnCallRef
  | typeof Delegate
  | typeof CatchAll
  | typeof Drop
  | typeof Select
  | typeof SelectT
  | typeof TryTable
  | typeof LocalGet
  | typeof LocalSet
  | typeof LocalTee
  | typeof GlobalGet
  | typeof GlobalSet
  | typeof I32Load
  | typeof I64Load
  | typeof F32Load
  | typeof F64Load
  | typeof I32Load8S
  | typeof I32Load8U
  | typeof I32Load16S
  | typeof I32Load16U
  | typeof I64Load8S
  | typeof I64Load8U
  | typeof I64Load16S
  | typeof I64Load16U
  | typeof I64Load32S
  | typeof I64Load32U
  | typeof I32Store
  | typeof I64Store
  | typeof F32Store
  | typeof F64Store
  | typeof I32Store8
  | typeof I32Store16
  | typeof I64Store8
  | typeof I64Store16
  | typeof I64Store32
  | typeof MemorySize
  | typeof MemoryGrow
  | typeof I32Const
  | typeof I64Const
  | typeof F32Const
  | typeof F64Const
  | typeof I32Eqz
  | typeof I32Eq
  | typeof I32Ne
  | typeof I32LtS
  | typeof I32LtU
  | typeof I32GtS
  | typeof I32GtU
  | typeof I32LeS
  | typeof I32LeU
  | typeof I32GeS
  | typeof I32GeU
  | typeof I64Eqz
  | typeof I64Eq
  | typeof I64Ne
  | typeof I64LtS
  | typeof I64LtU
  | typeof I64GtS
  | typeof I64GtU
  | typeof I64LeS
  | typeof I64LeU
  | typeof I64GeS
  | typeof I64GeU
  | typeof F32Eq
  | typeof F32Ne
  | typeof F32Lt
  | typeof F32Gt
  | typeof F32Le
  | typeof F32Ge
  | typeof F64Eq
  | typeof F64Ne
  | typeof F64Lt
  | typeof F64Gt
  | typeof F64Le
  | typeof F64Ge
  | typeof I32Clz
  | typeof I32Ctz
  | typeof I32Popcnt
  | typeof I32Add
  | typeof I32Sub
  | typeof I32Mul
  | typeof I32DivS
  | typeof I32DivU
  | typeof I32RemS
  | typeof I32RemU
  | typeof I32And
  | typeof I32Or
  | typeof I32Xor
  | typeof I32Shl
  | typeof I32ShrS
  | typeof I32ShrU
  | typeof I32Rotl
  | typeof I32Rotr
  | typeof I64Clz
  | typeof I64Ctz
  | typeof I64Popcnt
  | typeof I64Add
  | typeof I64Sub
  | typeof I64Mul
  | typeof I64DivS
  | typeof I64DivU
  | typeof I64RemS
  | typeof I64RemU
  | typeof I64And
  | typeof I64Or
  | typeof I64Xor
  | typeof I64Shl
  | typeof I64ShrS
  | typeof I64ShrU
  | typeof I64Rotl
  | typeof I64Rotr
  | typeof F32Abs
  | typeof F32Neg
  | typeof F32Ceil
  | typeof F32Floor
  | typeof F32Trunc
  | typeof F32Nearest
  | typeof F32Sqrt
  | typeof F32Add
  | typeof F32Sub
  | typeof F32Mul
  | typeof F32Div
  | typeof F32Min
  | typeof F32Max
  | typeof F32Copysign
  | typeof F64Abs
  | typeof F64Neg
  | typeof F64Ceil
  | typeof F64Floor
  | typeof F64Trunc
  | typeof F64Nearest
  | typeof F64Sqrt
  | typeof F64Add
  | typeof F64Sub
  | typeof F64Mul
  | typeof F64Div
  | typeof F64Min
  | typeof F64Max
  | typeof F64Copysign
  | typeof I32WrapI64
  | typeof I32TruncF32S
  | typeof I32TruncF32U
  | typeof I32TruncF64S
  | typeof I32TruncF64U
  | typeof I64ExtendI32S
  | typeof I64ExtendI32U
  | typeof I64TruncF32S
  | typeof I64TruncF32U
  | typeof I64TruncF64S
  | typeof I64TruncF64U
  | typeof F32ConvertI32S
  | typeof F32ConvertI32U
  | typeof F32ConvertI64S
  | typeof F32ConvertI64U
  | typeof F32DemoteF64
  | typeof F64ConvertI32S
  | typeof F64ConvertI32U
  | typeof F64ConvertI64S
  | typeof F64ConvertI64U
  | typeof F64PromoteF32
  | typeof I32ReinterpretF32
  | typeof I64ReinterpretF64
  | typeof F32ReinterpretI32
  | typeof F64ReinterpretI64
  | typeof I32Extend8S
  | typeof I32Extend16S
  | typeof I64Extend8S
  | typeof I64Extend16S
  | typeof I64Extend32S
  | typeof InterpAlloca
  | typeof InterpBrUnless
  | typeof InterpCallImport
  | typeof InterpData
  | typeof InterpDropKeep
  | typeof InterpCatchDrop
  | typeof InterpAdjustFrameForReturnCall
  | typeof InterpGlobalGetRef
  | typeof InterpLocalGetRef
  | typeof InterpMarkRef
  | typeof I32TruncSatF32S
  | typeof I32TruncSatF32U
  | typeof I32TruncSatF64S
  | typeof I32TruncSatF64U
  | typeof I64TruncSatF32S
  | typeof I64TruncSatF32U
  | typeof I64TruncSatF64S
  | typeof I64TruncSatF64U
  | typeof I64Add128
  | typeof I64Sub128
  | typeof I64MulWideS
  | typeof I64MulWideU
  | typeof MemoryInit
  | typeof DataDrop
  | typeof MemoryCopy
  | typeof MemoryFill
  | typeof TableInit
  | typeof ElemDrop
  | typeof TableCopy
  | typeof TableGet
  | typeof TableSet
  | typeof TableGrow
  | typeof TableSize
  | typeof TableFill
  | typeof RefNull
  | typeof RefIsNull
  | typeof RefFunc
  | typeof RefAsNonNull
  | typeof BrOnNull
  | typeof BrOnNonNull
  | typeof V128Load
  | typeof V128Load8X8S
  | typeof V128Load8X8U
  | typeof V128Load16X4S
  | typeof V128Load16X4U
  | typeof V128Load32X2S
  | typeof V128Load32X2U
  | typeof V128Load8Splat
  | typeof V128Load16Splat
  | typeof V128Load32Splat
  | typeof V128Load64Splat
  | typeof V128Store
  | typeof V128Const
  | typeof I8X16Shuffle
  | typeof I8X16Swizzle
  | typeof I8X16Splat
  | typeof I16X8Splat
  | typeof I32X4Splat
  | typeof I64X2Splat
  | typeof F32X4Splat
  | typeof F64X2Splat
  | typeof I8X16ExtractLaneS
  | typeof I8X16ExtractLaneU
  | typeof I8X16ReplaceLane
  | typeof I16X8ExtractLaneS
  | typeof I16X8ExtractLaneU
  | typeof I16X8ReplaceLane
  | typeof I32X4ExtractLane
  | typeof I32X4ReplaceLane
  | typeof I64X2ExtractLane
  | typeof I64X2ReplaceLane
  | typeof F32X4ExtractLane
  | typeof F32X4ReplaceLane
  | typeof F64X2ExtractLane
  | typeof F64X2ReplaceLane
  | typeof I8X16Eq
  | typeof I8X16Ne
  | typeof I8X16LtS
  | typeof I8X16LtU
  | typeof I8X16GtS
  | typeof I8X16GtU
  | typeof I8X16LeS
  | typeof I8X16LeU
  | typeof I8X16GeS
  | typeof I8X16GeU
  | typeof I16X8Eq
  | typeof I16X8Ne
  | typeof I16X8LtS
  | typeof I16X8LtU
  | typeof I16X8GtS
  | typeof I16X8GtU
  | typeof I16X8LeS
  | typeof I16X8LeU
  | typeof I16X8GeS
  | typeof I16X8GeU
  | typeof I32X4Eq
  | typeof I32X4Ne
  | typeof I32X4LtS
  | typeof I32X4LtU
  | typeof I32X4GtS
  | typeof I32X4GtU
  | typeof I32X4LeS
  | typeof I32X4LeU
  | typeof I32X4GeS
  | typeof I32X4GeU
  | typeof F32X4Eq
  | typeof F32X4Ne
  | typeof F32X4Lt
  | typeof F32X4Gt
  | typeof F32X4Le
  | typeof F32X4Ge
  | typeof F64X2Eq
  | typeof F64X2Ne
  | typeof F64X2Lt
  | typeof F64X2Gt
  | typeof F64X2Le
  | typeof F64X2Ge
  | typeof V128Not
  | typeof V128And
  | typeof V128Andnot
  | typeof V128Or
  | typeof V128Xor
  | typeof V128BitSelect
  | typeof V128AnyTrue
  | typeof V128Load8Lane
  | typeof V128Load16Lane
  | typeof V128Load32Lane
  | typeof V128Load64Lane
  | typeof V128Store8Lane
  | typeof V128Store16Lane
  | typeof V128Store32Lane
  | typeof V128Store64Lane
  | typeof V128Load32Zero
  | typeof V128Load64Zero
  | typeof F32X4DemoteF64X2Zero
  | typeof F64X2PromoteLowF32X4
  | typeof I8X16Abs
  | typeof I8X16Neg
  | typeof I8X16Popcnt
  | typeof I8X16AllTrue
  | typeof I8X16Bitmask
  | typeof I8X16NarrowI16X8S
  | typeof I8X16NarrowI16X8U
  | typeof I8X16Shl
  | typeof I8X16ShrS
  | typeof I8X16ShrU
  | typeof I8X16Add
  | typeof I8X16AddSatS
  | typeof I8X16AddSatU
  | typeof I8X16Sub
  | typeof I8X16SubSatS
  | typeof I8X16SubSatU
  | typeof I8X16MinS
  | typeof I8X16MinU
  | typeof I8X16MaxS
  | typeof I8X16MaxU
  | typeof I8X16AvgrU
  | typeof I16X8ExtaddPairwiseI8X16S
  | typeof I16X8ExtaddPairwiseI8X16U
  | typeof I32X4ExtaddPairwiseI16X8S
  | typeof I32X4ExtaddPairwiseI16X8U
  | typeof I16X8Abs
  | typeof I16X8Neg
  | typeof I16X8Q15mulrSatS
  | typeof I16X8AllTrue
  | typeof I16X8Bitmask
  | typeof I16X8NarrowI32X4S
  | typeof I16X8NarrowI32X4U
  | typeof I16X8ExtendLowI8X16S
  | typeof I16X8ExtendHighI8X16S
  | typeof I16X8ExtendLowI8X16U
  | typeof I16X8ExtendHighI8X16U
  | typeof I16X8Shl
  | typeof I16X8ShrS
  | typeof I16X8ShrU
  | typeof I16X8Add
  | typeof I16X8AddSatS
  | typeof I16X8AddSatU
  | typeof I16X8Sub
  | typeof I16X8SubSatS
  | typeof I16X8SubSatU
  | typeof I16X8Mul
  | typeof I16X8MinS
  | typeof I16X8MinU
  | typeof I16X8MaxS
  | typeof I16X8MaxU
  | typeof I16X8AvgrU
  | typeof I16X8ExtmulLowI8X16S
  | typeof I16X8ExtmulHighI8X16S
  | typeof I16X8ExtmulLowI8X16U
  | typeof I16X8ExtmulHighI8X16U
  | typeof I32X4Abs
  | typeof I32X4Neg
  | typeof I32X4AllTrue
  | typeof I32X4Bitmask
  | typeof I32X4ExtendLowI16X8S
  | typeof I32X4ExtendHighI16X8S
  | typeof I32X4ExtendLowI16X8U
  | typeof I32X4ExtendHighI16X8U
  | typeof I32X4Shl
  | typeof I32X4ShrS
  | typeof I32X4ShrU
  | typeof I32X4Add
  | typeof I32X4Sub
  | typeof I32X4Mul
  | typeof I32X4MinS
  | typeof I32X4MinU
  | typeof I32X4MaxS
  | typeof I32X4MaxU
  | typeof I32X4DotI16X8S
  | typeof I32X4ExtmulLowI16X8S
  | typeof I32X4ExtmulHighI16X8S
  | typeof I32X4ExtmulLowI16X8U
  | typeof I32X4ExtmulHighI16X8U
  | typeof I64X2Abs
  | typeof I64X2Neg
  | typeof I64X2AllTrue
  | typeof I64X2Bitmask
  | typeof I64X2ExtendLowI32X4S
  | typeof I64X2ExtendHighI32X4S
  | typeof I64X2ExtendLowI32X4U
  | typeof I64X2ExtendHighI32X4U
  | typeof I64X2Shl
  | typeof I64X2ShrS
  | typeof I64X2ShrU
  | typeof I64X2Add
  | typeof I64X2Sub
  | typeof I64X2Mul
  | typeof I64X2Eq
  | typeof I64X2Ne
  | typeof I64X2LtS
  | typeof I64X2GtS
  | typeof I64X2LeS
  | typeof I64X2GeS
  | typeof I64X2ExtmulLowI32X4S
  | typeof I64X2ExtmulHighI32X4S
  | typeof I64X2ExtmulLowI32X4U
  | typeof I64X2ExtmulHighI32X4U
  | typeof F32X4Ceil
  | typeof F32X4Floor
  | typeof F32X4Trunc
  | typeof F32X4Nearest
  | typeof F64X2Ceil
  | typeof F64X2Floor
  | typeof F64X2Trunc
  | typeof F64X2Nearest
  | typeof F32X4Abs
  | typeof F32X4Neg
  | typeof F32X4Sqrt
  | typeof F32X4Add
  | typeof F32X4Sub
  | typeof F32X4Mul
  | typeof F32X4Div
  | typeof F32X4Min
  | typeof F32X4Max
  | typeof F32X4PMin
  | typeof F32X4PMax
  | typeof F64X2Abs
  | typeof F64X2Neg
  | typeof F64X2Sqrt
  | typeof F64X2Add
  | typeof F64X2Sub
  | typeof F64X2Mul
  | typeof F64X2Div
  | typeof F64X2Min
  | typeof F64X2Max
  | typeof F64X2PMin
  | typeof F64X2PMax
  | typeof I32X4TruncSatF32X4S
  | typeof I32X4TruncSatF32X4U
  | typeof F32X4ConvertI32X4S
  | typeof F32X4ConvertI32X4U
  | typeof I32X4TruncSatF64X2SZero
  | typeof I32X4TruncSatF64X2UZero
  | typeof F64X2ConvertLowI32X4S
  | typeof F64X2ConvertLowI32X4U
  | typeof I8X16RelaxedSwizzle
  | typeof I32X4RelaxedTruncF32X4S
  | typeof I32X4RelaxedTruncF32X4U
  | typeof I32X4RelaxedTruncF64X2SZero
  | typeof I32X4RelaxedTruncF64X2UZero
  | typeof F32X4RelaxedMadd
  | typeof F32X4RelaxedNmadd
  | typeof F64X2RelaxedMadd
  | typeof F64X2RelaxedNmadd
  | typeof I8X16RelaxedLaneSelect
  | typeof I16X8RelaxedLaneSelect
  | typeof I32X4RelaxedLaneSelect
  | typeof I64X2RelaxedLaneSelect
  | typeof F32X4RelaxedMin
  | typeof F32X4RelaxedMax
  | typeof F64X2RelaxedMin
  | typeof F64X2RelaxedMax
  | typeof I16X8RelaxedQ15mulrS
  | typeof I16X8DotI8X16I7X16S
  | typeof I32X4DotI8X16I7X16AddS
  | typeof MemoryAtomicNotify
  | typeof MemoryAtomicWait32
  | typeof MemoryAtomicWait64
  | typeof AtomicFence
  | typeof I32AtomicLoad
  | typeof I64AtomicLoad
  | typeof I32AtomicLoad8U
  | typeof I32AtomicLoad16U
  | typeof I64AtomicLoad8U
  | typeof I64AtomicLoad16U
  | typeof I64AtomicLoad32U
  | typeof I32AtomicStore
  | typeof I64AtomicStore
  | typeof I32AtomicStore8
  | typeof I32AtomicStore16
  | typeof I64AtomicStore8
  | typeof I64AtomicStore16
  | typeof I64AtomicStore32
  | typeof I32AtomicRmwAdd
  | typeof I64AtomicRmwAdd
  | typeof I32AtomicRmw8AddU
  | typeof I32AtomicRmw16AddU
  | typeof I64AtomicRmw8AddU
  | typeof I64AtomicRmw16AddU
  | typeof I64AtomicRmw32AddU
  | typeof I32AtomicRmwSub
  | typeof I64AtomicRmwSub
  | typeof I32AtomicRmw8SubU
  | typeof I32AtomicRmw16SubU
  | typeof I64AtomicRmw8SubU
  | typeof I64AtomicRmw16SubU
  | typeof I64AtomicRmw32SubU
  | typeof I32AtomicRmwAnd
  | typeof I64AtomicRmwAnd
  | typeof I32AtomicRmw8AndU
  | typeof I32AtomicRmw16AndU
  | typeof I64AtomicRmw8AndU
  | typeof I64AtomicRmw16AndU
  | typeof I64AtomicRmw32AndU
  | typeof I32AtomicRmwOr
  | typeof I64AtomicRmwOr
  | typeof I32AtomicRmw8OrU
  | typeof I32AtomicRmw16OrU
  | typeof I64AtomicRmw8OrU
  | typeof I64AtomicRmw16OrU
  | typeof I64AtomicRmw32OrU
  | typeof I32AtomicRmwXor
  | typeof I64AtomicRmwXor
  | typeof I32AtomicRmw8XorU
  | typeof I32AtomicRmw16XorU
  | typeof I64AtomicRmw8XorU
  | typeof I64AtomicRmw16XorU
  | typeof I64AtomicRmw32XorU
  | typeof I32AtomicRmwXchg
  | typeof I64AtomicRmwXchg
  | typeof I32AtomicRmw8XchgU
  | typeof I32AtomicRmw16XchgU
  | typeof I64AtomicRmw8XchgU
  | typeof I64AtomicRmw16XchgU
  | typeof I64AtomicRmw32XchgU
  | typeof I32AtomicRmwCmpxchg
  | typeof I64AtomicRmwCmpxchg
  | typeof I32AtomicRmw8CmpxchgU
  | typeof I32AtomicRmw16CmpxchgU
  | typeof I64AtomicRmw8CmpxchgU
  | typeof I64AtomicRmw16CmpxchgU
  | typeof I64AtomicRmw32CmpxchgU;
