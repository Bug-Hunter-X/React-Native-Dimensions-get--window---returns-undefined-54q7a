# React Native Dimensions.get('window') returns undefined

This repository demonstrates a common but uncommonly documented bug in React Native where `Dimensions.get('window')` can return `undefined`, leading to unexpected behavior or crashes. The bug and its solution are provided in separate JavaScript files.

## Bug

The `bug.js` file shows an example of how using `Dimensions.get('window')` without proper error handling can lead to issues.  If the dimensions aren't available immediately, the component will display undefined values for width and height.

## Solution

The `bugSolution.js` file demonstrates a corrected version that robustly handles the case where the dimensions are initially `undefined`.  It uses optional chaining and a default value to prevent errors.

## How to reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npx react-native run-android` (or `npx react-native run-ios`).
4. Observe the behavior of both components.  The bug version may display 'undefined' width and height initially.