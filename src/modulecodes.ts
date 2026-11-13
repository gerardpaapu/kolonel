// https://webassembly.github.io/spec/core/binary/modules.html

// TODO: add a stamp to each of these
export type TypeIndex = number;
export type FuncIndex = number;
export type TableIndex = number;
export type MemIndex = number;
export type GlobalIndex = number;
export type TagIndex = number;
export type ElemIndex = number;
export type DataIndex = number;
export type LocalIndex = number;
export type FieldIndex = number;
export type LabelIndex = number;

export type ExternIndex =
  | { tag: 0x00; idx: FuncIndex }
  | { tag: 0x01; idx: TableIndex }
  | { tag: 0x02; idx: MemIndex }
  | { tag: 0x03; idx: GlobalIndex }
  | { tag: 0x04; idx: TagIndex };

// Section ids
export const SECTION_CUSTOM = 0 as const;
export const SECTION_TYPE = 1 as const;
export const SECTION_IMPORT = 2 as const;
export const SECTION_FUNCTION = 3 as const;
export const SECTION_TABLE = 4 as const;
export const SECTION_MEMORY = 5 as const;
export const SECTION_GLOBAL = 6 as const;
export const SECTION_EXPORT = 7 as const;
export const SECTION_START = 8 as const;
export const SECTION_ELEMENT = 9 as const;
export const SECTION_CODE = 10 as const;
export const SECTION_DATA = 11 as const;
export const SECTION_DATA_COUNT = 12 as const;
export const SECTION_TAG = 13 as const;
