// 0000000: 0061 736d 0100 0000 0108 0160 037f 7f7f
// 0000010: 017d 0302 0100 0503 0100 0107 1002 066d
// 0000020: 656d 6f72 7902 0003 646f 7400 000a 6a01
// 0000030: 6802 017f 017b 2000 4102 7421 0020 0141
// 0000040: 0274 2101 2000 2002 4102 746a 2103 0240
// 0000050: 2002 450d 0003 4020 00fd 0004 0020 01fd
// 0000060: 0004 0020 04fd 8502 2104 2000 4110 6a21
// 0000070: 0020 0141 106a 2101 2000 2003 490d 000b
// 0000080: 0b20 04fd 1f00 2004 fd1f 0192 2004 fd1f
// 0000090: 0292 2004 fd1f 0392 0b

export const DOT = new Uint8Array([
  // magic
  0x00,
  0x61,
  0x73,
  0x6d,
  // version
  0x01,
  0x00,
  0x00,
  0x00,
  // section id 0x01 = type section
  0x01,
  // section length: a u32 encoded as LEB128
  // https://en.wikipedia.org/wiki/LEB128
  0x08,
  // section content
  // a list of 1 type
  0x01,
  // 0x60 = function(i32, i32, i32) -> f32
  0x60,
  // (0x03) list (i32, i32, i32)
  0x03,
  0x7f,
  0x7f,
  0x7f,
  // (0x01) list (f32)
  0x01,
  0x7d,

  // section id 0x03 = function section
  0x03,
  // section length = 2 bytes
  0x02,
  // this is a list of length (0x1) the contents is a type index
  // pointing to our only type (0x00)
  0x01,
  0x00,
  // section id 0x05 = memory
  0x05,
  // section length 0x03
  0x03,
  // 0x01 list( Limit(1..) )
  0x01,
  0x00,
  0x01,

  // section id x07 = export
  0x07,
  // section length 0x10 = ... 16?
  0x10,
  // list(len = 2)
  0x02,

  // list(len = 6) bytes
  0x06,
  0x6d,
  0x65,
  0x6d,
  0x6f,
  0x72,
  0x79, // "memory"

  0x02,
  0x00, // mem[0]

  // 3 bytes
  0x03,
  0x64,
  0x6f,
  0x74, // "dot"

  0x00,
  0x00, // func[0]

  // section id 0x0a = code
  0x0a,

  // 01101010 = 0x6a
  // ^-------- The most significant bit is 0 so this is the
  //           last byte in the number
  // section length = 106 bytes
  0x6a,

  // That's the rest of it
  0x01, // list(len = 1)

  // code (len = 104)
  0x68,

  // let $end: i32;
  // let $sum: v128;

  // list(locals) len = 2
  0x02,
  // (locals $end i32)
  0x01,
  0x7f, // why is this 0x01
  // (locals $sum V128)
  0x01,
  0x7b, // and this is also 0x01

  // expr
  // let $a = $a * 4
  0x20,
  0x00, // local.get 0
  0x41,
  0x02, // i32.const 2
  0x74, // i32.shl
  0x21,
  0x00, // local.set 0

  // let $b = $b * 4
  0x20,
  0x01, // local.get 1
  0x41,
  0x02, // i32.const 2
  0x74, // i32.shl
  0x21,
  0x01, // local.set 1

  // $end = $a + $len * 4
  0x20,
  0x00, // local.get 0
  0x20,
  0x02, // local.get 2
  0x41,
  0x02, // i32.const 2
  0x74, // i32.shl
  0x6a,
  0x21, // i32.add

  0x03, // loop?

  0x02, // block
  0x40,

  0x20,
  0x02, // local.get 02
  0x45, // i32.eqz
  0x0d,
  0x00, // br_if $done
  0x03,
  0x40, // loop $next
  0x20,
  0x00, // local.get 0
  0xfd,
  0x00, // v128.load
  0x04,
  0x00, // v128.load ??

  0x20,
  0x01, // local.get 01

  0xfd,
  0x00, // v128.load
  0x04,
  0x00, // v128.load ??

  0x20,
  0x04, // local.get 4

  0xfd,
  0x85,
  0x02, //relaxed_madd

  0x21,
  0x04, // local.set 4

  0x20,
  0x00, // local.get 0

  0x41,
  0x10, // i32.const 16

  0x6a, // i32.add

  0x21,
  0x00, // local.set 0

  0x20,
  0x01, // local.get 1

  0x41,
  0x10, // i32.const 16

  0x6a, // i32.add

  0x21,
  0x01, // local.set 1

  0x20,
  0x00, // local.get 0

  0x20,
  0x03, // local.get 3

  0x49, // i32.lt_u

  0x0d,
  0x00, // br_if 0

  0x0b, // end  (loop)
  0x0b, // end  (block)

  0x20,
  0x04, // local.get 4

  0xfd,
  0x1f,
  0x00, // f32x4.extact_lane 0

  0x20,
  0x04, // local.get 4

  0xfd,
  0x1f,
  0x01, // f32x4.extract_lane 1

  0x92, // f32.add

  0x20,
  0x04, // local.get 4

  0xfd,
  0x1f,
  0x02, // f32x4.extract_lane 2

  0x92, // f32.add

  0x20,
  0x04, // local.get 4

  0xfd,
  0x1f,
  0x03, // f32x4.extract_lane 3

  0x92, // f32.add

  // END
  0x0b,
]);
