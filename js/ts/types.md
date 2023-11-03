# Types <!-- omit in toc -->

The types within TypeScript share the same types in Javascript with a few additional types.

## Sections <!-- omit in toc -->

- [Tuples](#tuples)
- [Enums](#enums)
- [Unions](#unions)
- [Literal Types](#literal-types)
- [Aliases](#aliases)
- [Functions as Types](#functions-as-types)
- [Functions Types \& Callbacks](#functions-types--callbacks)
- [Unknown Type](#unknown-type)
- [Never Type](#never-type)

## Tuples

A regular array can be expressed like below.

```TypeScript
const special: string[] = ['Neil Diamond', 'Frank Zappa'];
```

This will work but if you want to determine what order and the length of the array you can use a tuple.
The array below will allow two items in the array a number followed by a string.

```TypeScript
const musician: [number, string] = [1, 'Frank Zappa'];
```
## Enums

Enums as I understand it as of now are a set of standard strings.
It's like an object that is keyed by a number.

```TypeScript
enum Role { ADMIN, READ_ONLY, AUTHOR }

type Person = {
  name: string;
  age: number;
  hobbies: string[];
  role: Role; // Limits to items inside of `Role`
};

const person: Person = {
  name: 'Les Claypool',
  age: 40,
  hobbies: ['bass guitar', 'sailing seas of cheese'],
  role: Role.AUTHOR,
};
```

The enum code above gets converted to the Javascript below.

```JavaScript
let Role;

(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));

const person = {
    name: 'Les Claypool',
    age: 40,
    hobbies: ['bass guitar', 'sailing seas of cheese'],
    role: Role.AUTHOR,
};
```

## Unions

Unions allow the parameters in this function to allow different types, a number or a string.

```TypeScript
const combine1 = (n1: number | string, n2: number | string) => {
  let result;

  // Type script requires you clean your types.
  // You can't add a number and a string.
  // 0 + '5'
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }

  return result;
};
```

## Literal Types

Literal types are similar to unions but reduce a variable to a specific value.
The example below limits `output` to `'as-number'` or `'as-string'`.

```TypeScript
const combine2 = (n1: number | string, n2: number | string, output: 'as-number' | 'as-string') => {
  let result;

  // Type script requires you clean your types.
  // You can't add a number and a string.
  n1 = `${n1}`;
  n2 = `${n2}`;
  result = n1 + n2;

  if (output === 'as-number') {
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    result = n1 + n2;
  }

  return result;
};
```

## Aliases

Aliases can be used to reduce the amount of code that needs to be typed.
Below the parameter types are aliased to reduce the quantity of typing.

```TypeScript
type CombineInput = number | string;
type CombineOutput = 'as-number' | 'as-string';

const combine = (n1: CombineInput, n2: CombineInput, output: CombineOutput) => {
  let result;

  n1 = `${n1}`;
  n2 = `${n2}`;
  result = n1 + n2;

  if (output === 'as-number') {
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    result = n1 + n2;
  }

  return result;
};
```

## Functions as Types

Variables that are functions can be set up with types.

```TypeScript
const add = (n1: number, n2: number) => {
  return n1 + n2;
};

const printNumber = (num: number) => {
  console.log(num);
};

// This variable is typed to a specific function.
let combineValues: (n1: number, n2: number) => number;

combineValues = add;
// Errors
// combineValues = printNumber;
```

The `combineValues` variables is converted to normal syntax.

```JavaScript
let combineValues;

combineValues = add;
```

## Functions Types & Callbacks

Callbacks in a function can also be described. The callback in this function is described.

```TypeScript
const addAndPrint = (n1: number, n2: number, cb: (num: number) => void) => {
  const num = add(n1, n2);
  cb(num);
};

// The `printNumber` function matches the callback parameter type
const test = addAndPrint(10, 20, printNumber);
```

## Unknown Type

An unknown type can be used if a value coming in is unclear. A use case is shown below.

```TypeScript
let userInput: unknown;
let userName: string;

userInput = 'Gary';

// Unknown can't be assigned to string.
// userName = userInput;

// Check the type before using.
if (typeof userInput === 'string') {
  userName = userInput;
}
```

## Never Type

Sometimes a function will never return anything like when it throws an error.

```TypeScript
// app.ts
const generateError = (message: string, code: number) => {
  throw { message, code };
};
```

```TypeScript
// types.d.ts
// Inside the types file it shows the function returning never
declare const generateError: (message: string, code: number) => never;
```