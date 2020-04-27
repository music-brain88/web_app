import * as wasm from './react_rust_wasm_bg.wasm';

const lTextDecoder = typeof TextDecoder === 'undefined' ? require('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
*/
export function big_computation() {
    wasm.big_computation();
}

export const __wbg_alert_e3f8b32a72cc3799 = function(arg0, arg1) {
    alert(getStringFromWasm0(arg0, arg1));
};

