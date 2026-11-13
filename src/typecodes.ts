// https://webassembly.github.io/spec/core/binary/types.html

/*
𝚗𝚞𝚖𝚝𝚢𝚙𝚎	
::=	𝟶𝚡𝟽𝙲		⇒		𝖿𝟨𝟦	
|	𝟶𝚡𝟽𝙳		⇒		𝖿𝟥𝟤	
|	𝟶𝚡𝟽𝙴		⇒		𝗂𝟨𝟦	
|	𝟶𝚡𝟽𝙵		⇒		𝗂𝟥𝟤	
*/

export const NUMTYPE_F64 = 0x7c as const;
export const NUMTYPE_F32 = 0x7b as const;
export const NUMTYPE_I64 = 0x7e as const;
export const NUMTYPE_I32 = 0x7f as const;

export type NumberType =
  | typeof NUMTYPE_F64
  | typeof NUMTYPE_F32
  | typeof NUMTYPE_I64
  | typeof NUMTYPE_I32;

/*
𝚟𝚎𝚌𝚝𝚢𝚙𝚎	::=	𝟶𝚡𝟽𝙱		⇒		𝗏𝟣𝟤𝟪 
*/
export const VECTORTYPE_V128 = 0x7b as const;
export type VectorType = typeof VECTORTYPE_V128;

/*
𝚊𝚋𝚜𝚑𝚎𝚊𝚙𝚝𝚢𝚙𝚎
::=	𝟶𝚡𝟼𝟿		⇒		𝖾𝗑𝗇			
|	𝟶𝚡𝟼𝙰		⇒		𝖺𝗋𝗋𝖺𝗒			
|	𝟶𝚡𝟼𝙱		⇒		𝗌𝗍𝗋𝗎𝖼𝗍			
|	𝟶𝚡𝟼𝙲		⇒		𝗂𝟥𝟣			
|	𝟶𝚡𝟼𝙳		⇒		𝖾𝗊			
|	𝟶𝚡𝟼𝙴		⇒		𝖺𝗇𝗒			
|	𝟶𝚡𝟼𝙵		⇒		𝖾𝗑𝗍𝖾𝗋𝗇			
|	𝟶𝚡𝟽𝟶		⇒		𝖿𝗎𝗇𝖼			
|	𝟶𝚡𝟽𝟷		⇒		𝗇𝗈𝗇𝖾			
|	𝟶𝚡𝟽𝟸		⇒		𝗇𝗈𝖾𝗑𝗍𝖾𝗋𝗇			
|	𝟶𝚡𝟽𝟹		⇒		𝗇𝗈𝖿𝗎𝗇𝖼			
|	𝟶𝚡𝟽𝟺		⇒		𝗇𝗈𝖾𝗑𝗇			

𝚑𝚎𝚊𝚙𝚝𝚢𝚙𝚎
::=	ht:𝚊𝚋𝚜𝚑𝚎𝚊𝚙𝚝𝚢𝚙𝚎		⇒		ht			
|	𝑥:𝚜𝟹𝟹		⇒		𝑥		if 𝑥≥0	
*/
export const ABS_HEAPTYPE_EXN = 0x69 as const;
export const ABS_HEAPTYPE_ARRAY = 0x6a as const;
export const ABS_HEAPTYPE_STRUCT = 0x6c as const;
export const ABS_HEAPTYPE_I31 = 0x6c as const;
export const ABS_HEAPTYPE_EQ = 0x6d as const;
export const ABS_HEAPTYPE_ANY = 0x6e as const;
export const ABS_HEAPTYPE_EXTERN = 0x6f as const;
export const ABS_HEAPTYPE_FUNC = 0x70 as const;
export const ABS_HEAPTYPE_NONE = 0x71 as const;
export const ABS_HEAPTYPE_NOEXTERN = 0x72 as const;
export const ABS_HEAPTYPE_NOFUNC = 0x73 as const;
export const ABS_HEAPTYPE_NOEXN = 0x74 as const;

