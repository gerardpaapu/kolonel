(module
  (memory (export "memory") 1)
  (func (export "dot") (param $a i32) (param $b i32) (param $len i32) (result f32)
    (local $end i32)
    (local $sum v128)
    (local.set $a (i32.shl (local.get $a) (i32.const 2)))
    (local.set $b (i32.shl (local.get $b) (i32.const 2)))
    (local.set $end (i32.add (local.get $a) (i32.shl (local.get $len) (i32.const 2))))
    (block $done
      (br_if $done (i32.eqz (local.get $len)))
      (loop $next
        (local.set $sum
          (f32x4.relaxed_madd
            (v128.load (local.get $a))
            (v128.load (local.get $b))
            (local.get $sum)))
        (local.set $a (i32.add (local.get $a) (i32.const 16)))
        (local.set $b (i32.add (local.get $b) (i32.const 16)))
        (br_if $next (i32.lt_u (local.get $a) (local.get $end)))))
    (f32.add
      (f32.add
        (f32.add
          (f32x4.extract_lane 0 (local.get $sum))
          (f32x4.extract_lane 1 (local.get $sum)))
        (f32x4.extract_lane 2 (local.get $sum)))
      (f32x4.extract_lane 3 (local.get $sum)))))