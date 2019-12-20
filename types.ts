let myString: string;
let myNum:number;
let myBool: boolean;
let myVar : any;

myString  = 'Hello World!';//We can also give the Concatenated Strings
myNum = 2;//We can also use the Hexadecimal, Binary & Octal Formats for Number Eg: 0X234;
myBool = false;

 myVar = '5';
console.log(myVar);
myVar = 'Hello';
console.log(myVar);

console.log(myString);
console.log(myNum); 
console.log(myBool);

let strArray: string[];
strArray = ['Hello','World'];
console.log(strArray);

let numArray: number[];
numArray = [1,2,3];
console.log(numArray);

let boolArray: boolean[];
boolArray = [true,false,true];
console.log(boolArray);

let strArray1: Array<string>;
strArray1 = ['Hello','World'];
console.log(strArray1);

let strNumTuple: [string,number];
strNumTuple = ['Hello',3];//The Data should match with the Input type Pattern
console.log(strNumTuple);

// strNumTuple = ['Hello',3,4,4,5,6];//After matching the Pattern first time next it could be anything after the pattern. That's How it Works.
// console.log(strNumTuple);//But In this version I think it is Changed

let myVoid: void = null;

console.log(myVoid);

myVoid = undefined;

console.log(myVoid);
//Similarly for the null type & undefined type.