export type AbstractHeapType =
  | typeof ABS_HEAPTYPE_EXN
  | typeof ABS_HEAPTYPE_ARRAY
  | typeof ABS_HEAPTYPE_STRUCT
  | typeof ABS_HEAPTYPE_I31
  | typeof ABS_HEAPTYPE_EQ
  | typeof ABS_HEAPTYPE_ANY
  | typeof ABS_HEAPTYPE_EXTERN
  | typeof ABS_HEAPTYPE_FUNC
  | typeof ABS_HEAPTYPE_NONE
  | typeof ABS_HEAPTYPE_NOEXTERN
  | typeof ABS_HEAPTYPE_NOFUNC
  | typeof ABS_HEAPTYPE_NOEXN;

/**
 * positive signed integer as s33
 */
export type HeapTypeSize = number;

// TODO: I want to put a discriminant here
export type HeapType = AbstractHeapType | HeapTypeSize;

export type ValueType = NumberType | VectorType | RefType;
export type ListOf<T> = { __value: T[] };
export type ResultType = ListOf<ValueType>;

// TODO: normalise this unicode mathematical monospace small nonsense
/*
𝚖𝚞𝚝         ::= 𝟶𝚡𝟶𝟶                      ⇒ 𝜖
            |   𝟶𝚡𝟶𝟷                      ⇒ 𝗆𝗎𝗍
𝚌𝚘𝚖𝚙𝚝𝚢𝚙𝚎    ::= 𝟶𝚡𝟻𝙴  ft:𝚏𝚒𝚎𝚕𝚍𝚝𝚢𝚙𝚎	      ⇒ 𝖺𝗋𝗋𝖺𝗒 ft	
            |   𝟶𝚡𝟻𝙵  ft∗:𝚕𝚒𝚜𝚝(𝚏𝚒𝚎𝚕𝚍𝚝𝚢𝚙𝚎) ⇒ 𝗌𝗍𝗋𝗎𝖼𝗍 ft∗	
            |   𝟶𝚡𝟼𝟶  𝑡∗1:𝚛𝚎𝚜𝚞𝚕𝚝𝚝𝚢𝚙𝚎  𝑡∗2:𝚛𝚎𝚜𝚞𝚕𝚝𝚝𝚢𝚙𝚎 ⇒ 𝖿𝗎𝗇𝖼 𝑡∗1→𝑡∗2	
𝚏𝚒𝚎𝚕𝚍𝚝𝚢𝚙𝚎   ::= zt:𝚜𝚝𝚘𝚛𝚊𝚐𝚎𝚝𝚢𝚙𝚎  𝗆𝗎𝗍?:𝚖𝚞𝚝   ⇒ 𝗆𝗎𝗍? zt	
𝚜𝚝𝚘𝚛𝚊𝚐𝚎𝚝𝚢𝚙𝚎 ::= 𝑡:𝚟𝚊𝚕𝚝𝚢𝚙𝚎                  ⇒ 𝑡	
            |   pt:𝚙𝚊𝚌𝚔𝚝𝚢𝚙                 ⇒ pt
𝚙𝚊𝚌𝚔𝚝𝚢𝚙𝚎    ::= 𝟶𝚡𝟽𝟽                       ⇒𝗂𝟣𝟨	
            | 𝟶𝚡𝟽𝟾                         ⇒ 𝗂𝟪
*/

export const COMPTYPE_EPSILON = 0x00 as const;
export const COMPTYPE_MUT = 0x01 as const;
export const COMPTYPE_TAG_ARRAY = 0x5e;
export const COMPTYPE_TAG_STRUCT = 0x5f;
export const COMPTYPE_TAG_FUNC = 0x60;

export const COMPTYPE_PACKTYPE_I16 = 0x77;
export const COMPTYPE_PACKTYPE_I8 = 0x78;

export type PackType = typeof COMPTYPE_PACKTYPE_I16 | typeof COMPTYPE_PACKTYPE_I8;

export type StorageType = ValueType | PackType;
export type Mut = typeof COMPTYPE_EPSILON | typeof COMPTYPE_MUT;

