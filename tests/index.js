import assert from "assert";
import { add, mul } from "../build/debug.js";
assert.strictEqual(add(1, 2), 3);
assert.strictEqual(mul(10, 5), 50);
console.log("ok");
