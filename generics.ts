// Built-in Generics & What are Generics?

const names1: Array<string> = ['Ben', 'Jerry'];
const names2: string[] = ['Ben', 'Jerry'];

const promise1: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved');
  });
});

promise1.then((data) => {
  data.split('');
});

// Creating a Generic Function

function merge<A, B>(objA: A, objB: B) {
  return { ...objA, ...objB };
}

const merged = merge({ name: 'Gary' }, { age: 40 });

merged.name;

// Working with Constraints

// makes sure a and b are objects
function merge<A extends object, B extends object>(objA: A, objB: B) {
  return { ...objA, ...objB };
}

const merged = merge({ name: 'Gary' }, { age: 40 });

merged.name;

// Another Generic Function

interface HasLength {
  length: number;
}

function countAndPrint<T1 extends HasLength>(element: T1): [T1, string] {
  let msg = 'Element does not have a length';

  if (element.length) {
    msg = `Element length is ${element.length}`;
  }

  return [element, msg];
}

// The `keyof` Constraint

function extractAndConvert<T1 extends object>(obj: T1, key: keyof T1) {
  return `${String(key)}: ${obj[key]}`;
}

extractAndConvert({ name: 'Gary' }, 'name');

// Generic Classes

class DataStore<T1 extends string | number | boolean> {
  private data: T1[] = [];

  addItem(item: T1) {
    this.data.push(item);
  }

  removeItem(item: T1) {
    const index = this.data.indexOf(item);
    this.data.splice(index, 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStore = new DataStore<string>();
textStore.addItem('string');

const objStore = new DataStore<object>();
objStore.addItem({ name: 'Gary' });
objStore.addItem({ name: 'Steve' });

objStore.removeItem({ name: 'Gary' });

console.log(objStore.getItems());

// Generic Utility Types

// Partial

interface Goal {
  title: string;
  description: string;
  completionDate: Date;
}

const createGoal = (title: string, description: string, completionDate: Date): Goal => {
  let goal: Partial<Goal> = {};
  goal.title = title;
  goal.description = description;
  goal.completionDate = completionDate;
  return goal as Goal;
};

// Readonly

const names: Readonly<string[]> = ['Gary', 'Steve'];
names.push('Larry');

// https://www.typescriptlang.org/docs/handbook/utility-types.html

// Generic Types vs Union Types

class DataStore<T1 extends string | number | boolean> {
  private data: T1[] = [];

  addItem(item: T1) {
    this.data.push(item);
  }

  removeItem(item: T1) {
    const index = this.data.indexOf(item);
    this.data.splice(index, 1);
  }

  getItems() {
    return [...this.data];
  }
}

// This behaves differently
class DataStore {
  private data: string[] | number[] | boolean[] = [];

  addItem(item: string | number | boolean) {
    this.data.push(item);
  }

  removeItem(item: string | number | boolean) {
    const index = this.data.indexOf(item);
    this.data.splice(index, 1);
  }

  getItems() {
    return [...this.data];
  }
}
