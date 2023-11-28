# Javascript <!-- omit in toc -->

## Subjects <!-- omit in toc -->

- [Frameworks](./frameworks.md)
- [JSDoc](./jsooc.md)
- [Node.js](./node.md)
- [TypeScript](./ts/mian.md)

## Sections <!-- omit in toc -->

- [2023 Features](#2023-features)
- [Arrays](#arrays)
- [Functions](#functions)
- [Booleans](#booleans)
  - [Negation Operator](#negation-operator)
  - [Checking for `undefined` and `null`](#checking-for-undefined-and-null)

---

## 2023 Features

```JavaScript
const ppl = [
  { name: 'John', age: 2 },
  { name: 'Jane', age: 19 },
  { name: 'Jeff', age: 69 },
];

const organized = Object.groupBy(ppl, ({age}) => {
  if (age >= 21) {
    return 'adult'
  } else {
    return 'child'
  }
})
```

```JavaScript
// Does not mutate original array
// toReversed
// toSorted
// toSpliced
```
---

## Arrays

Sort items by string

```js
/**
 * It sorts an array of objects by the value of the `name` property.
 * @param docs - The array of documents to sort.
 */
const sortName = (docs) =>
   docs.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
   });
```
---

## Functions

Create a function from text

```js
let partNumber = {
   code: 'const diaStr = dia < 25 ? 22 : 25;return `XX-XX-1-${hand}-622${diaStr}`;',
   scope: {
      args: ['hand', 'dia'],
   },
};

partNumber = new Function(...partNumber.scope.args, partNumber.code);

console.log(partNumber('R', 22));
```

## Booleans

### Negation Operator

Booleans behave differently when you add a negation operator.

`!!` converts a truthy or falsy value to a boolean.

| `value`     | `!value` | `!!value` |
| ----------- | -------- | --------- |
| `false`     | true     | false     |
| `true`      | false    | true      |
| `null`      | true     | false     |
| `undefined` | true     | false     |
| `0`         | true     | false     |
| `-0`        | true     | false     |
| `1`         | false    | true      |
| `-5`        | false    | true      |
| `NaN`       | true     | false     |
| `''`        | true     | false     |
| `'hello'`   | false    | true      |

### Checking for `undefined` and `null`

```JavaScript
// This checks for null and undefined.
if (value != null) {
  //...
}
```
