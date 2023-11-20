# Interfaces <!-- omit in toc -->

Interfaces are a way to describe objects.

```TypeScript
interface Person {
  name: string;
  age: number;
  greet(text: string): void;
}

const user1: Person = {
  name: 'Gary',
  age: 37,
  greet(text: string) {
    console.log(`${text} ${this.name}`);
  },
};
```

## Sections <!-- omit in toc -->

- [Using Interfaces with Classes](#using-interfaces-with-classes)
- [Readonly Properties](#readonly-properties)
- [Extending Interfaces](#extending-interfaces)
- [Interfaces as Function Types](#interfaces-as-function-types)
- [Optional Parameters \& Properties](#optional-parameters--properties)

## Using Interfaces with Classes

It's able to describe classes.

```TypeScript
interface Communicate {
  name: string;
  greet(text: string): void;
}

class Person implements Communicate {
  public age: number;

  constructor(public name: string) {
    this.age = 0;
  }

  greet(text: string) {
    console.log(`${text} ${this.name}`);
  }
}

let user: Person;
user = new Person('Gary');
```

## Readonly Properties

Interface properties can be set to read only.

```TypeScript
interface Communicate {
  readonly name: string;
  greet(text: string): void;
}
```

## Extending Interfaces

Interfaces can be extended like classes.

```TypeScript
interface Named {
  readonly name: string;
}

interface Communicate extends Named {
  greet(text: string): void;
}

class Person implements Communicate {
  //...
}
```

## Interfaces as Function Types

Interfaces can also explain functions and is another way to add function overloads.

```TypeScript
interface AddFx {
  (a: number, b: number): number;
}

let add: AddFx;

add = (a: number, b: number) => {
  return a + b;
};
```

## Optional Parameters & Properties

Properties can be optional by adding a `?`.

```TypeScript
interface Named {
  readonly name: string;
  nickname?: string;
}
```