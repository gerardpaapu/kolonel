# Kolonel

Look, this doesn't make a lot of sense.

I've got some programs the have a hot loop doing normal parallel, byte crunching junk. Like dot products, or pop count or whatever. V8 is pretty flippin good in general at this sort of thing, but
it doesn't have direct access to SIMD features.

So you can write these hot loop functions in assemblyscript or rust or C++ or whatever, and then you just ship the wasm blob and then you're all good.

... but I don't really want a build step on the server, I want to put everything together in the browser.

So you can ... e.g. use WABT to compile directly from WAT. WAT's not my first choice for code but it's totally fine for writing a tiny function that has to be real fast and run in your hot loop.

... but WABT is still, fairly big, it includes a parser and all sorts of crap

So I guess I want to try something that's smaller but less capable than WABT, I don't really want a parser, I just want some usable way to produce WASM bytes in the browser.

So, this library is meant to be a tiny assembler for webassembly that supports, some small subset and produces the WASM bytes directly in the browser with function calls.
