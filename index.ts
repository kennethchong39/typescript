const isOpen: boolean = false;

const myName: string = 'Scott';

const myAge: number = 32.04;

const list: number[] = [0, 1, 2];

const me: [string, number, boolean] = ['Scot', 32, false];

enum Job {
  WebDev,
  WebDesigner,
  PM,
}
const job: Job = Job.WebDev;

const phone: any = 'Pixel';
const tablet: any = 3;

// Functions in TypeScript
//  ? for optional params
// const sayWord = (word?: string): string => {
//   console.log(word || 'Hello');
//   return word || 'Hello';
// };

// sayWord();

// Default Params
// need not state types in parameters to run
// Rest params work as expected
const sayWord = (word: string = 'Hello', ...otherStuff: string[]): string => {
  console.log(otherStuff);
  console.log(word);
  return word;
};

sayWord('Scott', 'Wes');

// Implicit Types in TS

let newName: string | number | boolean = 'Scott';
// newName = 'Wes';
// newName = 10;
newName = false;

let newNameTwo = newName;
// newNameTwo = 10;

// Union Types with |
const makeMargin = (x: string | number): string => {
  return `margin: ${x}px;`;
};

makeMargin(10);
makeMargin('10');

// Null Types

let dog: string | undefined = 'Sammy';
dog = null;
dog = 'Lucie';
dog = undefined;
// dog = 10;
// dog = false;

// Interfaces
interface Person {
  name: string;
  age: number;
}
const sayName = ({ name, age }: Person): string => {
  console.log(name);
  return name;
};

sayName({
  name: 'Scott',
  age: 32,
});

sayName({
  age: 32,
  name: 'Scott',
});
// sayName(32, 'Scott');
