# TypeScript <!-- omit in toc -->

## Sections <!-- omit in toc -->

- [Types](#types)
  - [Tuples](#tuples)

## Types

The types within TypeScript share the same types in Javascript with a few additional types.

### Tuples

A regular array can be expressed like below.

```TypeScript
  type SpecialArray = string[];

  const special: SpecialArray = ['Neil Diamond', 'Frank Zappa'];
```

This will work but if you want to determine what order and the length of the array you can use a tuple.

```TypeScript
  type employee = [number, string];

  const frankZappa = [1, 'The Mothers of Invention'];
```
