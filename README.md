# Coding Problems

[![Build Status](https://travis-ci.org/haroldtreen/coding-problems.svg?branch=master)](https://travis-ci.org/haroldtreen/coding-problems)

A place to track all the coding problems I do.

### Install

```bash
git clone https://github.com/haroldtreen/coding-problems
cd coding-problems
npm install
```

### Test

Tests are written using `jest` (https://facebook.github.io/jest/docs/getting-started.html#content);

```
npm test
```

### Structure

#### `/hacker-rank`

Each coding problem should export a `main` function.

##### `main(inputLines) -> outputLines`

- `inputLines`: An array of strings from std.in.
- `outputLines`: An array of strings to send to std.out.
