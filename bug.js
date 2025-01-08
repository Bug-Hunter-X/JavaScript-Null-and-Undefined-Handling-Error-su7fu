function foo(x) {
  if (x === null) {
    return "null";
  }
  return x.toString();
}

console.log(foo(null)); // Output: null
console.log(foo(undefined)); // Output: TypeError: Cannot read properties of undefined (reading 'toString')