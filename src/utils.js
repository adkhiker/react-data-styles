/*

  This is an example of a module that exports multiple
  functions as a "named exports".

  Other modules that import from this one must use the
  "named import" syntax:

      ex. import { add } from "./utils.js"

  There can be zero or more named exports in a module.

  By the way, what makes a JavaScript source file a "module"?

  The simplest answer is: it exports something!

*/

export function add(...nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result;
}

export function multiply(...nums) {
  let result = 1;
  nums.map(num => {
    result = result * num;
  });
  return result;
}
