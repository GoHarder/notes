# JSDoc <!-- omit in toc -->

[Website jsdoc.app](https://jsdoc.app/)

## Sections <!-- omit in toc -->

- [Adding Types](#adding-types)
- [Function Description](#function-description)
- [Custom Types](#custom-types)
- [Class Description](#class-description)
- [Modules](#modules)
- [Turning On Type Checking](#turning-on-type-checking)
  - [Inside Visual Studio Code](#inside-visual-studio-code)
  - [Inside Individual Files](#inside-individual-files)

## Adding Types

```javascript
/** The students name @type {string} */
const studentName = 'John Doe';

/** The students grades @type {Array<number>} */
const grades = [98, 97.7, 76, 89];

/** An example todo @type {{id: number|string, text: string}} */
const todo = {
   id: 1,
   text: 'Hello',
};
```

## Function Description

```javascript
/**
 * Calculates tax on a price
 * @param {number} amount - The item price
 * @param {number} tax - The tax percentage
 * @returns {string} The total as text
 */
const calculateTax = (amount, tax) => {
   return `$${amount + tax * amount}`;
};

console.log(calculateTax(100, 0.5));
```

## Custom Types

```javascript
/**
 * A student
 * @typedef {Object} Student
 * @property {number} id - The student's id
 * @property {string} name - The student's name
 * @property {string|number} [age] - The student's age (optional)
 * @property {boolean} active - If the student is active
 */

/**
 * The student
 * @type {Student}
 */
const student = {
   id: 1,
   name: 'John Doe',
   age: 20,
   active: true,
};
```

## Class Description

```javascript
/** Class to create a person object */
class Person {
   /** @param {{name: string, age: number }} personInfo - The persons information */
   constructor(personInfo) {
      /** @property {string} name - The persons name */
      this.name = personInfo.name;

      /** @property {number} age - The persons age */
      this.age = personInfo.age;
   }

   /**
    * Creates a greeting
    * @returns {void} A greeting
    */
   greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
   }
}
```

## Modules

```javascript
/**
 * A sandbox module
 * @module sand
 * @author Gary Busey <gbusey@example.com>
 */
```

## Turning On Type Checking

### Inside Visual Studio Code

```json
// Inside your settings.json file
{
   "javascript.implicitProjectConfig.checkJs": true
}
```

### Inside Individual Files

```javascript
// @ts-check
```