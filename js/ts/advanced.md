# Classes <!-- omit in toc -->

## Sections <!-- omit in toc -->

- [Intersection Types](#intersection-types)
- [Type Guards](#type-guards)
- [Discriminated Unions](#discriminated-unions)
- [Type Casting](#type-casting)
- [Index Properties](#index-properties)
- [Function Overloads](#function-overloads)
- [Optional Chaining](#optional-chaining)
- [Nullish Coalescing](#nullish-coalescing)

## Intersection Types

These types can combine existing types together.

In the example below the two types above are glued together.

```TypeScript
interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

type AdminEmployee = Admin & Employee;

const person: AdminEmployee = {
  name: 'Gary',
  privileges: ['create-server'],
  startDate: new Date(),
};
```

There is the possibility to pick the intersection of two types.

```TypeScript
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// Can only be a number since number is the only common one.
let test: Universal;

test = 8;
```

## Type Guards

Type guards can narrow down the above types.

```TypeScript
type UnknownEmployee = Admin | Employee;

function logInfo(employee: UnknownEmployee) {
  console.log(`Name: ${employee.name}`);

  // Since privileges is in the employee then that property can be used.
  if ('privileges' in employee) {
    console.log(`Privileges: ${employee.privileges}`);
  }
}
```

```TypeScript
type Combinable = string | number;

function add(a: Combinable, b: Combinable) {
  // This type guard can figure out if it is a string or number.
  if (typeof a === 'string' || typeof b === 'string') {
    return `${a}${b}`;
  }

  return a + b;
}
```

```TypeScript
abstract class Vehicle {
  drive() {
    console.log('Driving');
  }
}

class Car extends Vehicle {}

class Truck extends Vehicle {
  loadCargo(amt: number) {
    console.log(`Loading ${amt} cargo`);
  }
}

type Transportation = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (inst: Vehicle) => {
  if (inst instanceof Truck) {
    inst.loadCargo(1);
  }

  if (inst instanceof Vehicle) {
    inst.drive();
  }
};
```

## Discriminated Unions

It is a good practice to have a common property between different types.

```TypeScript
interface Bird {
  type: 'bird';
  airSpeed: number;
}

interface Horse {
  type: 'horse';
  groundSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  let speed: number;
  switch (animal.type) {
    case 'bird':
      speed = animal.airSpeed;
      break;
    case 'horse':
      speed = animal.groundSpeed;
      break;
  }
  console.log(`Animal speed ${speed}`);
};
```

## Type Casting

```TypeScript
// The ! after the method call removes the null result.
const input1 = <HTMLInputElement>document.getElementById('input-1')!;
const input2 = document.getElementById('input-2') as HTMLInputElement;

input1.value = 'Ding';
input2.value = 'Ding';
```

## Index Properties

```TypeScript
interface ErrorContainer {
  [prop: string]: string;
}

const error1: ErrorContainer = {
  email: 'dKennedy@email.com',
  detail: 'User does not exist',
};
```

## Function Overloads

## Optional Chaining

## Nullish Coalescing