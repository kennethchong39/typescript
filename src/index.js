"use strict";
exports.__esModule = true;
var interfaces_1 = require("./interfaces");
var isOpen = false;
var myName = 'Scott';
var myAge = 32.04;
var list = [0, 1, 2];
var me = ['Scot', 32, false];
// enum Job {
//   WebDev,
//   WebDesigner,
//   PM,
// }
var job = interfaces_1["default"].WebDev;
var phone = 'Pixel';
var tablet = 3;
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
var sayWord = function (word) {
    if (word === void 0) { word = 'Hello'; }
    var otherStuff = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherStuff[_i - 1] = arguments[_i];
    }
    console.log(otherStuff);
    console.log(word);
    return word;
};
sayWord('Scott', 'Wes');
// Implicit Types in TS
var newName = 'Scott';
// newName = 'Wes';
// newName = 10;
newName = false;
var newNameTwo = newName;
// newNameTwo = 10;
// Union Types with |
var makeMargin = function (x) {
    return "margin: " + x + "px;";
};
makeMargin(10);
makeMargin('10');
// Null Types
var dog = 'Sammy';
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
var sayName = function (_a) {
    var name = _a.name, age = _a.age;
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
    age: 32
});
sayName({
    age: 32,
    name: 'Scott'
});
// sayName(32, 'Scott');
// Numeric Enums
var Type;
(function (Type) {
    Type[Type["Video"] = 0] = "Video";
    Type[Type["BlogPost"] = 1] = "BlogPost";
    Type[Type["Quiz"] = 2] = "Quiz";
})(Type || (Type = {}));
var createContent = function (contentType) { };
createContent(Type.Quiz);
console.log(Type.Quiz);
// String Enums
// enum Type2 {
//   Video = 'VIDEO', // 0
//   BlogPost = 'BLOG_POST', // 1
//   Quiz = 'QUIZ', // 2
// }
var createContent2 = function (contentType) { };
createContent2(interfaces_1.Type2.Quiz);
// Classes
var Team = /** @class */ (function () {
    // public teamName: string; this is same as above
    //private teamName: string; //prevents outside usage
    //readonly teamName: string; prevents from being change
    function Team(teamName) {
        this.teamName = teamName;
    }
    Team.prototype.score = function () {
        console.log(this.teamName);
        return 'goal!';
    };
    return Team;
}());
var redWings = new Team('Red Wings');
redWings.score();
console.log(redWings.teamName);