export type FieldType<TStorage extends StorageType = StorageType, TMutable extends Mut = Mut> = {
  tag: TStorage;
  mut: TMutable;
};

export type ArrayType<TStorage extends StorageType = StorageType, TMutable extends Mut = Mut> = {
  tag: typeof COMPTYPE_TAG_ARRAY;
  param: FieldType<TStorage, TMutable>;
};

export type StructType<
  TStorage extends StorageType = StorageType,
  TMutable extends Mut = Mut,
  TFields extends ListOf<FieldType<TStorage, TMutable>> = ListOf<FieldType<TStorage, TMutable>>,
> = { tag: typeof COMPTYPE_TAG_STRUCT; param: TFields };

export type FuncType<
  TParams extends ResultType = ResultType,
  TResult extends ResultType = ResultType,
> = {
  tag: typeof COMPTYPE_TAG_FUNC;
  params: TParams;
  results: TResult;
};

export type CompType = FuncType | StructType | ArrayType;

/*

𝚛𝚎𝚌𝚝𝚢𝚙𝚎
::=	𝟶𝚡𝟺𝙴  st∗:𝚕𝚒𝚜𝚝(𝚜𝚞𝚋𝚝𝚢𝚙𝚎)		⇒		𝗋𝖾𝖼 st∗	
|	st:𝚜𝚞𝚋𝚝𝚢𝚙𝚎		⇒		𝗋𝖾𝖼 st	
𝚜𝚞𝚋𝚝𝚢𝚙𝚎	::=	𝟶𝚡𝟺𝙵  𝑥∗:𝚕𝚒𝚜𝚝(𝚝𝚢𝚙𝚎𝚒𝚍𝚡)  ct:𝚌𝚘𝚖𝚙𝚝𝚢𝚙𝚎		⇒		𝗌𝗎𝖻 𝖿𝗂𝗇𝖺𝗅 𝑥∗ ct	
|	𝟶𝚡𝟻𝟶  𝑥∗:𝚕𝚒𝚜𝚝(𝚝𝚢𝚙𝚎𝚒𝚍𝚡)  ct:𝚌𝚘𝚖𝚙𝚝𝚢𝚙𝚎		⇒		𝗌𝗎𝖻 𝑥∗ ct	
|	ct:𝚌𝚘𝚖𝚙𝚝𝚢𝚙𝚎		⇒		𝗌𝗎𝖻 𝖿𝗂𝗇𝖺𝗅 𝜖 ct	 
*/
export const RECTYPE_LIST = 0x4e as const;
export const RECTYPE_SUB_FINAL = 0x4f as const;
export const RECTYPE_SUB = 0x50 as const;

export type Rectype<
  TCompType extends CompType = CompType,
  TSubTypeList extends ListOf<SubType> = ListOf<SubType>,
> = { tag: typeof RECTYPE_LIST; t: TSubTypeList; ct: TCompType } | SubType;

export type SubType = { tag: typeof RECTYPE_SUB_FINAL };

/*
𝚕𝚒𝚖𝚒𝚝𝚜
::=	𝟶𝚡𝟶𝟶  𝑛:𝚞𝟼𝟺		⇒		(𝗂𝟥𝟤,[𝑛..𝜖])	
|	𝟶𝚡𝟶𝟷  𝑛:𝚞𝟼𝟺  𝑚:𝚞𝟼𝟺		⇒		(𝗂𝟥𝟤,[𝑛..𝑚])	
|	𝟶𝚡𝟶𝟺  𝑛:𝚞𝟼𝟺		⇒		(𝗂𝟨𝟦,[𝑛..𝜖])	
|	𝟶𝚡𝟶𝟻  𝑛:𝚞𝟼𝟺  𝑚:𝚞𝟼𝟺		⇒		(𝗂𝟨𝟦,[𝑛..𝑚])	 
*/
export const LIMIT_TAG_I32_OPEN = 0x00 as const;
export const LIMIT_TAG_I32 = 0x01 as const;
export const LIMIT_TAG_I64_OPEN = 0x04 as const;
export const LIMIT_TAG_I64 = 0x05 as const;

