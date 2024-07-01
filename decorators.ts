// Working with Decorator Factories

// Runs when class is defined
function Logger(log: string) {
  return function (target: Function) {
    console.log(`${log} defined`);
    console.log(target);
  };
}

@Logger('Person')
class Person {
  name = 'Gary';

  constructor() {
    console.log('Creating instance...');
  }
}

const person1 = new Person();
console.log(person1);

// Building More Useful Decorators

// Runs when class is defined
function WithTemplate(template: string, hookId: string) {
  return function (target: any, _: any) {
    const hookEl = document.getElementById(hookId);
    const p = new target();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  };
}

@WithTemplate('<h1>Person Object</h1>', 'app')
class Person {
  name = 'Gary';

  constructor() {
    console.log('Creating instance...');
  }
}

const person1 = new Person();
console.log(person1);

// Adding Multiple Decorators
const Logger = (message: string) => {
  console.log('Starting log.');
  return (_: any) => {
    console.log(message);
  };
};

const WithTemplate = (template: string, id: string) => {
  console.log('Starting template.');
  return (constructor: any) => {
    const divEl = document.getElementById(id);
    const inst = new constructor();
    console.log('Adding template.');
    if (divEl) {
      divEl.innerHTML = template;
      divEl.querySelector('p')!.textContent = inst.name;
    }
  };
};

@Logger('Adding log.')
@WithTemplate('<p>Default Text</p>', 'app')
class Person {
  name = 'Gary';

  constructor() {
    console.log('Running constructor.');
  }
}

const person = new Person();

// Diving into Property Decorators

const Log = (target: any, prop: string | Symbol) => {
  console.log('Property decorator');
  console.log(target, prop);
};

class Product {
  @Log
  title: string;
  private _price: number;

  constructor(title: string) {
    this.title = title;
    this._price = 0;
  }

  set price(val: number) {
    if (val < 0) return;
    this._price = val;
  }

  get price() {
    return this._price;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}

// Accessor & Parameter Decorators

const Log1 = (target: any, name: string | Symbol) => {
  console.log(`Property ${name}`);
  console.log(target);
};

const Log2 = (target: any, name: string, descriptor: PropertyDescriptor) => {
  console.log(`Accessor ${name}`);
  console.log(target);
  console.log(descriptor);
};

const Log3 = (target: any, name: string | Symbol, descriptor: PropertyDescriptor) => {
  console.log(`Method ${name}`);
  console.log(target);
  console.log(descriptor);
};

const Log4 = (target: any, name: string | Symbol, position: number) => {
  console.log(`Parameter ${name}`);
  console.log(target);
  console.log(position);
};

class Product {
  @Log1
  title: string;
  private _price: number;

  constructor(title: string) {
    this.title = title;
    this._price = 0;
  }

  @Log2
  set price(val: number) {
    if (val < 0) return;
    this._price = val;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

// When Do Decorators Execute?

// Logs fire when Product is defined.
// const book1 = new Product('Book 1', 19);
// const book2 = new Product('Book 2', 29);

// Returning (and changing) a Class in a Class Decorator

const WithTemplate = (template: string, id: string) => {
  console.log('Starting template.');
  return <Type1 extends { new (...args: any[]): { name: string } }>(constructor1: Type1) => {
    return class extends constructor1 {
      constructor(..._: any[]) {
        super();
        const divEl = document.getElementById(id);
        console.log('Adding template.');
        if (divEl) {
          divEl.innerHTML = template;
          divEl.querySelector('p')!.textContent = this.name;
        }
      }
    };
  };
};

// @Logger('Adding log.')
@WithTemplate('<p>Default Text</p>', 'app')
class Person {
  name = 'Gary';

  constructor() {
    console.log('Running constructor.');
  }
}

const person = new Person();

// console.log(Person);

// Other Decorator Return Types

const Log2 = (target: any, name: string, descriptor: PropertyDescriptor) => {
  // Has return value a new descriptor
  console.log(`Accessor ${name}`);
  console.log(target);
  console.log(descriptor);
};

const Log3 = (target: any, name: string | Symbol, descriptor: PropertyDescriptor) => {
  // Has return value a new descriptor
  console.log(`Method ${name}`);
  console.log(target);
  console.log(descriptor);
};

// Example: Creating an "Autobind" Decorator

function AutoBind(_1: any, _2: string, descriptor: PropertyDescriptor) {
  const rootMethod = descriptor.value;
  const newDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = rootMethod.bind(this);
      return boundFn;
    },
  };
  return newDescriptor;
}

class Printer {
  message = 'Message printing.';

  @AutoBind
  log() {
    console.log(this.message);
  }
}

const p1 = new Printer();

const button = document.querySelector('button')!;
// button.addEventListener('click', p1.log.bind(p1));
button.addEventListener('click', p1.log);

// Validation with Decorators

interface ValidatorOpts {
  [property: string]: {
    [validatableProp: string]: string[];
  };
}

const options: ValidatorOpts = {};

const Horse = (target: any, name: string) => {
  options[target.constructor.name] = {
    [name]: ['required'],
  };
};

const PositiveNumber = (target: any, name: string) => {
  options[target.constructor.name] = {
    [name]: ['positive'],
  };
};

const validate = (obj: any) => {
  const config = options[obj.constructor.name];
  if (!config) return true;
  let valid = true;

  for (const prop in config) {
    const tests = config[prop];

    for (const test of tests) {
      switch (test) {
        case 'required':
          valid = valid && !!obj[prop];
          break;

        case 'positive':
          valid = valid && obj[prop] > 0;
          break;
      }
    }
  }
  return valid;
};

class Course {
  @Horse
  title: string;
  @PositiveNumber
  price: number;

  constructor(title: string, price: number) {
    this.title = title;

    this.price = price;
  }
}

const form = document.getElementById('course-form')!;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const titleInput = document.getElementById('course-title') as HTMLInputElement;
  const priceInput = document.getElementById('course-price') as HTMLInputElement;

  const title = titleInput.value;
  const price = priceInput.valueAsNumber;

  const newCourse = new Course(title, price);

  if (!validate(newCourse)) {
    console.log('invalid');
  }

  console.log(newCourse);
});
