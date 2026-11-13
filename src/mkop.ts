import * as OP from "./opcodes.ts";

type AtomOfType<TValue extends OP.ValueType> = OP.Operation & {
  tr: TValue;
  tr2: typeof OP.None;
};

type Expr<
  TValue extends OP.ValueType = OP.ValueType,
  TPrevious extends AtomOfType<OP.ValueType>[] = AtomOfType<OP.ValueType>[],
> = [...TPrevious, AtomOfType<TValue>];

type EndsWith<T extends AtomOfType<OP.ValueType>> = [...Expr, T];

export function f32x4relaxed_madd(
  a: Expr<typeof OP.V128>,
  b: Expr<typeof OP.V128>,
): EndsWith<typeof OP.F32X4RelaxedMadd> {
  return [...a, ...b, OP.F32X4RelaxedMadd];
}

export function f32X4Splat(a: Expr<typeof OP.F32>): EndsWith<typeof OP.F32X4Splat> {
  return [...a, OP.F32X4Splat];
}

export function f32Const(a: number): EndsWith<typeof OP.F32Const> {
  return [OP.F32Const];
}

let a = f32x4relaxed_madd(f32X4Splat(f32Const(12)), f32X4Splat(f32Const(11)));
// OP.F32X4RelaxedMadd
