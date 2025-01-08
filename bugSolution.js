function foo(x) {
  if (x === null || x === undefined) {
    return "null or undefined";
  }
  return x.toString();
}

console.log(foo(null)); // Output: null or undefined
console.log(foo(undefined)); // Output: null or undefined
console.log(foo(5)); // Output: 5
console.log(foo({})); //Output: [object Object] 