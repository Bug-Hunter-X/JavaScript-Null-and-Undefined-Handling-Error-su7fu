# JavaScript Null and Undefined Handling

This repository demonstrates a common error in JavaScript related to handling `null` and `undefined` values.

The `bug.js` file contains code that incorrectly handles these values, resulting in a `TypeError`. The `bugSolution.js` file provides a corrected version.

## Problem

The original code attempts to call the `toString()` method on a variable that might be `null` or `undefined`. This leads to a runtime error if the variable is `undefined`.

## Solution

The solution involves explicitly checking for both `null` and `undefined` values before attempting to access properties or call methods.