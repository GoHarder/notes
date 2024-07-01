// Function Overloads

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// These are overloads a description of how the function is used.
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return `${a}${b}`;
  }
  return a + b;
}

// Without overloads this type is `string | number`.
const result = add('Gary', ' Coleman');
result.split(' ');

// Optional Chaining

const fetchedUser = {
  id: '',
  firstName: 'Gary',
  //   job: {
  //     title: 'actor',
  //     description: 'A crazy guy in movies.'
  //   },
};

// If fetched user exists then check job
console.log(fetchedUser?.job?.title);

// Nullish Coalescing

const userInput = null;

// If user input is falsy then it will switch to default.
const storedData1 = userInput || 'default';

// If user input is null or undefined then switch to default.
const storedData2 = userInput ?? 'default';
