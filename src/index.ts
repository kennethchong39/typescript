import Job, { Person, Type2 } from './interfaces';

const isOpen: boolean = false;

const myName: string = 'Scott';

const myAge: number = 32.04;

const list: number[] = [0, 1, 2];

const me: [string, number, boolean] = ['Scot', 32, false];

// enum Job {
//   WebDev,
//   WebDesigner,
//   PM,
// }
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
// interface Person {
//   name: string;
//   age?: number; // ? Optional param
// }

const sayName = ({ name, age }: Person): string => {
  console.log(name);
  return name;
};

// This works too!
// const sayName = ({ name, age }: Person): Person => {
//   console.log(name);
//   return { name, age };
// };

sayName({
  name: 'Scott',
  age: 32,
});

sayName({
  age: 32,
  name: 'Scott',
});
// sayName(32, 'Scott');

// Numeric Enums
enum Type {
  Video, // 0
  BlogPost, // 1
  Quiz, // 2
}

const createContent = (contentType: Type) => {};
createContent(Type.Quiz);

console.log(Type.Quiz);

// String Enums
// enum Type2 {
//   Video = 'VIDEO', // 0
//   BlogPost = 'BLOG_POST', // 1
//   Quiz = 'QUIZ', // 2
// }

const createContent2 = (contentType: Type2) => {};
createContent2(Type2.Quiz);

// Classes
class Team {
  teamName: string;
  // public teamName: string; this is same as above
  //private teamName: string; //prevents outside usage

  //readonly teamName: string; prevents from being change

  constructor(teamName) {
    this.teamName = teamName;
  }

  score(): string {
    console.log(this.teamName);
    return 'goal!';
  }
}

const redWings = new Team('Red Wings');
redWings.score();
console.log(redWings.teamName);

// Generics Types

const outputInput = <T>(arg: T): T => {
  return arg;
};

const output = outputInput('hi');
outputInput(3);

// Duck Typing & Classes With Interfaces
class Dancer implements Person {
  name: string;
  age: number;
}

let ElNino: Person = new Dancer();

const fake = {
  name: 'Scott',
  year: 30,
};

ElNino = fake;
