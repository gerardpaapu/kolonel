#!/bin/env node
import * as FS from 'node:fs';
import * as RL from 'node:readline/promises';


const path = './data/opcode.def';

const START = 'WABT_OPCODE(';
const END = ')'

/*
 *     tr1: result type
 *     tr2: second result type (for instructions that return 2 values)
 *     t1: type of the 1st parameter
 *     t2: type of the 2nd parameter
 *     t3: type of the 3rd parameter
 *         (___ = no parameter; Any = the parameter exists but its type is not
 *         statically known, e.g. table.set's value comes from the table type)
 *      m: memory size of the operation, if any
 * prefix: the 1-byte opcode prefix, if any
 *   code: opcode
 *   Name: used to generate the opcode enum
 *   text: a string of the opcode name in the text format
 * decomp: an optional friendly version of text, used for decompilation.
 */

const types_block = `
export const None = "None" as const;
export const I32 = "I32" as const;
export const I64 = "I64" as const;
export const F32 = "F32" as const;
export const F64 = "F64" as const;
export const Any = "Any" as const;
export const V128 = "V128" as const;

export type WasmType =
    | typeof None
    | typeof I32 
    | typeof I64
    | typeof F32
    | typeof F64
    | typeof Any
    | typeof V128;

type Params = 
    | []
    | [WasmType]
    | [WasmType, WasmType]
    | [WasmType, WasmType, WasmType];

export type Operation_shape = {
    /**
     * result type 
     */
    tr: WasmType;
    
    /** 
     * result type 2, for operations that return more than
     * one value
     */
    tr2: WasmType;

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
}
`
process.stdout.write(types_block + '\n');


const names = [];

await using input = FS.createReadStream(path);
using rl = RL.createInterface(input);
for await (const line of rl) {
    if (line.startsWith(START)) {
        let body = line.slice(START.length, -END.length);
        let [
tr,   tr2,   t1,    t2,    t3,    m,  prefix, code,  name, text, decomp

        ] = body.split(', ').map(segment => segment.trim())

        const operation = {
            tr, tr2, t1,t2,t3, m, prefix, code, name, text, decomp
        }

        names.push(name);
        const params = (([t1,t2, t3]).filter(_ => _ !== '___').join(', '));
        process.stdout.write(`
export const ${name} = ({
    tr: ${tr === '___' ? 'None' : tr},
    tr2: ${tr2 === '___' ? 'None' : tr},
    params: [${params}],
    m: ${m},
    prefix: ${prefix},
    name: ${text},
    code: ${code},
} as const);
`);   
    }
}

process.stdout.write(`
export type Operation =
   ${names.map(name => `| typeof ${name}`).join('\n    ')};
    
`)

//process.stdout.write('\n');


