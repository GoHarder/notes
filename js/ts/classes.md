# Classes <!-- omit in toc -->

TypeScript has some features to write classes.

## Sections <!-- omit in toc -->

- [Constructor Functions \& The `this` Keyword](#constructor-functions--the-this-keyword)
- [`private` and `public` Access Modifiers](#private-and-public-access-modifiers)
  - [Shorthand Initialization](#shorthand-initialization)
- [`readonly` Properties](#readonly-properties)
- [Overriding Properties \& The `protected` Modifier](#overriding-properties--the-protected-modifier)
- [Static Methods \& Properties](#static-methods--properties)
- [Abstract Classes](#abstract-classes)
- [Singletons \& Private Constructors](#singletons--private-constructors)

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

## `readonly` Properties

Properties in a class can be set to `readonly` to prevent changes.

```TypeScript
class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  //...
}

const engineering = new Department('eng', 'engineering');

// Errors it can be read but not overwritten.
engineering.id = 'tacos';
```

## Overriding Properties & The `protected` Modifier

In some situations the private modifier is too strict. You can use the protected modifier instead.

```TypeScript
class Department {
  // This was the original setting but it didn't work for the extended class.
  // private employees: string[] = [];
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  //...

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  //...
}

class ItDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Information Technology');
  }

  // Overrides the `Department` version.
  addEmployee(name: string) {
    if (name === 'Quintin') return;
    // Not valid if employees is `private` change to `protected`.
    this.employees.push('name');
  }
}
```

## Static Methods & Properties

Static methods and properties behave like the Math object in javascript.
This will be useful to create different types of classes.

```TypeScript
class Department {
  constructor(private readonly id: string, public name: string) {}

  //...

  static createEmployee(name: string) {
    return { name };
  }

  //...
}

const steve = Department.createEmployee('Steve');
```

## Abstract Classes

Abstract classes are a special class in type script. This class is only allowed to he inherited. This class can state what properties or methods that are required in its children.

```TypeScript
// Can only be inherited
abstract class Department {
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  // This method is required in the child.
  abstract describe(this: Department): void;

  //...
}

class EngDepartment extends Department {
  constructor(id: string, public managers: string[]) {
    super(id, 'engineering');
  }

  // This method fulfills the requirement from the parent.
  describe() {
    console.log(`Department ${this.id}: ${this.name}`);
  }
}
```

## Singletons & Private Constructors