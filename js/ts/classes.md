# Classes <!-- omit in toc -->

TypeScript has some features to write classes.

## Sections <!-- omit in toc -->

- [Constructor Functions \& The `this` Keyword](#constructor-functions--the-this-keyword)
- [`private` and `public` Access Modifiers](#private-and-public-access-modifiers)
  - [Shorthand Initialization](#shorthand-initialization)

## Constructor Functions & The `this` Keyword

You can clarify what this is inside a class method.

```TypeScript
class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // The `this` parameter in this method and the `Department`
  // type limit the use to only `Department` objects. 
  describe(this: Department) {
    console.log(`Department ${this.name}`);
  }
}

const engineering = new Department('engineering');

// Errors this use.
// const engineeringCopy = { describe: engineering.describe }
// engineeringCopy.describe()

// Allows this use.
// The copy matches the `Department` type.
const engineeringCopy = { name: 'Contract Engineering', describe: engineering.describe };
engineeringCopy.describe();
```

## `private` and `public` Access Modifiers

Properties in a class object can be controlled with the `private` and `public` keywords.

```TypeScript
class Department {
  // `name` is public by default. No need to label it.
  name: string;
  
  // Can be done in JavaScript with `#employees = [];`.
  // I don't know why TypeScript is different.
  private employees: string[] = [];
  
  constructor(name: string) {
    this.name = name;
  }

  //...
}

// Errors this use case because `employees` is private.
engineering.employees = [];
```

### Shorthand Initialization

The syntax above can be written in a shorter format in the constructor.

```TypeScript
class Department {
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    this.id = id;
    this.name = name;
  }

  //...
}

const engineering = new Department('eng', 'engineering');
```