export type LimitI32Open = { tag: typeof LIMIT_TAG_I32_OPEN; min: bigint };
export type LimitI32 = { tag: typeof LIMIT_TAG_I32; min: bigint; max: bigint };
export type LimitI64Open = { tag: typeof LIMIT_TAG_I64_OPEN; min: bigint };
export type LimitI64 = { tag: typeof LIMIT_TAG_I64; min: bigint; max: bigint };
export type Limits = LimitI32 | LimitI32Open | LimitI64 | LimitI64Open;

export type TypeIndex<T extends number = number> = T;
export type TableType<TRef extends RefType = RefType, TLimit extends Limits = Limits> = {
  ref: TRef;
  limits: TLimit;
};

export const REFTYPE_TAG_NULL = 0x63 as const;
export const REFTYPE_TAG_ = 0x64 as const;

export type RefType =
  | { tag: typeof REFTYPE_TAG_NULL; ht: HeapType }
  | { tag: typeof REFTYPE_TAG_; ht: HeapType }
  | { tag: undefined; ht: AbstractHeapType };

export type AddrType = bigint;

export type MemType = { addrType: AddrType; limits: Limits };
export type GlobalType = { mut: Mut; value: ValueType };
/*
𝚝𝚊𝚐𝚝𝚢𝚙𝚎	::=	𝟶𝚡𝟶𝟶  𝑥:𝚝𝚢𝚙𝚎𝚒𝚍𝚡		⇒		𝑥	
 */
export type TagType<T extends TypeIndex> = [0x00, T];

// External types

/*
𝚎𝚡𝚝𝚎𝚛𝚗𝚝𝚢𝚙𝚎
::=	𝟶𝚡𝟶𝟶  𝑥:𝚝𝚢𝚙𝚎𝚒𝚍𝚡		⇒		𝖿𝗎𝗇𝖼 𝑥	
|	𝟶𝚡𝟶𝟷  tt:𝚝𝚊𝚋𝚕𝚎𝚝𝚢𝚙𝚎		⇒		𝗍𝖺𝖻𝗅𝖾 tt	
|	𝟶𝚡𝟶𝟸  mt:𝚖𝚎𝚖𝚝𝚢𝚙𝚎		⇒		𝗆𝖾𝗆 mt	
|	𝟶𝚡𝟶𝟹  gt:𝚐𝚕𝚘𝚋𝚊𝚕𝚝𝚢𝚙𝚎		⇒		𝗀𝗅𝗈𝖻𝖺𝗅 gt	
|	𝟶𝚡𝟶𝟺  jt:𝚝𝚊𝚐𝚝𝚢𝚙𝚎		⇒		𝗍𝖺𝗀 jt
*/
export const EXTERN_TYPE_FUNC = 0x00;
export const EXTERN_TYPE_TABLE = 0x01;
export const EXTERN_TYPE_MEMTYPE = 0x02;
export const EXTERN_TYPE_GLOBAL = 0x03;
export const EXTERN_TYPE_TAG = 0x04;

export type ExternTypeFunc<T extends TypeIndex = TypeIndex> = {
  tag: typeof EXTERN_TYPE_FUNC;
  t: T;
};

export type ExternTypeTable<TTableType extends TableType = TableType> = {
  tag: typeof EXTERN_TYPE_TABLE;
  t: TTableType;
};

export type ExternTypeMem = { tag: typeof EXTERN_TYPE_MEMTYPE; t: MemType };
export type ExternTypeGlobal = { tag: typeof EXTERN_TYPE_GLOBAL; t: GlobalType };
export type ExternTypeTag<T extends TypeIndex = TypeIndex> = {
  tag: typeof EXTERN_TYPE_TAG;
  t: TagType<T>;
};

export type ExternType =
  | ExternTypeFunc
  | ExternTypeTable
  | ExternTypeMem
  | ExternTypeGlobal
  | ExternTypeTag;
