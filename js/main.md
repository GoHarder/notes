# Javascript <!-- omit in toc -->

## Subjects <!-- omit in toc -->

- [Frameworks](./frameworks.md)
- [JSDoc](./jsooc.md)
- [Node.js](./node.md)
- [TypeScript](./ts/mian.md)

## Sections <!-- omit in toc -->

- [Arrays](#arrays)
- [Functions](#functions)

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