# object-line-finder
Search for line number using an object's key

## Table of Contents:

* [Getting Started](#Gettingstarted)
* [Additional information](#additional)
* [Contributing](#Contributing)

## Getting Started <a name="Gettingstarted"></a>

## How To Install

Run:

```bash
npm i
```

# Additional information <a name="additional"></a>

This [Stackoverflow link](https://stackoverflow.com/questions/280713/elements-order-in-a-for-in-loop) talks about how elements of an object are looped in the order they are declared if all the keys are strings. However, keys that are numbers are always first.

Jest somehow adds an additional `default` key that maps to the entire object. This causes the code to break. A temporary fix is to exclude the default key when doing the checks.

```typescript
if (key === 'default') { break; }
```

# Contributing <a name="Contributing"></a>

We welcome community contributions and pull requests.

The repo uses TypeScript. To compile, run:

```bash
npm run start
```
